<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantAbsences.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 03/09/2020 20:40

namespace App\Classes\Etudiant;


use App\Entity\Absence;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Event\AbsenceEvent;
use App\Repository\AbsenceRepository;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

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
     *
     * @param AbsenceRepository        $absenceRepository
     * @param EntityManagerInterface   $entityManager
     * @param EventDispatcherInterface $eventDispatcher
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
        Semestre $semestre,
        AnneeUniversitaire $anneeUniversitaire
    ) {
        if ($semestre === null) {
            $semestre = $this->etudiant->getSemestre();
        }

        $this->absences = $this->absenceRepository->getByEtudiantAndSemestre($this->etudiant, $semestre,
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
        $absence->setAnneeUniversitaire($matiere->getSemestre() ? $matiere->getSemestre()->getAnneeUniversitaire() : null);
        $absence->setDuree(new Carbon('01:30'));
        $absence->setMatiere($matiere);
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
        Semestre $semestre,
        AnneeUniversitaire $anneeUniversitaire,
        &$tabMatiere
    ) {
        $this->getAbsencesParSemestresEtAnneeUniversitaire($semestre, $anneeUniversitaire);

        /** @var Absence $absence */
        foreach ($this->absences as $absence) {
            if ($absence->getJustifie() === false && $absence->getMatiere() !== null) {
                $idMatiere = $absence->getMatiere()->getId();
                if (array_key_exists($idMatiere, $tabMatiere)) {
                    $tabMatiere[$idMatiere]->absences++;
                }
            }
        }
    }

}
