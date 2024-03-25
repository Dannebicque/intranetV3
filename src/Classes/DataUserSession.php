<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/DataUserSession.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Classes;

use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\PersonnelDepartement;
use App\Entity\Semestre;
use App\Events;
use App\Repository\AnneeRepository;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\DepartementRepository;
use App\Repository\DiplomeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Doctrine\ORM\NonUniqueResultException;
use JsonException;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\EventDispatcher\GenericEvent;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use function count;
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
    protected array $semestres = []; // semestres actifs de la departement

    /**
     * @var Diplome[]
     */
    protected array $diplomes = [];

    /**
     * @var Annee[]
     */
    protected array $annees = [];

    protected ?Departement $departement = null;

    protected AnneeUniversitaireRepository $anneeUniversitaireRepository;

    private array $semestresActifs = [];

    private ?string $type_user = null;

    public function getTypeUser(): string
    {
        return $this->type_user;
    }

    /**
     * DataUserSession constructor.
     *
     * @throws NonUniqueResultException
     */
    public function __construct(
        protected SemestreRepository $semestreRepository,
        protected AnneeRepository $anneeRepository,
        protected DiplomeRepository $diplomeRepository,
        protected PersonnelRepository $personnelRepository,
        protected DepartementRepository $departementRepository,
        protected TokenStorageInterface $user,
        protected Security $security,
        EventDispatcherInterface $eventDispatcher,
        RequestStack $requestStack
    ) {
        if ($this->getUser() instanceof Etudiant) {
            $this->type_user = 'e';
            $this->departement = $this->departementRepository->findDepartementEtudiant($this->getUser());
        } elseif ($this->getUser() instanceof Personnel) {
            $this->type_user = 'p';
            if (null !== $requestStack->getSession()->get('departement')) {
                $this->departement = $this->departementRepository->findOneBy(['uuid' => $requestStack->getSession()->get('departement')]);
            }
        } else {
            // ni étudiant, ni personnel... étrange
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

    public function getUser(): Personnel|Etudiant|null
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
     * @return Semestre[]
     */
    public function semestresByDiplome(int $idDiplome): array
    {
        $diplome = $this->diplomeRepository->find($idDiplome);
        if (null !== $diplome) {
            return $this->semestreRepository->findByDiplome($diplome);
        }

        return [];
    }

    /**
     * @return Personnel[]
     */
    public function getPersonnels(): array
    {
        return $this->personnelRepository->findByDepartement($this->departement);
    }

    /**
     * @return Personnel[]
     */
    public function getAllPersonnels(): array
    {
        return $this->personnelRepository->findBy(['deleted' => false], ['nom' => 'ASC', 'prenom' => 'ASC']);
    }

    public function getAnneePrevisionnel(): ?int
    {
        return $this->getAnneeUniversitaire()?->getAnnee();
    }

    public function getDepartementId(): int
    {
        if (null !== $this->departement) {
            return $this->departement->getId();
        }

        return 0;
    }

    /**
     * @throws JsonException
     */
    public function isGoodDepartement(string $role): bool
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
     * @throws JsonException
     */
    public function isGoodDepartementArray(array $roles): bool
    {
        if (null !== $this->getUser() && !($this->getUser() instanceof Etudiant)) {
            $dptRoles = [];
            /** @var PersonnelDepartement $rf */
            foreach ($this->getUser()->getPersonnelDepartements() as $rf) {
                if (null !== $rf->getDepartement() &&
                    $rf->getDepartement()->getId() === $this->departement->getId()) {
                    $dptRoles[] = $rf->getRoles();
                }
            }

            if (is_array($dptRoles[0])) {
                return count(array_intersect($roles,
                    $dptRoles[0])) > 0 ? true : throw new AccessDeniedException('Vous n\'avez pas accès à ce semestre, ou vous n\'êtes pas dans le bon département, ou vous n\'avez pas les droit suffisants');
            }
        }

        throw new AccessDeniedException('Vous n\'avez pas accès à ce semestre, ou vous n\'êtes pas dans le bon département, ou vous n\'avez pas les droit suffisants');
    }

    public function getDepartementMultiple(): bool
    {
        if (null !== $this->getUser()) {
            return (is_countable($this->getUser()->getPersonnelDepartements()) ? count($this->getUser()->getPersonnelDepartements()) : 0) > 1;
        }

        return false;
    }

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return null !== $this->getUser() ? $this->getUser()->getAnneeUniversitaire() : null;
    }

    public function displayAnneeUniversitaire(): string
    {
        if (null !== $this->getAnneeUniversitaire()) {
            $fin = $this->getAnneeUniversitaire()->getAnnee() + 1;

            return $this->getAnneeUniversitaire()->getAnnee().' | '.$fin;
        }

        return '- err année universitaire -';
    }

    public function getSemestresActifs(): array
    {
        return $this->semestresActifs;
    }
}
