<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/BCDemande.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/09/2021 11:41
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\BCDemandRepository;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BCDemandeRepository::class)
 */
class BCDemande extends BaseEntity
{
    public const BC_PRESTATION_FOURNITURE = 'fourniture';
    public const BC_PRESTATION_SERVICE = 'service';
    public const BC_PRESTATION_TRAVAUX = 'travaux';

    public const BC_TABS_PRESTATIONS = [
        self::BC_PRESTATION_FOURNITURE => self::BC_PRESTATION_FOURNITURE,
        self::BC_PRESTATION_SERVICE => self::BC_PRESTATION_SERVICE,
        self::BC_PRESTATION_TRAVAUX => self::BC_PRESTATION_TRAVAUX,
    ];

    public const BC_AVIS_DIRECTION_FAVORABLE = 'favorable';
    public const BC_AVIS_DIRECTION_DEFAVORABLE = 'defavorable';
    public const BC_AVIS_DIRECTION_COMPLEMENT = 'complement';

    public const BC_TABS_AVIS = [
        self::BC_AVIS_DIRECTION_FAVORABLE => self::BC_AVIS_DIRECTION_FAVORABLE,
        self::BC_AVIS_DIRECTION_DEFAVORABLE => self::BC_AVIS_DIRECTION_DEFAVORABLE,
        self::BC_AVIS_DIRECTION_COMPLEMENT => self::BC_AVIS_DIRECTION_COMPLEMENT,
    ];

    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private ?string $service;

    /**
     * @ORM\ManyToOne(targetEntity=Departement::class, inversedBy="bCDemandes")
     */
    private ?Departement $departement;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private ?string $prestation;

    /**
     * @ORM\ManyToOne(targetEntity=Personnel::class, inversedBy="bcDemandesResponsable")
     */
    private ?Personnel $responsable;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $objet;

    /**
     * @ORM\Column(type="float")
     */
    private ?float $montantTTC;

    /**
     * @ORM\Column(type="float")
     */
    private ?float $montantHT;

    /**
     * @ORM\Column(type="text")
     */
    private ?string $description;

    /**
     * @ORM\Column(type="datetime")
     */
    private ?CarbonInterface $dateDemandeInitiale;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateValidationResponsable;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateValidationDirection;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateVerificationCompta;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateValidationCSA;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateClotureServiceFaitCSA;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateLivraisonEstimee;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private ?string $avisDirection;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private ?string $texteInfoComplementaire;

    /**
     * @ORM\ManyToOne(targetEntity=BCFournisseur::class, inversedBy="bCDemandes")
     */
    private ?BCFournisseur $fournisseur;

    /**
     * @ORM\Column(type="boolean")
     */
    private ?bool $commandeMarche;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private ?string $numeroBC;

    /**
     * @ORM\ManyToOne(targetEntity=Personnel::class, inversedBy="bcDemandeSignataireCompta")
     */
    private ?Personnel $signataireCompta;

    /**
     * @ORM\OneToMany(targetEntity=BCServiceFait::class, mappedBy="bCDemande")
     */
    private ArrayCollection $migos;

    public function __construct()
    {
        $this->migos = new ArrayCollection();
    }


    public function getService(): ?string
    {
        return $this->service;
    }

    public function setService(?string $service): self
    {
        $this->service = $service;

        return $this;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }

    public function getPrestation(): ?string
    {
        return $this->prestation;
    }

    public function setPrestation(string $prestation): self
    {
        $this->prestation = $prestation;

        return $this;
    }

    public function getResponsable(): ?Personnel
    {
        return $this->responsable;
    }

    public function setResponsable(?Personnel $responsable): self
    {
        $this->responsable = $responsable;

        return $this;
    }

    public function getObjet(): ?string
    {
        return $this->objet;
    }

    public function setObjet(string $objet): self
    {
        $this->objet = $objet;

        return $this;
    }

    public function getMontantTTC(): ?float
    {
        return $this->montantTTC;
    }

    public function setMontantTTC(float $montantTTC): self
    {
        $this->montantTTC = $montantTTC;

        return $this;
    }

    public function getMontantHT(): ?float
    {
        return $this->montantHT;
    }

    public function setMontantHT(float $montantHT): self
    {
        $this->montantHT = $montantHT;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDateDemandeInitiale(): ?CarbonInterface
    {
        return $this->dateDemandeInitiale;
    }

    public function setDateDemandeInitiale(CarbonInterface $dateDemandeInitiale): self
    {
        $this->dateDemandeInitiale = $dateDemandeInitiale;

        return $this;
    }

    public function getDateValidationResponsable(): ?CarbonInterface
    {
        return $this->dateValidationResponsable;
    }

    public function setDateValidationResponsable(?CarbonInterface $dateValidationResponsable): self
    {
        $this->dateValidationResponsable = $dateValidationResponsable;

        return $this;
    }

    public function getDateValidationDirection(): ?CarbonInterface
    {
        return $this->dateValidationDirection;
    }

    public function setDateValidationDirection(?CarbonInterface $dateValidationDirection): self
    {
        $this->dateValidationDirection = $dateValidationDirection;

        return $this;
    }

    public function getDateVerificationCompta(): ?CarbonInterface
    {
        return $this->dateVerificationCompta;
    }

    public function setDateVerificationCompta(?CarbonInterface $dateVerificationCompta): self
    {
        $this->dateVerificationCompta = $dateVerificationCompta;

        return $this;
    }

    public function getDateValidationCSA(): ?CarbonInterface
    {
        return $this->dateValidationCSA;
    }

    public function setDateValidationCSA(?CarbonInterface $dateValidationCSA): self
    {
        $this->dateValidationCSA = $dateValidationCSA;

        return $this;
    }

    public function getDateClotureServiceFaitCSA(): ?CarbonInterface
    {
        return $this->dateClotureServiceFaitCSA;
    }

    public function setDateClotureServiceFaitCSA(?CarbonInterface $dateClotureServiceFaitCSA): self
    {
        $this->dateClotureServiceFaitCSA = $dateClotureServiceFaitCSA;

        return $this;
    }

    public function getDateLivraisonEstimee(): ?CarbonInterface
    {
        return $this->dateLivraisonEstimee;
    }

    public function setDateLivraisonEstimee(?CarbonInterface $dateLivraisonEstimee): self
    {
        $this->dateLivraisonEstimee = $dateLivraisonEstimee;

        return $this;
    }

    public function getAvisDirection(): ?string
    {
        return $this->avisDirection;
    }

    public function setAvisDirection(string $avisDirection): self
    {
        $this->avisDirection = $avisDirection;

        return $this;
    }

    public function getTexteInfoComplementaire(): ?string
    {
        return $this->texteInfoComplementaire;
    }

    public function setTexteInfoComplementaire(?string $texteInfoComplementaire): self
    {
        $this->texteInfoComplementaire = $texteInfoComplementaire;

        return $this;
    }

    public function getFournisseur(): ?BCFournisseur
    {
        return $this->fournisseur;
    }

    public function setFournisseur(?BCFournisseur $fournisseur): self
    {
        $this->fournisseur = $fournisseur;

        return $this;
    }

    public function getCommandeMarche(): ?bool
    {
        return $this->commandeMarche;
    }

    public function setCommandeMarche(bool $commandeMarche): self
    {
        $this->commandeMarche = $commandeMarche;

        return $this;
    }

    public function getNumeroBC(): ?string
    {
        return $this->numeroBC;
    }

    public function setNumeroBC(string $numeroBC): self
    {
        $this->numeroBC = $numeroBC;

        return $this;
    }

    public function getSignataireCompta(): ?Personnel
    {
        return $this->signataireCompta;
    }

    public function setSignataireCompta(?Personnel $signataireCompta): self
    {
        $this->signataireCompta = $signataireCompta;

        return $this;
    }

    /**
     * @return Collection|BCServiceFait[]
     */
    public function getMigos(): Collection
    {
        return $this->migos;
    }

    public function addMigo(BCServiceFait $migo): self
    {
        if (!$this->migos->contains($migo)) {
            $this->migos[] = $migo;
            $migo->setBCDemande($this);
        }

        return $this;
    }

    public function removeMigo(BCServiceFait $migo): self
    {
        if ($this->migos->removeElement($migo)) {
            // set the owning side to null (unless already changed)
            if ($migo->getBCDemande() === $this) {
                $migo->setBCDemande(null);
            }
        }

        return $this;
    }
}
