<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/MyGroupes.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 26/08/2019 13:43
 * @lastUpdate 23/08/2019 13:01
 */

namespace App\MesClasses;


use App\Entity\EdtPlanning;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\MesClasses\Celcat\MyCelcat;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\TypeGroupeRepository;
use Doctrine\ORM\EntityManagerInterface;

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

    /**
     * MyGroupes constructor.
     *
     * @param EntityManagerInterface $entityManager
     * @param TypeGroupeRepository   $typeGroupeRepository
     * @param GroupeRepository       $groupeRepository
     * @param MyCelcat               $myCelcat
     * @param EtudiantRepository     $etudiantRepository
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        TypeGroupeRepository $typeGroupeRepository,
        GroupeRepository $groupeRepository,
        EtudiantRepository $etudiantRepository
    ) {
        $this->groupedefaut = null;
        $this->entityManager = $entityManager;
        $this->typeGroupeRepository = $typeGroupeRepository;
        $this->groupeRepository = $groupeRepository;
        $this->etudiantRepository = $etudiantRepository;
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
    public function getGroupesPlanning($planning): MyGroupes
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
            if (count($groupe->getEnfants()) === 0) {
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
        MyCelcat::updateGroupeBySemestre($semestre, $groupes, $etudiants, $this->entityManager);
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

}
