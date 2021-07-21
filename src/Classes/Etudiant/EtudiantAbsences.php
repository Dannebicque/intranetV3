<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantAbsences.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:30
 */

namespace App\Classes\Etudiant;

use App\DTO\Matiere;
use App\Entity\Absence;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Event\AbsenceEvent;
use App\Repository\AbsenceRepository;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use function array_key_exists;

class EtudiantAbsences
{
    private AbsenceRepository $absenceRepository;

    private Etudiant $etudiant;

    private EntityManagerInterface $entityManager;

    private EventDispatcherInterface $eventDispatcher;
    /**
     * @var int|mixed|string
     */
    private $absences;

    /**
     * EtudiantAbsences constructor.
     */
    public function __construct(
        AbsenceRepository $absenceRepository,
        EntityManagerInterface $entityManager,
        EventDispatcherInterface $eventDispatcher
    ) {
        $this->absenceRepository = $absenceRepository;
        $this->entityManager = $entityManager;
        $this->eventDispatcher = $eventDispatcher;
    }

    public function setEtudiant(Etudiant $etudiant)
    {
        $this->etudiant = $etudiant;
    }

    public function getAbsencesParSemestresEtAnneeUniversitaire(
        $matieres,
        AnneeUniversitaire $anneeUniversitaire
    ) {
        $this->absences = $this->absenceRepository->getByEtudiantAndSemestre($matieres, $this->etudiant,
            $anneeUniversitaire);

        return $this->absences;
    }

    public function addAbsence(
        CarbonInterface $dateHeure,
        Matiere $matiere,
        ?Personnel $personnel,
        bool $justifie = false
    ): Absence {
        $absence = new Absence();
        $absence->setEtudiant($this->etudiant);
        $absence->setPersonnel($personnel);
        $absence->setDateHeure($dateHeure);
        $absence->setAnneeUniversitaire($matiere->semestre ? $matiere->semestre->getAnneeUniversitaire() : null);
        $absence->setDuree(new Carbon('01:30'));
        $absence->setIdMatiere($matiere->id);
        $absence->setTypeMatiere($matiere->typeMatiere);
        $absence->setJustifie($justifie);

        $this->entityManager->persist($absence);
        $this->entityManager->flush();

        //On déclenche les events : mails étudiants et responsable si actif, notification et vérification avec les justificatifs existants
        $event = new AbsenceEvent($absence);
        $this->eventDispatcher->dispatch($event, AbsenceEvent::ADDED);

        return $absence;
    }

    public function removeAbsence(Absence $absence): void
    {
        $event = new AbsenceEvent($absence);
        $this->entityManager->remove($absence);
        $this->entityManager->flush();

        //On déclenche les events
        $this->eventDispatcher->dispatch($event, AbsenceEvent::REMOVED);
    }

    public function getPenalitesAbsencesParMatiere(
        array $matieres,
        AnneeUniversitaire $anneeUniversitaire,
        &$tabMatiere
    ) {
        $this->getAbsencesParSemestresEtAnneeUniversitaire($matieres, $anneeUniversitaire);

        /** @var Absence $absence */
        foreach ($this->absences as $absence) {
            if (false === $absence->getJustifie() && 0 !== $absence->getIdMatiere()) {
                $idMatiere = $absence->getTypeIdMatiere();
                if (array_key_exists($idMatiere, $tabMatiere)) {
                    ++$tabMatiere[$idMatiere]->absences;
                }
            }
        }
    }
}
