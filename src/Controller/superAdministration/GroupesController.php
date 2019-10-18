<?php

/**
 * Copyright (C) 10 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/GroupesController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 18/10/2019 11:41
 * @lastUpdate 18/10/2019 11:41
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Departement;
use App\Entity\Semestre;
use App\MesClasses\Celcat\MyApogee;
use App\Repository\GroupeRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/groupes")
 */
class GroupesController extends BaseController
{
    /**
     * @Route("/{departement}", name="sa_groupes_departement_index")
     * @param GroupeRepository   $groupeRepository
     * @param SemestreRepository $semestreRepository
     * @param Departement        $departement
     *
     * @return Response
     */
    public function index(
        GroupeRepository $groupeRepository,
        SemestreRepository $semestreRepository,
        Departement $departement
    ): Response {
        return $this->render('super-administration/groupes/index.html.twig', [
            'groupes'     => $groupeRepository->findByDepartement($departement),
            'departement' => $departement,
            'semestres'   => $semestreRepository->findByDepartement($departement)
        ]);
    }

    /**
     * @Route("/synchronise/departement/{departement}", name="sa_groupes_departement_synchro_all")
     * @param Departement $departement
     *
     * @return Response
     */
    public function synchroApogeeAll(GroupeRepository $groupeRepository, Departement $departement): Response
    {
        return $this->render('super-administration/groupes/index.html.twig', [
            'groupes'     => $groupeRepository->findByDepartement($departement),
            'departement' => $departement
        ]);
    }

    /**
     * @Route("/synchronise/semestre/{semestre}", name="sa_groupes_departement_synchro_semestre")
     * @param GroupeRepository $groupeRepository
     * @param Semestre         $semestre
     *
     * @return Response
     */
    public function synchroApogeeSemestre(GroupeRepository $groupeRepository, Semestre $semestre): Response
    {
        $groupes = MyApogee::getGroupesSemestre($semestre);
        dump($groupes);
    }
}
