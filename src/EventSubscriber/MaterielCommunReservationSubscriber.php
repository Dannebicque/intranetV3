<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/EventSubscriber/MaterielCommunReservationSubscriber.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\EventSubscriber;

use App\Classes\Mail\MailerFromTwig;
use App\Event\MaterielCommunReservationEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;

/**
 * Envoi un mail de bienvenue à chaque creation d'un utilisateur.
 */
readonly class MaterielCommunReservationSubscriber implements EventSubscriberInterface
{
    /**
     * RegistrationNotifySubscriber constructor.
     */
    public function __construct(private MailerFromTwig $myMailer)
    {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            MaterielCommunReservationEvent::ADDED => 'onMaterielCommunReservationAdded',
            MaterielCommunReservationEvent::REMOVED => 'onMaterielCommunReservationRemoved',
        ];
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function onMaterielCommunReservationAdded(MaterielCommunReservationEvent $event): void
    {
        $reservation = $event->getReservationMaterielCommun();

        if (null !== $reservation->getMaterielCommun() && null !== $reservation->getMaterielCommun()->getContact()) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('mails/materielCommunReservation/nouvelleDemande.txt.twig',
                ['reservation' => $reservation]);
            $this->myMailer->sendMessage($reservation->getMaterielCommun()->getContact()->getMails(),
                'Nouvelle demande de matériel commun',
                [
                    'replyTo' => $reservation->getPersonnel()?->getMailUniv(),
                    'cc' => $reservation->getPersonnel()?->getMails(),
                ]);
        }
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function onMaterielCommunReservationRemoved(MaterielCommunReservationEvent $event): void
    {
        $reservation = $event->getReservationMaterielCommun();

        if (null !== $reservation->getMaterielCommun() && null !== $reservation->getMaterielCommun()->getContact()) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('mails/materielCommunReservation/annuleDemande.txt.twig',
                ['reservation' => $reservation]);
            $this->myMailer->sendMessage($reservation->getMaterielCommun()->getContact()->getMails(),
                'Demande de matériel commun annulée');
        }
    }
}
