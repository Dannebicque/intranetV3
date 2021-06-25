<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/NoteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/06/2021 10:28
 */

namespace App\Controller\administration;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyEvaluations;
use App\Classes\Semestre\NotesExport;
use App\Controller\BaseController;
use App\Entity\Note;
use App\Entity\Semestre;
use App\Repository\NoteRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class NoteController.
 *
 * @Route("/administration/note")
 */
class NoteController extends BaseController
{
    /**
     * @Route("/semestre/{semestre}", name="administration_notes_semestre_index")
     */
    public function index(
        MyEvaluations $myEvaluations,
        Semestre $semestre
    ): Response {
        $myEvaluations->setSemestre($semestre);

        return $this->render('administration/notes/index.html.twig', [
            'semestre' => $semestre,
            'matieres' => $myEvaluations->getMatieresSemestre(),
            'evaluations' => $myEvaluations->getEvaluationsSemestre($semestre,
                $this->dataUserSession->getAnneeUniversitaire()),
        ]);
    }

    /**
     * @Route("/all/semestre/{semestre}/export.{_format}", name="administration_all_notes_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     *
     * @return Response
     */
    public function exportAllNotes(
        NotesExport $notesExport,
        Semestre $semestre,
        $_format
    ): ?Response {
        return $notesExport->exportXlsToutesLesNotes($semestre, $this->dataUserSession->getAnneeUniversitaire());
    }

    public function analyse(
        TypeMatiereManager $typeMatiereManager,
        NoteRepository $noteRepository,
        Semestre $semestre
    ) {
        $matieres = $typeMatiereManager->findBySemestre($semestre);
        $notesAvecAbsence = $noteRepository->findBySemestreNoteAvecAbsence($matieres,
            $this->getDataUserSession()->getAnneeUniversitaire());
        $notesIncoherentes = $noteRepository->findBySemestreErreur($matieres,
            $this->getDataUserSession()->getAnneeUniversitaire());

        return $this->render('administration/notes/analyse.html.twig', [
            'notesAvecAbsence' => $notesAvecAbsence,
            'notesIncoherentes' => $notesIncoherentes
        ]);
    }

    /**
     * @Route("/ajax/{note}/{action}", name="administration_note_corrige_ajax", methods={"POST"},
     *                                 options={"expose":true})
     */
    public function corrigeNote(
        Note $note,
        string $action
    ): Response {
        switch ($action) {
            case 'absent':
                $note->setAbsenceJustifie(true);
                break;
            case 'zero':
                $note->setNote(0);
                break;
            case 'suppr-absence':
                $note->setAbsenceJustifie(false);
                break;
        }
        $this->entityManager->flush();

        return $this->json($note->getId());
    }
}
