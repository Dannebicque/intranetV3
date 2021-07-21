<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/DataUserSession.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/07/2021 17:05
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

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
use function count;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Symfony\Component\EventDispatcher\GenericEvent;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use function in_array;

/**
 * Récupère les données d'une session utilisateur
 * Par exemple les données d'une departement pour un permanent.
 */
class DataUserSession
{
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

    protected $departement;

    protected $user;

    protected SemestreRepository $semestreRepository;

    protected $messagesRepository;

    protected AnneeRepository $anneeRepository;

    protected AnneeUniversitaireRepository $anneeUniversitaireRepository;

    protected DiplomeRepository $diplomeRepository;

    protected PersonnelRepository $personnelRepository;

    protected DepartementRepository $departementRepository;

    protected NotificationRepository $notificationRepository;

    protected $security;

    private $semestresActifs;
    private $nbUnread;

    /**
     * @var string
     */
    private $type_user;
    private $anneeUniversitaire;

    public function getTypeUser(): string
    {
        return $this->type_user;
    }

    public function getNbUnread()
    {
        return $this->nbUnread;
    }

    /**
     * DataUserSession constructor.
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
            $this->type_user = 'e';
            $this->messagesRepository = $messageDestinataireEtudiantRepository;
            $this->departement = $this->departementRepository->findDepartementEtudiant($this->getUser());
        } elseif ($this->getUser() instanceof Personnel) {
            $this->type_user = 'p';
            $this->messagesRepository = $messageDestinatairePersonnelRepository;
            if (null !== $session->get('departement')) {
                $this->departement = $this->departementRepository->findOneBy(['uuid' => $session->get('departement')]);
            }
        } else {
            //ni étudiant, ni personnel... étrange
            $event = new GenericEvent('erreur-type-user');
            $eventDispatcher->dispatch($event, Events::REDIRECT_TO_LOGIN);
        }

        if (null !== $this->departement) {
            $this->semestres = $semestreRepository->findByDepartement($this->departement);
            $this->semestresActifs = [];
            foreach ($this->semestres as $semestre) {
                if ($semestre->getActif()) {
                    $this->semestresActifs[] = $semestre;
                }
            }
            $this->diplomes = $diplomeRepository->findByDepartement($this->departement);
            $this->annees = $anneeRepository->findByDepartement($this->departement);
        }
    }

    public function getUser()
    {
        if (null !== $this->user->getToken()) {
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
     * @return Semestre[]
     */
    public function semestresByDiplome($diplome): array
    {
        return $this->semestreRepository->findByDiplome($diplome);
    }

    /**
     * @return Personnel[]
     */
    public function getPersonnels(): array
    {
        return $this->personnelRepository->findByDepartement($this->departement->getId());
    }

    /**
     * @return Personnel[]
     */
    public function getAllPersonnels(): array
    {
        return $this->personnelRepository->findBy(['deleted' => false], ['nom' => 'ASC', 'prenom' => 'ASC']);
    }

    public function getNotifications()
    {
        if (null !== $this->getUser()) {
            return $this->getUser()->getNotifications();
        }

        return null;
    }

    public function getNbDocumentsFavoris()
    {
        if (null !== $this->getUser()) {
            return count($this->getUser()->getDocumentsFavoris());
        }

        return null;
    }

    public function getAnneePrevisionnel(): ?int
    {
        return $this->departement->getOptAnneePrevisionnel();
    }

    public function getDepartementId(): int
    {
        if (null !== $this->departement) {
            return $this->departement->getId();
        }

        return 0;
    }

    public function isGoodDepartement($role): bool
    {
        if (null !== $this->getUser() && !($this->getUser() instanceof Etudiant)) {
            /** @var PersonnelDepartement $rf */
            foreach ($this->getUser()->getPersonnelDepartements() as $rf) {
                if (null !== $rf->getDepartement() &&
                    false !== in_array($role, $rf->getRoles(), true) &&
                    $rf->getDepartement()->getId() === $this->departement->getId()) {
                    return true;
                }
            }

            return false;
        }

        return false;
    }

    /**
     * @return MessageDestinataireEtudiant[]|MessageDestinatairePersonnel[]|int|mixed|string
     *
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function getMessages()
    {
        if (null === $this->messages) {
            //todo: a revoir?? Les mêmes lignes ?
            if ($this->getUser() instanceof Etudiant) {
                $this->messages = $this->messagesRepository->findLast($this->getUser(), 4);
                $this->nbUnread = $this->messagesRepository->getNbUnread($this->getUser());
            } else {
                $this->messages = $this->messagesRepository->findLast($this->getUser(), 4);
                $this->nbUnread = $this->messagesRepository->getNbUnread($this->getUser());
            }
        }

        return $this->messages;
    }

    public function getDepartementMultiple(): bool
    {
        if (null !== $this->getUser()) {
            return count($this->getUser()->getPersonnelDepartements()) > 1;
        }

        return false;
    }

    /**
     * @return AnneeUniversitaire
     */
    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        if (null === $this->anneeUniversitaire) {
            if ($this->getUser() instanceof Etudiant) {
                $this->anneeUniversitaire = $this->getUser()->getAnneeUniversitaire();
            } else {
                $this->anneeUniversitaire = $this->anneeUniversitaireRepository->findActive();
            }
        }

        return $this->anneeUniversitaire;
    }

    public function displayAnneeUniversitaire(): string
    {
        $fin = $this->getAnneeUniversitaire()->getAnnee() + 1;

        return $this->getAnneeUniversitaire()->getAnnee() . ' | ' . $fin;
    }

    public function getArticlesCategories()
    {
        return null !== $this->getDepartement() ? $this->getDepartement()->getArticleCategories() : [];
    }

    public function getSemestresActifs(): array
    {
        return $this->semestresActifs;
    }
}
