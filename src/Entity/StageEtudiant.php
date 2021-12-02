<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/StageEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2021 12:37
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use App\Utils\Tools;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StageEtudiantRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class StageEtudiant extends BaseEntity
{
    use UuidTrait;
    use LifeCycleTrait;

    public const ETAT_STAGE_AUTORISE = 'ETAT_STAGE_AUTORISE';
    public const ETAT_STAGE_DEPOSE = 'ETAT_STAGE_DEPOSE';
    public const ETAT_STAGE_VALIDE = 'ETAT_STAGE_VALIDE';
    public const ETAT_STAGE_REFUS = 'ETAT_STAGE_REFUS';
    public const ETAT_STAGE_INCOMPLET = 'ETAT_STAGE_INCOMPLET';
    public const ETAT_STAGE_CONVENTION_IMPRIMEE = 'ETAT_STAGE_CONVENTION_IMPRIMEE';
    public const ETAT_STAGE_CONVENTION_ENVOYEE = 'ETAT_STAGE_CONVENTION_ENVOYEE';
    public const ETAT_STAGE_CONVENTION_RECUE = 'ETAT_STAGE_CONVENTION_RECUE';
    public const ETAT_STAGE_ERASMUS = 'ETAT_STAGE_ERASMUS';
    public const ETAT_STAGE_ETRANGER = 'ETAT_STAGE_ETRANGER';
    public const ETAT_STAGE_APPRENTISSAGE = 'ETAT_STAGE_APPRENTISSAGE';

    public const PERIODE_GRATIFICATION_HEURE = 'H';
    public const PERIODE_GRATIFICATION_JOUR = 'J';
    public const PERIODE_GRATIFICATION_MOIS = 'M';
    public const ETATS = [
        self::ETAT_STAGE_AUTORISE,
        self::ETAT_STAGE_DEPOSE,
        self::ETAT_STAGE_VALIDE,
        self::ETAT_STAGE_REFUS,
        self::ETAT_STAGE_INCOMPLET,
        self::ETAT_STAGE_CONVENTION_IMPRIMEE,
        self::ETAT_STAGE_CONVENTION_ENVOYEE,
        self::ETAT_STAGE_CONVENTION_RECUE,
    ];

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\StagePeriode", inversedBy="stageEtudiants")
     */
    private ?StagePeriode $stagePeriode;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="stageEtudiants")
     * @Groups({"stage_periode_gestion"})
     */
    private ?Etudiant $etudiant;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Contact", cascade={"persist", "remove"})
     * @Groups({"stage_entreprise_administration", "stage_entreprise"})
     */
    private ?Contact $tuteur;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"stage_entreprise_administration", "stage_entreprise"})
     */
    private ?string $serviceStageEntreprise = '';

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"stage_entreprise"})
     */
    private ?string $sujetStage = '';

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateDepotFormulaire;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateValidation;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateConventionEnvoyee;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateConventionRecu;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private string $etatStage = 'ETAT_STAGE_AUTORISE';

    /**
     * @ORM\Column(type="date")
     * @Groups({"stage_entreprise_administration", "stage_entreprise", "stage_periode_gestion"})
     */
    private ?CarbonInterface $dateDebutStage = null;

    /**
     * @ORM\Column(type="date")
     * @Groups({"stage_entreprise_administration", "stage_entreprise", "stage_periode_gestion"})
     */
    private ?CarbonInterface $dateFinStage = null;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $activites;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $amenagementStage;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $gratification = false;

    /**
     * @ORM\Column(type="float")
     *
     * @Assert\Type("float")
     */
    private ?float $gratificationMontant;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private string $gratificationPeriode = 'H';

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $avantages;

    /**
     * @ORM\Column(type="float")
     */
    private float $dureeHebdomadaire = 35;

    /**
     * @ORM\Column(type="integer")
     */
    private int $dureeJoursStage = 0;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="stageEtudiants")
     * @Groups({"stage_periode_gestion"})
     */
    private ?Personnel $tuteurUniversitaire;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Entreprise", inversedBy="stageEtudiants", cascade={"persist", "remove"})
     * @Groups({"stage_entreprise_administration", "stage_periode_gestion"})
     */
    private ?Entreprise $entreprise;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateAutorise;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateImprime;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Adresse", cascade={"persist", "remove"})
     */
    private ?Adresse $adresseStage;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $periodesInterruptions;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $commentaireDureeHebdomadaire;

    /**
     * @ORM\OneToMany(targetEntity=StageAvenant::class, mappedBy="stageEtudiant")
     */
    private Collection $stageAvenants;

    public function __construct(?float $gratificationMontant)
    {
        $this->setUuid(Uuid::uuid4());

        $this->setGratificationMontant($gratificationMontant);
        $this->stageAvenants = new ArrayCollection();
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
    }

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

    public function setServiceStageEntreprise(?string $serviceStageEntreprise): self
    {
        $this->serviceStageEntreprise = $serviceStageEntreprise;

        return $this;
    }

    public function getSujetStage(): ?string
    {
        return $this->sujetStage;
    }

    public function setSujetStage(?string $sujetStage): self
    {
        $this->sujetStage = $sujetStage;

        return $this;
    }

    public function getDateDepotFormulaire(): ?CarbonInterface
    {
        return $this->dateDepotFormulaire;
    }

    public function setDateDepotFormulaire(CarbonInterface $dateDepotFormulaire): self
    {
        $this->dateDepotFormulaire = $dateDepotFormulaire;

        return $this;
    }

    public function getDateValidation(): ?CarbonInterface
    {
        return $this->dateValidation;
    }

    public function setDateValidation(CarbonInterface $dateValidation): self
    {
        $this->dateValidation = $dateValidation;

        return $this;
    }

    public function getDateConventionEnvoyee(): ?CarbonInterface
    {
        return $this->dateConventionEnvoyee;
    }

    public function setDateConventionEnvoyee(CarbonInterface $dateConventionEnvoyee): self
    {
        $this->dateConventionEnvoyee = $dateConventionEnvoyee;

        return $this;
    }

    public function getDateConventionRecu(): ?CarbonInterface
    {
        return $this->dateConventionRecu;
    }

    public function setDateConventionRecu(CarbonInterface $dateConventionRecu): self
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

    public function getDateDebutStage(): ?CarbonInterface
    {
        return $this->dateDebutStage;
    }

    public function setDateDebutStage(CarbonInterface $dateDebutStage): self
    {
        $this->dateDebutStage = $dateDebutStage;

        return $this;
    }

    public function getDateFinStage(): ?CarbonInterface
    {
        return $this->dateFinStage;
    }

    public function setDateFinStage(CarbonInterface $dateFinStage): self
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

    public function setAmenagementStage(?string $amenagementStage): self
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

    public function setGratificationMontant(mixed $gratificationMontant): self
    {
        $this->gratificationMontant = Tools::convertToFloat($gratificationMontant);

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

    public function setAvantages(?string $avantages): self
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

    public function getDateAutorise(): ?CarbonInterface
    {
        return $this->dateAutorise;
    }

    public function setDateAutorise(CarbonInterface $dateAutorise): self
    {
        $this->dateAutorise = $dateAutorise;

        return $this;
    }

    public function getDateImprime(): ?CarbonInterface
    {
        return $this->dateImprime;
    }

    public function setDateImprime(CarbonInterface $dateImprime): self
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
        return null !== $this->getDateDebutStage() ? $this->getDateDebutStage()->format('d/m/Y') : '-';
    }

    public function dateFinStageFr(): string
    {
        return null !== $this->getDateFinStage() ? $this->getDateFinStage()->format('d/m/Y') : '-';
    }

    /**
     * @return Collection|StageAvenant[]
     */
    public function getStageAvenants(): Collection
    {
        return $this->stageAvenants;
    }

    public function addStageAvenant(StageAvenant $stageAvenant): self
    {
        if (!$this->stageAvenants->contains($stageAvenant)) {
            $this->stageAvenants[] = $stageAvenant;
            $stageAvenant->setStageEtudiant($this);
        }

        return $this;
    }

    public function removeStageAvenant(StageAvenant $stageAvenant): self
    {
        if ($this->stageAvenants->contains($stageAvenant)) {
            $this->stageAvenants->removeElement($stageAvenant);
            // set the owning side to null (unless already changed)
            if ($stageAvenant->getStageEtudiant() === $this) {
                $stageAvenant->setStageEtudiant(null);
            }
        }

        return $this;
    }
}
