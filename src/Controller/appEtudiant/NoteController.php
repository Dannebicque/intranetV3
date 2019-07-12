<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appEtudiant/NoteController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 4/30/19 2:35 PM
 */

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Note;
use App\MesClasses\MyEvaluation;
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
     * @return Response
     * @Route("/details/{id}", name="app_etudiant_note_detail")
     *
     */
    public function details(MyEvaluation $myEvaluation, Note $note): Response
    {
        if ($note->getEvaluation() !== null) {
            $myEvaluation->setEvaluation($note->getEvaluation())->calculStatistiquesGlobales();

            return $this->render('appEtudiant/note/detail.html.twig', [
                'statistiques' => $myEvaluation->getStatistiques(),
                'classement'   => $myEvaluation->classement($note->getEtudiant()),
                'note'         => $note
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }
}
