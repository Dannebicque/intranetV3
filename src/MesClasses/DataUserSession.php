<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/DataUserSession.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 18/08/2019 11:48
 * @lastUpdate 18/08/2019 11:47
 */

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 01/04/2018
 * Time: 19:30
 */

namespace App\MesClasses;

use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\MessageDestinataireEtudiant;
use App\Entity\MessageDestinatairePersonnel;
use App\Entity\Personnel;
use App\Entity\PersonnelDepartement;
use App\Entity\Semestre;
use App\Events;
use App\Repository\AnneeRepository;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\DepartementRepository;
use App\Repository\DiplomeRepository;
use App\Repository\MessageDestinataireEtudiantRepository;
use App\Repository\MessageDestinatairePersonnelRepository;
use App\Repository\NotificationRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\EventDispatcher\GenericEvent;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use function in_array;

/**
 * Récupère les données d'une session utilisateur
 * Par exemple les données d'une departement pour un permanent
 */
class DataUserSession
{
    //todo: séparer mes données communes quelque soit le type, des données issues des types d'user

    /**
     * @var Semestre[]
     */
    protected $semestres; //semestres actifs de la departement

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
     * @var Departement
     */
    protected $departement;

    protected $user;

    /** @var SemestreRepository */
    protected $semestreRepository;

    protected $messagesRepository;

    /** @var AnneeRepository */
    protected $anneeRepository;

    /** @var AnneeUniversitaireRepository */
    protected $anneeUniversitaireRepository;

    /** @var DiplomeRepository */
    protected $diplomeRepository;

    /** @var PersonnelRepository */
    protected $personnelRepository;

    /** @var DepartementRepository */
    protected $departementRepository;

    /** @var NotificationRepository */
    protected $notificationRepository;

    protected $security;
    /**
     * @var QueryBuilder
     */
    private $semestresActifs;

    /**
     * DataUserSession constructor.
     *
     * @param SemestreRepository                     $semestreRepository
     * @param MessageDestinataireEtudiantRepository  $messageDestinataireEtudiantRepository
     * @param MessageDestinatairePersonnelRepository $messageDestinatairePersonnelRepository
     * @param AnneeRepository                        $anneeRepository
     * @param DiplomeRepository                      $diplomeRepository
     * @param PersonnelRepository                    $personnelRepository
     * @param DepartementRepository                  $departementRepository
     * @param NotificationRepository                 $notificationRepository
     * @param AnneeUniversitaireRepository           $anneeUniversitaireRepository
     * @param TokenStorageInterface                  $user
     * @param Security                               $security
     *
     * @param EventDispatcherInterface               $eventDispatcher
     * @param SessionInterface                       $session
     *
     * @throws NonUniqueResultException
     */
    public function __construct(
        SemestreRepository $semestreRepository,
        MessageDestinataireEtudiantRepository $messageDestinataireEtudiantRepository,
        MessageDestinatairePersonnelRepository $messageDestinatairePersonnelRepository,
        AnneeRepository $anneeRepository,
        DiplomeRepository $diplomeRepository,
        PersonnelRepository $personnelRepository,
        DepartementRepository $departementRepository,
        NotificationRepository $notificationRepository,
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        TokenStorageInterface $user,
        Security $security,
        EventDispatcherInterface $eventDispatcher,
        SessionInterface $session
    ) {
        $this->semestreRepository = $semestreRepository;
        $this->anneeRepository = $anneeRepository;
        $this->diplomeRepository = $diplomeRepository;
        $this->personnelRepository = $personnelRepository;
        $this->departementRepository = $departementRepository;
        $this->notificationRepository = $notificationRepository;
        $this->anneeUniversitaireRepository = $anneeUniversitaireRepository;


        $this->user = $user;
        $this->security = $security;

        if ($this->getUser() instanceof Etudiant) {
            $this->messagesRepository = $messageDestinataireEtudiantRepository;
            $this->departement = $this->departementRepository->findDepartementEtudiant($this->getUser());
        } elseif ($this->getUser() instanceof Personnel) {
            $this->messagesRepository = $messageDestinatairePersonnelRepository;
            if ($session->get('departement') !== null) {
                $this->departement = $this->departementRepository->findOneBy(['uuid' => $session->get('departement')]);
            }
        } else {
            //ni étudiant, ni personnel... étrange
            $event = new GenericEvent('erreur-type-user');
            $eventDispatcher->dispatch($event, Events::REDIRECT_TO_LOGIN);
        }

        if ($this->departement !== null) {
            //if ($this->security->isGranted('ROLE_PERMANENT') || $this->security->isGranted('ROLE_ETUDIANT')) {
            $this->semestres = $semestreRepository->findByDepartement($this->departement);
            $this->semestresActifs = $semestreRepository->findByDepartementActif($this->departement);
            $this->diplomes = $diplomeRepository->findByDepartement($this->departement);
            $this->annees = $anneeRepository->findByDepartement($this->departement);
        }
    }

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
    public function getDiplomes(): ?array
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
     * @return Departement
     */
    public function getDepartement(): ?Departement
    {
        return $this->departement;
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
        return $this->personnelRepository->findByDepartement($this->departement->getId());
    }

    /**
     * @return mixed
     */
    public function getPersonnelsEnseignant()
    {
        //todo: les administrations sont aussi des permanents ?
        return $this->personnelRepository->findByType('permanent', $this->departement);
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
        return $this->departement->getOptAnneePrevisionnel();
    }

    /**
     * @return int
     */
    public function getDepartementId(): int
    {
        if ($this->departement !== null) {
            return $this->departement->getId();
        }

        return 0;
    }

    /**
     * @param $role
     *
     * @return bool
     */
    public function isGoodDepartement($role): bool
    {
        if ($this->getUser() !== null && !($this->getUser() instanceof Etudiant)) {
            /** @var PersonnelDepartement $rf */
            foreach ($this->getUser()->getPersonnelDepartements() as $rf) {
                if ($rf->getDepartement() !== null &&
                    in_array($role, $rf->getRoles(), true) !== false &&
                    $rf->getDepartement()->getId() === $this->departement->getId()) {
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
    public function getDepartementMultiple(): bool
    {
        if ($this->getUser() !== null) {
            return count($this->getUser()->getPersonnelDepartements()) > 1;
        }

        return false; //todo: pas le plus judicieux peut etre?
    }

    /**
     * @return AnneeUniversitaire
     */
    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        if ($this->getUser() instanceof Etudiant) {
            return $this->getUser()->getAnneeUniversitaire();
        }

        return $this->anneeUniversitaireRepository->findActive();

    }

    /**
     * @return string
     */
    public function displayAnneeUniversitaire(): string
    {
        $fin = $this->getAnneeUniversitaire()->getAnnee() + 1;

        return $this->getAnneeUniversitaire()->getAnnee() . ' | ' . $fin;

    }

    public function getArticlesCategories()
    {

        return $this->getDepartement() !== null ? $this->getDepartement()->getArticleCategories() : [];
    }

    /**
     * @return array
     */
    public function getSemestresActifs(): array
    {
        return $this->semestresActifs;
    }


}
