<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Previsionnel/PrevisionnelManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/09/2023 11:18
 */

namespace App\Classes\Previsionnel;

use App\DTO\PrevisionnelCollection;
use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\Interfaces\UtilisateurInterface;
use App\Utils\Tools;
use Doctrine\ORM\EntityManagerInterface;

class PrevisionnelManager
{
    protected array $managers;

    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        PrevisionnelSaeManager       $previsionnelSae,
        PrevisionnelRessourceManager $previsionnelRessource,
        PrevisionnelMatiereManager   $previsionnelMatiere
    )
    {
        $this->managers[PrevisionnelSaeManager::TYPE] = $previsionnelSae;
        $this->managers[PrevisionnelRessourceManager::TYPE] = $previsionnelRessource;
        $this->managers[PrevisionnelMatiereManager::TYPE] = $previsionnelMatiere;
    }

    private function getPrevisionnelPersonnelDepartementAnnee(
        UtilisateurInterface $personnel,
        Departement $departement,
        int         $annee = 0
    ): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $previs = $manager->getPrevisionnelPersonnelDepartementAnnee($personnel, $departement, $annee);
            $t[] = $previs;
        }

        return $t;
    }

    public function getPrevisionnelPersonnelDepartementAnneeArray(
        UtilisateurInterface $personnel,
        Departement          $departement,
        int                  $annee = 0
    ): array
    {
        $t = $this->getPrevisionnelPersonnelDepartementAnnee($personnel, $departement, $annee);
        $tt = [];
        foreach ($t as $previs) {
            $tt[] = $previs->toArray();
        }
        return array_merge(...$tt);
    }

    public function getPrevisionnelPersonnelDepartementAnneeCollection(
        UtilisateurInterface $personnel,
        Departement          $departement,
        int                  $annee = 0
    ): PrevisionnelCollection
    {
        $t = $this->getPrevisionnelPersonnelDepartementAnnee($personnel, $departement, $annee);
        $collection = new PrevisionnelCollection();
        foreach ($t as $previs) {
            foreach ($previs->previsionnels as $previ) {
                $collection->add($previ);
            }
        }
        return $collection;
    }

    public function getPrevisionnelEnseignantAnnee(UtilisateurInterface $personnel, int $annee = 0): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $previs = $manager->getPrevisionnelPersonnelAnnee($personnel, $annee);
            $t[] = $previs->toArray();
        }

        return array_merge(...$t);
    }

    private function getManager(string $type): mixed
    {
        return $this->managers[$type];
    }

    public function getPrevisionnelMatiere(int $matiere, string $type, int $annee): ?PrevisionnelCollection
    {
        return $this->getManager($type)->findPrevisionnelMatiere($matiere, $annee);
    }

    public function getPrevisionnelMatierePersonnel(
        UtilisateurInterface $personnel,
        int    $matiere,
        string $type,
        int    $annee
    ): PrevisionnelCollection
    {
        return $this->getManager($type)->findPrevisionnelMatierePersonnelAnnee($matiere, $personnel, $annee);
    }

    public function getPrevisionnelSemestre(Semestre $semestre, int $annee): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $previs = $manager->getPrevisionnelSemestre($semestre, $annee);
            $t[] = $previs->toArray();
        }

        return array_merge(...$t); // todo: ca retourne un array ? comment retourner une collection ? Add ?
    }

    public function getPrevisionnelPersonnelSemestre(Personnel $personnel, Semestre $semestre, int $annee): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $previs = $manager->getPrevisionnelPersonnelSemestre($personnel, $semestre, $annee);
            $t[] = $previs->toArray();
        }

        return array_merge(...$t);
    }

    public function getPrevisionnelAnnee(Annee $annee, int $anneeUniversitaire = 0): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            foreach ($annee->getSemestres() as $semestre) {
                $previs = $manager->getPrevisionnelSemestre($semestre, $anneeUniversitaire);
                $t[] = $previs->toArray();
            }
        }

        return array_merge(...$t);
    }

//    public function getPrevisionnelAnneeArray(Annee $annee, int $anneeUniversitaire = 0): array
//    {
//        $previsionnels = $this->getPrevisionnelAnnee($annee, $anneeUniversitaire);
//        $tPrevisionnel = [];
//        foreach ($previsionnels as $p) {
//            $tPrevisionnel[$p->id]['matiere'] = $p->matiere_libelle;
//            $tPrevisionnel[$p->id]['libelle'] = $p->matiere_libelle;
//            $tPrevisionnel[$p->id]['personnel'] = $p->personnel_prenom . ' ' . $p->personnel_nom;
//        }
//
//        return $tPrevisionnel;
//    }

    public function findByDepartement(Departement $departement, int $annee): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $previs = $manager->findByDepartement($departement, $annee);
            $t[] = $previs->toArray();
        }

        return array_merge(...$t);
    }

    public function findByDiplome(Diplome $diplome, int $annee): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $previs = $manager->findByDiplome($diplome, $annee);
            $t[] = $previs->toArray();
        }

        return array_merge(...$t);
    }

    public function findByDiplomeToDelete(Diplome $diplome, int $annee): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $t[] = $manager->findByDiplomeToDelete($diplome, $annee);
        }

        return array_merge(...$t);
    }

    public function update(Previsionnel $previ, string $name, mixed $value): bool
    {
        if ('personnel' === $name) {
            if ('' === $value) {
                $previ->setPersonnel(null);
                $this->entityManager->flush();

                return true;
            }
            $personnel = $this->entityManager->getRepository(Personnel::class)->find($value);
            if (null !== $personnel) {
                $previ->setPersonnel($personnel);
                $this->entityManager->flush();

                return true;
            }

            return false;
        }
        $method = 'set' . $name;
        if (method_exists($previ, $method)) {
            $previ->$method(Tools::convertToFloat($value));
            $this->entityManager->flush();

            return true;
        }

        return false;
    }

    public function dupliqueAnnee(
        Departement $departement,
        int     $anneeDepart,
        int     $annee_destination,
        array   $personnels,
        ?string $annee_concerver = 'false',
        array   $listeAnneesActives = []
    ): void
    {
        // on efface, sauf si la case est cochée.
        if ('true' !== $annee_concerver) {
            $this->supprimeAnnee($departement, $annee_destination);
        }

        $previsionnels = $this->getPrevisionnelDepartement($departement, $anneeDepart);

        /** @var \App\DTO\Previsionnel $previsionnel */
        foreach ($previsionnels as $previsionnel) {
            if (in_array($previsionnel->annee_id, $listeAnneesActives, true)) {
                // on ne duplique que pour les années actives
                $newPrevisonnel = new Previsionnel($annee_destination, null);
                $newPrevisonnel->setIdMatiere($previsionnel->matiere_id);
                $newPrevisonnel->setTypeMatiere($previsionnel->type_matiere);
                $newPrevisonnel->setNbGrCm($previsionnel->nbGrCm);
                $newPrevisonnel->setNbGrTd($previsionnel->nbGrTd);
                $newPrevisonnel->setNbGrTp($previsionnel->nbGrTp);
                $newPrevisonnel->setNbHCm($previsionnel->nbHCm);
                $newPrevisonnel->setNbHTd($previsionnel->nbHTd);
                $newPrevisonnel->setNbHTp($previsionnel->nbHTp);
                if (array_key_exists($previsionnel->personnel_id, $personnels)) {
                    $newPrevisonnel->setPersonnel($personnels[$previsionnel->personnel_id]);
                }

                $this->entityManager->persist($newPrevisonnel);
            }
        }
        $this->entityManager->flush();
    }

    public function supprimeAnnee(Departement $departement, int $annee_destination): void
    {
        $previsionnels = $this->getPrevisionnelDepartement($departement, $annee_destination);
        foreach ($previsionnels as $previsionnel) {
            if (null !== $previsionnel->objPrevisionnel) {
                $this->entityManager->remove($this->$previsionnel->objPrevisionnel);
            }
        }
        $this->entityManager->flush();
    }

    public function getPrevisionnelDepartement(Departement $departement, int $anneeUniversitaire = 0): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $previs = $manager->findByDepartement($departement, $anneeUniversitaire);
            $t[] = $previs->toArray();
        }

        return array_merge(...$t);
    }
//
//    public function getPrevisionnelSaeAnnee(Annee $annee, ?int $anneeUniversitaire): array
//    {
//        $t = [];
//        foreach ($annee->getSemestres() as $semestre) {
//            $previs = $this->managers[PrevisionnelSaeManager::TYPE]->getPrevisionnelSemestre($semestre, $anneeUniversitaire);
//            $t[] = $previs->toArray();
//        }
//
//        return array_merge(...$t);
//    }

    public function getPrevisionnelSemestreCollection(Semestre $semestre, int|null $annee): PrevisionnelCollection
    {
        $t = $this->getPrevisionnelSemestre($semestre, $annee);
        $collection = new PrevisionnelCollection();
        foreach ($t as $previ) {
            $collection->add($previ);
        }
        return $collection;
    }

    public function getPrevisionnelPersonnelAnneeCollection(Personnel $personnel, int|null $annee): PrevisionnelCollection
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $previs = $manager->getPrevisionnelPersonnelAnnee($personnel, $annee);
            $t[] = $previs;
        }

        $collection = new PrevisionnelCollection();
        foreach ($t as $previs) {
            foreach ($previs->previsionnels as $previ) {
                $collection->add($previ);
            }
        }
        return $collection;
    }

    public function getPrevisionnelAllDepartementAnnee(int $anneeUniversitaire = 0)
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $previs = $manager->findByAnneeUniversitaire($anneeUniversitaire);
            $t[] = $previs->toArray();
        }

        return array_merge(...$t);
    }
}
