<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/EventSubscriber/StageSubscriber.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2020 14:31

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
     * @param StageEvent $event
     *
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
        if ($stageEtudiant->getEtudiant() !== null) {
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
     * @param StageEvent $event
     *
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
     * @param StageEvent $event
     *
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
     * @param StageEvent $event
     *
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
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
     */
    public function onChgtEtatStageRefus(StageEvent $event): void
    {
        $this->addNotification($event, StageEvent::CHGT_ETAT_STAGE_REFUS);
        $this->sendMail($event, StageEvent::CHGT_ETAT_STAGE_REFUS);
    }

    /**
     * @param StageEvent $event
     *
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
     * @param StageEvent $event
     *
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
     * @param StageEvent   $event
     * @param              $codeEvent
     *
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws RuntimeError
     * @throws SyntaxError
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
                $mailTemplate->getTwigTemplate(),
                ['stageEtudiant' => $stageEtudiant],
                $stageEtudiant->getEtudiant()->getMails(),
                $mailTemplate->getSubject());
        } else {
            //mail par défaut
            $this->myMailer->setTemplate('mails/stages/stage_' . $codeEvent . '.txt.twig',
                ['stageEtudiant' => $stageEtudiant],
                $stageEtudiant->getEtudiant()->getMails(),
                $codeEvent);
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

        if ($mailTemplate !== null && $stageEtudiant !== null && $mailTemplate->getTwigTemplate()) {
            //mail responsables
            $this->myMailer->setTemplateFromDatabase($mailTemplate->getTwigTemplate()->getName(),
                ['stageEtudiant' => $stageEtudiant],
                $destinataires,
                $mailTemplate->getSubject()
            );

            //copie à l'assistante
            if ($stageEtudiant->getStagePeriode() !== null && $stageEtudiant->getStagePeriode()->getCopieAssistant() && $stageEtudiant->getStagePeriode()->getMailAssistant() !== null) {
                $this->myMailer->setTemplateFromDatabase($mailTemplate->getTwigTemplate()->getName(),
                    ['stageEtudiant' => $stageEtudiant],
                    $stageEtudiant->getStagePeriode()->getMailAssistant(),
                    $mailTemplate->getSubject()
                );
            }
        } else {
            //sinon mail par défaut
            $this->myMailer->setTemplate('mails/stages/stage_assistant_' . $codeEvent . '.txt.twig',
                ['stageEtudiant' => $stageEtudiant],
                $destinataires,
                'copie ' . $codeEvent);

            if ($stageEtudiant->getStagePeriode() !== null && $stageEtudiant->getStagePeriode()->getCopieAssistant() && $stageEtudiant->getStagePeriode()->getMailAssistant() !== null) {
                $this->myMailer->setTemplate('mails/stages/stage_assistant_' . $codeEvent . '.txt.twig',
                    ['stageEtudiant' => $stageEtudiant],
                    $stageEtudiant->getStagePeriode()->getMailAssistant(),
                    'copie ' . $codeEvent);
            }
        }
    }
}
