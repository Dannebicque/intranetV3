<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/EventSubscriber/StageSubscriber.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/04/2021 18:46
 */

namespace App\EventSubscriber;

use App\Classes\Stage\MailerStage;
use App\Entity\Notification;
use App\Entity\StageMailTemplate;
use App\Event\StageEvent;
use App\Repository\StageMailTemplateRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Routing\RouterInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class StageSubscriber implements EventSubscriberInterface
{
    protected MailerStage $myMailer;

    private EntityManagerInterface $entityManager;

    private RouterInterface $router;

    private StageMailTemplateRepository $stageMailTemplateRepository;
    private array $responsablesStagesMails = [];

    /**
     * StageSubscriber constructor.
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        RouterInterface $router,
        MailerStage $myMailer,
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
            StageEvent::CHGT_ETAT_STAGE_AUTORISE            => 'onChgtEtatStageAutorise',
            StageEvent::CHGT_ETAT_STAGE_DEPOSE              => 'onChgtEtatStageDepose',
            StageEvent::CHGT_ETAT_STAGE_VALIDE              => 'onChgtEtatStageValide',
            StageEvent::CHGT_ETAT_STAGE_REFUS               => 'onChgtEtatStageRefus',
            StageEvent::CHGT_ETAT_STAGE_INCOMPLET           => 'onChgtEtatStageIncomplet',
            StageEvent::CHGT_ETAT_STAGE_CONVENTION_IMPRIMEE => 'onChgtEtatStageImprime',
            StageEvent::CHGT_ETAT_STAGE_CONVENTION_ENVOYEE  => 'onChgtEtatStageConventionEnvoyee',
            StageEvent::CHGT_ETAT_CONVENTION_RECUE          => 'onChgtEtatStageConventionRecue',
        ];
    }

    /**
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function onChgtEtatStageAutorise(StageEvent $event): void
    {
        $this->sendMail($event, StageEvent::CHGT_ETAT_STAGE_AUTORISE);
        $this->addNotification($event, StageEvent::CHGT_ETAT_STAGE_AUTORISE);
    }

    private function addNotification(StageEvent $event, $codeEvent): void
    {
        $stageEtudiant = $event->getStageEtudiant();
        if (null !== $stageEtudiant->getEtudiant()) {
            $notif = new Notification();
            $notif->setEtudiant($stageEtudiant->getEtudiant());
            $notif->setTypeUser(Notification::ETUDIANT);
            $notif->setType($codeEvent);
            $notif->setUrl($this->router->generate(
                'application_index',
                ['onglet' => 'stage', 'param' => $stageEtudiant->getId()]
            ));
            $this->entityManager->persist($notif);
            $this->entityManager->flush();
        }
    }

    /**
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function onChgtEtatStageConventionEnvoyee(StageEvent $event): void
    {
        $this->addNotification($event, StageEvent::CHGT_ETAT_STAGE_CONVENTION_ENVOYEE);
        $this->sendMail($event, StageEvent::CHGT_ETAT_STAGE_CONVENTION_ENVOYEE);
    }

    /**
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function onChgtEtatStageConventionRecue(StageEvent $event): void
    {
        $this->addNotification($event, StageEvent::CHGT_ETAT_CONVENTION_RECUE);
        $this->sendMail($event, StageEvent::CHGT_ETAT_CONVENTION_RECUE);
    }

    /**
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function onChgtEtatStageDepose(StageEvent $event): void
    {
        $stageEtudiant = $event->getStageEtudiant();
        if (null !== $stageEtudiant->getStagePeriode()) {
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

    /**
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function onChgtEtatStageValide(StageEvent $event): void
    {
        $this->addNotification($event, StageEvent::CHGT_ETAT_STAGE_VALIDE);
        $this->sendMail($event, StageEvent::CHGT_ETAT_STAGE_VALIDE);
    }

    /**
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function onChgtEtatStageRefus(StageEvent $event): void
    {
        $this->addNotification($event, StageEvent::CHGT_ETAT_STAGE_REFUS);
        $this->sendMail($event, StageEvent::CHGT_ETAT_STAGE_REFUS);
    }

    /**
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function onChgtEtatStageIncomplet(StageEvent $event): void
    {
        $this->addNotification($event, StageEvent::CHGT_ETAT_STAGE_INCOMPLET);
        $this->sendMail($event, StageEvent::CHGT_ETAT_STAGE_INCOMPLET);
    }

    /**
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function onChgtEtatStageImprime(StageEvent $event): void
    {
        $this->addNotification($event, StageEvent::CHGT_ETAT_STAGE_CONVENTION_IMPRIMEE);
        $this->sendMail($event, StageEvent::CHGT_ETAT_STAGE_CONVENTION_IMPRIMEE);
    }

    /**
     * @param $codeEvent
     *
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws SyntaxError
     * @throws TransportExceptionInterface
     */
    public function sendMail(StageEvent $event, $codeEvent): void
    {
        $stageEtudiant = $event->getStageEtudiant();

        foreach ($stageEtudiant->getStagePeriode()->getResponsables() as $resp) {
            $this->responsablesStagesMails[] = $resp->getMailUniv();
        }

        //table avec les templates des mails et le sujet, a récupérer en fonction du codeEvent et de la période.
        /** @var StageMailTemplate $mailTemplate */
        $mailTemplate = $this->stageMailTemplateRepository->findEventPeriode(
            StageEvent::EQ_ETATS[$codeEvent],
            $stageEtudiant->getStagePeriode()
        );

        if (null !== $mailTemplate && null !== $mailTemplate->getTwigTemplate() && null !== $stageEtudiant->getEtudiant()) {
            $this->myMailer->setTemplateFromDatabase(
                $mailTemplate->getTwigTemplate(),
                ['stageEtudiant' => $stageEtudiant],
                $stageEtudiant->getEtudiant()->getMails(),
                $mailTemplate->getSubject(),
                ['replyTo' => $this->responsablesStagesMails]);
        } else {
            //mail par défaut
            $this->myMailer->setTemplate('mails/stages/stage_' . $codeEvent . '.txt.twig',
                ['stageEtudiant' => $stageEtudiant],
                $stageEtudiant->getEtudiant()->getMails(),
                $codeEvent,
                ['replyTo' => $this->responsablesStagesMails]
            );
        }

        //selon un modèle spécifique
        $mailTemplate = $this->stageMailTemplateRepository->findEventPeriode(
            $codeEvent . '_COPIE',
            $stageEtudiant->getStagePeriode()
        );

        $destinataires = [];
        foreach ($stageEtudiant->getStagePeriode()->getResponsables() as $destinataire) {
            $destinataires[] = $destinataire->getMailUniv();
        }

        if (null !== $mailTemplate && null !== $stageEtudiant && $mailTemplate->getTwigTemplate()) {
            //mail responsables
            $this->myMailer->setTemplateFromDatabase($mailTemplate->getTwigTemplate()->getName(),
                ['stageEtudiant' => $stageEtudiant],
                $destinataires,
                $mailTemplate->getSubject(),
                ['replyTo' => $this->responsablesStagesMails]
            );

            //copie à l'assistante
            if (null !== $stageEtudiant->getStagePeriode() && $stageEtudiant->getStagePeriode()->getCopieAssistant() && null !== $stageEtudiant->getStagePeriode()->getMailAssistant()) {
                $this->myMailer->setTemplateFromDatabase($mailTemplate->getTwigTemplate()->getName(),
                    ['stageEtudiant' => $stageEtudiant],
                    $stageEtudiant->getStagePeriode()->getMailAssistant(),
                    $mailTemplate->getSubject(),
                    ['replyTo' => $this->responsablesStagesMails]
                );
            }
        } else {
            //sinon mail par défaut
            $this->myMailer->setTemplate('mails/stages/stage_assistant_' . $codeEvent . '.txt.twig',
                ['stageEtudiant' => $stageEtudiant],
                $destinataires,
                'copie ' . $codeEvent,
                ['replyTo' => $this->responsablesStagesMails]);

            if (null !== $stageEtudiant->getStagePeriode() && $stageEtudiant->getStagePeriode()->getCopieAssistant() && null !== $stageEtudiant->getStagePeriode()->getMailAssistant()) {
                $this->myMailer->setTemplate('mails/stages/stage_assistant_' . $codeEvent . '.txt.twig',
                    ['stageEtudiant' => $stageEtudiant],
                    $stageEtudiant->getStagePeriode()->getMailAssistant(),
                    'copie ' . $codeEvent,
                    ['replyTo' => $this->responsablesStagesMails]);
            }
        }
    }
}
