<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/EventSubscriber/MailingSubscriber.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/01/2024 17:48
 */

namespace App\EventSubscriber;

use App\Classes\Mail\MailerFromTwig;
use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\AbsenceJustificatif;
use App\Entity\Rattrapage;
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
    /**
     * MailingSubscriber constructor.
     */
    public function __construct(protected MailerFromTwig $myMailer, private readonly TypeMatiereManager $typeMatiereManager)
    {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            AbsenceEvent::ADDED => 'onMailAbsenceAdded',
            AbsenceEvent::REMOVED => 'onMailAbsenceRemoved',
            AbsenceEvent::JUSTIFIED => 'onMailAbsenceJustified',
            NoteEvent::UPDATED => 'onMailNoteModificationResponsable',
            EvaluationEvent::ADDED => 'onMailNewTranscriptResponsable',
            RattrapageEvent::DECISION => 'onMailDecisionRattrapage',
            RattrapageEvent::RATTRAPAGE_MAIL_DEMANDE => 'onMailDemandeRattrapage',
            JustificatifEvent::DECISION => 'onMailDecisionJustificatif',
            JustificatifEvent::DELETED => 'onMailDeleteJustificatif',
            JustificatifEvent::ADDED => 'onMailAddedJustificatif',
        ];
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function onMailAbsenceJustified(AbsenceEvent $event): void
    {
        $absence = $event->getAbsence();
        $matiere = $this->typeMatiereManager->getMatiere($absence->getIdMatiere(), $absence->getTypeMatiere());
        if (null !== $absence->getEtudiant()) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('mails/absence_justified.txt.twig',
                ['absence' => $absence, 'matiere' => $matiere]);
            $this->myMailer->sendMessage($absence->getEtudiant()->getMails(), 'Une absence a été justifiée');
        }
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function onMailAbsenceAdded(AbsenceEvent $event): void
    {
        $absence = $event->getAbsence();
        $semestre = $absence->getSemestre();
        $matiere = $this->typeMatiereManager->getMatiere($absence->getIdMatiere(), $absence->getTypeMatiere());

        if (null !== $matiere && null !== $semestre) {
            if (null !== $absence->getEtudiant() && true === $semestre->isOptMailAbsenceEtudiant()) {
                $this->myMailer->initEmail();
                $this->myMailer->setTemplate('mails/absence_added.txt.twig',
                    ['absence' => $absence, 'matiere' => $matiere]);
                $this->myMailer->sendMessage($absence->getEtudiant()->getMails(), 'Nouvelle absence enregistrée',
                    ['replyTo' => [$absence->getPersonnel()?->getMailUniv()]]);
            }
            $this->myMailer->initEmail();
            // envoi en copie au responsable si l'option est activée
            if ($semestre->isOptMailAbsenceResp() && null !== $semestre->getOptDestMailAbsenceResp()) {
                $this->myMailer->initEmail();
                $this->myMailer->setTemplate('mails/absence_added_responsable.txt.twig',
                    ['absence' => $absence, 'matiere' => $matiere]);
                $this->myMailer->sendMessage(
                    $semestre->getOptDestMailAbsenceResp()->getMails(),
                    'Nouvelle absence enregistrée'
                );
            }
        }
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function onMailAddedJustificatif(JustificatifEvent $event): void
    {
        $absence = $event->getAbsenceJustificatif();

        if (null !== $absence->getSemestre() && true === $absence->getSemestre()->getOptMailAssistanteJustificatifAbsence()) {
            $diplome = $absence->getSemestre()->getDiplome();
            if (null !== $diplome && null !== $diplome->getAssistantDiplome()) {
                $this->myMailer->initEmail();
                $this->myMailer->setTemplate('mails/justificatif_absence_added_responsable.txt.twig',
                    ['absence' => $absence]);
                $this->myMailer->sendMessage(
                    $diplome->getAssistantDiplome()->getMails(),
                    'Nouveau justificatif d\'absence déposé'
                );
            }
        }
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function onMailDecisionRattrapage(RattrapageEvent $event): void
    {
        $rattrapage = $event->getRattrapage();
        $matiere = $this->typeMatiereManager->getMatiere($rattrapage->getIdMatiere(), $rattrapage->getTypeMatiere());
        if (null !== $rattrapage->getEtudiant() && null !== $matiere) {
            $this->myMailer->initEmail();
            if (Rattrapage::DEMANDE_ACCEPTEE === $rattrapage->getEtatDemande()) {
                $this->myMailer->setTemplate('mails/rattrapage_accepted.txt.twig',
                    ['rattrapage' => $rattrapage, 'matiere' => $matiere]);
                $this->myMailer->sendMessage($rattrapage->getEtudiant()->getMails(), 'Demande de rattrapage acceptée');
            } else {
                $this->myMailer->setTemplate('mails/rattrapage_refused.txt.twig',
                    ['rattrapage' => $rattrapage, 'matiere' => $matiere]);
                $this->myMailer->sendMessage($rattrapage->getEtudiant()->getMails(), 'Demande de rattrapage refusée');
            }
        }
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function onMailDecisionJustificatif(JustificatifEvent $event): void
    {
        $absenceJustificatif = $event->getAbsenceJustificatif();
        if (null !== $absenceJustificatif->getEtudiant()) {
            $this->myMailer->initEmail();
            if (AbsenceJustificatif::ACCEPTE === $absenceJustificatif->getEtat()) {
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
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
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

    public function onMailDemandeRattrapage(RattrapageEvent $event)
    {
        $rattrapage = $event->getRattrapage();
        $matiere = $this->typeMatiereManager->getMatiere($rattrapage->getIdMatiere(), $rattrapage->getTypeMatiere());
        if (null !== $rattrapage->getEtudiant() && null !== $matiere && $rattrapage->getSemestre() !== null) {
            $mails = [];
            if ($rattrapage->getPersonnel() !== null) {
                $mails[] = $rattrapage->getPersonnel()->getMailUniv();
            }

            if ($rattrapage->getSemestre()->getDiplome()?->getAssistantDiplome() !== null) {
                $mails[] = $rattrapage->getSemestre()->getDiplome()?->getAssistantDiplome()?->getMailUniv();
            }
            $this->myMailer->initEmail();

            $this->myMailer->setTemplate('mails/rattrapage_demande.html.twig',
                ['rattrapage' => $rattrapage, 'matiere' => $matiere]);
            $this->myMailer->sendMessage($mails, 'Nouvelle demande de rattrapage déposée');
        }
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function onMailAbsenceRemoved(AbsenceEvent $event): void
    {
        $absence = $event->getAbsence();
        $semestre = $absence->getSemestre();
        $matiere = $this->typeMatiereManager->getMatiere($absence->getIdMatiere(), $absence->getTypeMatiere());
        if (null !== $matiere && null !== $semestre) {
            if (null !== $absence->getEtudiant() && $semestre->isOptMailAbsenceEtudiant()) {
                $this->myMailer->initEmail();
                $this->myMailer->setTemplate('mails/absence_removed.txt.twig',
                    ['absence' => $absence, 'matiere' => $matiere]);
                $this->myMailer->sendMessage($absence->getEtudiant()->getMails(),
                    'Suppression d\'une absence enregistrée',
                    ['replyTo' => [$absence->getPersonnel()?->getMailUniv()]]);
            }

            if ($semestre->isOptMailAbsenceResp() && null !== $semestre->getOptDestMailAbsenceResp()) {
                $this->myMailer->initEmail();
                $this->myMailer->setTemplate('mails/absence_removed_responsable.txt.twig',
                    ['absence' => $absence, 'matiere' => $matiere]);
                $this->myMailer->sendMessage(
                    $semestre->getOptDestMailAbsenceResp()->getMails(),
                    'Suppression d\'une absence enregistrée'
                );
            }
        }
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function onMailNoteModificationResponsable(NoteEvent $event): void
    {
        $note = $event->getNote();

        if (null !== $note->getEvaluation()) {
            $semestre = $note->getEvaluation()->getSemestre();
            $matiere = $this->typeMatiereManager->getMatiere($note->getEvaluation()->getIdMatiere(),
                $note->getEvaluation()->getTypeMatiere());
            if (null !== $matiere &&
                null !== $semestre &&
                null !== $semestre->getOptDestMailModifNote()) {
                $this->myMailer->initEmail();
                $this->myMailer->setTemplate('mails/note_modification.txt.twig',
                    ['note' => $note, 'matiere' => $matiere]);
                $this->myMailer->sendMessage(
                    $semestre->getOptDestMailModifNote()->getMails(),
                    'Modification d\'une note'
                );
            }
        }
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function onMailNewTranscriptResponsable(EvaluationEvent $event): void
    {
        $evaluation = $event->getEvaluation();
        $semestre = $evaluation->getSemestre();
        $matiere = $this->typeMatiereManager->getMatiere($evaluation->getIdMatiere(), $evaluation->getTypeMatiere());
        if (null !== $matiere &&
            null !== $semestre &&
            null !== $semestre->getOptDestMailReleve()) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('mails/new_transcript.txt.twig',
                ['evaluation' => $evaluation, 'matiere' => $matiere]);
            $this->myMailer->sendMessage(
                $semestre->getOptDestMailReleve()->getMails(),
                'Nouveau relevé de note saisi'
            );
        }
    }
}
