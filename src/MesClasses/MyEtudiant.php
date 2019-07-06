<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/MyEtudiant.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:46 PM
 *  * @lastUpdate 4/28/19 8:45 PM
 *  *
 *
 */

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 12/05/2018
 * Time: 16:02
 */

namespace App\MesClasses;

use App\Entity\Absence;
use App\Entity\Etudiant;
use App\Entity\Evaluation;
use App\Entity\Groupe;
use App\Entity\Matiere;
use App\Entity\Note;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Events;
use App\MesClasses\Pdf\MyPDF;
use App\Repository\AbsenceRepository;
use App\Repository\EtudiantRepository;
use App\Repository\NoteRepository;
use DateInterval;
use DateTime;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Exception;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use function count;

/**
 * Class MyEtudiant
 * @package App\MesClasses
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
     * @param EventDispatcherInterface $eventDispatcher
     * @param MyPDF                    $myPdf
     * @param MyEvaluations            $myEvaluations
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        EtudiantRepository $etudiantRepository,
        NoteRepository $noteRepository,
        AbsenceRepository $absenceRepository,
        EventDispatcherInterface $eventDispatcher,
        MyPDF $myPdf,
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
    public function getNotesAbsences(Semestre $semestre, $anneeUniversitaire): void
    {
        $this->notes = $this->noteRepository->findByEtudiantSemestre($this->etudiant, $semestre, $anneeUniversitaire);
        $this->absences = $this->absenceRepository->findByEtudiantSemestre($this->etudiant, $semestre,
            $anneeUniversitaire);
    }

    /**
     * @param $id
     *
     * @return $this
     */
    public function setIdEtudiant($id)
    {
        $this->etudiant = $this->etudiantRepository->find($id);

        return $this;
    }

    /**
     * @param $uuid
     *
     * @throws NonUniqueResultException
     */
    public function setUuidEtudiant($uuid): void
    {
        $this->etudiant = $this->etudiantRepository->findOneByUuid($uuid);
    }

    /**
     * @param           $date
     * @param           $heure
     * @param Matiere   $matiere
     * @param Personnel $personnel
     *
     * @param bool      $justifie
     *
     * @return void
     * @throws Exception
     */
    public function addAbsence($date, $heure, Matiere $matiere, ?Personnel $personnel, bool $justifie = false): ?Absence
    {
        $absence = new Absence();
        $absence->setEtudiant($this->etudiant);
        $absence->setPersonnel($personnel);
        $absence->setDate($date);
        $absence->setAnneeuniversitaire($matiere->getSemestre() ? $matiere->getSemestre()->getAnneeUniversitaire() : 0);
        $absence->setDuree(new DateTime('01:30'));
        $absence->setHeure($heure);
        $absence->setMatiere($matiere);
        $absence->setJustifie($justifie);

        $this->entityManager->persist($absence);
        $this->entityManager->flush();

        //On déclenche les events
        $event = new GenericEvent($absence);
        $this->eventDispatcher->dispatch($event, Events::MAIL_ABSENCE_ADDED);
        $this->eventDispatcher->dispatch($event,
            Events::VERIFICATION_JUSTIFICATIF); //on vérifie s'il faut la valider ou pas
        $this->eventDispatcher->dispatch($event, Events::MAIL_ABSENCE_ADDED_RESPONSABLE);
        $this->eventDispatcher->dispatch($event, Events::ABSENCE_ADDED);

        return $absence;
    }

    /**
     * @param Evaluation $evaluation
     * @param            $data
     *
     * @return bool
     * @throws Exception
     */
    public function addNote(Evaluation $evaluation, $data): bool
    {
        //on cherche si deja une note de présente
        $note = $this->noteRepository->findBy([
            'evaluation' => $evaluation->getId(),
            'etudiant'   => $this->etudiant->getId()
        ]);

        if (count($note) === 1) {
            //update
            $note[0]->setNote(Tools::convertToFloat($data['note']));
            $note[0]->setCommentaire($data['commentaire']);
            if ($data['absence'] === 'true') {
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
        $event = new GenericEvent($absence);
        $this->entityManager->remove($absence);
        $this->entityManager->flush();

        //On déclenche les events
        $this->eventDispatcher->dispatch($event, Events::MAIL_ABSENCE_REMOVED);
        $this->eventDispatcher->dispatch($event, Events::MAIL_ABSENCE_REMOVED_RESPONSABLE);
        $this->eventDispatcher->dispatch($event, Events::ABSENCE_REMOVED);
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
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function exportReleveProvisoire(Semestre $semestre): void
    {
        $this->getNotesAbsences($semestre);
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

        $this->absences = $this->absenceRepository->findByEtudiantSemestre($this->etudiant, $semestre,
            $semestre->getAnneeUniversitaire());


        $this->statistiques['nbCoursManques'] = 0;
        $this->statistiques['totalDuree'] = new DateTime('00:00');
        $this->statistiques['nbNonJustifie'] = 0;
        $this->statistiques['nbDemiJournee'] = 0; //todo: a gérer dans le calcul
        $this->statistiques['nbJustifie'] = 0;


        /** @var Absence $absence */
        foreach ($this->absences as $absence) {
            $this->statistiques['nbCoursManques']++;

            if ($absence->getDuree() !== null) {
                $this->statistiques['totalDuree']->add(new DateInterval('PT' . $absence->getDuree()->format('G') . 'H' . $absence->getDuree()->format('i') . 'M'));
            }

            $absence->isJustifie() ? $this->statistiques['nbJustifie']++ : $this->statistiques['nbNonJustifie']++;
        }

        return $this;
    }

    /**
     * @return array
     */
    public function getStatistiques(): array
    {
        return $this->statistiques;
    }
}
