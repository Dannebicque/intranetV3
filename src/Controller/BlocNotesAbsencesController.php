<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/BlocNotesAbsencesController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/12/2022 17:40
 */

namespace App\Controller;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Etudiant\EtudiantNotes;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\StatsAbsences;
use App\Entity\Etudiant;
use App\Entity\Note;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

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
        // todo: mutualiser avec ProfilEtudiant... (TwigComponent ?)

        $etudiantAbsences->setEtudiant($this->getUser());
        if (false === $this->getUser()->getDiplome()->isApc()) {
            $matieres = $typeMatiereManager->findBySemestreArray($this->getEtudiantSemestre());
        } else {
            $matieres = $typeMatiereManager->findByReferentielOrdreSemestreArray($this->getEtudiantSemestre(),
                $this->getEtudiantSemestre()?->getDiplome()?->getReferentiel());
        }

        $absences = $etudiantAbsences->getAbsencesParSemestresEtAnneeUniversitaire($matieres,
            $this->getAnneeUniversitaire());
        $statistiquesAbsences = $statsAbsences->calculStatistiquesAbsencesEtudiant($absences);

        return $this->render('bloc_notes_absences/etudiant_absences.html.twig', [
            'absences' => $absences,
            'etudiant' => $this->getUser(),
            'statistiquesAbsences' => $statistiquesAbsences,
            'matieres' => $matieres,
        ]);
    }

    public function etudiantNotes(TypeMatiereManager $typeMatiereManager, EtudiantNotes $etudiantNotes, Etudiant $etudiant): Response
    {
        // todo: mutualiser avec ProfilEtudiant... (TwigComponent ?)

        if ($this->getUser()->getDiplome()->isApc()) {
            $matieres = $typeMatiereManager->findByReferentielOrdreSemestreArray($etudiant->getSemestre(),
                $this->getEtudiantSemestre()?->getDiplome()?->getReferentiel());
        } else {
            $matieres = $typeMatiereManager->findBySemestreArray($etudiant->getSemestre());
        }

        $etudiantNotes->setEtudiant($etudiant);
        $notes = $etudiantNotes->getNotesParSemestresEtAnneeUniversitaire($matieres,
            $this->getAnneeUniversitaire());

        return $this->render('bloc_notes_absences/etudiant_notes.html.twig', [
            'notes' => $notes,
            'matieres' => $matieres,
        ]);
    }

    #[Route(path: '/notes/pointer/{id}', name: 'bloc_notes_absences_pointer')]
    public function etudiantNotesPointer(Note $note, Request $request, EntityManagerInterface $em): Response
    {
        if($note->getEtudiant() !== $this->getUser()) {
            throw $this->createAccessDeniedException("Vous n'êtes pas le propriétaire de cette note!");
        }

        $payload = $request->toArray();

        if(!isset($payload['isVue']) && !is_bool($payload['isVue'])) {
            throw new \Exception("Le champ 'isVue' est invalide!");
        }

        $note->setVue($payload['isVue']);

        $em->persist($note);
        $em->flush();

        return $this->json(['vue' => $note->isVue()]);
    }

    public function mccSemestre(TypeMatiereManager $typeMatiereManager): Response
    {
        return $this->render('bloc_notes_absences/mcc.html.twig', [
            'matieres' => $typeMatiereManager->findBySemestreAndReferentiel($this->getEtudiantSemestre(), $this->getEtudiantSemestre()?->getDiplome()?->getReferentiel()),
            'apc' => $this->getUser()?->getSemestre()?->getDiplome()?->isApc(),
        ]);
    }
}
