<?php

namespace App\Controller\administration;

use App\Entity\Semestre;
use App\MesClasses\MyEvaluations;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class NoteController
 * @package App\Controller\administration
 * @Route("/{_locale}/administration/note",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class NoteController extends Controller
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
            'semestre' => $semestre,
            'matieres' => $myEvaluations->getMatieresSemestre(),
            'evaluations' => $myEvaluations->getEvaluationsSemestre(),
        ]);
    }
}
