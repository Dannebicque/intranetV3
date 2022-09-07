<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyGroupes.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/09/2022 17:17
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Classes\Apogee\ApogeeGroupe;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Enums\TypeGroupeEnum;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\ParcourRepository;
use App\Repository\SemestreRepository;
use App\Repository\TypeGroupeRepository;
use function array_key_exists;
use function count;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use function is_array;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class MyGroupes
{
    protected ?TypeGroupe $groupedefaut = null;

    // type de groupes  pour un semestre
    protected array $typeGroupes;

    // groupes d'un type de groupe pour un semestre
    protected array $groupes;

    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly ParcourRepository $parcourRepository,
        private readonly SemestreRepository $semestreRepository,
        private readonly TypeGroupeRepository $typeGroupeRepository,
        private readonly GroupeRepository $groupeRepository,
        private readonly MyUpload $myUpload,
        private readonly ApogeeGroupe $apogeeGroupe,
        private readonly EtudiantRepository $etudiantRepository
    ) {
        $this->groupedefaut = null;
    }

    /**
     * @throws \App\Exception\SemestreNotFoundException
     */
    public function getGroupesSemestre(int $ordreSemestre, Diplome $diplome, ?string $defaut = null): self
    {
        $this->typeGroupes = $this->typeGroupeRepository->findByDiplomeAndOrdreSemestre($diplome, $ordreSemestre);

        foreach ($this->typeGroupes as $tg) {
            if (null === $defaut && true === $tg->getDefaut()) {
                $this->groupedefaut = $tg;
            } elseif (null !== $defaut && mb_strtoupper($tg->getLibelle()) === mb_strtoupper($defaut)) {
                $this->groupedefaut = $tg;
            }
        }

        if (null === $this->groupedefaut && count($this->typeGroupes) > 0) {
            $this->groupedefaut = $this->typeGroupes[0];
        }
//        else {
//            throw new Exception('Aucun groupe par défaut trouvé');
//        }
        $this->groupes = $this->groupeRepository->findBy(['typeGroupe' => $this->groupedefaut->getId()]);

        return $this;
    }

    public function getGroupedefaut(): ?TypeGroupe
    {
        return $this->groupedefaut;
    }

    public function getGroupes(): array
    {
        return $this->groupes;
    }

    public function getTypeGroupes(): array
    {
        return $this->typeGroupes;
    }

    public function updateParent(Semestre $semestre): void
    {
        $groupes = $this->groupeRepository->findByDiplomeAndOrdreSemestre($semestre->getDiplome(),
            $semestre->getOrdreLmd());
        /** @var Groupe $groupe */
        foreach ($groupes as $groupe) {
            // pas d'enfant c'est le groupe de plus bas  niveau
            if (0 === count($groupe->getEnfants()) && TypeGroupeEnum::TYPE_GROUPE_LV !== $groupe->getTypeGroupe()->getType()) {
                $groupeParents = [];
                $g = $groupe;
                while (null !== $g->getParent()) {
                    $groupeParents[] = $g->getParent();
                    $g = $g->getParent();
                }

                foreach ($groupe->getEtudiants() as $etudiant) {
                    // supprimer les groupes de l'étudiant
                    foreach ($etudiant->getGroupes() as $gr) {
                        $etudiant->removeGroupe($gr);
                    }
                    // remettre le groupe en cours
                    $etudiant->addGroupe($groupe);
                    // ajouter les parents
                    foreach ($groupeParents as $gp) {
                        $etudiant->addGroupe($gp);
                    }
                }
            }
        }
        $this->entityManager->flush();
    }

    public function updateFromApogee(Semestre $semestre): void
    {
        $this->removeGroupeFromSemestre($semestre);
        $tGroupes = $this->groupeRepository->findBySemestreArray($semestre);
        $tEtudiants = $this->etudiantRepository->findBySemestreArray($semestre);
        $semestres = $this->semestreRepository->findByDiplomeEtNumero($semestre->getDiplome(),
            $semestre->getOrdreLmd());

        foreach ($semestres as $sem) {
            $groupes = $this->apogeeGroupe->getEtudiantsGroupesSemestre($sem);
            while ($groupe = $groupes->fetch()) {
                if (array_key_exists($groupe['COD_ETU'], $tEtudiants) && array_key_exists($groupe['COD_EXT_GPE'],
                        $tGroupes)) {
                    $tEtudiants[$groupe['COD_ETU']]->addGroupe($tGroupes[$groupe['COD_EXT_GPE']]);
                    $tGroupes[$groupe['COD_EXT_GPE']]->addEtudiant($tEtudiants[$groupe['COD_ETU']]);
                }
            }
            $this->entityManager->flush();
        }
    }

    private function removeGroupeFromSemestre(Semestre $semestre): void
    {
        $groupes = $this->groupeRepository->findBySemestre($semestre);

        /** @var Groupe $groupe */
        foreach ($groupes as $groupe) {
            foreach ($groupe->getEtudiants() as $e) {
                $e->removeGroupe($groupe);
                $groupe->removeEtudiant($e);
            }
        }

        $this->entityManager->flush();
    }

    /**
     * @throws Exception
     */
    public function importCsv(?UploadedFile $fichier, Departement $departement): bool
    {
        $semestres = $this->semestreRepository->tableauSemestresApogee($departement);
        $parcours = $this->parcourRepository->tableauParcourApogee($departement);
        $typeGroupes = $this->typeGroupeRepository->tableauDepartementSemestre($departement);

        $file = $this->myUpload->upload($fichier, 'temp');

        $handle = fopen($file, 'rb');

        /* Si on a réussi à ouvrir le fichier */
        if ($handle) {
            /* supprime la première ligne */
            fgetcsv($handle, 1024);
            /* Tant que l'on est pas à la fin du fichier */
            while (!feof($handle)) {
                /* On lit la ligne courante */
                $ligne = fgetcsv($handle, 1024);
                // nomgroupe,"ordre","codeapogee","option_apogee","semestre","tg_nom","tg_type"
                if (is_array($ligne) && count($ligne) > 5 && array_key_exists($ligne[4], $semestres)) {
                    if (!array_key_exists($ligne[4], $typeGroupes) || !array_key_exists($ligne[5],
                            $typeGroupes[$ligne[4]])) {
                        // le type de groupe n'existe pas encore, donc on ajoute.
                        $tg = new TypeGroupe($semestres[$ligne[4]]);
                        $tg->setLibelle($ligne[5]);
                        $tg->setType($ligne[6]);
                        $this->entityManager->persist($tg);
                        $this->entityManager->flush();
                        $typeGroupes = $this->typeGroupeRepository->tableauDepartementSemestre($departement);
                    }

                    $groupe = new Groupe();
                    $groupe->setTypeGroupe($typeGroupes[$ligne[4]][$ligne[5]]);
                    $groupe->setLibelle($ligne[0]);
                    $groupe->setOrdre($ligne[1]);
                    $groupe->setCodeApogee($ligne[2]);
                    if ((null !== $ligne[3]) && array_key_exists($ligne[3], $parcours)) {
                        $groupe->setParcours($parcours[$ligne[3]]);
                    }

                    $this->entityManager->persist($groupe);
                }
            }
            $this->entityManager->flush();

            /* On ferme le fichier */
            fclose($handle);
            unlink($file); // suppression du fichier

            return true;
        }

        return false;
    }

    /**
     * @throws Exception
     */
    public function importGroupeEtudiantCsv(?UploadedFile $fichier, Semestre $semestre): bool
    {
        $groupes = $this->groupeRepository->findBySemestreArray($semestre);
        $etudiants = $this->etudiantRepository->findBySemestreArray($semestre);
        foreach ($etudiants as $etudiant) {
            foreach ($etudiant->getGroupes() as $groupe) {
                $etudiant->removeGroupe($groupe);
            }
        }
        $this->entityManager->flush();

        $file = $this->myUpload->upload($fichier, 'temp');

        $handle = fopen($file, 'rb');

        /* Si on a réussi à ouvrir le fichier */
        if ($handle) {
            /* supprime la première ligne */
            fgetcsv($handle, 1024);
            /* Tant que l'on est pas à la fin du fichier */
            while (!feof($handle)) {
                /* On lit la ligne courante */
                $ligne = fgetcsv($handle, 1024);
                if (is_array($ligne) && 2 === count($ligne) && array_key_exists($ligne[0],
                        $groupes) && array_key_exists($ligne[1], $etudiants)) {
                    $etudiants[$ligne[1]]->addGroupe($groupes[$ligne[0]]);
                }
            }
            $this->entityManager->flush();

            /* On ferme le fichier */
            fclose($handle);
            unlink($file); // suppression du fichier

            return true;
        }

        return false;
    }

    public function update(Groupe $groupe, string $name, mixed $value): bool
    {
        $method = 'set'.$name;
        if (method_exists($groupe, $method)) {
            $groupe->$method($value);
            $this->entityManager->flush();

            return true;
        }

        return false;
    }
}
