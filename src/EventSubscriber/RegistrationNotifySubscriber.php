<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/EventSubscriber/RegistrationNotifySubscriber.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

// App\EventSubscriber\RegistrationNotifySubscriber.php
namespace App\EventSubscriber;

use App\Entity\Absence;
use App\Entity\AbsenceJustificatif;
use App\Entity\Etudiant;
use App\Entity\Notification;
use App\Entity\Rattrapage;
use App\Event\AbsenceAddedEvent;
use App\Event\AbsenceRemovedEvent;
use App\Events;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
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
            // le nom de l'event et le nom de la fonction qui sera déclenché
            //Events::USER_REGISTERED => 'onUserRegistrated',
            Events::NOTE_ADDED            => 'onNoteAdded',
            AbsenceAddedEvent::NAME       => 'onAbsenceAdded',
            AbsenceRemovedEvent::NAME     => 'onAbsenceRemoved',
            Events::CARNET_ADDED          => 'onCarnetAdded',
            Events::DECISION_RATTRAPAGE   => 'onDecisionRattrapge',
            Events::DECISION_JUSTIFICATIF => 'onDecisionJustficatif',
        ];
    }

    /**
     * @param GenericEvent $event
     */
    public function onCarnetAdded(GenericEvent $event): void
    {
        $cahier = $event->getSubject();
        /** @var Etudiant $etudiant */
        foreach ($cahier->getSemestre()->getEtudiants() as $etudiant) {
            $notif = new Notification();
            $notif->setEtudiant($etudiant);
            $notif->setTypeUser(Notification::ETUDIANT);
            $notif->setType(Events::CARNET_ADDED);
            $notif->setUrl($this->router->generate('application_etudiant_carnet_show', ['id' => $cahier->getId()]));
            $this->entityManager->persist($notif);
        }

        $this->entityManager->flush();
    }

    /**
     * @param GenericEvent $event
     */
    public function onNoteAdded(GenericEvent $event): void
    {
    }

    /**
     * @param AbsenceAddedEvent $event
     */
    public function onAbsenceAdded(AbsenceAddedEvent $event): void
    {
        $absence = $event->getAbsence();

        $notif = new Notification();
        $notif->setEtudiant($absence->getEtudiant());
        $notif->setPersonnel($absence->getPersonnel());
        $notif->setTypeUser(Notification::ETUDIANT);
        $notif->setType(AbsenceAddedEvent::NAME);
        $notif->setUrl($this->router->generate('user_mon_profil', ['onglet' => 'absence']));
        $this->entityManager->persist($notif);
        dump($notif);

        $this->entityManager->flush();
    }

    /**
     * @param GenericEvent $event
     */
    public function onDecisionRattrapge(GenericEvent $event): void
    {
        /** @var Rattrapage $rattrapage */
        $rattrapage = $event->getSubject();

        $notif = new Notification();
        $notif->setEtudiant($rattrapage->getEtudiant());
        $notif->setPersonnel(null);
        $notif->setTypeUser(Notification::ETUDIANT);
        if ($rattrapage->getEtatDemande() === 'A') {
            $notif->setType(Events::DECISION_RATTRAPAGE_ACCEPTEE);
        } else {
            $notif->setType(Events::DECISION_RATTRAPAGE_REFUSEE);
        }
        $notif->setUrl($this->router->generate('application_index', ['onglet' => 'rattrapage']));
        $this->entityManager->persist($notif);

        // notification du personnel
        $notif = new Notification();
        $notif->setEtudiant(null);
        $notif->setPersonnel($rattrapage->getPersonnel());
        $notif->setTypeUser(Notification::PERSONNEL);
        if ($rattrapage->getEtatDemande() === 'A') {
            $notif->setType(Events::DECISION_RATTRAPAGE_ACCEPTEE);
        } else {
            $notif->setType(Events::DECISION_RATTRAPAGE_REFUSEE);
        }
        $notif->setUrl($this->router->generate('application_index', ['onglet' => 'rattrapage']));
        $this->entityManager->persist($notif);

        $this->entityManager->flush();
    }

    /**
     * @param GenericEvent $event
     */
    public function onDecisionJustficatif(GenericEvent $event): void
    {
        /** @var AbsenceJustificatif $absenceJustificatif */
        $absenceJustificatif = $event->getSubject();

        $notif = new Notification();
        $notif->setEtudiant($absenceJustificatif->getEtudiant());
        $notif->setPersonnel(null);
        $notif->setTypeUser(Notification::ETUDIANT);
        if ($absenceJustificatif->getEtat() === 'A') {
            $notif->setType(Events::DECISION_JUSTIFICATIF_ACCEPTEE);
        } else {
            $notif->setType(Events::DECISION_JUSTIFICATIF_REFUSEE);
        }
        $notif->setUrl($this->router->generate('application_index', ['onglet' => 'justificatif']));
        $this->entityManager->persist($notif);

        $this->entityManager->flush();
    }

    /**
     * @param AbsenceRemovedEvent $event
     */
    public function onAbsenceRemoved(AbsenceRemovedEvent $event): void
    {
        $absence = $event->getAbsence();

        $notif = new Notification();
        $notif->setEtudiant($absence->getEtudiant());
        $notif->setPersonnel($absence->getPersonnel());
        $notif->setTypeUser(Notification::ETUDIANT);
        $notif->setType(AbsenceRemovedEvent::NAME);
        $notif->setUrl($this->router->generate('user_mon_profil', ['onglet' => 'absence']));
        $this->entityManager->persist($notif);

        $this->entityManager->flush();
    }
}
