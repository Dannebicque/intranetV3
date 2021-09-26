<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/BCServiceFait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/09/2021 14:31
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\BCServiceFaitRepository;
use Carbon\CarbonInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BCServiceFaitRepository::class)
 */
class BCServiceFait extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\ManyToOne(targetEntity=Personnel::class, inversedBy="bcServiceFaitReceptionniste")
     */
    private ?Personnel $receptionnisteMigo;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private ?string $qualiteReceptionniste;

    /**
     * @ORM\Column(type="boolean")
     */
    private ?bool $receptionComplete;

    /**
     * @ORM\Column(type="boolean")
     */
    private ?bool $prestationComplete;

    /**
     * @ORM\Column(type="boolean")
     */
    private ?bool $receptionPartielle;

    /**
     * @ORM\Column(type="float")
     */
    private ?float $montantTTCrecu;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $descriptionRecue;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private ?string $numeroMigo;

    /**
     * @ORM\Column(type="boolean")
     */
    private ?bool $bonLivraisonSifac;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateReceptionLivraison;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateSignatureResponsable;

    /**
     * @ORM\ManyToOne(targetEntity=Personnel::class, inversedBy="bcServiceFaitResponsableSignataire")
     */
    private ?Personnel $responsableSignataire;

    /**
     * @ORM\ManyToOne(targetEntity=BCDemande::class, inversedBy="migos")
     */
    private ?BCDemande $bCDemande;

    public function getReceptionnisteMigo(): ?Personnel
    {
        return $this->receptionnisteMigo;
    }

    public function setReceptionnisteMigo(?Personnel $receptionnisteMigo): self
    {
        $this->receptionnisteMigo = $receptionnisteMigo;

        return $this;
    }

    public function getQualiteReceptionniste(): ?string
    {
        return $this->qualiteReceptionniste;
    }

    public function setQualiteReceptionniste(?string $qualiteReceptionniste): self
    {
        $this->qualiteReceptionniste = $qualiteReceptionniste;

        return $this;
    }

    public function getReceptionComplete(): ?bool
    {
        return $this->receptionComplete;
    }

    public function setReceptionComplete(bool $receptionComplete): self
    {
        $this->receptionComplete = $receptionComplete;

        return $this;
    }

    public function getPrestationComplete(): ?bool
    {
        return $this->prestationComplete;
    }

    public function setPrestationComplete(bool $prestationComplete): self
    {
        $this->prestationComplete = $prestationComplete;

        return $this;
    }

    public function getReceptionPartielle(): ?bool
    {
        return $this->receptionPartielle;
    }

    public function setReceptionPartielle(bool $receptionPartielle): self
    {
        $this->receptionPartielle = $receptionPartielle;

        return $this;
    }

    public function getMontantTTCrecu(): ?float
    {
        return $this->montantTTCrecu;
    }

    public function setMontantTTCrecu(float $montantTTCrecu): self
    {
        $this->montantTTCrecu = $montantTTCrecu;

        return $this;
    }

    public function getDescriptionRecue(): ?string
    {
        return $this->descriptionRecue;
    }

    public function setDescriptionRecue(?string $descriptionRecue): self
    {
        $this->descriptionRecue = $descriptionRecue;

        return $this;
    }

    public function getNumeroMigo(): ?string
    {
        return $this->numeroMigo;
    }

    public function setNumeroMigo(string $numeroMigo): self
    {
        $this->numeroMigo = $numeroMigo;

        return $this;
    }

    public function getBonLivraisonSifac(): ?bool
    {
        return $this->bonLivraisonSifac;
    }

    public function setBonLivraisonSifac(bool $bonLivraisonSifac): self
    {
        $this->bonLivraisonSifac = $bonLivraisonSifac;

        return $this;
    }

    public function getDateReceptionLivraison(): ?CarbonInterface
    {
        return $this->dateReceptionLivraison;
    }

    public function setDateReceptionLivraison(?CarbonInterface $dateReceptionLivraison): self
    {
        $this->dateReceptionLivraison = $dateReceptionLivraison;

        return $this;
    }

    public function getDateSignatureResponsable(): ?CarbonInterface
    {
        return $this->dateSignatureResponsable;
    }

    public function setDateSignatureResponsable(?CarbonInterface $dateSignatureResponsable): self
    {
        $this->dateSignatureResponsable = $dateSignatureResponsable;

        return $this;
    }

    public function getResponsableSignataire(): ?Personnel
    {
        return $this->responsableSignataire;
    }

    public function setResponsableSignataire(?Personnel $responsableSignataire): self
    {
        $this->responsableSignataire = $responsableSignataire;

        return $this;
    }

    public function getBCDemande(): ?BCDemande
    {
        return $this->bCDemande;
    }

    public function setBCDemande(?BCDemande $bCDemande): self
    {
        $this->bCDemande = $bCDemande;

        return $this;
    }
}
