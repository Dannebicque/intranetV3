<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/BlocNotesAbsencesController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Controller;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Etudiant\EtudiantNotes;
use App\Classes\MyPrevisionnel;
use App\Classes\StatsAbsences;
use App\Repository\MatiereRepository;
use Exception;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class BlocNotesAbsencesController.
 */
class BlocNotesAbsencesController extends BaseController
{
    public function personnel(MyPrevisionnel $myPrevisionnel): Response
    {
        return $this->render('bloc_notes_absences/personnel.html.twig', [
            'previsionnel' => $myPrevisionnel->getPrevisionnelEnseignantDepartement(
                $this->getConnectedUser(),
                $this->dataUserSession->getDepartement()
            ),
        ]);
    }

    /**
     * @throws Exception
     */
    public function etudiantAbsences(EtudiantAbsences $etudiantAbsences, StatsAbsences $statsAbsences): Response
    {
        $etudiantAbsences->setEtudiant($this->getConnectedUser());

        $absences = $etudiantAbsences->getAbsencesParSemestresEtAnneeUniversitaire($this->getEtudiantSemestre(),
            $this->getEtudiantAnneeUniversitaire());
        $statistiquesAbsences = $statsAbsences->calculStatistiquesAbsencesEtudiant($absences);

        return $this->render('bloc_notes_absences/etudiant_absences.html.twig', [
            'absences'             => $absences,
            'etudiant'             => $this->getConnectedUser(),
            'statistiquesAbsences' => $statistiquesAbsences,
        ]);
    }

    public function etudiantNotes(EtudiantNotes $etudiantNotes): Response
    {
        $etudiantNotes->setEtudiant($this->getConnectedUser());

        $notes = $etudiantNotes->getNotesParSemestresEtAnneeUniversitaire($this->getEtudiantSemestre(),
            $this->getEtudiantAnneeUniversitaire());

        return $this->render('bloc_notes_absences/etudiant_notes.html.twig', [
            'notes' => $notes,
        ]);
    }

    public function mccSemestre(MatiereRepository $matiereRepository): Response
    {
        return $this->render('bloc_notes_absences/mcc.html.twig', [
            'matieres' => $matiereRepository->findBySemestre($this->getEtudiantSemestre()),
        ]);
    }
}
