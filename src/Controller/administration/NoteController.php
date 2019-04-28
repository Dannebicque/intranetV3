<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/NoteController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:47 PM
 *  * @lastUpdate 4/28/19 8:44 PM
 *  *
 *
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;
use App\MesClasses\MyEvaluations;
use App\MesClasses\MyExport;
use App\Repository\NoteRepository;
use PhpOffice\PhpSpreadsheet\Exception;
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
     * @return Response
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
     * @throws Exception
     */
    public function exportAllNotes(
        MyExport $myExport,
        NoteRepository $noteRepository,
        Semestre $semestre,
        $_format
    ): Response {
        $notes = $noteRepository->findBySemestre($semestre, $semestre->getAnneeUniversitaire());
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
