<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/EventSubscriber/AbsenceSubscriber.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\EventSubscriber;

use App\Entity\Absence;
use App\Event\AbsenceEvent;
use App\Event\JustificatifEvent;
use App\Repository\AbsenceJustificatifRepository;
use App\Repository\AbsenceRepository;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Envoi un mail de bienvenue à chaque creation d'un utilisateur.
 */
class AbsenceSubscriber implements EventSubscriberInterface
{
    /**
     * RegistrationNotifySubscriber constructor.
     */
    public function __construct(private EntityManagerInterface $entityManager, private AbsenceRepository $absenceRepository, private AbsenceJustificatifRepository $absenceJustificatifRepository)
    {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            JustificatifEvent::DECISION_JUSTIFICATIF_ACCEPTEE => 'onJustificatifAccepte',
            AbsenceEvent::ADDED => 'onVerificationJustificatif',
        ];
    }

    public function onJustificatifAccepte(JustificatifEvent $event): void
    {
        $justificatif = $event->getAbsenceJustificatif();
        $absences = $this->absenceRepository->getAJustifier($justificatif);

        /** @var Absence $absence */
        foreach ($absences as $absence) {
            $absence->setJustifie(true);
            $absence->setDateJustifie(new Carbon('now'));
            $this->entityManager->persist($absence);
        }
        $this->entityManager->flush();
    }

    public function onVerificationJustificatif(AbsenceEvent $event): void
    {
        $absence = $event->getAbsence();
        $justificatifs = $this->absenceJustificatifRepository->findJustificatifByAbsence($absence);

        if ($justificatifs) {
            // il existe un justificatif valide, donc on justifie
            $absence->setJustifie(true);
            $absence->setDateJustifie(new Carbon('now'));
            $this->entityManager->persist($absence);
            $this->entityManager->flush();
        }
    }
}
