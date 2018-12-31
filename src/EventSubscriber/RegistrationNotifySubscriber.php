<?php
// App\EventSubscriber\RegistrationNotifySubscriber.php
namespace App\EventSubscriber;

use App\Entity\Absence;
use App\Entity\AbsenceJustificatif;
use App\Entity\Etudiant;
use App\Entity\Notification;
use App\Entity\Rattrapage;
use App\Events;
use App\Repository\EtudiantRepository;
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
            Events::ABSENCE_ADDED         => 'onAbsenceAdded',
            Events::ABSENCE_REMOVED       => 'onAbsenceRemoved',
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
     * @param GenericEvent $event
     */
    public function onAbsenceAdded(GenericEvent $event): void
    {
        /** @var Absence $absence */
        $absence = $event->getSubject();

        $notif = new Notification();
        $notif->setEtudiant($absence->getEtudiant());
        $notif->setPersonnel($absence->getPersonnel());
        $notif->setTypeUser(Notification::ETUDIANT);
        $notif->setType(Events::ABSENCE_ADDED);
        $notif->setUrl($this->router->generate('user_mon_profil', ['onglet' => 'absence']));
        $this->entityManager->persist($notif);


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
     * @param GenericEvent $event
     */
    public function onAbsenceRemoved(GenericEvent $event): void
    {
        /** @var Absence $absence */
        $absence = $event->getSubject();

        $notif = new Notification();
        $notif->setEtudiant($absence->getEtudiant());
        $notif->setPersonnel($absence->getPersonnel());
        $notif->setTypeUser(Notification::ETUDIANT);
        $notif->setType(Events::ABSENCE_REMOVED);
        $notif->setUrl($this->router->generate('user_mon_profil', ['onglet' => 'absence']));
        $this->entityManager->persist($notif);

        $this->entityManager->flush();
    }
}
