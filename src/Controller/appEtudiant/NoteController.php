<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appEtudiant/NoteController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:47 PM
 *  * @lastUpdate 4/28/19 8:44 PM
 *  *
 *
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

        return $this->render('erreur/666.html.twig');
    }
}
