<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EdtCompareController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/08/2020 16:26

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Matiere;
use App\Classes\MyPrevisionnel;
use App\Repository\CalendrierRepository;
use App\Repository\EdtPlanningRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EdtController
 * @package App\Controller\administration
 * @Route("/administration/emploi-du-temps/compare")
 */
class EdtCompareController extends BaseController
{
    protected EdtPlanningRepository $edtPlanningRepository;

    protected CalendrierRepository $calendrierRepository;

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
     * @param MyPrevisionnel $myPrevisionnel
     *
     * @return Response
     * @Route("/personnels/", name="administration_edt_compare_personnels", methods={"GET"})
     *
     */
    public function comparePersonnel(MyPrevisionnel $myPrevisionnel): Response
    {
        $comparatif = $myPrevisionnel->compareEdtPreviPersonnels($this->dataUserSession->getDepartement(),
            $this->dataUserSession->getAnneePrevisionnel());

        return $this->render('administration/edtCompare/comparePersonnel.html.twig', [
            'edts' => $comparatif
        ]);
    }

    /**
     *
     * @param MyPrevisionnel $myPrevisionnel
     *
     * @return Response
     * @Route("/matieres", name="administration_edt_compare_matiere", methods={"GET"})
     */
    public function compareMatiereAction(MyPrevisionnel $myPrevisionnel): Response
    {
        $comparatif = $myPrevisionnel->compareEdtPreviMatiere($this->dataUserSession->getDepartement(),
            $this->dataUserSession->getAnneePrevisionnel());

        return $this->render('administration/edtCompare/compareMatieres.html.twig', [
            'edts' => $comparatif
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

        return $this->render('administration/edtCompare/_plusInfo.html.twig', [
            'planning'   => $planning,
            'matiere'    => $matiere,
            'calendrier' => $calendrier
        ]);
    }


}
