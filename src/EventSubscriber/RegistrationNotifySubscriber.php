<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/EventSubscriber/RegistrationNotifySubscriber.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/08/2020 08:32

// App\EventSubscriber\RegistrationNotifySubscriber.php
namespace App\EventSubscriber;

use App\Entity\Absence;
use App\Entity\Etudiant;
use App\Entity\Notification;
use App\Event\AbsenceEvent;
use App\Event\CarnetEvent;
use App\Event\JustificatifEvent;
use App\Event\NoteEvent;
use App\Event\RattrapageEvent;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Routing\RouterInterface;

/**
 * Envoi un mail de bienvenue à chaque creation d'un utilisateur
 *
 */
class RegistrationNotifySubscriber implements EventSubscriberInterface
{
    /** @var EntityManagerInterface */
    private $entityManager;

    /** @var RouterInterface */
    private $router;



    /**
     * RegistrationNotifySubscriber constructor.
     *
     * @param EntityManagerInterface $entityManager
     * @param RouterInterface        $router
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        RouterInterface $router
    ) {
        $this->entityManager = $entityManager;
        $this->router = $router;
    }


    /**
     * @return array
     */
    public static function getSubscribedEvents(): array
    {
        return [
            NoteEvent::ADDED            => 'onNoteAdded',
            AbsenceEvent::ADDED         => 'onAbsenceAdded',
            AbsenceEvent::REMOVED       => 'onAbsenceRemoved',
            AbsenceEvent::JUSTIFIED     => 'onAbsenceJustified',
            CarnetEvent::ADDED          => 'onCarnetAdded',
            RattrapageEvent::DECISION   => 'onDecisionRattrapge',
            JustificatifEvent::DECISION => 'onDecisionJustficatif',
        ];
    }

    /**
     * @param CarnetEvent $event
     */
    public function onCarnetAdded(CarnetEvent $event): void
    {
        $cahier = $event->getCahierTexte();

        if ($cahier->getSemestre() !== null) {
            /** @var Etudiant $etudiant */
            foreach ($cahier->getSemestre()->getEtudiants() as $etudiant) {
                $notif = new Notification();
                $notif->setEtudiant($etudiant);
                $notif->setTypeUser(Notification::ETUDIANT);
                $notif->setType(CarnetEvent::ADDED);
                $notif->setUrl($this->router->generate('application_etudiant_carnet_show', ['id' => $cahier->getId()]));
                $this->entityManager->persist($notif);
            }

            $this->entityManager->flush();
        }
    }

    /**
     * @param NoteEvent $event
     */
    public function onNoteAdded(NoteEvent $event): void
    {
        $note = $event->getNote();
        $notif = new Notification();
        $notif->setEtudiant($note->getEtudiant());
        $notif->setPersonnel(null);
        $notif->setTypeUser(Notification::ETUDIANT);

        $notif->setType(NoteEvent::ADDED);
        $notif->setUrl($this->router->generate('user_mon_profil', ['onglet' => 'note']));
        $this->entityManager->persist($notif);
    }

    /**
     * @param AbsenceEvent $event
     */
    public function onAbsenceAdded(AbsenceEvent $event): void
    {
        $this->onAbsence($event->getAbsence(), AbsenceEvent::ADDED);
    }

    /**
     * @param RattrapageEvent $event
     */
    public function onDecisionRattrapge(RattrapageEvent $event): void
    {
        $rattrapage = $event->getRattrapage();

        $notif = new Notification();
        $notif->setEtudiant($rattrapage->getEtudiant());
        $notif->setPersonnel(null);
        $notif->setTypeUser(Notification::ETUDIANT);
        if ($rattrapage->getEtatDemande() === 'A') {
            $notif->setType(RattrapageEvent::DECISION_RATTRAPAGE_ACCEPTEE);
        } else {
            $notif->setType(RattrapageEvent::DECISION_RATTRAPAGE_REFUSEE);
        }
        $notif->setUrl($this->router->generate('application_index', ['onglet' => 'rattrapage']));
        $this->entityManager->persist($notif);

        // notification du personnel
        $notif = new Notification();
        $notif->setEtudiant(null);
        $notif->setPersonnel($rattrapage->getPersonnel());
        $notif->setTypeUser(Notification::PERSONNEL);
        if ($rattrapage->getEtatDemande() === 'A') {
            $notif->setType(RattrapageEvent::DECISION_RATTRAPAGE_ACCEPTEE);
        } else {
            $notif->setType(RattrapageEvent::DECISION_RATTRAPAGE_REFUSEE);
        }
        $notif->setUrl($this->router->generate('application_index', ['onglet' => 'rattrapage']));
        $this->entityManager->persist($notif);

        $this->entityManager->flush();
    }

    /**
     * @param JustificatifEvent $event
     */
    public function onDecisionJustficatif(JustificatifEvent $event): void
    {
        $absenceJustificatif = $event->getAbsenceJustificatif();

        $notif = new Notification();
        $notif->setEtudiant($absenceJustificatif->getEtudiant());
        $notif->setPersonnel(null);
        $notif->setTypeUser(Notification::ETUDIANT);
        if ($absenceJustificatif->getEtat() === 'A') {
            $notif->setType(JustificatifEvent::DECISION_JUSTIFICATIF_ACCEPTEE);
        } else {
            $notif->setType(JustificatifEvent::DECISION_JUSTIFICATIF_REFUSEE);
        }
        $notif->setUrl($this->router->generate('application_index', ['onglet' => 'justificatif']));
        $this->entityManager->persist($notif);

        $this->entityManager->flush();
    }

    /**
     * @param AbsenceEvent $event
     */
    public function onAbsenceRemoved(AbsenceEvent $event): void
    {
        $this->onAbsence($event->getAbsence(), AbsenceEvent::REMOVED);
    }

    /**
     * @param AbsenceEvent $event
     */
    public function onAbsenceJustified(AbsenceEvent $event): void
    {
        $this->onAbsence($event->getAbsence(), AbsenceEvent::JUSTIFIED);
    }

    /**
     * @param Absence $absence
     * @param         $etat
     */
    private function onAbsence(Absence $absence, $etat): void
    {

        $notif = new Notification();
        $notif->setEtudiant($absence->getEtudiant());
        $notif->setPersonnel($absence->getPersonnel());
        $notif->setTypeUser(Notification::ETUDIANT);
        $notif->setType($etat);
        $notif->setUrl($this->router->generate('user_mon_profil', ['onglet' => 'absence']));
        $this->entityManager->persist($notif);
        $this->entityManager->flush();
    }
}
