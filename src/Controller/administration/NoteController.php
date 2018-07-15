<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\MesClasses\MyEvaluations;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class NoteController
 * @package App\Controller\administration
 * @Route({"fr":"administration/note",
 *         "en":"administration/mark"}
 *)
 */
class NoteController extends BaseController
{
    /**
     * @Route("/semestre/{semestre}", name="administration_notes_semestre_index")
     * @param MyEvaluations $myEvaluations
     * @param Semestre      $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(MyEvaluations $myEvaluations, Semestre $semestre): Response
    {
        $myEvaluations->setSemestre($semestre);

        return $this->render('administration/notes/index.html.twig', [
            'semestre'    => $semestre,
            'matieres'    => $myEvaluations->getMatieresSemestre(),
            'evaluations' => $myEvaluations->getEvaluationsSemestre(),
        ]);
    }

    /**
     * @Route("/export.{_format}", name="administration_all_notes_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     */
    public function export(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }
}
