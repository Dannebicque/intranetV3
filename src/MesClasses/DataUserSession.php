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
use App\Entity\PersonnelFormation;
use App\Entity\Semestre;
use App\Repository\AnneeRepository;
use App\Repository\DiplomeRepository;
use App\Repository\FormationRepository;
use App\Repository\NotificationRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
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

    /**
     * @var Formation
     */
    protected $formation;

    protected $user;

    /** @var SemestreRepository */
    protected $semestreRepository;

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
     * @param SemestreRepository     $semestreRepository
     * @param AnneeRepository        $anneeRepository
     * @param DiplomeRepository      $diplomeRepository
     * @param PersonnelRepository    $personnelRepository
     * @param FormationRepository    $formationRepository
     * @param NotificationRepository $notificationRepository
     * @param TokenStorageInterface  $user
     * @param Security               $security
     */
    public function __construct(
        SemestreRepository $semestreRepository,
        AnneeRepository $anneeRepository,
        DiplomeRepository $diplomeRepository,
        PersonnelRepository $personnelRepository,
        FormationRepository $formationRepository,
        NotificationRepository $notificationRepository,
        TokenStorageInterface $user,
        Security $security
    ) {
        $this->semestreRepository = $semestreRepository;
        $this->anneeRepository = $anneeRepository;
        $this->diplomeRepository = $diplomeRepository;
        $this->personnelRepository = $personnelRepository;
        $this->formationRepository = $formationRepository;
        $this->notificationRepository = $notificationRepository;

        $this->user = $user;
        $this->security = $security;

        //if ($this->security->isGranted('ROLE_PERMANENT') || $this->security->isGranted('ROLE_ETUDIANT')) {
        $this->semestres = $semestreRepository->findAll(); //todo à filter selon la formation
        $this->diplomes = $diplomeRepository->findAll(); //todo à filter selon la formation
        $this->annees = $anneeRepository->findAll(); //todo à filter selon la formation
        $this->formation = $formationRepository->find(1); //todo: récuéprer selon le user et la formation choisie
        //}
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
     */
    public function getNotifications()
    {
        if ($this->getUser() !== null) {
            return $this->getUser()->getNotifications();
        }

        return null;
    }

    /**
     * @return \App\Entity\Personnel|\App\Entity\Etudiant|null
     */
    public function getUser()
    {
        return $this->user->getToken()->getUser();
    }

    /**
     * @return int|null
     */
    public function getAnneeUniversitaire(): ?int
    {
        return $this->formation->getAnneeCourante();
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

            $autorize = false;

            /** @var PersonnelFormation $rf */
            foreach ($this->getUser()->getPersonnelFormations() as $rf) {
                if ($rf->getRole() === $role && $rf->getFormation() !== null && $rf->getFormation()->getId() === $this->formation->getId()) {
                    $autorize = true;
                }
            }

            return $autorize;
        }

        return false;

    }
}