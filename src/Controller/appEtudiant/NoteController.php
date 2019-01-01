<?php

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Note;
use App\MesClasses\MyEvaluation;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class NotesController
 *
 * @package App\Controller
 * @Route("/application/etudiant/note")
 */
class NoteController extends BaseController
{
    /**
     * @param MyEvaluation $myEvaluation
     * @param Note         $note
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/details/{id}", name="app_etudiant_note_detail")
     *
     */
    public function details(MyEvaluation $myEvaluation, Note $note): Response
    {
        $myEvaluation->setEvaluation($note->getEvaluation())->calculStatistiquesGlobales();

        return $this->render('appEtudiant/note/detail.html.twig', [
            'statistiques' => $myEvaluation->getStatistiques(),
            'classement'   => $myEvaluation->classement($note->getEtudiant()),
            'note'         => $note
        ]);
    }
}
