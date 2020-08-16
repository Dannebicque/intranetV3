<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/EventSubscriber/AbsenceSubscriber.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 15/08/2020 09:55

// App\EventSubscriber\RegistrationNotifySubscriber.php
namespace App\EventSubscriber;

use App\Entity\Absence;
use App\Event\AbsenceEvent;
use App\Event\JustificatifEvent;
use App\Repository\AbsenceJustificatifRepository;
use App\Repository\AbsenceRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Envoi un mail de bienvenue à chaque creation d'un utilisateur
 *
 */
class AbsenceSubscriber implements EventSubscriberInterface
{
    /** @var EntityManagerInterface */
    private $entityManager;

    /** @var AbsenceRepository */
    private $absenceRepository;

    /** @var AbsenceJustificatifRepository */
    private $absenceJustificatifRepository;

    /**
     * RegistrationNotifySubscriber constructor.
     *
     * @param EntityManagerInterface        $entityManager
     * @param AbsenceRepository             $absenceRepository
     * @param AbsenceJustificatifRepository $absenceJustificatifRepository
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        AbsenceRepository $absenceRepository,
        AbsenceJustificatifRepository $absenceJustificatifRepository
    ) {
        $this->entityManager = $entityManager;
        $this->absenceRepository = $absenceRepository;
        $this->absenceJustificatifRepository = $absenceJustificatifRepository;
    }


    /**
     * @return array
     */
    public static function getSubscribedEvents(): array
    {
        return [
            JustificatifEvent::DECISION_JUSTIFICATIF_ACCEPTEE => 'onJustificatifAccepte',
            AbsenceEvent::ADDED                               => 'onVerificationJustificatif'
        ];
    }

    public function onJustificatifAccepte(JustificatifEvent $event): void
    {
        $justificatif = $event->getAbsenceJustificatif();
        $absences = $this->absenceRepository->getAJustifier($justificatif);

        /** @var Absence $absence */
        foreach ($absences as $absence) {
            $absence->setJustifie(true);
            $absence->setDateJustifie(new DateTime('now'));
            $this->entityManager->persist($absence);
        }

        $this->entityManager->flush();

    }

    public function onVerificationJustificatif(AbsenceEvent $event): void
    {
        $absence = $event->getAbsence();
        $justificatifs = $this->absenceJustificatifRepository->findJustificatifByAbsence($absence);

        if ($justificatifs) {
            //il existe un justificatif valide, donc on justifie
            $absence->setJustifie(true);
            $absence->setDateJustifie(new DateTime('now'));
            $this->entityManager->persist($absence);
            $this->entityManager->flush();
        }


    }


}
