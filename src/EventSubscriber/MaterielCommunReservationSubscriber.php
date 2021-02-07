<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/EventSubscriber/MaterielCommunReservationSubscriber.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\EventSubscriber;

use App\Classes\Mail\MailerFromTwig;
use App\Event\MaterielCommunReservationEvent;
use App\Repository\MaterielCommunPretRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Envoi un mail de bienvenue à chaque creation d'un utilisateur.
 */
class MaterielCommunReservationSubscriber implements EventSubscriberInterface
{
    private EntityManagerInterface $entityManager;

    private MaterielCommunPretRepository $materielCommunPretRepository;

    private MailerFromTwig $myMailer;

    /**
     * RegistrationNotifySubscriber constructor.
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        MaterielCommunPretRepository $materielCommunPretRepository,
        MailerFromTwig $myMailer
    ) {
        $this->entityManager = $entityManager;
        $this->materielCommunPretRepository = $materielCommunPretRepository;
        $this->myMailer = $myMailer;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            MaterielCommunReservationEvent::ADDED   => 'onMaterielCommunReservationAdded',
            MaterielCommunReservationEvent::REMOVED => 'onMaterielCommunReservationRemoved',
        ];
    }

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
                    'replyTo' => null !== $reservation->getPersonnel() ? $reservation->getPersonnel()->getMailUniv() : null,
                    'cc'      => null !== $reservation->getPersonnel() ? $reservation->getPersonnel()->getMails() : null,
                ]);
        }
    }

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
