<?php
// App\EventSubscriber\RegistrationNotifySubscriber.php
namespace App\EventSubscriber;

use App\Entity\Absence;
use App\Entity\AbsenceJustificatif;
use App\Events;
use App\Repository\AbsenceJustificatifRepository;
use App\Repository\AbsenceRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Symfony\Component\Routing\RouterInterface;

/**
 * Envoi un mail de bienvenue à chaque creation d'un utilisateur
 *
 */
class AbsenceSubscriber implements EventSubscriberInterface
{
    /** @var EntityManagerInterface */
    private $entityManager;

    /** @var RouterInterface */
    private $router;

    /** @var AbsenceRepository */
    private $absenceRepository;

    /** @var AbsenceJustificatifRepository */
    private $absenceJustificatifRepository;

    /**
     * RegistrationNotifySubscriber constructor.
     *
     * @param EntityManagerInterface        $entityManager
     * @param RouterInterface               $router
     * @param AbsenceRepository             $absenceRepository
     * @param AbsenceJustificatifRepository $absenceJustificatifRepository
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        RouterInterface $router,
        AbsenceRepository $absenceRepository,
        AbsenceJustificatifRepository $absenceJustificatifRepository
    ) {
        $this->entityManager = $entityManager;
        $this->router = $router;
        $this->absenceRepository = $absenceRepository;
        $this->absenceJustificatifRepository = $absenceJustificatifRepository;
    }


    /**
     * @return array
     */
    public static function getSubscribedEvents(): array
    {
        return [
            // le nom de l'event et le nom de la fonction qui sera déclenché
            //Events::USER_REGISTERED => 'onUserRegistrated',
            Events::JUSTIFIE_ABSENCES         => 'onJustifieAbsences',
            Events::VERIFICATION_JUSTIFICATIF => 'onVerificationJustificatif',
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

    public function onVerificationJustificatif(GenericEvent $event): void
    {
        /** @var Absence $absence */
        $absence = $event->getSubject();
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
