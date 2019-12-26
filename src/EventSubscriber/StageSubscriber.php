<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/EventSubscriber/StageSubscriber.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\EventSubscriber;

use App\Entity\Notification;
use App\Entity\StageMailTemplate;
use App\Event\StageEvent;
use App\MesClasses\Mail\MyMailer;
use App\Repository\StageMailTemplateRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Routing\RouterInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;


class StageSubscriber implements EventSubscriberInterface
{

    /** @var MyMailer */
    protected $myMailer;

    /** @var EntityManagerInterface */
    private $entityManager;

    /** @var RouterInterface */
    private $router;

    /** @var StageMailTemplateRepository */
    private $stageMailTemplateRepository;

    /**
     * StageSubscriber constructor.
     *
     * @param EntityManagerInterface      $entityManager
     * @param RouterInterface             $router
     * @param MyMailer                    $myMailer
     * @param StageMailTemplateRepository $stageMailTemplateRepository
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        RouterInterface $router,
        MyMailer $myMailer,
        StageMailTemplateRepository $stageMailTemplateRepository
    ) {
        $this->entityManager = $entityManager;
        $this->stageMailTemplateRepository = $stageMailTemplateRepository;
        $this->router = $router;
        $this->myMailer = $myMailer;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            StageEvent::CHGT_ETAT_STAGE_AUTORISE           => 'onChgtEtatStageAutorise',
            StageEvent::CHGT_ETAT_STAGE_DEPOSE             => 'onChgtEtatStageDepose',
            StageEvent::CHGT_ETAT_STAGE_VALIDE             => 'onChgtEtatStageValide',
            StageEvent::CHGT_ETAT_STAGE_IMPRIME            => 'onChgtEtatStageImprime',
            StageEvent::CHGT_ETAT_STAGE_CONVENTION_ENVOYEE => 'onChgtEtatStageConventionEnvoyee',
            StageEvent::CHGT_ETAT_CONVENTION_RECUE         => 'onChgtEtatStageConventionRecue',
        ];
    }

    public function onChgtEtatStageAutorise(StageEvent $event): void
    {
        $this->sendMail($event, StageEvent::CHGT_ETAT_STAGE_AUTORISE);
        $this->addNotification($event, StageEvent::CHGT_ETAT_STAGE_AUTORISE);
    }

    private function addNotification(StageEvent $event, $codeEvent): void
    {
        $stageEtudiant = $event->getStageEtudiant();
        if ($stageEtudiant->getEtudiant() !== null) {
            $notif = new Notification();
            $notif->setEtudiant($stageEtudiant->getEtudiant());
            $notif->setTypeUser(Notification::ETUDIANT);
            $notif->setType($codeEvent);
            $notif->setUrl($this->router->generate(
                'application_etudiant_stage_detail',
                ['id' => $stageEtudiant->getId()]
            ));
            $this->entityManager->persist($notif);
            $this->entityManager->flush();
        }
    }

    public function onChgtEtatStageConventionEnvoyee(StageEvent $event): void
    {
        $this->addNotification($event, StageEvent::CHGT_ETAT_STAGE_CONVENTION_ENVOYEE);
        $this->sendMail($event, StageEvent::CHGT_ETAT_STAGE_CONVENTION_ENVOYEE);

    }

    public function onChgtEtatStageConventionRecue(StageEvent $event): void
    {
        $this->addNotification($event, StageEvent::CHGT_ETAT_CONVENTION_RECUE);
        $this->sendMail($event, StageEvent::CHGT_ETAT_CONVENTION_RECUE);

    }

    public function onChgtEtatStageDepose(StageEvent $event): void
    {
        $stageEtudiant = $event->getStageEtudiant();
        if ($stageEtudiant->getStagePeriode() !== null) {
            foreach ($stageEtudiant->getStagePeriode()->getResponsables() as $personnel) {
                $notif = new Notification();
                $notif->setPersonnel($personnel);
                $notif->setTypeUser(Notification::PERSONNEL);
                $notif->setType(StageEvent::CHGT_ETAT_STAGE_DEPOSE);
                $notif->setUrl($this->router->generate(
                    'application_etudiant_stage_detail',
                    ['id' => $stageEtudiant->getId()]
                ));
                $this->entityManager->persist($notif);
            }
            $this->entityManager->flush();
        }
        $this->sendMail($event, StageEvent::CHGT_ETAT_STAGE_DEPOSE);
        $this->addNotification($event, StageEvent::CHGT_ETAT_STAGE_DEPOSE);
    }

    public function onChgtEtatStageValide(StageEvent $event): void
    {
        $this->addNotification($event, StageEvent::CHGT_ETAT_STAGE_VALIDE);
        $this->sendMail($event, StageEvent::CHGT_ETAT_STAGE_VALIDE);
    }

    public function onChgtEtatStageImprime(StageEvent $event): void
    {
        $this->addNotification($event, StageEvent::CHGT_ETAT_STAGE_IMPRIME);
        $this->sendMail($event, StageEvent::CHGT_ETAT_STAGE_IMPRIME);

    }


    /**
     * @param StageEvent   $event
     * @param              $codeEvent
     *
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws TransportExceptionInterface
     */
    public function sendMail(StageEvent $event, $codeEvent): void
    {
        $stageEtudiant = $event->getStageEtudiant();

        //table avec les templates des mails et le sujet, a récupérer en fonction du codeEvent et de la période.
        /** @var StageMailTemplate $mailTemplate */
        $mailTemplate = $this->stageMailTemplateRepository->findEventPeriode(
            $codeEvent,
            $stageEtudiant->getStagePeriode()
        );

        if ($mailTemplate !== null && $mailTemplate->getTwigTemplate() !== null && $stageEtudiant->getEtudiant() !== null) {
            $this->myMailer->setTemplateFromDatabase($mailTemplate->getTwigTemplate()->getName(),
                ['stageEtudiant' => $stageEtudiant]);
            $this->myMailer->sendMessage($stageEtudiant->getEtudiant()->getMails(), $mailTemplate->getSubject());
        } else {
            //mail par défaut
            $this->myMailer->setTemplate('mails/stage_' . $codeEvent . '.txt.twig',
                ['stageEtudiant' => $stageEtudiant]);
            $this->myMailer->sendMessage($stageEtudiant->getEtudiant()->getMails(), $codeEvent);

        }

        //mail en copie à l'assistante
        if ($stageEtudiant->getStagePeriode() !== null && $stageEtudiant->getStagePeriode()->getCopieAssistant() && $stageEtudiant->getStagePeriode()->getMailAssistant() !== null) {
            //selon un modèle spécifique
            $mailTemplate = $this->stageMailTemplateRepository->findEventPeriode(
                $codeEvent . '_COPIE',
                $stageEtudiant->getStagePeriode()
            );

            if ($mailTemplate !== null && $mailTemplate->getTwigTemplate() && $stageEtudiant->getEtudiant() !== null) {
                $this->myMailer->setTemplateFromDatabase($mailTemplate->getTwigTemplate()->getName(),
                    ['stageEtudiant' => $stageEtudiant]);
                $this->myMailer->sendMessage(
                    $stageEtudiant->getStagePeriode()->getMailAssistant(),
                    $mailTemplate->getSubject()
                );
            } else {
                //sinon mail par défaut
                $this->myMailer->setTemplate('mails/stage_assistant_' . $codeEvent . '.txt.twig',
                    ['stageEtudiant' => $stageEtudiant]);
                $this->myMailer->sendMessage($stageEtudiant->getStagePeriode()->getMailAssistant(),
                    'copie ' . $codeEvent);
            }
        }

        //copie au RP lors du dépôt par l'étudiant
        if ($codeEvent === StageEvent::CHGT_ETAT_STAGE_DEPOSE) {
            $this->myMailer->setTemplate('mails/stage_copie_depot_rp.txt.twig',
                ['stageEtudiant' => $stageEtudiant]);
            $tMails = [];
            foreach ($stageEtudiant->getStagePeriode()->getResponsables() as $resp) {
                $tMails[] = $resp->getMailUniv();
            }
            $this->myMailer->sendMessage($tMails, 'Formulaire de stage complété');
        }
    }
}
