<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/EventSubscriber/CovidSubscriber.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 18/12/2020 09:29

namespace App\EventSubscriber;

use App\Classes\Covid\MyExportPresence;
use App\Classes\Mail\MailerFromTwig;
use App\Entity\CovidAttestationPersonnel;
use App\Event\CovidEvent;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\KernelInterface;


class CovidSubscriber implements EventSubscriberInterface
{

    protected MailerFromTwig $myMailer;

    private EntityManagerInterface $entityManager;

    private MyExportPresence $myExportPresence;
    private string $dir;


    /**
     * StageSubscriber constructor.
     *
     * @param EntityManagerInterface $entityManager
     * @param MailerFromTwig         $myMailer
     * @param MyExportPresence       $myExportPresence
     * @param KernelInterface        $kernel
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        MailerFromTwig $myMailer,
        MyExportPresence $myExportPresence,
        KernelInterface $kernel
    ) {
        $this->entityManager = $entityManager;
        $this->myMailer = $myMailer;
        $this->myExportPresence = $myExportPresence;
        $this->dir = $kernel->getProjectDir() . '/public/upload/';
    }

    public static function getSubscribedEvents(): array
    {
        return [
            CovidEvent::COVID_AUTORISATION_DEPOSEE             => 'onCovidAutorisationDeposee',
            CovidEvent::COVID_AUTORISATION_EDITEE              => 'onCovidAutorisationEditee',
            CovidEvent::COVID_AUTORISATION_VALIDEE_DEPARTEMENT => 'onCovidAutorisationValideeDepartement',
            CovidEvent::COVID_AUTORISATION_VALIDEE_DIRECTION   => 'onCovidAutorisationValideeDirection',
            CovidEvent::COVID_AUTORISATION_REFUSEE_DEPARTEMENT => 'onCovidAutorisationRefuseeDepartement',
            CovidEvent::COVID_AUTORISATION_REFUSEE_DIRECTION   => 'onCovidAutorisationRefuseeDirection'
        ];
    }


    public function onCovidAutorisationDeposee(CovidEvent $event): void
    {
        $autorisation = $event->getCovidAttestationPersonnel();
        //mail envoyé au directeur de département
        $this->sendToDepartement($autorisation, CovidEvent::COVID_AUTORISATION_DEPOSEE);
    }

    private function sendToDepartement(CovidAttestationPersonnel $covidAttestationPersonnel, string $codeEvent)
    {
        $this->myMailer->initEmail();
        $this->myMailer->setTemplate('mails/covid/' . $codeEvent . '.html.twig', [
            'covidAttestationPersonnel' => $covidAttestationPersonnel
        ]);
        $this->myMailer->sendMessage(
            [$covidAttestationPersonnel->getDiplome()->getResponsableDiplome()->getMailUniv()],
            'Nouvelle demande d\'autorisation de déplacement',
            [
                'replyTo' => $covidAttestationPersonnel->getPersonnel()->getMailUniv(),
                'from'    => [$covidAttestationPersonnel->getPersonnel()->getMailUniv()]
            ]
        );
    }

    public function onCovidAutorisationEditee(CovidEvent $event): void
    {
        $autorisation = $event->getCovidAttestationPersonnel();
        //mail envoyé au directeur de département
        $this->sendToDepartement($autorisation, CovidEvent::COVID_AUTORISATION_EDITEE);
    }

    public function onCovidAutorisationValideeDepartement(CovidEvent $event): void
    {
        $autorisation = $event->getCovidAttestationPersonnel();
        $autorisation->setValidationDepartement(true);
        $autorisation->setDateValidationDepartement(new DateTime());
        $this->entityManager->persist($autorisation);
        $this->entityManager->flush();

    }

    public function onCovidAutorisationValideeDirection(CovidEvent $event): void
    {
        $autorisation = $event->getCovidAttestationPersonnel();
        $autorisation->setValidationDirection(true);
        $autorisation->setDateValidationDirection(new DateTime());
        $this->entityManager->persist($autorisation);
        $this->entityManager->flush();

        $this->sendToPersonnel($autorisation, CovidEvent::COVID_AUTORISATION_VALIDEE_DIRECTION);
    }

    private function sendToPersonnel(CovidAttestationPersonnel $covidAttestationPersonnel, string $codeEvent)
    {
        $this->myMailer->initEmail();
        switch ($codeEvent) {
            case CovidEvent::COVID_AUTORISATION_REFUSEE_DEPARTEMENT:
                $this->myMailer->setTemplate('mails/covid/' . $codeEvent . '.html.twig', [
                    'covidAttestationPersonnel' => $covidAttestationPersonnel
                ]);
                $this->myMailer->sendMessage(
                    $covidAttestationPersonnel->getPersonnel()->getMails(),
                    'Demande d\'autorisation de déplacement refusée',
                    [
                        'replyTo' => $covidAttestationPersonnel->getDiplome()->getResponsableDiplome()->getMailUniv(),
                        'from'    => [$covidAttestationPersonnel->getDiplome()->getResponsableDiplome()->getMailUniv()]
                    ]

                );
                break;
            case CovidEvent::COVID_AUTORISATION_REFUSEE_DIRECTION:
                $this->myMailer->setTemplate('mails/covid/' . $codeEvent . '.html.twig', [
                    'covidAttestationPersonnel' => $covidAttestationPersonnel
                ]);
                $this->myMailer->sendMessage(
                    $covidAttestationPersonnel->getPersonnel()->getMails(),
                    'Demande d\'autorisation de déplacement refusée',
                    [
                        'replyTo' => 'direction.iut-troyes@univ-reims.fr',
                        'from'    => ['direction.iut-troyes@univ-reims.fr']
                    ]

                );
                break;
            case CovidEvent::COVID_AUTORISATION_VALIDEE_DIRECTION:
                $file = $this->myExportPresence->genereAttestationPdf(
                    $covidAttestationPersonnel,
                    'sauvegarde'
                );
                //générer le PDF et joindre au mail
                $this->myMailer->setTemplate('mails/covid/' . $codeEvent . '.html.twig', [
                    'covidAttestationPersonnel' => $covidAttestationPersonnel
                ]);
                //joindre le PDF
                $this->myMailer->attachFile($file);
                $this->myMailer->attachFile($this->dir . 'covid/Organisation Accès  IUT  Troyes - Note personnels 17.12.2020.pdf');
                $this->myMailer->sendMessage(
                    $covidAttestationPersonnel->getPersonnel()->getMails(),
                    'Demande d\'autorisation de déplacement acceptée',
                    [
                        'replyTo' => 'direction.iut-troyes@univ-reims.fr',
                        'from'    => ['direction.iut-troyes@univ-reims.fr']
                    ]
                );
                break;
        }


    }

    public function onCovidAutorisationRefuseeDepartement(CovidEvent $event): void
    {
        $autorisation = $event->getCovidAttestationPersonnel();
        $autorisation->setValidationDepartement(false);
        $autorisation->setDateValidationDepartement(new DateTime());
        $this->entityManager->persist($autorisation);
        $this->entityManager->flush();

        $this->sendToPersonnel($autorisation, CovidEvent::COVID_AUTORISATION_REFUSEE_DEPARTEMENT);
    }

    public function onCovidAutorisationRefuseeDirection(CovidEvent $event): void
    {
        $autorisation = $event->getCovidAttestationPersonnel();
        $autorisation->setValidationDirection(false);
        $autorisation->setDateValidationDirection(new DateTime());
        $this->entityManager->persist($autorisation);
        $this->entityManager->flush();

        $this->sendToPersonnel($autorisation, CovidEvent::COVID_AUTORISATION_REFUSEE_DIRECTION);
    }
}
