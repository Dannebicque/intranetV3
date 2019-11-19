<?php

// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/GroupesController.php
// @author     David Annebicque
// @project intranetv3
// @date 19/11/2019 07:35
// @lastUpdate 15/11/2019 07:17

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Departement;
use App\Entity\Semestre;
use App\MesClasses\Apogee\MyApogee;
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
     * @param GroupeRepository $groupeRepository
     * @param Departement      $departement
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
        //supprimer les groupes du semestre
        //récupérer les gorupes
        //calcluler l'aroborescence

//        $groupes = MyApogee::getGroupesSemestre($semestre);
//
//        while ($row = oci_fetch_array($groupes, OCI_ASSOC + OCI_RETURN_NULLS)) {
//
//            dump($row);
//        }

        $groupes = MyApogee::getHierarchieGroupesSemestre($semestre);

        while ($row = oci_fetch_array($groupes, OCI_ASSOC + OCI_RETURN_NULLS)) {

            dump($row);
        }
    }
}
