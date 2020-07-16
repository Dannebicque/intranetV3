<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/BlocNotesAbsencesController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/07/2020 08:41

namespace App\Controller;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Etudiant\EtudiantNotes;
use App\Classes\MyPrevisionnel;
use App\Classes\StatsAbsences;
use App\Repository\MatiereRepository;
use Exception;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class BlocNotesAbsencesController
 * @package App\Controller
 */
class BlocNotesAbsencesController extends BaseController
{
    /**
     * @param MyPrevisionnel $myPrevisionnel
     *
     * @return Response
     */
    public function personnel(MyPrevisionnel $myPrevisionnel): Response
    {
        return $this->render('bloc_notes_absences/personnel.html.twig', [
            'previsionnel' => $myPrevisionnel->getPrevisionnelEnseignantDepartement(
                $this->getConnectedUser(),
                $this->dataUserSession->getDepartement()
            )
        ]);
    }

    /**
     *
     * @param EtudiantAbsences $etudiantAbsences
     * @param StatsAbsences    $statsAbsences
     *
     * @return Response
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
            'statistiquesAbsences' => $statistiquesAbsences
        ]);
    }

    /**
     *
     * @param EtudiantNotes $etudiantNotes
     *
     * @return Response
     */
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
            'matieres' => $matiereRepository->findBySemestre($this->getEtudiantSemestre())
        ]);
    }
}
