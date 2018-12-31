<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\MesClasses\MyEvaluations;
use App\MesClasses\MyExport;
use App\Repository\NoteRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class NoteController
 * @package App\Controller\administration
 * @Route("/administration/note")
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
     * @Route("/all/semestre/{semestre}/export.{_format}", name="administration_all_notes_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport       $myExport
     * @param NoteRepository $noteRepository
     * @param Semestre       $semestre
     * @param                $_format
     *
     * @return Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function exportAllNotes(
        MyExport $myExport,
        NoteRepository $noteRepository,
        Semestre $semestre,
        $_format
    ): Response {
        $notes = $noteRepository->findBySemestre($semestre);
        $response = $myExport->genereFichierGenerique(
            $_format,
            $notes,
            'notes_' . $semestre->getLibelle(),
            ['notes_administration', 'utilisateur', 'matiere'],
            [
                'date',
                'heure',
                'duree',
                'etudiant' => ['nom', 'prenom'],
                'justifie',
                'matiere' => ['libelle'],
                'personnel' => ['nom', 'prenom']
            ]
        );

        return $response;
    }


}
