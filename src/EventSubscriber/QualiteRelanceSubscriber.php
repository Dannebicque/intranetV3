<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/EventSubscriber/QualiteRelanceSubscriber.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 17/12/2022 09:21
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
    /**
     * RegistrationNotifySubscriber constructor.
     */
    public function __construct(private readonly MailerFromTwig $mailer)
    {
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
        $user = $event->getUser();
        $questionnaire = $event->getQuestionnaireQualite();
        if (null !== $user) {
            $titre = '[Questionnaire Qualite] ' . $questionnaire->getLibelle();
            $this->mailer->initEmail();
            $this->mailer->setTemplate('components/questionnaire/mails/relance.html.twig', [
                'user' => $user,
                'questionnaire' => $questionnaire,
                'titre' => $titre,
            ]);

            $this->mailer->sendMessage([$user->getEmail()], 'URGENT - RELANCE : ' . $titre,
                ['replyTo' => ['maud.briet@univ-reims.fr']]); //todo: modifier...
        }
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function onSendSynthese(QualiteRelanceEvent $event): void
    {
        $etudiants = $event->getDestinataire();
        $questionnaire = $event->getQuestionnaireQualite();
        if (0 !== count($etudiants)) {
            $titre = '';
            $mails = [];
            if (null !== $questionnaire->getSemestre() && null !== $questionnaire->getSemestre()->getDiplome()) {
                if (null !== $questionnaire->getSemestre()->getDiplome()->getResponsableDiplome()) {
                    $mails[] = $questionnaire->getSemestre()->getDiplome()->getResponsableDiplome()->getMailUniv();
                    $mails[] = $questionnaire->getSemestre()->getDiplome()->getAssistantDiplome()?->getMailUniv();
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
