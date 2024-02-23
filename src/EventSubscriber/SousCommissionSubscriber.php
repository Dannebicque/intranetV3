<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/EventSubscriber/SousCommissionSubscriber.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\EventSubscriber;

use App\Classes\Mail\MailerFromTwig;
use App\Entity\Notification;
use App\Entity\Scolarite;
use App\Event\SousCommissionEvent;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Routing\RouterInterface;

class SousCommissionSubscriber implements EventSubscriberInterface
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
            SousCommissionEvent::PUBLISHED => 'onSousCommissionPubliee',
        ];
    }

    public function onSousCommissionPubliee(SousCommissionEvent $event): void
    {
        $ssComm = $event->getScolaritePromo();
        foreach ($ssComm->getScolarites() as $scolarite) {
            $this->addNotification($scolarite, SousCommissionEvent::PUBLISHED);
            // $this->sendMail($scolarite, SousCommissionEvent::PUBLISHED);
        }

        $this->entityManager->flush();
    }

    private function addNotification(Scolarite $scolarite, string $codeEvent): void
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
     * @throws TransportExceptionInterface
     */
    public function sendMail(Scolarite $scolarite, string $codeEvent): void
    {
        $this->myMailer->initEmail();
        // mail par défaut
        $this->myMailer->setTemplate('mails/sousCommission_'.$codeEvent.'.txt.twig',
            ['scolarite' => $scolarite,
            'etudiant' => $scolarite->getEtudiant(), ]);
        $this->myMailer->sendMessage($scolarite->getEtudiant()->getMails(),
            $codeEvent);
    }
}
