<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyEtudiant.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 09:14

namespace App\Classes;

use App\Entity\Absence;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Evaluation;
use App\Entity\Groupe;
use App\Entity\Matiere;
use App\Entity\ModificationNote;
use App\Entity\Note;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Event\AbsenceEvent;
use App\Classes\Pdf\MyPDF;
use App\Repository\AbsenceRepository;
use App\Repository\EtudiantRepository;
use App\Repository\NoteRepository;
use DateTime;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use function count;

/**
 * Class MyEtudiant
 * @package App\Classes
 */
class MyEtudiant
{
    /** @var EtudiantRepository */
    private $etudiantRepository;

    /** @var NoteRepository */
    private $noteRepository;

    /** @var AbsenceRepository */
    private $absenceRepository;

    /** @var EntityManagerInterface */
    private $entityManager;

    /** @var Etudiant */
    private $etudiant;

    /** @var Collection|Absence[] */
    private $absences;

    /** @var Collection|Note[] */
    private $notes;

    /**
     * @var EventDispatcherInterface
     */
    private $eventDispatcher;

    /** @var MyPDF */
    private $myPdf;
    /** @var MyEvaluations */
    private $myEvaluations;

    private $statistiques = [];

    /**
     * MyEtudiant constructor.
     *
     * @param EntityManagerInterface   $entityManager
     * @param EtudiantRepository       $etudiantRepository
     * @param NoteRepository           $noteRepository
     * @param AbsenceRepository        $absenceRepository
     * @param MyPDF                    $myPdf
     * @param EventDispatcherInterface $eventDispatcher
     * @param MyEvaluations            $myEvaluations
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        EtudiantRepository $etudiantRepository,
        NoteRepository $noteRepository,
        AbsenceRepository $absenceRepository,
        MyPDF $myPdf,
        EventDispatcherInterface $eventDispatcher,
        MyEvaluations $myEvaluations
    ) {
        $this->entityManager = $entityManager;
        $this->etudiantRepository = $etudiantRepository;
        $this->noteRepository = $noteRepository;
        $this->absenceRepository = $absenceRepository;
        $this->eventDispatcher = $eventDispatcher;
        $this->myPdf = $myPdf;
        $this->myEvaluations = $myEvaluations;
    }


    /**
     * @return Etudiant
     */
    public function getEtudiant(): Etudiant
    {
        return $this->etudiant;
    }

    /**
     * @return Absence[]
     */
    public function getAbsences(): array
    {
        return $this->absences;
    }

    /**
     * @return Note[]
     */
    public function getNotes(): array
    {
        return $this->notes;
    }

    /**
     * @param Etudiant $etudiant
     *
     * @return MyEtudiant
     */
    public function setEtudiant(Etudiant $etudiant): MyEtudiant
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    /**
     * @param Semestre $semestre
     * @param          $anneeUniversitaire
     */
    public function getNotesAbsences(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): void
    {
        $this->notes = $this->noteRepository->findByEtudiantSemestre($this->etudiant, $semestre, $anneeUniversitaire);
        $this->absences = $this->absenceRepository->getByEtudiantAndSemestre($this->etudiant, $semestre,
            $anneeUniversitaire);
    }

    /**
     * @param $id
     *
     * @return $this
     */
    public function setIdEtudiant($id): self
    {
        $this->etudiant = $this->etudiantRepository->find($id);

        return $this;
    }

    /**
     * @param $uuid
     *
     */
    public function setUuidEtudiant($uuid): void
    {
        $this->etudiant = $this->etudiantRepository->findOneBy(['uuid' => $uuid]);
    }

    /**
     * @param           $date
     * @param           $heure
     * @param Matiere   $matiere
     * @param Personnel $personnel
     *
     * @param bool      $justifie
     *
     * @return Absence|null
     * @throws Exception
     */
    public function addAbsence($date, $heure, Matiere $matiere, ?Personnel $personnel, bool $justifie = false): ?Absence
    {
        $absence = new Absence();
        $absence->setEtudiant($this->etudiant);
        $absence->setPersonnel($personnel);
        $absence->setDate($date);
        $absence->setAnneeUniversitaire($matiere->getSemestre() ? $matiere->getSemestre()->getAnneeUniversitaire() : null);
        $absence->setDuree(new DateTime('01:30'));
        $absence->setHeure($heure);
        $absence->setMatiere($matiere);
        $absence->setJustifie($justifie);

        $this->entityManager->persist($absence);
        $this->entityManager->flush();

        //On déclenche les events : mails étudiants et responsable si actif, notification et vérification avec les justificatifs existants
        $event = new AbsenceEvent($absence);
        $this->eventDispatcher->dispatch($event, AbsenceEvent::ADDED);

        return $absence;
    }

    /**
     * @param Evaluation $evaluation
     * @param            $data
     *
     * @param Personnel  $personnel
     *
     * @return bool
     * @throws Exception
     */
    public function addNote(Evaluation $evaluation, $data, Personnel $personnel): bool
    {
        //on cherche si deja une note de présente
        $note = $this->noteRepository->findBy([
            'evaluation' => $evaluation->getId(),
            'etudiant'   => $this->etudiant->getId()
        ]);

        if (count($note) === 1) {
            //update
            $modif = new ModificationNote();
            $modif->setNote($note[0]);
            $modif->setAncienneNote($note[0]->getNote());
            $modif->setNouvelleNote(Tools::convertToFloat($data['note']));
            $modif->setPersonnel($personnel);
            $this->entityManager->persist($modif);
            $note[0]->setNote(Tools::convertToFloat($data['note']));
            $note[0]->setCommentaire($data['commentaire']);
            if (isset($data['absence']) && $data['absence'] === 'true') {
                $note[0]->setAbsenceJustifie(true);
            } else {
                $note[0]->setAbsenceJustifie(false);
            }

            $this->entityManager->persist($note[0]);
            $this->entityManager->flush();
        } elseif (count($note) === 0) {
            //creation

            $newnote = new Note();
            $newnote->setEtudiant($this->etudiant);
            $newnote->setEvaluation($evaluation);
            $newnote->setNote(Tools::convertToFloat($data['note']));
            $newnote->setCommentaire($data['commentaire']);

            $this->entityManager->persist($newnote);
            $this->entityManager->flush();
        }

        return false;
    }

    /**
     * @param Absence $absence
     */
    public function removeAbsence(Absence $absence): void
    {
        $event = new AbsenceEvent($absence);
        $this->entityManager->remove($absence);
        $this->entityManager->flush();

        //On déclenche les events
        $this->eventDispatcher->dispatch($event, AbsenceEvent::REMOVED);
    }

    /**
     *
     */
    public function suppressionNotes(): void
    {
        $ml = $this->noteRepository->findBy(['etudiant' => $this->etudiant->getId()]);
        foreach ($ml as $a) {
            $this->entityManager->remove($a);
        }
        $this->entityManager->flush();

    }

    /**
     * @param Semestre $semestre
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function exportReleveProvisoire(Semestre $semestre): void
    {
        $this->getNotesAbsences($semestre, $semestre->getAnneeUniversitaire());
        $this->myEvaluations->getEvaluationsSemestre();

        $this->myPdf::generePdf('pdf/releveProvisoire.html.twig', [
            'etudiant'           => $this->etudiant,
            'notes'              => $this->notes,
            'syntheses'          => $this->myEvaluations->getStatistiques(),
            'anneeUniversitaire' => $semestre->getAnneeUniversitaire(),
        ], 'releveNoteProvisoire-' . $this->etudiant->getNom() . '.pdf');
    }

    public function suppressionGroupes(): void
    {
        /** @var Groupe $groupe */
        foreach ($this->etudiant->getGroupes() as $groupe) {
            //suppression des groupes
            //suppression des groupes
            $this->etudiant->removeGroupe($groupe);
            $groupe->removeEtudiant($this->etudiant);
            $this->entityManager->persist($groupe);
        }
        $this->entityManager->flush();
    }

    /**
     * @param Semestre|null $semestre
     *
     * @return $this
     * @throws Exception
     */
    public function getAbsencesSemestre(Semestre $semestre = null): self
    {
        if ($semestre === null) {
            $semestre = $this->etudiant->getSemestre();
        }

        $this->absences = $this->absenceRepository->getByEtudiantAndSemestre($this->etudiant, $semestre,
            $semestre->getAnneeUniversitaire());

        $this->statistiques = StatsAbsences::calculsStatsSemestre($this->absences);

        return $this;
    }

    /**
     * @return array
     */
    public function getStatistiques(): array
    {
        return $this->statistiques;
    }

    public function getNotesSemestre(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire = null): array
    {
        if ($anneeUniversitaire === null) {
            $anneeUniversitaire = $this->etudiant->getAnneeUniversitaire();
        }
        $this->notes = $this->noteRepository->findByEtudiantSemestre($this->etudiant, $semestre, $anneeUniversitaire);

        return $this->getNotes();
    }
}
