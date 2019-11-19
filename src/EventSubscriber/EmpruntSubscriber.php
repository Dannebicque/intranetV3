<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/EventSubscriber/EmpruntSubscriber.php
// @author     David Annebicque
// @project intranetv3
// @date 19/11/2019 07:35
// @lastUpdate 19/11/2019 07:33

namespace App\EventSubscriber;

use App\Entity\Notification;
use App\Entity\StageEtudiant;
use App\Events;
use App\MesClasses\Mail\MyMailer;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Symfony\Component\Routing\RouterInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;


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
            Events::MAIL_CHGT_ETAT_EMPRUNT_DEMANDE => 'onMailChgtEmpruntDemande',
            Events::MAIL_CHGT_ETAT_EMPRUNT_REFUS   => 'onMailChgtEmpruntRefus',
            Events::MAIL_CHGT_ETAT_EMPRUNT_ACCEPTE => 'onMailChgtEmpruntAccepte',

            Events::CHGT_ETAT_EMPRUNT_DEMANDE => 'onChgtEmpruntDemande',
            Events::CHGT_ETAT_EMPRUNT_ACCEPTE => 'onChgtEmpruntAccepte',
            Events::CHGT_ETAT_EMPRUNT_REFUS   => 'onChgtEmpruntRefus',

        ];
    }

    /**
     * @param GenericEvent $event
     *
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function onMailChgtEmpruntDemande(GenericEvent $event): void
    {
        $this->sendMail($event, Events::MAIL_CHGT_ETAT_EMPRUNT_DEMANDE);
    }

    /**
     * @param GenericEvent $event
     * @param              $codeEvent
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function sendMail(GenericEvent $event, $codeEvent): void
    {
        /** @var StageEtudiant $stageEtudiant */
        $emprunt = $event->getSubject();

        //mail par défaut
        $this->myMailer->setTemplate('mails/emprunt_' . $codeEvent . '.txt.twig',
            ['emprunt' => $emprunt]);
        $this->myMailer->sendMessage($emprunt->getEtudiant()->getMails(), $codeEvent);

        //copie au RP lors du dépôt par l'étudiant
        if ($codeEvent === Events::MAIL_CHGT_ETAT_EMPRUNT_DEMANDE) {
            $this->myMailer->setTemplate('mails/emprunt_' . $codeEvent . '_copie.txt.twig',
                ['emprunt' => $emprunt]);
            $this->myMailer->sendMessage($emprunt->getResponsable()->getMails(), 'Formulaire de stage complété');
        }
    }

    /**
     * @param GenericEvent $event
     *
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function onMailChgtEmpruntRefus(GenericEvent $event): void
    {
        $this->sendMail($event, Events::MAIL_CHGT_ETAT_EMPRUNT_REFUS);
    }

    /**
     * @param GenericEvent $event
     *
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function onMailChgtEmpruntAccepte(GenericEvent $event): void
    {
        $this->sendMail($event, Events::MAIL_CHGT_ETAT_EMPRUNT_ACCEPTE);
    }

    public function onChgtEmpruntDemande(GenericEvent $event): void
    {
        $this->addNotification($event, Events::CHGT_ETAT_EMPRUNT_DEMANDE);
    }

    private function addNotification(GenericEvent $event, $codeEvent): void
    {
        /** @var StageEtudiant $stageEtudiant */
        $emprunt = $event->getSubject();
        if ($emprunt->getEtudiant() !== null) {
            $notif = new Notification();
            $notif->setEtudiant($emprunt->getEtudiant());
            $notif->setTypeUser(Notification::ETUDIANT);
            $notif->setType($codeEvent);
            $notif->setUrl($this->router->generate(
                'application_etudiant_emprunt_detail',
                ['id' => $emprunt->getId()]
            ));
            $this->entityManager->persist($notif);
            $this->entityManager->flush();
        }

        if ($codeEvent === Events::MAIL_CHGT_ETAT_EMPRUNT_DEMANDE) {
            $notif = new Notification();
            $notif->setPersonnel($emprunt->getResponsable());
            $notif->setTypeUser(Notification::PERSONNEL);
            $notif->setType($codeEvent);
            $notif->setUrl($this->router->generate(
                'application_personnel_emprunt_detail',
                ['id' => $emprunt->getId()]
            ));
            $this->entityManager->persist($notif);
            $this->entityManager->flush();
        }
    }

    public function onChgtEmpruntAccepte(GenericEvent $event): void
    {
        $this->addNotification($event, Events::CHGT_ETAT_EMPRUNT_ACCEPTE);
    }

    public function onChgtEmpruntRefus(GenericEvent $event): void
    {
        $this->addNotification($event, Events::CHGT_ETAT_EMPRUNT_REFUS);
    }


}
