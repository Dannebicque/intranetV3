<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/EventSubscriber/CovidSubscriber.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/11/2020 10:10

namespace App\EventSubscriber;

use App\Classes\Covid\MyExportPresence;
use App\Classes\Mail\MailerFromTwig;
use App\Classes\Pdf\MyPDF;
use App\Entity\CovidAttestationPersonnel;
use App\Event\CovidEvent;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Routing\RouterInterface;


class CovidSubscriber implements EventSubscriberInterface
{

    protected MailerFromTwig $myMailer;

    private EntityManagerInterface $entityManager;

    private MyExportPresence $myExportPresence;


    /**
     * StageSubscriber constructor.
     *
     * @param EntityManagerInterface $entityManager
     * @param RouterInterface        $router
     * @param MailerFromTwig         $myMailer
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        RouterInterface $router,
        MailerFromTwig $myMailer,
        MyExportPresence $myExportPresence
    ) {
        $this->entityManager = $entityManager;
        $this->myMailer = $myMailer;
        $this->myExportPresence = $myExportPresence;
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

        //$this->sendToDirection($autorisation, CovidEvent::COVID_AUTORISATION_EDITEE);

    }

    private function sendToDirection(CovidAttestationPersonnel $covidAttestationPersonnel, string $codeEvent)
    {
        $this->myMailer->initEmail();
        $this->myMailer->setTemplate('mails/covid/' . $codeEvent . '.html.twig', [
            'covidAttestationPersonnel' => $covidAttestationPersonnel
        ]);
        $this->myMailer->sendMessage(
            ['direction.iut-troyes@univ-reims.fr'],
            'Demande d\'autorisation de déplacement validée par le département',
            [
                'replyTo' => $covidAttestationPersonnel->getDiplome()->getResponsableDiplome()->getMailUniv(),
                'from'    => [$covidAttestationPersonnel->getDiplome()->getResponsableDiplome()->getMailUniv()]
            ]
        );

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
