<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/EventSubscriber/StageSubscriber.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/09/2020 08:36

namespace App\EventSubscriber;

use App\Classes\Stage\MailerStage;
use App\Entity\Notification;
use App\Entity\StageMailTemplate;
use App\Event\StageEvent;
use App\Repository\StageMailTemplateRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
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

    /**
     * StageSubscriber constructor.
     *
     * @param EntityManagerInterface      $entityManager
     * @param RouterInterface             $router
     * @param MailerStage                 $myMailer
     * @param StageMailTemplateRepository $stageMailTemplateRepository
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
            StageEvent::CHGT_ETAT_STAGE_AUTORISE           => 'onChgtEtatStageAutorise',
            StageEvent::CHGT_ETAT_STAGE_DEPOSE             => 'onChgtEtatStageDepose',
            StageEvent::CHGT_ETAT_STAGE_VALIDE             => 'onChgtEtatStageValide',
            StageEvent::CHGT_ETAT_STAGE_IMPRIME            => 'onChgtEtatStageImprime',
            StageEvent::CHGT_ETAT_STAGE_CONVENTION_ENVOYEE => 'onChgtEtatStageConventionEnvoyee',
            StageEvent::CHGT_ETAT_CONVENTION_RECUE         => 'onChgtEtatStageConventionRecue',
        ];
    }

    /**
     * @param StageEvent $event
     *
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws TransportExceptionInterface
     */
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

    /**
     * @param StageEvent $event
     *
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws TransportExceptionInterface
     */
    public function onChgtEtatStageConventionEnvoyee(StageEvent $event): void
    {
        $this->addNotification($event, StageEvent::CHGT_ETAT_STAGE_CONVENTION_ENVOYEE);
        $this->sendMail($event, StageEvent::CHGT_ETAT_STAGE_CONVENTION_ENVOYEE);
    }

    /**
     * @param StageEvent $event
     *
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws TransportExceptionInterface
     */
    public function onChgtEtatStageConventionRecue(StageEvent $event): void
    {
        $this->addNotification($event, StageEvent::CHGT_ETAT_CONVENTION_RECUE);
        $this->sendMail($event, StageEvent::CHGT_ETAT_CONVENTION_RECUE);

    }

    /**
     * @param StageEvent $event
     *
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws TransportExceptionInterface
     */
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

    /**
     * @param StageEvent $event
     *
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws TransportExceptionInterface
     */
    public function onChgtEtatStageValide(StageEvent $event): void
    {
        $this->addNotification($event, StageEvent::CHGT_ETAT_STAGE_VALIDE);
        $this->sendMail($event, StageEvent::CHGT_ETAT_STAGE_VALIDE);
    }

    /**
     * @param StageEvent $event
     *
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws TransportExceptionInterface
     */
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
            StageEvent::EQ_ETATS[$codeEvent],
            $stageEtudiant->getStagePeriode()
        );

        if ($mailTemplate !== null && $mailTemplate->getTwigTemplate() !== null && $stageEtudiant->getEtudiant() !== null) {
            $this->myMailer->setTemplateFromDatabase(
                $mailTemplate->getTwigTemplate()->getName(),
                ['stageEtudiant' => $stageEtudiant],
                $stageEtudiant->getEtudiant()->getMails(),
                $mailTemplate->getSubject());
        } else {
            echo 'defaut';
            //mail par défaut
            $this->myMailer->setTemplate('mails/stages/stage_' . $codeEvent . '.txt.twig',
                ['stageEtudiant' => $stageEtudiant],
                $stageEtudiant->getEtudiant()->getMails(),
                $codeEvent);

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
                    ['stageEtudiant' => $stageEtudiant],
                    $stageEtudiant->getStagePeriode()->getMailAssistant(),
                    $mailTemplate->getSubject()
                );
            } else {
                //sinon mail par défaut
                $this->myMailer->setTemplate('mails/stages/stage_assistant_' . $codeEvent . '.txt.twig',
                    ['stageEtudiant' => $stageEtudiant],
                    $stageEtudiant->getStagePeriode()->getMailAssistant(),
                    'copie ' . $codeEvent);
            }
        }

        //copie au RP lors du dépôt par l'étudiant
        if ($codeEvent === StageEvent::CHGT_ETAT_STAGE_DEPOSE) {
            $tMails = [];
            foreach ($stageEtudiant->getStagePeriode()->getResponsables() as $resp) {
                $tMails[] = $resp->getMailUniv();
            }
            $this->myMailer->setTemplate('mails/stages/stage_copie_depot_rp.txt.twig',
                ['stageEtudiant' => $stageEtudiant], $tMails, 'Formulaire de stage complété');
        }
    }
}
