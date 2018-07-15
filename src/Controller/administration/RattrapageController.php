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
     * @Route("/export.{_format}", name="administration_rattrapage_export", methods="GET", requirements={"_format"="csv|xlsx|pdf"})
     */
    public function export(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

}
