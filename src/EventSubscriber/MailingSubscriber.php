<?php
// App\EventSubscriber\MailingSubscriber.php
namespace App\EventSubscriber;

use App\Entity\Absence;
use App\Entity\AbsenceJustificatif;
use App\Entity\Evaluation;
use App\Entity\Note;
use App\Entity\Rattrapage;
use App\Events;
use App\MesClasses\Mail\MyMailer;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\GenericEvent;

/**
 * Envoi un mail de bienvenue à chaque creation d'un utilisateur
 *
 */
class MailingSubscriber implements EventSubscriberInterface
{
    /** @var MyMailer */
    protected $myMailer;

    /**
     * MailingSubscriber constructor.
     *
     * @param MyMailer $myMailer
     */
    public function __construct(
        MyMailer $myMailer
    ) {
        $this->myMailer = $myMailer;
    }


    /**
     * @return array
     */
    public static function getSubscribedEvents(): array
    {
        return [
            // le nom de l'event et le nom de la fonction qui sera déclenché
            //Events::USER_REGISTERED => 'onUserRegistrated',
            Events::MAIL_ABSENCE_ADDED                 => 'onMailAbsenceAdded',
            Events::MAIL_ABSENCE_ADDED_RESPONSABLE     => 'onMailAbsenceAddedResponsable',
            Events::MAIL_ABSENCE_REMOVED               => 'onMailAbsenceRemoved',
            Events::MAIL_ABSENCE_REMOVED_RESPONSABLE   => 'onMailAbsenceRemovedResponsable',
            Events::MAIL_NOTE_MODIFICATION_RESPONSABLE => 'onMailNoteModificationResponsable',
            Events::MAIL_NEW_TRANSCRIPT_RESPONSABLE    => 'onMailNewTranscriptResponsable',
            Events::MAIL_DECISION_RATTRAPAGE           => 'onMailDecisionRattrapage',
            Events::MAIL_DECISION_JUSTIFICATIF         => 'onMailDecisionJustificatif',
            Events::MAIL_DELETE_JUSTIFICATIF         => 'onMailDeleteJustificatif',
        ];
    }

    /**
     * @param GenericEvent $event
     */
    public function onMailAbsenceAdded(GenericEvent $event): void
    {
        /** @var Absence $absence */
        $absence = $event->getSubject();
        if ($absence->getEtudiant() !== null) {
            $this->myMailer->setTemplate('mails/absence_added.txt.twig', ['absence' => $absence]);
            $this->myMailer->sendMessage($absence->getEtudiant()->getMails(), 'Nouvelle absence enregistrée', ['from' => [$absence->getPersonnel()? $absence->getPersonnel()->getMailUniv() : null]]);
        }
    }

    /**
     * @param GenericEvent $event
     */
    public function onMailDecisionRattrapage(GenericEvent $event): void
    {
        /** @var Rattrapage $rattrapage */
        $rattrapage = $event->getSubject();
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
     * @param GenericEvent $event
     */
    public function onMailDecisionJustificatif(GenericEvent $event): void
    {
        /** @var AbsenceJustificatif $absenceJustificatif */
        $absenceJustificatif = $event->getSubject();
        if ($absenceJustificatif->getEtudiant() !== null) {
            if ($absenceJustificatif->getEtat() === 'A') {
                $this->myMailer->setTemplate('mails/justificatif_accepted.txt.twig', ['justificatif' => $absenceJustificatif]);
                $this->myMailer->sendMessage($absenceJustificatif->getEtudiant()->getMails(), 'Justificatif d\'absence accepté');
            } else {
                $this->myMailer->setTemplate('mails/justificatif_refused.txt.twig', ['justificatif' => $absenceJustificatif]);
                $this->myMailer->sendMessage($absenceJustificatif->getEtudiant()->getMails(), 'Justificatif d\'absence refusé');
            }
        }
    }

    /**
     * @param GenericEvent $event
     */
    public function onMailDeleteJustificatif(GenericEvent $event): void
    {
        /** @var AbsenceJustificatif $absenceJustificatif */
        $absenceJustificatif = $event->getSubject();
        if ($absenceJustificatif->getEtudiant() !== null) {
            $this->myMailer->setTemplate('mails/justificatif_deleted.txt.twig', ['justificatif' => $absenceJustificatif]);
            $this->myMailer->sendMessage($absenceJustificatif->getEtudiant()->getMails(), 'Justificatif d\'absence supprimé');
        }
    }

    /**
     * @param GenericEvent $event
     */
    public function onMailAbsenceAddedResponsable(GenericEvent $event): void
    {
        /** @var Absence $absence */
        $absence = $event->getSubject();
        if ($absence->getMatiere() !== null && $absence->getMatiere()->getSemestre() !== null && $absence->getMatiere()->getSemestre()->getOptDestMailAbsenceResp() !== null) {
            $this->myMailer->setTemplate('mails/absence_added_responsable.txt.twig', ['absence' => $absence]);
            $this->myMailer->sendMessage(
                $absence->getMatiere()->getSemestre()->getOptDestMailAbsenceResp()->getMails(),
                'Nouvelle absence enregistrée'
            );
        }
    }

    /**
     * @param GenericEvent $event
     */
    public function onMailAbsenceRemoved(GenericEvent $event): void
    {
        /** @var Absence $absence */
        $absence = $event->getSubject();
        if ($absence->getEtudiant() !== null) {
            $this->myMailer->setTemplate('mails/absence_removed.txt.twig', ['absence' => $absence]);
            $this->myMailer->sendMessage($absence->getEtudiant()->getMails(), 'Suppression d\'une absence enregistrée', ['from' => [$absence->getPersonnel() ? $absence->getPersonnel()->getMailUniv() : null]]);
        }
    }

    /**
     * @param GenericEvent $event
     */
    public function onMailAbsenceRemovedResponsable(GenericEvent $event): void
    {
        /** @var Absence $absence */
        $absence = $event->getSubject();
        if ($absence->getMatiere() !== null && $absence->getMatiere()->getSemestre() !== null && $absence->getMatiere()->getSemestre()->getOptDestMailAbsenceResp() !== null) {
            $this->myMailer->setTemplate('mails/absence_removed_responsable.txt.twig', ['absence' => $absence]);
            $this->myMailer->sendMessage(
                $absence->getMatiere()->getSemestre()->getOptDestMailAbsenceResp()->getMails(),
                'Suppression d\'une absence enregistrée'
            );
        }
    }

    /**
     * @param GenericEvent $event
     */
    public function onMailNoteModificationResponsable(GenericEvent $event): void
    {
        /** @var Note $note */
        $note = $event->getSubject();
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
     * @param GenericEvent $event
     */
    public function onMailNewTranscriptResponsable(GenericEvent $event): void
    {
        /** @var Evaluation $evaluation */
        $evaluation = $event->getSubject();
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
