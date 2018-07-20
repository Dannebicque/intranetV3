<?php

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\MesClasses\MyPrevisionnel;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PrevisionnelController
 * @package App\Controller
 * @Route({"fr":"application/personnel/previsionnel",
 *         "en":"application/team/previsionnel"}
 *)
 */
class PrevisionnelController extends BaseController
{
    /**
     * @Route("/", name="previsionnel_index")
     * @param MyPrevisionnel $myPrevisionnel
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(MyPrevisionnel $myPrevisionnel): Response
    {
        $myPrevisionnel->setPersonnel($this->getUser());
        $myPrevisionnel->getPrevisionnelEnseignantBySemestre($this->dataUserSession->getAnneePrevisionnel());
        $myPrevisionnel->getHrsEnseignant($this->dataUserSession->getAnneePrevisionnel());

        return $this->render('appPersonnel/previsionnel/index.html.twig', [
            'previsionnel' => $myPrevisionnel,
        ]);
    }

    /**
     * @Route("/chronologique", name="previsionnel_chronologique")
     * @param MyPrevisionnel $myPrevisionnel
     *
     * @return Response
     */
    public function chronologique(MyPrevisionnel $myPrevisionnel): Response
    {
        return $this->render('appPersonnel/previsionnel/chronologique.html.twig', [
        ]);
    }

    /**
     * @Route("/help", name="previsionnel_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('appPersonnel/previsionnel/help.html.twig');
    }

    /**
     * @Route("/export.{_format}", name="application_personnel_previsionnel_export", methods="GET")
     */
    public function export(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }
}
