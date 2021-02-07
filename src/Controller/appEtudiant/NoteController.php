<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appEtudiant/NoteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\appEtudiant;

use App\Classes\MyEvaluation;
use App\Controller\BaseController;
use App\Entity\Note;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class NotesController.
 *
 * @Route("/application/etudiant/note")
 */
class NoteController extends BaseController
{
    /**
     * @Route("/details/{id}", name="app_etudiant_note_detail")
     */
    public function details(MyEvaluation $myEvaluation, Note $note): Response
    {
        if (null !== $note->getEvaluation()) {
            $myEvaluation->setEvaluation($note->getEvaluation())->calculStatistiquesGlobales();

            return $this->render('appEtudiant/note/detail.html.twig', [
                'statistiques' => $myEvaluation->getStatistiques(),
                'classement'   => $myEvaluation->classement($note->getEtudiant()),
                'note'         => $note,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }
}
