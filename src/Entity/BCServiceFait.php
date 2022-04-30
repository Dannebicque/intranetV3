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
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BCServiceFaitRepository::class)]
class BCServiceFait extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'bcServiceFaitReceptionniste')]
    private ?Personnel $receptionnisteMigo = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 100, nullable: true)]
    private ?string $qualiteReceptionniste = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::BOOLEAN)]
    private ?bool $receptionComplete = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::BOOLEAN)]
    private ?bool $prestationComplete = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::BOOLEAN)]
    private ?bool $receptionPartielle = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::FLOAT)]
    private ?float $montantTTCrecu = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::TEXT, nullable: true)]
    private ?string $descriptionRecue = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 20)]
    private ?string $numeroMigo = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::BOOLEAN)]
    private ?bool $bonLivraisonSifac = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateReceptionLivraison = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateSignatureResponsable = null;

    #[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'bcServiceFaitResponsableSignataire')]
    private ?Personnel $responsableSignataire = null;

    #[ORM\ManyToOne(targetEntity: BCDemande::class, inversedBy: 'migos')]
    private ?BCDemande $bCDemande = null;

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
