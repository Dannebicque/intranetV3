<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/MyGroupes.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 6/9/19 8:53 AM
 */

namespace App\MesClasses;


use App\Entity\EdtPlanning;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
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

    /**
     * MyGroupes constructor.
     *
     * @param EntityManagerInterface $entityManager
     * @param TypeGroupeRepository   $typeGroupeRepository
     * @param GroupeRepository       $groupeRepository
     */
    public function __construct(EntityManagerInterface $entityManager,
        TypeGroupeRepository $typeGroupeRepository,
        GroupeRepository $groupeRepository)
    {
        $this->groupedefaut = null;
        $this->entityManager = $entityManager;
        $this->typeGroupeRepository = $typeGroupeRepository;
        $this->groupeRepository = $groupeRepository;
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
    public function getGroupesPlanning($planning)
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

}
