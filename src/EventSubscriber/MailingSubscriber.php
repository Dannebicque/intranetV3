<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/EventSubscriber/MailingSubscriber.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/09/2020 07:42

// App\EventSubscriber\MailingSubscriber.php
namespace App\EventSubscriber;

use App\Classes\Mail\MailerFromTwig;
use App\Event\AbsenceEvent;
use App\Event\EvaluationEvent;
use App\Event\JustificatifEvent;
use App\Event\NoteEvent;
use App\Event\RattrapageEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;

/**
 * Envoi un mail de bienvenue à chaque creation d'un utilisateur
 *
 */
class MailingSubscriber implements EventSubscriberInterface
{
    protected MailerFromTwig $myMailer;

    /**
     * MailingSubscriber constructor.
     *
     * @param MailerFromTwig $myMailer
     */
    public function __construct(
        MailerFromTwig $myMailer
    ) {
        $this->myMailer = $myMailer;
    }


    /**
     * @return array
     */
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
     * @param AbsenceEvent $event
     *
     * @throws TransportExceptionInterface
     */
    public function onMailAbsenceJustified(AbsenceEvent $event): void
    {
        $absence = $event->getAbsence();
        if ($absence->getEtudiant() !== null) {
            $this->myMailer->setTemplate('mails/absence_justified.txt.twig', ['absence' => $absence]);
            $this->myMailer->sendMessage($absence->getEtudiant()->getMails(), 'Une absence a été justifiée');
        }
    }

    /**
     * @param AbsenceEvent $event
     *
     * @throws TransportExceptionInterface
     */
    public function onMailAbsenceAdded(AbsenceEvent $event): void
    {

        $absence = $event->getAbsence();

        if ($absence->getEtudiant() !== null) {
            $this->myMailer->setTemplate('mails/absence_added.txt.twig', ['absence' => $absence]);
            $this->myMailer->sendMessage($absence->getEtudiant()->getMails(), 'Nouvelle absence enregistrée',
                ['from' => [$absence->getPersonnel() ? $absence->getPersonnel()->getMailUniv() : null]]);
        }
        $this->myMailer->initEmail();
        //envoi en copie au responsable si l'option est activée
        if ($absence->getMatiere() !== null && $absence->getMatiere()->getSemestre() !== null && $absence->getMatiere()->getSemestre()->isOptMailAbsenceResp() && $absence->getMatiere()->getSemestre()->getOptDestMailAbsenceResp() !== null) {
            $this->myMailer->setTemplate('mails/absence_added_responsable.txt.twig', ['absence' => $absence]);
            $this->myMailer->sendMessage(
                $absence->getMatiere()->getSemestre()->getOptDestMailAbsenceResp()->getMails(),
                'Nouvelle absence enregistrée'
            );
        }
    }

    /**
     * @param RattrapageEvent $event
     *
     * @throws TransportExceptionInterface
     */
    public function onMailDecisionRattrapage(RattrapageEvent $event): void
    {
        $rattrapage = $event->getRattrapage();
        if ($rattrapage->getEtudiant() !== null) {
            if ($rattrapage->getEtatDemande() === 'A') {
                $this->myMailer->setTemplate('mails/rattrapage_accepted.txt.twig', ['rattrapage' => $rattrapage]);
                $this->myMailer->sendMessage($rattrapage->getEtudiant()->getMails(), 'Demande de rattrapage acceptée');
            } else {
                $this->myMailer->setTemplate('mails/rattrapage_refused.txt.twig', ['rattrapage' => $rattrapage]);
                $this->myMailer->sendMessage($rattrapage->getEtudiant()->getMails(), 'Demande de rattrapage refusée');
            }
        }
    }

    /**
     * @param JustificatifEvent $event
     *
     * @throws TransportExceptionInterface
     */
    public function onMailDecisionJustificatif(JustificatifEvent $event): void
    {
        $absenceJustificatif = $event->getAbsenceJustificatif();
        if ($absenceJustificatif->getEtudiant() !== null) {
            if ($absenceJustificatif->getEtat() === 'A') {
                $this->myMailer->setTemplate('mails/justificatif_accepted.txt.twig',
                    ['justificatif' => $absenceJustificatif]);
                $this->myMailer->sendMessage($absenceJustificatif->getEtudiant()->getMails(),
                    'Justificatif d\'absence accepté');
            } else {
                $this->myMailer->setTemplate('mails/justificatif_refused.txt.twig',
                    ['justificatif' => $absenceJustificatif]);
                $this->myMailer->sendMessage($absenceJustificatif->getEtudiant()->getMails(),
                    'Justificatif d\'absence refusé');
            }
        }
    }

    /**
     * @param JustificatifEvent $event
     *
     * @throws TransportExceptionInterface
     */
    public function onMailDeleteJustificatif(JustificatifEvent $event): void
    {
        $absenceJustificatif = $event->getAbsenceJustificatif();
        if ($absenceJustificatif->getEtudiant() !== null) {
            $this->myMailer->setTemplate('mails/justificatif_deleted.txt.twig',
                ['justificatif' => $absenceJustificatif]);
            $this->myMailer->sendMessage($absenceJustificatif->getEtudiant()->getMails(),
                'Justificatif d\'absence supprimé');
        }
    }

    /**
     * @param AbsenceEvent $event
     *
     * @throws TransportExceptionInterface
     */
    public function onMailAbsenceRemoved(AbsenceEvent $event): void
    {
        $absence = $event->getAbsence();
        if ($absence->getEtudiant() !== null) {
            $this->myMailer->setTemplate('mails/absence_removed.txt.twig', ['absence' => $absence]);
            $this->myMailer->sendMessage($absence->getEtudiant()->getMails(), 'Suppression d\'une absence enregistrée',
                ['from' => [$absence->getPersonnel() ? $absence->getPersonnel()->getMailUniv() : null]]);
        }


        if ($absence->getMatiere() !== null && $absence->getMatiere()->getSemestre() !== null && $absence->getMatiere()->getSemestre()->isOptMailAbsenceResp() && $absence->getMatiere()->getSemestre()->getOptDestMailAbsenceResp() !== null) {
            $this->myMailer->setTemplate('mails/absence_removed_responsable.txt.twig', ['absence' => $absence]);
            $this->myMailer->sendMessage(
                $absence->getMatiere()->getSemestre()->getOptDestMailAbsenceResp()->getMails(),
                'Suppression d\'une absence enregistrée'
            );
        }
    }

    /**
     * @param NoteEvent $event
     *
     * @throws TransportExceptionInterface
     */
    public function onMailNoteModificationResponsable(NoteEvent $event): void
    {
        $note = $event->getNote();
        if ($note->getEvaluation() !== null &&
            $note->getEvaluation()->getMatiere() !== null &&
            $note->getEvaluation()->getMatiere()->getSemestre() !== null &&
            $note->getEvaluation()->getMatiere()->getSemestre()->getOptDestMailModifNote() !== null) {
            $this->myMailer->setTemplate('mails/note_modification.txt.twig', ['note' => $note]);
            $this->myMailer->sendMessage(
                $note->getEvaluation()->getMatiere()->getSemestre()->getOptDestMailModifNote()->getMails(),
                'Modification d\'une note'
            );
        }
    }

    /**
     * @param EvaluationEvent $event
     *
     * @throws TransportExceptionInterface
     */
    public function onMailNewTranscriptResponsable(EvaluationEvent $event): void
    {
        $evaluation = $event->getEvaluation();
        if ($evaluation->getMatiere() !== null &&
            $evaluation->getMatiere()->getSemestre() !== null &&
            $evaluation->getMatiere()->getSemestre()->getOptDestMailReleve() !== null) {
            $this->myMailer->setTemplate('mails/new_transcript.txt.twig', ['evaluation' => $evaluation]);
            $this->myMailer->sendMessage(
                $evaluation->getMatiere()->getSemestre()->getOptDestMailReleve()->getMails(),
                'Nouveau relevé de note saisi'
            );
        }
    }
}
