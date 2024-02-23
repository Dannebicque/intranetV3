<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/EventSubscriber/EmpruntSubscriber.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\EventSubscriber;

use App\Classes\Mail\MailerFromTwig;
use App\Entity\Notification;
use App\Event\EmpruntEvent;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Routing\RouterInterface;

class EmpruntSubscriber implements EventSubscriberInterface
{
    /**
     * StageSubscriber constructor.
     */
    public function __construct(private readonly EntityManagerInterface $entityManager, private readonly RouterInterface $router, protected MailerFromTwig $myMailer)
    {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            EmpruntEvent::CHGT_ETAT_EMPRUNT_DEMANDE => 'onChgtEmpruntDemande',
            EmpruntEvent::CHGT_ETAT_EMPRUNT_ACCEPTE => 'onChgtEmpruntAccepte',
            EmpruntEvent::CHGT_ETAT_EMPRUNT_REFUS => 'onChgtEmpruntRefus',
        ];
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function sendMail(EmpruntEvent $event, $codeEvent): void
    {
        $emprunt = $event->getEmprunt();

        // mail par défaut
        $this->myMailer->initEmail();
        $this->myMailer->setTemplate('mails/emprunt_'.$codeEvent.'.txt.twig',
            ['emprunt' => $emprunt]);
        $this->myMailer->sendMessage($emprunt->getEtudiant()->getMails(), $codeEvent);

        // copie au RP lors du dépôt par l'étudiant
        if (EmpruntEvent::CHGT_ETAT_EMPRUNT_DEMANDE === $codeEvent && null !== $emprunt->getResponsable()) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('mails/emprunt_'.$codeEvent.'_copie.txt.twig',
                ['emprunt' => $emprunt]);

            $this->myMailer->sendMessage($emprunt->getResponsable()->getMailUniv(), 'Formulaire de stage complété');
        }
    }

    public function onChgtEmpruntDemande(EmpruntEvent $event): void
    {
        $this->sendMail($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_DEMANDE);
        $this->addNotification($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_DEMANDE);
    }

    private function addNotification(EmpruntEvent $event, $codeEvent): void
    {
        $emprunt = $event->getEmprunt();
        if (null !== $emprunt->getEtudiant()) {
            $notif = new Notification();
            $notif->setEtudiant($emprunt->getEtudiant());
            $notif->setTypeUser(Notification::ETUDIANT);
            $notif->setType($codeEvent);
            $notif->setUrl($this->router->generate(
                'application_etudiant_emprunt_detail',
                ['emprunt' => $emprunt->getUuidString()]
            ));
            $this->entityManager->persist($notif);
            $this->entityManager->flush();
        } elseif (null !== $emprunt->getPersonnel()) {
            $notif = new Notification();
            $notif->setEtudiant($emprunt->getPersonnel());
            $notif->setTypeUser(Notification::PERSONNEL);
            $notif->setType($codeEvent);
            $notif->setUrl($this->router->generate(
                'application_personnel_emprunt_detail',
                ['emprunt' => $emprunt->getUuidString()]
            ));
            $this->entityManager->persist($notif);
            $this->entityManager->flush();
        }
    }

    public function onChgtEmpruntAccepte(EmpruntEvent $event): void
    {
        $this->sendMail($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_ACCEPTE);
        $this->addNotification($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_ACCEPTE);
    }

    public function onChgtEmpruntRefus(EmpruntEvent $event): void
    {
        $this->sendMail($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_REFUS);
        $this->addNotification($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_REFUS);
    }
}
