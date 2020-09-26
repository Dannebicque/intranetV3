<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyGroupes.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/09/2020 08:39

namespace App\Classes;


use App\Entity\Departement;
use App\Entity\EdtPlanning;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Parcour;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Classes\Celcat\MyCelcat;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\TypeGroupeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class MyGroupes
{

    /** @var  EntityManagerInterface */
    protected $entityManager;

    protected $groupedefaut;

    // type de groupes  pour un semestre
    protected $typeGroupes;

    /** @var TypeGroupeRepository */
    protected $typeGroupeRepository;

    /** @var GroupeRepository */
    protected $groupeRepository;

    // groupes d'un type de groupe pour un semestre
    protected $groupes;

    /** @var EtudiantRepository */
    protected $etudiantRepository;
    private $myUpload;
    /**
     * @var MyCelcat
     */
    private MyCelcat $myCelcat;

    /**
     * MyGroupes constructor.
     *
     * @param EntityManagerInterface $entityManager
     * @param TypeGroupeRepository   $typeGroupeRepository
     * @param GroupeRepository       $groupeRepository
     * @param MyUpload               $myUpload
     * @param MyCelcat               $myCelcat
     * @param EtudiantRepository     $etudiantRepository
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        TypeGroupeRepository $typeGroupeRepository,
        GroupeRepository $groupeRepository,
        MyUpload $myUpload,
        MyCelcat $myCelcat,
        EtudiantRepository $etudiantRepository
    ) {
        $this->groupedefaut = null;
        $this->entityManager = $entityManager;
        $this->typeGroupeRepository = $typeGroupeRepository;
        $this->groupeRepository = $groupeRepository;
        $this->etudiantRepository = $etudiantRepository;
        $this->myUpload = $myUpload;
        $this->myCelcat = $myCelcat;
    }

    /**
     * @param Semestre $semestre
     */
    public function getGroupesSemestre(Semestre $semestre): void
    {
        $this->typeGroupes = $this->typeGroupeRepository->findBy(['semestre' => $semestre->getId()]);

        foreach ($this->typeGroupes as $tg) {
            if ($tg->getDefaut() === true) {
                $this->groupedefaut = $tg;
            }
        }

        $this->groupes = $this->groupeRepository->findBy(['typegroupe' => $this->groupedefaut->getId()]);
    }

    /**
     * @param EdtPlanning $planning
     *
     * @return MyGroupes
     */
    public function getGroupesPlanning(EdtPlanning $planning): MyGroupes
    {
        //todo: tester le type si planning ou celcat
        $this->typeGroupes = $this->typeGroupeRepository->findBySemestre($planning->getSemestre());
        /** @var TypeGroupe $tg */
        foreach ($this->typeGroupes as $tg) {
            if (strtoupper($tg->getLibelle()) === strtoupper($planning->getType())) {
                $this->groupedefaut = $tg;
            }
        }

        $this->groupes = $this->groupeRepository->findBy(['typeGroupe' => $this->groupedefaut]);

        return $this;
    }

    /**
     * @return null
     */
    public function getGroupedefaut()
    {
        return $this->groupedefaut;
    }

    /**
     * @return mixed
     */
    public function getGroupes()
    {
        return $this->groupes;
    }

    /**
     * @return mixed
     */
    public function getTypeGroupes()
    {
        return $this->typeGroupes;
    }

    public function updateParent(Semestre $semestre): void
    {
        $groupes = $this->groupeRepository->findBySemestre($semestre);
        /** @var Groupe $groupe */
        foreach ($groupes as $groupe) {
            //pas d'enfant c'est le groupe de plus bas  niveau
            if (count($groupe->getEnfants()) === 0 && $groupe->getTypeGroupe()->getType() !== TypeGroupe::TYPE_GROUPE_LV) {
                $groupeParents = [];
                $g = $groupe;
                while ($g->getParent() !== null) {
                    $groupeParents[] = $g->getParent();
                    $g = $g->getParent();
                }

                foreach ($groupe->getEtudiants() as $etudiant) {
                    //supprimer les groupes de l'étudiant
                    foreach ($etudiant->getGroupes() as $gr) {
                        $etudiant->removeGroupe($gr);
                    }
                    //remettre le groupe en cours
                    $etudiant->addGroupe($groupe);
                    //ajouter les parents
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
        $groupes = $this->groupeRepository->findBySemestreArray($semestre);
        $etudiants = $this->etudiantRepository->findBySemestreArray($semestre);
        $this->myCelcat->updateGroupeBySemestre($semestre, $groupes, $etudiants);
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
     * @param             $fichier
     * @param Departement $departement
     *
     * @return bool
     * @throws Exception
     */
    public function importCsv($fichier, Departement $departement): bool
    {
        $semestres = $this->entityManager->getRepository(Semestre::class)->tableauSemestresApogee($departement);
        $parcours = $this->entityManager->getRepository(Parcour::class)->tableauParcourApogee($departement);
        $typeGroupes = $this->entityManager->getRepository(TypeGroupe::class)->tableauDepartementSemestre($departement);

        $file = $this->myUpload->upload($fichier, 'temp');

        $handle = fopen($file, 'rb');

        /*Si on a réussi à ouvrir le fichier*/
        if ($handle) {
            /* supprime la première ligne */
            fgetcsv($handle, 1024, ',');
            /*Tant que l'on est pas à la fin du fichier*/
            while (!feof($handle)) {
                /*On lit la ligne courante*/
                $ligne = fgetcsv($handle, 1024, ',');
                //nomgroupe,"ordre","codeapogee","option_apogee","semestre","tg_nom","tg_type"
                if (is_array($ligne) && count($ligne) > 5 && array_key_exists($ligne[4], $semestres)) {
                    if (!array_key_exists($ligne[4], $typeGroupes) || !array_key_exists($ligne[5],
                            $typeGroupes[$ligne[4]])) {
                        //le type de groupe n'existe pas encore, donc on ajoute.
                        $tg = new TypeGroupe($semestres[$ligne[4]]);
                        $tg->setLibelle($ligne[5]);
                        $tg->setType($ligne[6]);
                        $this->entityManager->persist($tg);
                        $this->entityManager->flush();
                        $typeGroupes = $this->entityManager->getRepository(TypeGroupe::class)->tableauDepartementSemestre($departement);
                    }

                    $groupe = new Groupe();
                    $groupe->setTypeGroupe($typeGroupes[$ligne[4]][$ligne[5]]);
                    $groupe->setLibelle($ligne[0]);
                    $groupe->setOrdre($ligne[1]);
                    $groupe->setCodeApogee($ligne[2]);
                    if ($ligne[3] !== '' || $ligne[3] !== null) {
                        if (array_key_exists($ligne[3], $parcours)) {
                            $groupe->setParcours($parcours[$ligne[3]]);
                        }
                    }

                    $this->entityManager->persist($groupe);
                }
            }
            $this->entityManager->flush();

            /*On ferme le fichier*/
            fclose($handle);
            unlink($file); //suppression du fichier

            return true;
        }

        return false;
    }

    /**
     * @param          $fichier
     * @param Semestre $semestre
     *
     * @return bool
     * @throws Exception
     */
    public function importGroupeEtudiantCsv($fichier, Semestre $semestre): bool
    {
        $groupes = $this->entityManager->getRepository(Groupe::class)->findBySemestreArray($semestre);
        $etudiants = $this->entityManager->getRepository(Etudiant::class)->findBySemestreArray($semestre);
        foreach ($etudiants as $etudiant) {
            foreach ($etudiant->getGroupes() as $groupe) {
                $etudiant->removeGroupe($groupe);
            }
        }
        $this->entityManager->flush();

        $file = $this->myUpload->upload($fichier, 'temp');

        $handle = fopen($file, 'rb');

        /*Si on a réussi à ouvrir le fichier*/
        if ($handle) {
            /* supprime la première ligne */
            fgetcsv($handle, 1024, ',');
            /*Tant que l'on est pas à la fin du fichier*/
            while (!feof($handle)) {
                /*On lit la ligne courante*/
                $ligne = fgetcsv($handle, 1024, ',');
                if (is_array($ligne) && count($ligne) === 2 && array_key_exists($ligne[0],
                        $groupes) && array_key_exists($ligne[1], $etudiants)) {
                            $etudiants[$ligne[1]]->addGroupe($groupes[$ligne[0]]);
                        }
            }
            $this->entityManager->flush();

            /*On ferme le fichier*/
            fclose($handle);
            unlink($file); //suppression du fichier

            return true;
        }

        return false;
    }

    public function update(Groupe $groupe, string $name, $value)
    {
        $method = 'set' . $name;
        if (method_exists($groupe, $method)) {
            $groupe->$method($value);
            $this->entityManager->flush();

            return true;
        }
    }
}
