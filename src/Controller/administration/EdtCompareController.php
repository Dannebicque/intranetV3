<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/EdtCompareController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 7/12/19 11:21 AM
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Matiere;
use App\MesClasses\MyPrevisionnel;
use App\Repository\CalendrierRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EdtController
 * @package App\Controller\administration
 * @Route("/administration/emploi-du-temps/compare")
 */
class EdtCompareController extends BaseController
{
    /** @var EdtPlanningRepository */
    protected $edtPlanningRepository;

    /** @var CalendrierRepository */
    protected $calendrierRepository;

    /**
     * EdtRealiseController constructor.
     *
     * @param EdtPlanningRepository $edtPlanningRepository
     * @param CalendrierRepository  $calendrierRepository
     */
    public function __construct(
        EdtPlanningRepository $edtPlanningRepository,
        CalendrierRepository $calendrierRepository
    ) {
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->calendrierRepository = $calendrierRepository;
    }

    /**
     *
     * @param PersonnelRepository $personnelRepository
     * @param MyPrevisionnel      $myPrevisionnel
     *
     * @param                     $source
     *
     * @return Response
     * @Route("/personnels/{source}", name="administration_edt_compare_personnels", methods={"GET"},
     *                                requirements={"source"="intranet|celcat"})
     */
    public function comparePersonnel(
        PersonnelRepository $personnelRepository,
        MyPrevisionnel $myPrevisionnel,
        $source
    ): Response {
        //todo: a refaire
        $personnels = $personnelRepository->findByDepartement($this->dataUserSession->getDepartement());

        if ($source === 'intranet') {
            //intranet
            $planning = $this->edtPlanningRepository->findDepartement($this->dataUserSession->getDepartement());
        } else {
            //celcat
        }
        $comparatif = $myPrevisionnel->compareEdtPreviPersonnels($personnels, $planning,
            $this->dataUserSession->getDepartement());

        return $this->render('administration/edtCompare/comparePersonnel.html.twig', [
            'personnels' => $personnels,
            'edts'       => $comparatif
        ]);
    }

    /**
     *
     * @param MatiereRepository $matiereRepository
     * @param MyPrevisionnel    $myPrevisionnel
     *
     * @param                   $source
     *
     * @return Response
     * @Route("/matieres/{source}", name="administration_edt_compare_matiere", methods={"GET"},
     *                              requirements={"source"="intranet|celcat"})
     */
    public function compareMatiereAction(
        MatiereRepository $matiereRepository,
        MyPrevisionnel $myPrevisionnel,
        $source
    ): Response {
        $matieres = $matiereRepository->findByDepartement($this->dataUserSession->getDepartement());

        if ($source === 'intranet') {
            //intranet
            $planning = $this->edtPlanningRepository->findDepartement($this->dataUserSession->getDepartement());
        } else {
            //celcat
        }

        $ed = $myPrevisionnel->compareEdtPreviMatiere($matieres, $planning, $this->dataUserSession->getDepartement());

        return $this->render('administration/edtCompare/compareMatieres.html.twig', [
            'matieres' => $matieres,
            'edts'     => $ed
        ]);
    }

    /**
     *
     * @param Matiere $matiere
     *
     * @return Response
     * @Route("/ajax/enseignants/plusinfo/{matiere}", name="administration_edt_compare_plus_info", methods={"POST"})
     */
    public function comparePlusInfoAction(Matiere $matiere): Response
    {
        //tester si celcat ou intranet
        $planning = $this->edtPlanningRepository->findBy(['matiere' => $matiere->getId()]);

        $calendrier = $this->calendrierRepository->findCalendrier();

        return $this->render('administration/edtCompare/plusInfo.html.twig', [
            'planning'   => $planning,
            'matiere'    => $matiere,
            'calendrier' => $calendrier
        ]);
    }


}
