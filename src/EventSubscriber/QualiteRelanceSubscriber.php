<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/EventSubscriber/QualiteRelanceSubscriber.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/04/2021 10:04
 */

namespace App\EventSubscriber;

use App\Classes\Mail\MailerFromTwig;
use App\Event\QualiteRelanceEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Envoi un mail de bienvenue à chaque creation d'un utilisateur.
 */
class QualiteRelanceSubscriber implements EventSubscriberInterface
{
    private MailerFromTwig $mailer;

    /**
     * RegistrationNotifySubscriber constructor.
     */
    public function __construct(
        MailerFromTwig $mailer
    ) {
        $this->mailer = $mailer;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            QualiteRelanceEvent::SEND_RELANCE => 'onSendRelance',
            QualiteRelanceEvent::SEND_SYNTHESE => 'onSendSynthese',
        ];
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function onSendRelance(QualiteRelanceEvent $event): void
    {
        $etudiant = $event->getEtudiant();
        $questionnaire = $event->getQuestionnaireQualite();
        if (null !== $etudiant) {
            $titre = 'Evaluation semestre '.$questionnaire->getSemestre()->getLibelle().', '.$etudiant->getDiplome()->getDisplay();
            $rp = $etudiant->getSemestre()->getDiplome()->getResponsableDiplome();
            $this->mailer->initEmail();
            $this->mailer->setTemplate('mails/qualite/relance.html.twig', [
                'etudiant' => $etudiant,
                'questionnaire' => $questionnaire,
                'titre' => $titre,
            ]);

            $this->mailer->sendMessage($etudiant->getMails(), 'URGENT - RAPPEL : '.$titre,
                ['replyTo' => [$rp?->getMailUniv()]]);
        }
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function onSendSynthese(QualiteRelanceEvent $event): void
    {
        $etudiants = $event->getEtudiants();
        $questionnaire = $event->getQuestionnaireQualite();
        if (0 !== count($etudiants)) {
            $titre = '';
            $mails = [];
            if (null !== $questionnaire->getSemestre() && null !== $questionnaire->getSemestre()->getDiplome()) {
                if (null !== $questionnaire->getSemestre()->getDiplome()->getResponsableDiplome()) {
                    $mails[] = $questionnaire->getSemestre()->getDiplome()->getResponsableDiplome()->getMailUniv();
                    $titre = 'Evaluation semestre '.$questionnaire->getSemestre()->getLibelle().', '.$questionnaire->getSemestre()->getDiplome()->getDisplay();
                }
                if (null !== $questionnaire->getSemestre()->getDiplome()->getOptResponsableQualite()) {
                    $mails[] = $questionnaire->getSemestre()->getDiplome()->getOptResponsableQualite()->getMailUniv();
                }
            }

            $this->mailer->initEmail();
            $this->mailer->setTemplate('mails/qualite/synthese.html.twig', [
                'etudiants' => $etudiants,
                'questionnaire' => $questionnaire,
                'titre' => $titre,
            ]);

            $this->mailer->sendMessage($mails, 'Synthèse : Relance '.$titre);
        }
    }
}
