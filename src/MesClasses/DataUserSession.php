<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 01/04/2018
 * Time: 19:30
 */

namespace App\MesClasses;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\Formation;
use App\Entity\MessageDestinataireEtudiant;
use App\Entity\MessageDestinatairePersonnel;
use App\Entity\Personnel;
use App\Entity\PersonnelFormation;
use App\Entity\Semestre;
use App\Events;
use App\Repository\AnneeRepository;
use App\Repository\DiplomeRepository;
use App\Repository\FormationRepository;
use App\Repository\MessageDestinataireEtudiantRepository;
use App\Repository\MessageDestinatairePersonnelRepository;
use App\Repository\NotificationRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Security;

/**
 * Récupère les données d'une session utilisateur
 * Par exemple les données d'une formation pour un permanent
 */
class DataUserSession
{
    //todo: séparer mes données communes quelque soit le type, des données issues des types d'user

    /**
     * @var Semestre[]
     */
    protected $semestres; //semestres actifs de la formation

    /**
     * @var Diplome[]
     */
    protected $diplomes;

    /**
     * @var Annee[]
     */
    protected $annees;

    /** @var MessageDestinataireEtudiant[]|MessageDestinatairePersonnel[] */
    protected $messages;

    /**
     * @var Formation
     */
    protected $formation;

    protected $user;

    /** @var SemestreRepository */
    protected $semestreRepository;

    protected $messagesRepository;

    /** @var AnneeRepository */
    protected $anneeRepository;

    /** @var DiplomeRepository */
    protected $diplomeRepository;

    /** @var PersonnelRepository */
    protected $personnelRepository;

    /** @var FormationRepository */
    protected $formationRepository;

    /** @var NotificationRepository */
    protected $notificationRepository;

    protected $security;

    /**
     * DataUserSession constructor.
     *
     * @param SemestreRepository                     $semestreRepository
     * @param MessageDestinataireEtudiantRepository  $messageDestinataireEtudiantRepository
     * @param MessageDestinatairePersonnelRepository $messageDestinatairePersonnelRepository
     * @param AnneeRepository                        $anneeRepository
     * @param DiplomeRepository                      $diplomeRepository
     * @param PersonnelRepository                    $personnelRepository
     * @param FormationRepository                    $formationRepository
     * @param NotificationRepository                 $notificationRepository
     * @param TokenStorageInterface                  $user
     * @param Security                               $security
     *
     * @param EventDispatcherInterface               $eventDispatcher
     * @param SessionInterface                       $session
     *
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function __construct(
        SemestreRepository $semestreRepository,
        MessageDestinataireEtudiantRepository $messageDestinataireEtudiantRepository,
        MessageDestinatairePersonnelRepository $messageDestinatairePersonnelRepository,
        AnneeRepository $anneeRepository,
        DiplomeRepository $diplomeRepository,
        PersonnelRepository $personnelRepository,
        FormationRepository $formationRepository,
        NotificationRepository $notificationRepository,
        TokenStorageInterface $user,
        Security $security,
        EventDispatcherInterface $eventDispatcher,
        SessionInterface $session
    ) {
        $this->semestreRepository = $semestreRepository;
        $this->anneeRepository = $anneeRepository;
        $this->diplomeRepository = $diplomeRepository;
        $this->personnelRepository = $personnelRepository;
        $this->formationRepository = $formationRepository;
        $this->notificationRepository = $notificationRepository;


        $this->user = $user;
        $this->security = $security;

        if ($this->getUser() instanceof Etudiant) {
           $this->messagesRepository = $messageDestinataireEtudiantRepository;
            $this->formation = $this->formationRepository->findFormationEtudiant($this->getUser());
       } elseif ($this->getUser() instanceof Personnel) {
            $this->messagesRepository = $messageDestinatairePersonnelRepository;
            if ($session->get('formation') !== null) {
                $this->formation = $this->formationRepository->find($session->get('formation'));
            }
        } else {
            //ni étudiant, ni personnel... étrange
            $event = new GenericEvent('erreur-type-user');
            $eventDispatcher->dispatch(Events::REDIRECT_TO_LOGIN, $event);
        }

        if ($this->formation !== null) {
            //if ($this->security->isGranted('ROLE_PERMANENT') || $this->security->isGranted('ROLE_ETUDIANT')) {
            $this->semestres = $semestreRepository->findByFormation($this->formation);
            $this->diplomes = $diplomeRepository->findByFormation($this->formation);
            $this->annees = $anneeRepository->findByFormation($this->formation);
        }
    }

    /**
     * @return \App\Entity\Personnel|\App\Entity\Etudiant|string
     */
    public function getUser()
    {
        if ($this->user->getToken() !== null) {
            return $this->user->getToken()->getUser();
        }

        return null;
    }

    /**
     * @return Semestre[]
     */
    public function getSemestres(): array
    {
        return $this->semestres;
    }

    /**
     * @return Diplome[]
     */
    public function getDiplomes(): array
    {
        return $this->diplomes;
    }

    /**
     * @return Annee[]
     */
    public function getAnnees(): array
    {
        return $this->annees;
    }

    /**
     * @return Formation
     */
    public function getFormation(): ?Formation
    {
        return $this->formation;
    }

    /**
     * @param $diplome
     *
     * @return mixed
     */
    public function semestresByDiplome($diplome)
    {
        return $this->semestreRepository->findByDiplome($diplome);
    }

    /**
     * @return mixed
     */
    public function getPersonnels()
    {
        return $this->personnelRepository->findByFormation($this->formation->getId());
    }

    /**
     * @return mixed
     */
    public function getPersonnelsEnseignant()
    {
        //todo: les administrations sont aussi des permanents ?
        return $this->personnelRepository->findByType('permanent', $this->formation);
    }

    /**
     */
    public function getNotifications()
    {
        if ($this->getUser() !== null) {
            return $this->getUser()->getNotifications();
        }

        return null;
    }

    /**
     * @return int|null
     */
    public function getAnneePrevisionnel(): ?int
    {
        return $this->formation->getOptAnneePrevisionnel();
    }

    /**
     * @return null
     */
    public function getFormationId()
    {
        if ($this->formation !== null) {
            return $this->formation->getId();
        }

        return null;
    }

    /**
     * @param $role
     *
     * @return bool
     */
    public function isGoodFormation($role): bool
    {
        if ($this->getUser() !== null && !($this->getUser() instanceof Etudiant)) {
            /** @var PersonnelFormation $rf */
            foreach ($this->getUser()->getPersonnelFormations() as $rf) {
                if ($rf->getFormation() !== null &&
                    \in_array($role, $rf->getRoles(), true) !== false &&
                    $rf->getFormation()->getId() === $this->formation->getId()) {
                    return true;
                }
            }

            return false;
        }

        return false;
    }

    public function getMessages()
    {
        if ($this->getUser() instanceof Etudiant) {
            $this->messages = $this->messagesRepository->findLast($this->getUser(), 10);
        } else {
            $this->messages = $this->messagesRepository->findLast($this->getUser(), 10);
        }

        return $this->messages;
    }

    /**
     * @return bool
     */
    public function getFormationMultiple() : bool
    {
        return count($this->getUser()->getPersonnelFormations()) > 1;
    }

    public function getAnneeUniversitaire() {
        if ($this->getUser() !== null && $this->getUser() instanceof Etudiant) {
            return $this->getUser()->getAnneeUniversitaire();
        } else {
            return date('Y'); //todo: a améliorer pour les non étudiants...
        }
    }
}
