<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Matiere;
use App\MesClasses\MyPrevisionnel;
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SalleRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EdtController
 * @package App\Controller\administration
 * @Route("/administration/emploi-du-temps/compare")
 */
class EdtCompareController extends BaseController
{
    /**
     *
     * @param MyPrevisionnel $myPrevisionnel
     *
     * @return Response
     * @Route("/personnels/{source}", name="administration_edt_compare_personnels", methods={"GET"}, requirements={"source"="intranet|celcat"})
     */
    public function comparePersonnel(PersonnelRepository $personnelRepository, MyPrevisionnel $myPrevisionnel, $source)
    {
        $personnels = $personnelRepository->findByDepartement($this->dataUserSession->getDepartement());

        if ($source === 'intranet') {
            //intranet
            $planning = $this->getDoctrine()->getRepository('DAKernelBundle:Planning')->findDepartement($this->dataUserSession->getDepartement());
        } else {
            //celcat
        }
        $comparatif = $myPrevisionnel->compareEdtPreviPersonnels($personnels, $planning, $this->dataUserSession->getDepartement());

        return $this->render('administration/edtCompare/comparePersonnel.html.twig', [
            'personnels' => $personnels,
            'edts'        => $comparatif
        ]);
    }

    /**
     *
     * @param MyPrevisionnel $myPrevisionnel
     *
     * @return Response
     * @Route("/matieres/{source}", name="administration_edt_compare_matiere", methods={"GET"}, requirements={"source"="intranet|celcat"})
     */
    public function compareMatiereAction(MatiereRepository $matiereRepository, MyPrevisionnel $myPrevisionnel, $source)
    {
        $matieres = $matiereRepository->findByDepartement($this->dataUserSession->getDepartement());

        if ($source === 'intranet') {
            //intranet
            $planning = $this->getDoctrine()->getRepository('DAKernelBundle:Planning')->findDepartement($this->dataUserSession->getDepartement());
        } else {
            //celcat
        }

        $ed = $myPrevisionnel->compareEdtPreviMatiere($matieres, $planning, $this->dataUserSession->getDepartement());

        return $this->render('administration/edtCompare/compareMatieres.html.twig', [
            'matieres' => $matieres,
            'edts'    => $ed
        ]);
    }

    /**
     *
     * @return Response
     * @Route("/ajax/enseignants/plusinfo/{matiere}", name="administration_edt_compare_plus_info", methods={"POST"})
     */
    public function comparePlusInfoAction(Matiere $matiere)
    {
        //tester si celcat ou intranet
        $planning = $this->getDoctrine()->getRepository('DAKernelBundle:Planning')->findBy(array('matiere' => $matiere->getId()));

        $calendrier = $this->getDoctrine()->getRepository('DAKernelBundle:Calendrier')->findCalendrier();

        return $this->render('administration/edtCompare/plusInfo.html.twig', [
            'planning'   => $planning,
            'matiere'     => $matiere,
            'calendrier' => $calendrier
        ]);
    }


}
