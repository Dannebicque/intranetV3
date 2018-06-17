<?php

namespace App\Controller\appEtudiant;

use App\Entity\Note;
use App\MesClasses\MyEvaluation;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class NotesController
 * @package App\Controller
 * @Route({"fr":"application/etudiant/note",
 *         "en":"application/student/mark"}
 *)
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
    public function details(MyEvaluation $myEvaluation, Note $note)
    {
        $myEvaluation->setEvaluation($note->getEvaluation())->calculStatistiquesGlobales();

        return $this->render('appEtudiant/note/detail.html.twig', [
            'statistiques' => $myEvaluation->getStatistiques(),
            'classement'   => $myEvaluation->classement($note->getEtudiant()),
            'note'         => $note
        ]);
    }
}
