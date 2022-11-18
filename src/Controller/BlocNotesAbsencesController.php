<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/BlocNotesAbsencesController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 14:51
 */

namespace App\Controller;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Etudiant\EtudiantNotes;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Classes\StatsAbsences;
use Exception;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class BlocNotesAbsencesController.
 */
class BlocNotesAbsencesController extends BaseController
{
    /**
     * @throws Exception
     */
    public function etudiantAbsences(
        TypeMatiereManager $typeMatiereManager,
        EtudiantAbsences $etudiantAbsences,
        StatsAbsences $statsAbsences
    ): Response {
        $etudiantAbsences->setEtudiant($this->getUser());
        $matieres = $typeMatiereManager->findByReferentielOrdreSemestre($this->getEtudiantSemestre(),
            $this->getEtudiantSemestre()?->getDiplome()?->getReferentiel());
        $absences = $etudiantAbsences->getAbsencesParSemestresEtAnneeUniversitaire($matieres,
            $this->getAnneeUniversitaire());
        $statistiquesAbsences = $statsAbsences->calculStatistiquesAbsencesEtudiant($absences);

        $tMatieres = [];
        foreach ($matieres as $matiere) {
            $tMatieres[$matiere->getTypeIdMatiere()] = $matiere;
        }

        return $this->render('bloc_notes_absences/etudiant_absences.html.twig', [
            'absences' => $absences,
            'etudiant' => $this->getUser(),
            'statistiquesAbsences' => $statistiquesAbsences,
            'matieres' => $tMatieres,
        ]);
    }

    public function etudiantNotes(TypeMatiereManager $typeMatiereManager, EtudiantNotes $etudiantNotes): Response
    {
        $matieres = $typeMatiereManager->findBySemestreArray($this->getEtudiantSemestre());
        $etudiantNotes->setEtudiant($this->getUser());
        $notes = $etudiantNotes->getNotesParSemestresEtAnneeUniversitaire($matieres,
            $this->getAnneeUniversitaire());

        return $this->render('bloc_notes_absences/etudiant_notes.html.twig', [
            'notes' => $notes,
            'matieres' => $matieres,
        ]);
    }

    public function mccSemestre(TypeMatiereManager $typeMatiereManager): Response
    {
        return $this->render('bloc_notes_absences/mcc.html.twig', [
            'matieres' => $typeMatiereManager->findBySemestre($this->getEtudiantSemestre()),
            'apc' => $this->getUser()?->getSemestre()?->getDiplome()?->isApc(),
        ]);
    }
}
