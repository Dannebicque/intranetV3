<?php

namespace App\Controller;

use App\MesClasses\MyPrevisionnel;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PrevisionnelController
 * @package App\Controller
 * @Route("/{_locale}/previsionnel",
 *     requirements={
 *         "_locale": "fr|en"})
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
        $myPrevisionnel->getPrevisionnelEnseignantBySemestre($this->dataUserSession->getFormation()->getOptAnneePrevisionnel());
        $myPrevisionnel->getHrsEnseignant($this->dataUserSession->getFormation()->getOptAnneePrevisionnel());

        return $this->render('previsionnel/index.html.twig', [
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
        return $this->render('previsionnel/chronologique.html.twig', [
        ]);
    }

    /**
     * @Route("/help", name="previsionnel_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('previsionnel/help.html.twig');
    }

    /**
     * @Route("/save", name="previsionnel_save", methods="GET")
     */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/imprimer", name="previsionnel_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }
}
