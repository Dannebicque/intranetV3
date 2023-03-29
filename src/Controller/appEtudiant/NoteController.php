<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appEtudiant/NoteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/03/2023 06:51
 */

namespace App\Controller\appEtudiant;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyEvaluation;
use App\Controller\BaseController;
use App\Entity\Note;
use App\Exception\EvaluationNotFoundException;
use App\Exception\MatiereNotFoundException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class NotesController.
 */
#[Route(path: '/application/etudiant/note')]
class NoteController extends BaseController
{
    /**
     * @throws \App\Exception\MatiereNotFoundException
     * @throws \App\Exception\EvaluationNotFoundException
     */
    #[Route(path: '/details/{id}', name: 'app_etudiant_note_detail')]
    public function details(TypeMatiereManager $typeMatiereManager, MyEvaluation $myEvaluation, Note $note): Response
    {
        if (!($this->isGranted('ROLE_PERMANENT') or $this->getUser()->getId() === $note->getEtudiant()->getId())) {
            throw $this->createAccessDeniedException('Vous n\'avez pas accès à cette page');
        }

        if (null === $note->getEvaluation()) {
            throw new EvaluationNotFoundException();
        }
        $matiere = $typeMatiereManager->getMatiere($note->getEvaluation()->getIdMatiere(),
            $note->getEvaluation()->getTypeMatiere());
        if (null === $matiere) {
            throw new MatiereNotFoundException();
        }
        $myEvaluation->setEvaluation($note->getEvaluation())->calculStatistiquesGlobales();

        return $this->render('appEtudiant/note/detail.html.twig', [
            'statistiques' => $myEvaluation->getStatistiques(),
            'classement' => $myEvaluation->classement($note->getEtudiant()),
            'note' => $note,
            'matiere' => $matiere,
        ]);
    }
}
