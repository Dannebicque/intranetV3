<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/EventSubscriber/ProjetSubscriber.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\EventSubscriber;

use App\Classes\Stage\MailerStage;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Notification;
use App\Event\ProjetEvent;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Routing\RouterInterface;

class ProjetSubscriber implements EventSubscriberInterface
{
    /**
     * StageSubscriber constructor.
     */
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly RouterInterface $router,
        protected MailerStage $myMailer,
        private readonly RequestStack $requestStack
    )
    {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            ProjetEvent::CHGT_ETAT_PROJET_AUTORISE => 'onChgtEtatProjetAutorise',
            ProjetEvent::CHGT_ETAT_PROJET_DEPOSE => 'onChgtEtatProjetDepose',
            ProjetEvent::CHGT_ETAT_PROJET_VALIDE => 'onChgtEtatProjetValide',
            ProjetEvent::CHGT_ETAT_PROJET_IMPRIME => 'onChgtEtatProjetImprime',
        ];
    }

    public function onChgtEtatProjetAutorise(ProjetEvent $event): void
    {
        $this->sendMail($event, ProjetEvent::CHGT_ETAT_PROJET_AUTORISE);
        $this->addNotification($event, ProjetEvent::CHGT_ETAT_PROJET_AUTORISE);
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function sendMail(ProjetEvent $event, ?string $codeEvent): void
    {
        $projetEtudiant = $event->getProjetEtudiant();
        $destinataires = [];
        foreach ($projetEtudiant->getProjetPeriode()?->getResponsables() as $destinataire) {
            $destinataires[] = $destinataire->getMailUniv();
        }
        // table avec les templates des mails et le sujet, a récupérer en fonction du codeEvent et de la période.
        $mailsEtudiants = [];

        foreach ($projetEtudiant->getEtudiants() as $etudiant) {
            $mailsEtudiants[] = $etudiant->getMailUniv();
            $mailsEtudiants[] = $etudiant->getMailPerso();
        }

        // Filter out null or empty email addresses
        $mailsEtudiants = array_filter($mailsEtudiants, function($email) {
            return $email !== null && trim($email) !== '';
        });

        $destinataires = array_filter($destinataires, function($email) {
            return $email !== null && trim($email) !== '';
        });

        // Only send emails if there are valid recipients
        if (!empty($mailsEtudiants)) {
            $this->myMailer->setTemplate('mails/projets/projet_'.$codeEvent.'.txt.twig',
                ['projetEtudiant' => $projetEtudiant],
                $mailsEtudiants,
                $codeEvent,
                ['replyTo' => $destinataires]);
        } else {
            // if no students, a flash message is added
            $this->addToast(
                Constantes::FLASHBAG_INFO,
                'Aucune adresse mail d\'étudiant disponible pour l\'envoi du mail.'
            );
        }

        if (!empty($destinataires)) {
            $this->myMailer->setTemplate('mails/projets/projet_assistant_'.$codeEvent.'.txt.twig',
                ['projetEtudiant' => $projetEtudiant],
                $destinataires,
                'copie '.$codeEvent,
                ['replyTo' => $destinataires]);
        } else {
            // if no assistants, a flash message is added
            $this->addToast(
                Constantes::FLASHBAG_INFO,
                'Aucune adresse mail de responsable disponible pour l\'envoi du mail.'
            );
        }
    }

    private function addToast(string $type, string $text, ?string $title = null): void
    {
        $this->requestStack->getSession()->getFlashBag()->add(
            BaseController::BAG_TOAST,
            [
                'type' => $type,
                'text' => $text,
                'title' => $title ?? $type,
            ]
        );
    }

    private function addNotification(ProjetEvent $event, string $codeEvent): void
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
