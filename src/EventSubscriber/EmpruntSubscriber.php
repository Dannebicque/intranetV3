<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/EventSubscriber/EmpruntSubscriber.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\EventSubscriber;

use App\Entity\Notification;
use App\Event\EmpruntEvent;
use App\MesClasses\Mail\MyMailer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Routing\RouterInterface;


class EmpruntSubscriber implements EventSubscriberInterface
{

    /** @var MyMailer */
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
     * @param MyMailer               $myMailer
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        RouterInterface $router,
        MyMailer $myMailer
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
     * @throws TransportExceptionInterface
     */
    public function sendMail(EmpruntEvent $event, $codeEvent): void
    {
        $emprunt = $event->getEmprunt();

        //mail par défaut
        $this->myMailer->setTemplate('mails/emprunt_' . $codeEvent . '.txt.twig',
            ['emprunt' => $emprunt]);
        $this->myMailer->sendMessage($emprunt->getEtudiant()->getMails(), $codeEvent);

        //copie au RP lors du dépôt par l'étudiant
        if ($codeEvent === EmpruntEvent::CHGT_ETAT_EMPRUNT_DEMANDE && $emprunt->getResponsable() !== null) {
            $this->myMailer->setTemplate('mails/emprunt_' . $codeEvent . '_copie.txt.twig',
                ['emprunt' => $emprunt]);

            $this->myMailer->sendMessage($emprunt->getResponsable()->getMailUniv(), 'Formulaire de stage complété');
        }
    }

    /**
     * @param EmpruntEvent $event
     *
     * @throws TransportExceptionInterface
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
     * @throws TransportExceptionInterface
     */
    public function onChgtEmpruntAccepte(EmpruntEvent $event): void
    {
        $this->sendMail($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_ACCEPTE);
        $this->addNotification($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_ACCEPTE);
    }

    /**
     * @param EmpruntEvent $event
     *
     * @throws TransportExceptionInterface
     */
    public function onChgtEmpruntRefus(EmpruntEvent $event): void
    {
        $this->sendMail($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_REFUS);
        $this->addNotification($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_REFUS);
    }


}
