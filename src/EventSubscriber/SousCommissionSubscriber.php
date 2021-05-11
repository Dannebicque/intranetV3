<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/EventSubscriber/SousCommissionSubscriber.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

namespace App\EventSubscriber;

use App\Classes\Mail\MailerFromTwig;
use App\Entity\Notification;
use App\Entity\Scolarite;
use App\Event\SousCommissionEvent;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Routing\RouterInterface;

class SousCommissionSubscriber implements EventSubscriberInterface
{
    protected MailerFromTwig $myMailer;

    private RouterInterface $router;

    private EntityManagerInterface $entityManager;

    /**
     * StageSubscriber constructor.
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
            SousCommissionEvent::PUBLISHED => 'onSousCommissionPubliee',
        ];
    }

    public function onSousCommissionPubliee(SousCommissionEvent $event): void
    {
        $ssComm = $event->getScolaritePromo();
        foreach ($ssComm->getScolarites() as $scolarite) {
            $this->addNotification($scolarite, SousCommissionEvent::PUBLISHED);
            $this->sendMail($scolarite, SousCommissionEvent::PUBLISHED);
        }

        $this->entityManager->flush();
    }

    private function addNotification(Scolarite $scolarite, $codeEvent): void
    {
        $notif = new Notification();
        $notif->setEtudiant($scolarite->getEtudiant());
        $notif->setTypeUser(Notification::ETUDIANT);
        $notif->setType($codeEvent);
        $notif->setUrl($this->router->generate(
            'user_profil',
            ['onglet' => 'scolarite', 'type' => 'etudiant', 'slug' => $scolarite->getEtudiant()->getSlug()]
        ));
        $this->entityManager->persist($notif);
    }

    /**
     *
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function sendMail(Scolarite $scolarite, $codeEvent): void
    {
        $this->myMailer->initEmail();
        $this->myMailer->
        //mail par défaut
        $this->myMailer->setTemplate('mails/sousCommission_' . $codeEvent . '.txt.twig',
            ['scolarite' => $scolarite]);
        $this->myMailer->sendMessage($scolarite->getEtudiant()->getMails(),
            $codeEvent);
    }
}
