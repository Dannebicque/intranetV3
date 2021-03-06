<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/EventSubscriber/ProjetSubscriber.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\EventSubscriber;

use App\Classes\Stage\MailerStage;
use App\Entity\Notification;
use App\Event\ProjetEvent;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Routing\RouterInterface;

class ProjetSubscriber implements EventSubscriberInterface
{
    protected MailerStage $myMailer;

    private EntityManagerInterface $entityManager;

    private RouterInterface $router;

    /**
     * StageSubscriber constructor.
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        RouterInterface $router,
        MailerStage $myMailer
    ) {
        $this->entityManager = $entityManager;
        $this->router = $router;
        $this->myMailer = $myMailer;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            ProjetEvent::CHGT_ETAT_PROJET_AUTORISE => 'onChgtEtatProjetAutorise',
            ProjetEvent::CHGT_ETAT_PROJET_DEPOSE   => 'onChgtEtatProjetDepose',
            ProjetEvent::CHGT_ETAT_PROJET_VALIDE   => 'onChgtEtatProjetValide',
            ProjetEvent::CHGT_ETAT_PROJET_IMPRIME  => 'onChgtEtatProjetImprime',
        ];
    }

    public function onChgtEtatProjetAutorise(ProjetEvent $event): void
    {
        $this->sendMail($event, ProjetEvent::CHGT_ETAT_PROJET_AUTORISE);
        $this->addNotification($event, ProjetEvent::CHGT_ETAT_PROJET_AUTORISE);
    }

    /**
     * @param $codeEvent
     */
    public function sendMail(ProjetEvent $event, $codeEvent): void
    {
        $projetEtudiant = $event->getProjetEtudiant();

        //table avec les templates des mails et le sujet, a récupérer en fonction du codeEvent et de la période.
        $mailsEtudiants = [];

        foreach ($projetEtudiant->getEtudiants() as $etudiant) {
            $mailsEtudiants[] = $etudiant->getMailUniv();
            $mailsEtudiants[] = $etudiant->getMailPerso();
        }

        $this->myMailer->setTemplate('mails/projets/projet_' . $codeEvent . '.txt.twig',
            ['projetEtudiant' => $projetEtudiant],
            $mailsEtudiants,
            $codeEvent);

        $destinataires = [];
        foreach ($projetEtudiant->getProjetPeriode()->getResponsables() as $destinataire) {
            $destinataires[] = $destinataire->getMailUniv();
        }

        //sinon mail par défaut
        $this->myMailer->setTemplate('mails/projets/projet_assistant_' . $codeEvent . '.txt.twig',
            ['projetEtudiant' => $projetEtudiant],
            $destinataires,
            'copie ' . $codeEvent);
    }

    private function addNotification(ProjetEvent $event, $codeEvent): void
    {
        $projetEtudiant = $event->getProjetEtudiant();
        foreach ($projetEtudiant->getEtudiants() as $etudiant) {
            $notif = new Notification();
            $notif->setEtudiant($etudiant);
            $notif->setTypeUser(Notification::ETUDIANT);
            $notif->setType($codeEvent);
            $notif->setUrl($this->router->generate(
                'administration_projet_etudiant_edit',
                ['id' => $projetEtudiant->getId()]
            ));
            $this->entityManager->persist($notif);
        }
        $this->entityManager->flush();
    }

    public function onChgtEtatProjetDepose(ProjetEvent $event): void
    {
        $projetEtudiant = $event->getProjetEtudiant();
        if (null !== $projetEtudiant->getProjetPeriode()) {
            foreach ($projetEtudiant->getProjetPeriode()->getResponsables() as $personnel) {
                $notif = new Notification();
                $notif->setPersonnel($personnel);
                $notif->setTypeUser(Notification::PERSONNEL);
                $notif->setType(ProjetEvent::CHGT_ETAT_PROJET_DEPOSE);
                $notif->setUrl($this->router->generate(
                    'administration_projet_etudiant_edit',
                    ['id' => $projetEtudiant->getId()]
                ));
                $this->entityManager->persist($notif);
            }
            $this->entityManager->flush();
        }
        $this->sendMail($event, ProjetEvent::CHGT_ETAT_PROJET_DEPOSE);
        $this->addNotification($event, ProjetEvent::CHGT_ETAT_PROJET_DEPOSE);
    }

    public function onChgtEtatProjetValide(ProjetEvent $event): void
    {
        $this->addNotification($event, ProjetEvent::CHGT_ETAT_PROJET_VALIDE);
        $this->sendMail($event, ProjetEvent::CHGT_ETAT_PROJET_VALIDE);
    }

    public function onChgtEtatProjetImprime(ProjetEvent $event): void
    {
        $this->addNotification($event, ProjetEvent::CHGT_ETAT_PROJET_IMPRIME);
        $this->sendMail($event, ProjetEvent::CHGT_ETAT_PROJET_IMPRIME);
    }
}
