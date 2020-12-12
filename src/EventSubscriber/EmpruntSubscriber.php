<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/EventSubscriber/EmpruntSubscriber.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2020 14:31

namespace App\EventSubscriber;

use App\Entity\Notification;
use App\Event\EmpruntEvent;
use App\Classes\Mail\MailerFromTwig;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Routing\RouterInterface;


class EmpruntSubscriber implements EventSubscriberInterface
{

    /** @var MailerFromTwig */
    protected $myMailer;

    /** @var EntityManagerInterface */
    private $entityManager;

    /** @var RouterInterface */
    private $router;

    /**
     * StageSubscriber constructor.
     *
     * @param EntityManagerInterface $entityManager
     * @param RouterInterface        $router
     * @param MailerFromTwig         $myMailer
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        RouterInterface $router,
        MailerFromTwig $myMailer
    ) {
        $this->entityManager = $entityManager;
        $this->router = $router;
        $this->myMailer = $myMailer;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            EmpruntEvent::CHGT_ETAT_EMPRUNT_DEMANDE => 'onChgtEmpruntDemande',
            EmpruntEvent::CHGT_ETAT_EMPRUNT_ACCEPTE => 'onChgtEmpruntAccepte',
            EmpruntEvent::CHGT_ETAT_EMPRUNT_REFUS   => 'onChgtEmpruntRefus',

        ];
    }


    /**
     * @param EmpruntEvent $event
     * @param              $codeEvent
     *
     */
    public function sendMail(EmpruntEvent $event, $codeEvent): void
    {
        $emprunt = $event->getEmprunt();

        //mail par défaut
        $this->myMailer->initEmail();
        $this->myMailer->setTemplate('mails/emprunt_' . $codeEvent . '.txt.twig',
            ['emprunt' => $emprunt]);
        $this->myMailer->sendMessage($emprunt->getEtudiant()->getMails(), $codeEvent);

        //copie au RP lors du dépôt par l'étudiant
        if ($codeEvent === EmpruntEvent::CHGT_ETAT_EMPRUNT_DEMANDE && $emprunt->getResponsable() !== null) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('mails/emprunt_' . $codeEvent . '_copie.txt.twig',
                ['emprunt' => $emprunt]);

            $this->myMailer->sendMessage($emprunt->getResponsable()->getMailUniv(), 'Formulaire de stage complété');
        }
    }

    /**
     * @param EmpruntEvent $event
     *
     */
    public function onChgtEmpruntDemande(EmpruntEvent $event): void
    {
        $this->sendMail($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_DEMANDE);
        $this->addNotification($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_DEMANDE);
    }

    private function addNotification(EmpruntEvent $event, $codeEvent): void
    {
        $emprunt = $event->getEmprunt();
        if ($emprunt->getEtudiant() !== null) {
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
        } elseif ($emprunt->getPersonnel() !== null) {
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

    /**
     * @param EmpruntEvent $event
     *
     */
    public function onChgtEmpruntAccepte(EmpruntEvent $event): void
    {
        $this->sendMail($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_ACCEPTE);
        $this->addNotification($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_ACCEPTE);
    }

    /**
     * @param EmpruntEvent $event
     *
     */
    public function onChgtEmpruntRefus(EmpruntEvent $event): void
    {
        $this->sendMail($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_REFUS);
        $this->addNotification($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_REFUS);
    }


}
