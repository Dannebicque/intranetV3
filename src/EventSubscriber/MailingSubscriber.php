<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/EventSubscriber/MailingSubscriber.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/04/2021 18:37
 */

namespace App\EventSubscriber;

use App\Classes\Mail\MailerFromTwig;
use App\Event\AbsenceEvent;
use App\Event\EvaluationEvent;
use App\Event\JustificatifEvent;
use App\Event\NoteEvent;
use App\Event\RattrapageEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Envoi un mail de bienvenue à chaque creation d'un utilisateur.
 */
class MailingSubscriber implements EventSubscriberInterface
{
    protected MailerFromTwig $myMailer;

    /**
     * MailingSubscriber constructor.
     */
    public function __construct(
        MailerFromTwig $myMailer
    ) {
        $this->myMailer = $myMailer;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            AbsenceEvent::ADDED         => 'onMailAbsenceAdded',
            AbsenceEvent::REMOVED       => 'onMailAbsenceRemoved',
            AbsenceEvent::JUSTIFIED     => 'onMailAbsenceJustified',
            NoteEvent::UPDATED          => 'onMailNoteModificationResponsable',
            EvaluationEvent::ADDED      => 'onMailNewTranscriptResponsable',
            RattrapageEvent::DECISION   => 'onMailDecisionRattrapage',
            JustificatifEvent::DECISION => 'onMailDecisionJustificatif',
            JustificatifEvent::DELETED  => 'onMailDeleteJustificatif',
        ];
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function onMailAbsenceJustified(AbsenceEvent $event): void
    {
        $absence = $event->getAbsence();
        if (null !== $absence->getEtudiant()) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('mails/absence_justified.txt.twig', ['absence' => $absence]);
            $this->myMailer->sendMessage($absence->getEtudiant()->getMails(), 'Une absence a été justifiée');
        }
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function onMailAbsenceAdded(AbsenceEvent $event): void
    {
        $absence = $event->getAbsence();

        if (null !== $absence->getEtudiant()) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('mails/absence_added.txt.twig', ['absence' => $absence]);
            $this->myMailer->sendMessage($absence->getEtudiant()->getMails(), 'Nouvelle absence enregistrée',
                ['replyTo' => [$absence->getPersonnel() ? $absence->getPersonnel()->getMailUniv() : null]]);
        }
        $this->myMailer->initEmail();
        //envoi en copie au responsable si l'option est activée
        if (null !== $absence->getMatiere() && null !== $absence->getMatiere()->getSemestre() && $absence->getMatiere()->getSemestre()->isOptMailAbsenceResp() && null !== $absence->getMatiere()->getSemestre()->getOptDestMailAbsenceResp()) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('mails/absence_added_responsable.txt.twig', ['absence' => $absence]);
            $this->myMailer->sendMessage(
                $absence->getMatiere()->getSemestre()->getOptDestMailAbsenceResp()->getMails(),
                'Nouvelle absence enregistrée'
            );
        }
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function onMailDecisionRattrapage(RattrapageEvent $event): void
    {
        $rattrapage = $event->getRattrapage();
        if (null !== $rattrapage->getEtudiant()) {
            if ('A' === $rattrapage->getEtatDemande()) {
                $this->myMailer->initEmail();
                $this->myMailer->setTemplate('mails/rattrapage_accepted.txt.twig', ['rattrapage' => $rattrapage]);
                $this->myMailer->sendMessage($rattrapage->getEtudiant()->getMails(), 'Demande de rattrapage acceptée');
            } else {
                $this->myMailer->initEmail();
                $this->myMailer->setTemplate('mails/rattrapage_refused.txt.twig', ['rattrapage' => $rattrapage]);
                $this->myMailer->sendMessage($rattrapage->getEtudiant()->getMails(), 'Demande de rattrapage refusée');
            }
        }
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function onMailDecisionJustificatif(JustificatifEvent $event): void
    {
        $absenceJustificatif = $event->getAbsenceJustificatif();
        if (null !== $absenceJustificatif->getEtudiant()) {
            if ('A' === $absenceJustificatif->getEtat()) {
                $this->myMailer->initEmail();
                $this->myMailer->setTemplate('mails/justificatif_accepted.txt.twig',
                    ['justificatif' => $absenceJustificatif]);
                $this->myMailer->sendMessage($absenceJustificatif->getEtudiant()->getMails(),
                    'Justificatif d\'absence accepté');
            } else {
                $this->myMailer->initEmail();
                $this->myMailer->setTemplate('mails/justificatif_refused.txt.twig',
                    ['justificatif' => $absenceJustificatif]);
                $this->myMailer->sendMessage($absenceJustificatif->getEtudiant()->getMails(),
                    'Justificatif d\'absence refusé');
            }
        }
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function onMailDeleteJustificatif(JustificatifEvent $event): void
    {
        $absenceJustificatif = $event->getAbsenceJustificatif();
        if (null !== $absenceJustificatif->getEtudiant()) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('mails/justificatif_deleted.txt.twig',
                ['justificatif' => $absenceJustificatif]);
            $this->myMailer->sendMessage($absenceJustificatif->getEtudiant()->getMails(),
                'Justificatif d\'absence supprimé');
        }
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function onMailAbsenceRemoved(AbsenceEvent $event): void
    {
        $absence = $event->getAbsence();
        if (null !== $absence->getEtudiant()) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('mails/absence_removed.txt.twig', ['absence' => $absence]);
            $this->myMailer->sendMessage($absence->getEtudiant()->getMails(), 'Suppression d\'une absence enregistrée',
                ['replyTo' => [$absence->getPersonnel() ? $absence->getPersonnel()->getMailUniv() : null]]);
        }

        if (null !== $absence->getMatiere() && null !== $absence->getMatiere()->getSemestre() && $absence->getMatiere()->getSemestre()->isOptMailAbsenceResp() && null !== $absence->getMatiere()->getSemestre()->getOptDestMailAbsenceResp()) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('mails/absence_removed_responsable.txt.twig', ['absence' => $absence]);
            $this->myMailer->sendMessage(
                $absence->getMatiere()->getSemestre()->getOptDestMailAbsenceResp()->getMails(),
                'Suppression d\'une absence enregistrée'
            );
        }
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function onMailNoteModificationResponsable(NoteEvent $event): void
    {
        $note = $event->getNote();
        if (null !== $note->getEvaluation() &&
            null !== $note->getEvaluation()->getMatiere() &&
            null !== $note->getEvaluation()->getMatiere()->getSemestre() &&
            null !== $note->getEvaluation()->getMatiere()->getSemestre()->getOptDestMailModifNote()) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('mails/note_modification.txt.twig', ['note' => $note]);
            $this->myMailer->sendMessage(
                $note->getEvaluation()->getMatiere()->getSemestre()->getOptDestMailModifNote()->getMails(),
                'Modification d\'une note'
            );
        }
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function onMailNewTranscriptResponsable(EvaluationEvent $event): void
    {
        $evaluation = $event->getEvaluation();
        if (null !== $evaluation->getMatiere() &&
            null !== $evaluation->getMatiere()->getSemestre() &&
            null !== $evaluation->getMatiere()->getSemestre()->getOptDestMailReleve()) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('mails/new_transcript.txt.twig', ['evaluation' => $evaluation]);
            $this->myMailer->sendMessage(
                $evaluation->getMatiere()->getSemestre()->getOptDestMailReleve()->getMails(),
                'Nouveau relevé de note saisi'
            );
        }
    }
}
