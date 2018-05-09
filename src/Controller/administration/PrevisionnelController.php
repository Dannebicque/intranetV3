<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Matiere;
use App\MesClasses\MyPrevisionnel;
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use App\Repository\PrevisionnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class PrevisionnelController
 * @package App\Controller\administration
 * @Route("/{_locale}/administration/previsionnel",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class PrevisionnelController extends BaseController
{
    /**
     * @Route("/", name="administration_previsionnel_index")
     * @param MatiereRepository $matiereRepository
     *
     * @return Response
     */
    public function index(MatiereRepository $matiereRepository) :Response
    {
        return $this->render('administration/previsionnel/index.html.twig', [
            'matieres' => $matiereRepository->findAll()
        ]);
    }

    /**
     * @Route("/matiere/{matiere}", name="administration_previsionnel_matiere", options={"expose":true})
     * @param MyPrevisionnel $myPrevisionnel
     * @param Matiere        $matiere
     *
     * @return Response
     */
    public function matiere(MyPrevisionnel $myPrevisionnel, Matiere $matiere) :Response
    {
        $myPrevisionnel->getPrevisionnelMatiere($matiere, $this->dataUserSession->getFormation()->getOptAnneePrevisionnel());
        return $this->render('administration/previsionnel/matiere.html.twig', [
            'previsionnel' => $myPrevisionnel
        ]);
    }

    /**
     * @Route("/semestre", name="administration_previsionnel_semestre", options={"expose":true})
     */
    public function semestre(MatiereRepository $matiereRepository)
    {
        return $this->render('administration/previsionnel/semestre.html.twig', [
            'matieres' => $matiereRepository->findAll()
        ]);
    }

    /**
     * @Route("/personnel", name="administration_previsionnel_personnel", options={"expose":true})
     */
    public function personnel(MatiereRepository $matiereRepository)
    {
        return $this->render('administration/previsionnel/personnel.html.twig', [
            'matieres' => $matiereRepository->findAll()
        ]);
    }

    /**
     * @Route("/new", name="administration_previsionnel_new", methods="GET|POST")
     */
    public function new()
    {
        return $this->render('administration/previsionnel/new.html.twig', [
            'controller_name' => 'PrevisionnelController',
        ]);
    }

    /**
     * @Route("/imprimer", name="administration_previsionnel_print", methods="GET")
     */
    public function imprimer(): Response
    {
        return new Response('', 200);
    }

    /**
     * @Route("/save", name="administration_previsionnel_save", methods="GET")
     */
    public function save(): Response
    {
        return new Response('', 200);
    }
}
