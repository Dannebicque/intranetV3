<?php
// App\EventSubscriber\RegistrationNotifySubscriber.php
namespace App\EventSubscriber;

use App\Entity\Etudiant;
use App\Entity\Notification;
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
     * @var EtudiantRepository
     */
    private $etudiantRepository;

    /**
     * RegistrationNotifySubscriber constructor.
     *
     * @param EntityManagerInterface $entityManager
     * @param RouterInterface        $router
     * @param EtudiantRepository     $etudiantRepository
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        RouterInterface $router,
        EtudiantRepository $etudiantRepository
    ) {
        $this->entityManager = $entityManager;
        $this->router = $router;
        $this->etudiantRepository = $etudiantRepository;
    }


    /**
     * @return array
     */
    public static function getSubscribedEvents(): array
    {
        return [
            // le nom de l'event et le nom de la fonction qui sera déclenché
            //Events::USER_REGISTERED => 'onUserRegistrated',
            Events::NOTE_ADDED => 'onNoteAdded',
            Events::ABSENCE_ADDED => 'onAbsenceAdded',
            Events::CARNET_ADDED => 'onCarnetAdded',
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

    }
}