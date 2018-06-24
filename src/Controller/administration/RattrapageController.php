<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\Repository\RattrapageRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RattrapageController
 * @package App\Controller\administration
 * @Route({"fr":"administration/rattrapage",
 *         "en":"administration/picking-up"}
 *)
 */
class RattrapageController extends BaseController
{
    /**
     * @Route("/semestre/{semestre}", name="administration_rattrapage_semestre_index")
     * @param RattrapageRepository $rattrapageRepository
     * @param Semestre             $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(RattrapageRepository $rattrapageRepository, Semestre $semestre): Response
    {
        return $this->render('administration/rattrapage/index.html.twig', [
            'rattrapages' => $rattrapageRepository->findBySemestre($semestre),
            'semestre'    => $semestre
        ]);
    }

    /**
     * @Route("/help", name="administration_rattrapage_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('administration/rattrapage/help.html.twig');
    }

    /**
     * @Route("/save", name="administration_rattrapage_save", methods="GET")
     */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/imprimer", name="administration_rattrapage_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }
}
