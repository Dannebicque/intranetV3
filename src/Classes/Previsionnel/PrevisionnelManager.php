<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Previsionnel/PrevisionnelManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/07/2021 17:05
 */

namespace App\Classes\Previsionnel;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\Repository\PrevisionnelRepository;
use App\Utils\Tools;
use Doctrine\ORM\EntityManagerInterface;

class PrevisionnelManager
{
    protected array $managers;

    private EntityManagerInterface $entityManager;

    private PrevisionnelRepository $previsionnelRepository;

    public function __construct(
        PrevisionnelRepository $previsionnelRepository,
        EntityManagerInterface $entityManager,
        PrevisionnelSaeManager $previsionnelSae,
        PrevisionnelRessourceManager $previsionnelRessource,
        PrevisionnelMatiereManager $previsionnelMatiere
    ) {
        $this->previsionnelRepository = $previsionnelRepository;
        $this->entityManager = $entityManager;
        $this->managers[PrevisionnelSaeManager::TYPE] = $previsionnelSae;
        $this->managers[PrevisionnelRessourceManager::TYPE] = $previsionnelRessource;
        $this->managers[PrevisionnelMatiereManager::TYPE] = $previsionnelMatiere;
    }

    public function getPrevisionnelPersonnelDepartementAnnee(
        Personnel $personnel,
        Departement $departement,
        int $annee = 0
    ): array {
        $t = [];
        foreach ($this->managers as $manager) {
            $previs = $manager->getPrevisionnelPersonnelDepartementAnnee($personnel, $departement, $annee);
            $t[] = $previs->toArray();
        }

        return array_merge(...$t);
    }

    public function getPrevisionnelEnseignantAnnee(Personnel $personnel, int $annee = 0): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $previs = $manager->getPrevisionnelPersonnelAnnee($personnel, $annee);
            $t[] = $previs->toArray();
        }

        return array_merge(...$t);
    }

    private function getManager($type)
    {
        return $this->managers[$type];
    }

    public function getPrevisionnelMatiere(int $matiere, $type, int $annee)
    {
        return $this->getManager($type)->findPrevisionnelMatiere($matiere, $annee);
    }

    public function getPrevisionnelMatierePersonnel(Personnel $personnel, int $matiere, string $type, int $annee)
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

    public function getPrevisionnelAnneeArray(Annee $annee, int $anneeUniversitaire = 0)
    {
        $previsionnels = $this->getPrevisionnelAnnee($annee, $anneeUniversitaire);
        $tPrevisionnel = [];
        foreach ($previsionnels as $p) {
            $tPrevisionnel[$p->id]['matiere'] = $p->matiere_libelle;
            $tPrevisionnel[$p->id]['personnel'] = $p->personnel_prenom . ' ' . $p->personnel_nom;
        }

        return $tPrevisionnel;
    }

    public function findByDepartement(Departement $departement, $annee)
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $previs = $manager->findByDepartement($departement, $annee);
            $t[] = $previs->toArray();
        }

        return array_merge(...$t);
    }

//    public function getPrevisionnelSemestrePersonnel(Semestre $semestre, Personnel $personnel, int $annee): array
//    {
//        $t = [];
//        foreach ($this->managers as $manager) {
//            $previs = $manager->getPrevisionnelSemestrePersonnel($semestre, $personnel, $annee);
//            $t = array_merge($t, $previs->toArray());
//        }
//
//        return $t;
//    }

    public function update(Previsionnel $previ, $name, $value): bool
    {
        if ($previ) {
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
        }

        return false;
    }

    public function dupliqueAnnee(
        Departement $departement,
        $anneeDepart,
        $annee_destination,
        $annee_concerver,
        $personnels
    ): void {
        //on efface, sauf si la case est cochée.
        if (null === $annee_concerver || 'true' !== $annee_concerver) {
            $this->supprimeAnnee($departement, $annee_destination);
        }

        $previsionnels = $this->getPrevisionnelDepartement($departement, $anneeDepart);

        /** @var \App\DTO\Previsionnel $previsionnel */
        foreach ($previsionnels as $previsionnel) {
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
        $this->entityManager->flush();
    }

    public function supprimeAnnee(Departement $departement, $annee_destination): void
    {
        $previsionnels = $this->getPrevisionnelDepartement($departement, $annee_destination);
        foreach ($previsionnels as $previsionnel) {
            $this->entityManager->remove($previsionnel);
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
}
