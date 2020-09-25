<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/StageEtudiant.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/09/2020 17:10

namespace App\Entity;

use App\Entity\Traits\UuidTrait;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StageEtudiantRepository")
 */
class StageEtudiant extends BaseEntity
{
    use UuidTrait;

    public const ETAT_STAGE_AUTORISE = 'ETAT_STAGE_AUTORISE';
    public const ETAT_STAGE_DEPOSE = 'ETAT_STAGE_DEPOSE';
    public const ETAT_STAGE_VALIDE = 'ETAT_STAGE_VALIDE';
    public const ETAT_STAGE_REFUS = 'ETAT_STAGE_REFUS';
    public const ETAT_STAGE_INCOMPLET = 'ETAT_STAGE_INCOMPLET';
    public const ETAT_STAGE_CONVENTION_IMPRIME = 'ETAT_STAGE_CONVENTION_IMPRIME';
    public const ETAT_STAGE_CONVENTION_ENVOYEE = 'ETAT_STAGE_CONVENTION_ENVOYEE';
    public const ETAT_STAGE_CONVENTION_RECUE = 'ETAT_STAGE_CONVENTION_RECUE';
    public const ETAT_STAGE_ERASMUS = 'ETAT_STAGE_ERASMUS';
    public const ETAT_STAGE_ETRANGER = 'ETAT_STAGE_ETRANGER';
    public const ETAT_STAGE_APPRENTISSAGE = 'ETAT_STAGE_APPRENTISSAGE';

    public const PERIODE_GRATIFICATION_HEURE = 'H';
    public const PERIODE_GRATIFICATION_JOUR = 'J';
    public const PERIODE_GRATIFICATION_SEMAINE = 'S';
    public const PERIODE_GRATIFICATION_MOIS = 'M';
    public const ETATS = [
        self::ETAT_STAGE_AUTORISE,
        self::ETAT_STAGE_DEPOSE,
        self::ETAT_STAGE_VALIDE,
        self::ETAT_STAGE_REFUS,
        self::ETAT_STAGE_INCOMPLET,
        self::ETAT_STAGE_CONVENTION_IMPRIME,
        self::ETAT_STAGE_CONVENTION_ENVOYEE,
        self::ETAT_STAGE_CONVENTION_RECUE
    ];

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\StagePeriode", inversedBy="stageEtudiants")
     */
    private $stagePeriode;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="stageEtudiants")
     * @Groups({"stage_periode_gestion"})
     */
    private $etudiant;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Contact", cascade={"persist", "remove"})
     * @Groups({"stage_entreprise_administration", "stage_entreprise"})
     */
    private $tuteur;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"stage_entreprise_administration", "stage_entreprise"})
     */
    private $serviceStageEntreprise;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"stage_entreprise"})
     */
    private $sujetStage;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateDepotFormulaire;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateValidation;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateConventionEnvoyee;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateConventionRecu;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $etatStage = 'ETAT_STAGE_AUTORISE';

    /**
     * @ORM\Column(type="date")
     * @Groups({"stage_entreprise_administration", "stage_entreprise", "stage_periode_gestion"})
     */
    private $dateDebutStage;

    /**
     * @ORM\Column(type="date")
     * @Groups({"stage_entreprise_administration", "stage_entreprise", "stage_periode_gestion"})
     */
    private $dateFinStage;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $activites;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $amenagementStage;

    /**
     * @ORM\Column(type="boolean")
     */
    private $gratification = false;

    /**
     * @ORM\Column(type="float")
     */
    private $gratificationMontant;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private $gratificationPeriode = 'H';

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $avantages;

    /**
     * @ORM\Column(type="float")
     */
    private $dureeHebdomadaire = 35;

    /**
     * @ORM\Column(type="integer")
     */
    private $dureeJoursStage = 0;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="stageEtudiants")
     * @Groups({"stage_periode_gestion"})
     */
    private $tuteurUniversitaire;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Entreprise", inversedBy="stageEtudiants", cascade={"persist", "remove"})
     * @Groups({"stage_entreprise_administration", "stage_periode_gestion"})
     */
    private $entreprise;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateAutorise;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateImprime;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Adresse", cascade={"persist", "remove"})
     */
    private $adresseStage;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $periodesInterruptions;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $commentaireDureeHebdomadaire;

    /**
     * StageEtudiant constructor.
     *
     * @param $gratificationMontant
     */
    public function __construct($gratificationMontant)
    {
        $this->setUuid(Uuid::uuid4());

        $this->setGratificationMontant($gratificationMontant);
    }

    /**
     * @return StagePeriode|null
     */
    public function getStagePeriode(): ?StagePeriode
    {
        return $this->stagePeriode;
    }

    public function setStagePeriode(?StagePeriode $stagePeriode): self
    {
        $this->stagePeriode = $stagePeriode;

        return $this;
    }

    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    public function getTuteur(): ?Contact
    {
        return $this->tuteur;
    }

    public function setTuteur(?Contact $tuteur): self
    {
        $this->tuteur = $tuteur;

        return $this;
    }

    public function getServiceStageEntreprise(): ?string
    {
        return $this->serviceStageEntreprise;
    }

    public function setServiceStageEntreprise(string $serviceStageEntreprise): self
    {
        $this->serviceStageEntreprise = $serviceStageEntreprise;

        return $this;
    }

    public function getSujetStage(): ?string
    {
        return $this->sujetStage;
    }

    public function setSujetStage(string $sujetStage): self
    {
        $this->sujetStage = $sujetStage;

        return $this;
    }

    public function getDateDepotFormulaire(): ?DateTimeInterface
    {
        return $this->dateDepotFormulaire;
    }

    public function setDateDepotFormulaire(DateTimeInterface $dateDepotFormulaire): self
    {
        $this->dateDepotFormulaire = $dateDepotFormulaire;

        return $this;
    }

    public function getDateValidation(): ?DateTimeInterface
    {
        return $this->dateValidation;
    }

    public function setDateValidation(DateTimeInterface $dateValidation): self
    {
        $this->dateValidation = $dateValidation;

        return $this;
    }

    public function getDateConventionEnvoyee(): ?DateTimeInterface
    {
        return $this->dateConventionEnvoyee;
    }

    public function setDateConventionEnvoyee(DateTimeInterface $dateConventionEnvoyee): self
    {
        $this->dateConventionEnvoyee = $dateConventionEnvoyee;

        return $this;
    }

    public function getDateConventionRecu(): ?DateTimeInterface
    {
        return $this->dateConventionRecu;
    }

    public function setDateConventionRecu(DateTimeInterface $dateConventionRecu): self
    {
        $this->dateConventionRecu = $dateConventionRecu;

        return $this;
    }

    public function getEtatStage(): ?string
    {
        return $this->etatStage;
    }

    public function setEtatStage(string $etatStage): self
    {
        $this->etatStage = $etatStage;

        return $this;
    }

    public function getDateDebutStage(): ?DateTimeInterface
    {
        return $this->dateDebutStage;
    }

    public function setDateDebutStage(DateTimeInterface $dateDebutStage): self
    {
        $this->dateDebutStage = $dateDebutStage;

        return $this;
    }

    public function getDateFinStage(): ?DateTimeInterface
    {
        return $this->dateFinStage;
    }

    public function setDateFinStage(DateTimeInterface $dateFinStage): self
    {
        $this->dateFinStage = $dateFinStage;

        return $this;
    }

    public function getActivites(): ?string
    {
        return $this->activites;
    }

    public function setActivites(string $activites): self
    {
        $this->activites = $activites;

        return $this;
    }

    public function getAmenagementStage(): ?string
    {
        return $this->amenagementStage;
    }

    public function setAmenagementStage(string $amenagementStage): self
    {
        $this->amenagementStage = $amenagementStage;

        return $this;
    }

    public function getGratification(): ?bool
    {
        return $this->gratification;
    }

    public function setGratification(bool $gratification): self
    {
        $this->gratification = $gratification;

        return $this;
    }

    public function getGratificationMontant(): ?float
    {
        return $this->gratificationMontant;
    }

    public function setGratificationMontant(float $gratificationMontant): self
    {
        $this->gratificationMontant = $gratificationMontant;

        return $this;
    }

    public function getGratificationPeriode(): ?string
    {
        return $this->gratificationPeriode;
    }

    public function setGratificationPeriode(string $gratificationPeriode): self
    {
        $this->gratificationPeriode = $gratificationPeriode;

        return $this;
    }

    public function getAvantages(): ?string
    {
        return $this->avantages;
    }

    public function setAvantages(string $avantages): self
    {
        $this->avantages = $avantages;

        return $this;
    }

    public function getDureeHebdomadaire(): ?float
    {
        return $this->dureeHebdomadaire;
    }

    public function setDureeHebdomadaire(float $dureeHebdomadaire): self
    {
        $this->dureeHebdomadaire = $dureeHebdomadaire;

        return $this;
    }

    public function getDureeJoursStage(): ?int
    {
        return $this->dureeJoursStage;
    }

    public function setDureeJoursStage(int $dureeJoursStage): self
    {
        $this->dureeJoursStage = $dureeJoursStage;

        return $this;
    }

    public function getTuteurUniversitaire(): ?Personnel
    {
        return $this->tuteurUniversitaire;
    }

    public function setTuteurUniversitaire(?Personnel $tuteurUniversitaire): self
    {
        $this->tuteurUniversitaire = $tuteurUniversitaire;

        return $this;
    }

    public function getEntreprise(): ?Entreprise
    {
        return $this->entreprise;
    }

    public function setEntreprise(?Entreprise $entreprise): self
    {
        $this->entreprise = $entreprise;

        return $this;
    }

    public function getDateAutorise(): ?DateTimeInterface
    {
        return $this->dateAutorise;
    }

    public function setDateAutorise(DateTimeInterface $dateAutorise): self
    {
        $this->dateAutorise = $dateAutorise;

        return $this;
    }

    public function getDateImprime(): ?DateTimeInterface
    {
        return $this->dateImprime;
    }

    public function setDateImprime(DateTimeInterface $dateImprime): self
    {
        $this->dateImprime = $dateImprime;

        return $this;
    }

    public function getAdresseStage(): ?Adresse
    {
        return $this->adresseStage;
    }

    public function setAdresseStage(?Adresse $adresseStage): self
    {
        $this->adresseStage = $adresseStage;

        return $this;
    }

    public function getPeriodesInterruptions(): ?string
    {
        return $this->periodesInterruptions;
    }

    public function setPeriodesInterruptions(?string $periodesInterruptions): self
    {
        $this->periodesInterruptions = $periodesInterruptions;

        return $this;
    }

    public function getCommentaireDureeHebdomadaire(): ?string
    {
        return $this->commentaireDureeHebdomadaire;
    }

    public function setCommentaireDureeHebdomadaire(?string $commentaireDureeHebdomadaire): self
    {
        $this->commentaireDureeHebdomadaire = $commentaireDureeHebdomadaire;

        return $this;
    }

    public function setUuid($uuid): self
    {
        $this->uuid = $uuid;

        return $this;
    }

    public function dateDebutStageFr(): string
    {
        return $this->getDateDebutStage() !== null ? $this->getDateDebutStage()->format('d/m/Y') : '-';
    }

    public function dateFinStageFr(): string
    {
        return $this->getDateFinStage() !== null ? $this->getDateFinStage()->format('d/m/Y') : '-';
    }
}
