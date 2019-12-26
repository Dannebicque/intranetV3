<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/EventSubscriber/AbsenceSubscriber.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

// App\EventSubscriber\RegistrationNotifySubscriber.php
namespace App\EventSubscriber;

use App\Entity\Absence;
use App\Entity\AbsenceJustificatif;
use App\Event\AbsenceEvent;
use App\Events;
use App\Repository\AbsenceJustificatifRepository;
use App\Repository\AbsenceRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\GenericEvent;

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
            Events::JUSTIFIE_ABSENCES => 'onJustifieAbsences',
            AbsenceEvent::ADDED       => 'onVerificationJustificatif',
        ];
    }

    public function onJustifieAbsences(GenericEvent $event): void
    {
        /** @var AbsenceJustificatif $justificatif */
        $justificatif = $event->getSubject();
        $absences = $this->absenceRepository->findAbsencesAJustifer($justificatif);

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
