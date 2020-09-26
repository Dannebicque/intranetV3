<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/EventSubscriber/MaterielCommunReservationSubscriber.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/09/2020 08:39

// App\EventSubscriber\RegistrationNotifySubscriber.php
namespace App\EventSubscriber;

use App\Classes\Mail\MailerFromTwig;
use App\Event\MaterielCommunReservationEvent;
use App\Repository\MaterielCommunPretRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Envoi un mail de bienvenue à chaque creation d'un utilisateur
 *
 */
class MaterielCommunReservationSubscriber implements EventSubscriberInterface
{
    private EntityManagerInterface $entityManager;

    private MaterielCommunPretRepository $materielCommunPretRepository;
    /**
     * @var MailerFromTwig
     */
    private MailerFromTwig $myMailer;


    /**
     * RegistrationNotifySubscriber constructor.
     *
     * @param EntityManagerInterface       $entityManager
     * @param MaterielCommunPretRepository $materielCommunPretRepository
     * @param MailerFromTwig               $myMailer
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


    /**
     * @return array
     */
    public static function getSubscribedEvents(): array
    {
        return [
            MaterielCommunReservationEvent::ADDED   => 'onMaterielCommunReservationAdded',
            MaterielCommunReservationEvent::REMOVED => 'onMaterielCommunReservationRemoved'
        ];
    }

    public function onMaterielCommunReservationAdded(MaterielCommunReservationEvent $event): void
    {
        $reservation = $event->getReservationMaterielCommun();

        if ($reservation->getMaterielCommun() !== null && $reservation->getMaterielCommun()->getContact() !== null) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('mails/materielCommunReservation/nouvelleDemande.txt.twig',
                ['reservation' => $reservation]);
            $this->myMailer->sendMessage($reservation->getMaterielCommun()->getContact()->getMails(),
                'Nouvelle demande de matériel commun',
                [
                    'replyTo' => $reservation->getPersonnel() !== null ? $reservation->getPersonnel()->getMailUniv() : null,
                    'cc'      => $reservation->getPersonnel() !== null ? $reservation->getPersonnel()->getMails() : null
                ]);
        }
    }

    public function onMaterielCommunReservationRemoved(MaterielCommunReservationEvent $event): void
    {
        $reservation = $event->getReservationMaterielCommun();

        if ($reservation->getMaterielCommun() !== null && $reservation->getMaterielCommun()->getContact() !== null) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('mails/materielCommunReservation/annuleDemande.txt.twig',
                ['reservation' => $reservation]);
            $this->myMailer->sendMessage($reservation->getMaterielCommun()->getContact()->getMails(),
                'Demande de matériel commun annulée');
        }
    }
}
