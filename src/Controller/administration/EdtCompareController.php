<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EdtCompareController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/09/2020 08:52

namespace App\Controller\administration;

use App\Classes\ComparePrevisionnel\ComparePrevisionnelPersonnel;
use App\Classes\ComparePrevisionnel\ComparePrevisonnelMatiere;
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
     * @param ComparePrevisionnelPersonnel $myPrevisionnel
     *
     * @param                              $source
     *
     * @return Response
     * @Route("/personnels/{source}", name="administration_edt_compare_personnels", methods={"GET"})
     */
    public function comparePersonnel(ComparePrevisionnelPersonnel $myPrevisionnel, $source): Response
    {
        $comparatif = $myPrevisionnel->compareEdtPreviPersonnels($this->getDepartement(),
            $this->dataUserSession->getAnneePrevisionnel(), $source);

        return $this->render('administration/edtCompare/comparePersonnel.html.twig', [
            'comparatifs' => $comparatif,
            'personnels'  => $myPrevisionnel->getPersonnels(),
            'source'      => $source
        ]);
    }

    /**
     *
     * @param ComparePrevisonnelMatiere $myPrevisionnel
     *
     * @param                           $source
     *
     * @return Response
     * @Route("/matieres/{source}", name="administration_edt_compare_matiere", methods={"GET"})
     */
    public function compareMatiereAction(ComparePrevisonnelMatiere $myPrevisionnel, $source): Response
    {
        $comparatif = $myPrevisionnel->compareEdtPreviMatiere($this->dataUserSession->getDepartement(),
            $this->dataUserSession->getAnneePrevisionnel(), $source);

        return $this->render('administration/edtCompare/compareMatieres.html.twig', [
            'comparatifs' => $comparatif,
            'matieres'    => $myPrevisionnel->getMatieres(),
            'source'      => $source
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
