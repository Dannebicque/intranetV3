<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/EventSubscriber/CovidSubscriber.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/03/2021 17:32
 */

namespace App\EventSubscriber;

use App\Classes\Configuration;
use App\Classes\Covid\MyExportPresence;
use App\Classes\Mail\MailerFromTwig;
use App\Entity\CovidAttestationPersonnel;
use App\Event\CovidEvent;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Mime\Address;

class CovidSubscriber implements EventSubscriberInterface
{
    private readonly string $dir;

    /**
     * StageSubscriber constructor.
     */
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        protected MailerFromTwig $myMailer,
        private readonly MyExportPresence $myExportPresence,
        KernelInterface $kernel,
        private readonly Configuration $configuration
    ) {
        $this->dir = $kernel->getProjectDir().'/public/upload/';
    }

    public static function getSubscribedEvents(): array
    {
        return [
            CovidEvent::COVID_AUTORISATION_DEPOSEE => 'onCovidAutorisationDeposee',
            CovidEvent::COVID_AUTORISATION_EDITEE => 'onCovidAutorisationEditee',
            CovidEvent::COVID_AUTORISATION_VALIDEE_DEPARTEMENT => 'onCovidAutorisationValideeDepartement',
            CovidEvent::COVID_AUTORISATION_VALIDEE_DIRECTION => 'onCovidAutorisationValideeDirection',
            CovidEvent::COVID_AUTORISATION_REFUSEE_DEPARTEMENT => 'onCovidAutorisationRefuseeDepartement',
            CovidEvent::COVID_AUTORISATION_REFUSEE_DIRECTION => 'onCovidAutorisationRefuseeDirection',
        ];
    }

    public function onCovidAutorisationDeposee(CovidEvent $event): void
    {
        $autorisation = $event->getCovidAttestationPersonnel();
        //mail envoyé au directeur de département
        $this->sendToDepartement($autorisation, CovidEvent::COVID_AUTORISATION_DEPOSEE);
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    private function sendToDepartement(CovidAttestationPersonnel $covidAttestationPersonnel, string $codeEvent): void
    {
        $this->myMailer->initEmail();
        $this->myMailer->setTemplate('mails/covid/'.$codeEvent.'.html.twig', [
            'covidAttestationPersonnel' => $covidAttestationPersonnel,
        ]);
        $this->myMailer->sendMessage(
            [$covidAttestationPersonnel->getDiplome()->getResponsableDiplome()->getMailUniv()],
            'Nouvelle demande d\'autorisation de déplacement',
            [
                'replyTo' => $covidAttestationPersonnel->getPersonnel()->getMailUniv(),
                'from' => [$this->configuration->getExpediteurIntranet()],
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

    /**
     * @throws \Twig\Error\SyntaxError
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\LoaderError
     */
    private function sendToPersonnel(CovidAttestationPersonnel $covidAttestationPersonnel, string $codeEvent): void
    {
        $this->myMailer->initEmail();
        switch ($codeEvent) {
            case CovidEvent::COVID_AUTORISATION_REFUSEE_DEPARTEMENT:
                $this->myMailer->setTemplate('mails/covid/'.$codeEvent.'.html.twig', [
                    'covidAttestationPersonnel' => $covidAttestationPersonnel,
                ]);
                $this->myMailer->sendMessage(
                    $covidAttestationPersonnel->getPersonnel()->getMails(),
                    'Demande d\'autorisation de déplacement refusée',
                    [
                        'replyTo' => $covidAttestationPersonnel->getDiplome()->getResponsableDiplome()->getMailUniv(),
                        'from' => [$covidAttestationPersonnel->getDiplome()->getResponsableDiplome()->getMailUniv()],
                    ]
                );
                break;
            case CovidEvent::COVID_AUTORISATION_REFUSEE_DIRECTION:
                $this->myMailer->setTemplate('mails/covid/'.$codeEvent.'.html.twig', [
                    'covidAttestationPersonnel' => $covidAttestationPersonnel,
                ]);
                $this->myMailer->sendMessage(
                    $covidAttestationPersonnel->getPersonnel()->getMails(),
                    'Demande d\'autorisation de déplacement refusée',
                    [
                        'replyTo' => 'direction.iut-troyes@univ-reims.fr',
                        'from' => [new Address('direction.iut-troyes@univ-reims.fr', 'Direction IUT de Troyes')],
                    ]
                );
                break;
            case CovidEvent::COVID_AUTORISATION_VALIDEE_DIRECTION:
                $file = $this->myExportPresence->genereAttestationPdf(
                    $covidAttestationPersonnel,
                    'sauvegarde'
                );
                //générer le PDF et joindre au mail
                $this->myMailer->setTemplate('mails/covid/'.$codeEvent.'.html.twig', [
                    'covidAttestationPersonnel' => $covidAttestationPersonnel,
                ]);
                //joindre le PDF
                $this->myMailer->attachFile($file);
                $this->myMailer->attachFile($this->dir.'covid/Organisation Accès  IUT  Troyes - Note personnels 27.01.2020.pdf');
                $this->myMailer->sendMessage(
                    $covidAttestationPersonnel->getPersonnel()->getMails(),
                    'Demande d\'autorisation de déplacement acceptée',
                    [
                        'replyTo' => 'direction.iut-troyes@univ-reims.fr',
                        'from' => [new Address('direction.iut-troyes@univ-reims.fr', 'Direction IUT de Troyes')],
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
