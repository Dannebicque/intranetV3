<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/StageAvenant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/10/2021 12:04
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\StageAvenantRepository;
use Carbon\CarbonInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StageAvenantRepository::class)]
#[ORM\HasLifecycleCallbacks]
class StageAvenant extends BaseEntity
{
    use LifeCycleTrait;
    final public const CAS1 = 1;
    final public const CAS2 = 2;
    final public const CAS3 = 3;
    final public const CAS4 = 4;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::INTEGER)]
    private ?int $cas = 0;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATE_MUTABLE, nullable: true)]
    private ?CarbonInterface $nouvelleDateFin = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::INTEGER, nullable: true)]
    private ?int $nouvelleDureeJour = null;

    #[ORM\OneToOne(targetEntity: Adresse::class, cascade: ['persist', 'remove'])]
    private ?Adresse $nouvelleAdresse = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATE_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateDebutSuspension = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATE_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateFinSuspension = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATE_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateRepriseStage = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATE_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateInterruption = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATE_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateDebutAbsence = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATE_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateFinAbsence = null;

    public function __construct(#[ORM\ManyToOne(targetEntity: StageEtudiant::class, inversedBy: 'stageAvenants')] private ?StageEtudiant $stageEtudiant)
    {
    }

    public function getStageEtudiant(): ?StageEtudiant
    {
        return $this->stageEtudiant;
    }

    public function setStageEtudiant(?StageEtudiant $stageEtudiant): self
    {
        $this->stageEtudiant = $stageEtudiant;

        return $this;
    }

    public function getCas(): ?int
    {
        return $this->cas;
    }

    public function setCas(int $cas): self
    {
        $this->cas = $cas;

        return $this;
    }

    public function getNouvelleDateFin(): ?CarbonInterface
    {
        return $this->nouvelleDateFin;
    }

    public function setNouvelleDateFin(?CarbonInterface $nouvelleDateFin): self
    {
        $this->nouvelleDateFin = $nouvelleDateFin;

        return $this;
    }

    public function getNouvelleDureeJour(): ?int
    {
        return $this->nouvelleDureeJour;
    }

    public function setNouvelleDureeJour(?int $nouvelleDureeJour): self
    {
        $this->nouvelleDureeJour = $nouvelleDureeJour;

        return $this;
    }

    public function getNouvelleAdresse(): ?Adresse
    {
        return $this->nouvelleAdresse;
    }

    public function setNouvelleAdresse(?Adresse $nouvelleAdresse): self
    {
        $this->nouvelleAdresse = $nouvelleAdresse;

        return $this;
    }

    public function getDateDebutSuspension(): ?CarbonInterface
    {
        return $this->dateDebutSuspension;
    }

    public function setDateDebutSuspension(?CarbonInterface $dateDebutSuspension): self
    {
        $this->dateDebutSuspension = $dateDebutSuspension;

        return $this;
    }

    public function getDateFinSuspension(): ?CarbonInterface
    {
        return $this->dateFinSuspension;
    }

    public function setDateFinSuspension(?CarbonInterface $dateFinSuspension): self
    {
        $this->dateFinSuspension = $dateFinSuspension;

        return $this;
    }

    public function getDateRepriseStage(): ?CarbonInterface
    {
        return $this->dateRepriseStage;
    }

    public function setDateRepriseStage(?CarbonInterface $dateRepriseStage): self
    {
        $this->dateRepriseStage = $dateRepriseStage;

        return $this;
    }

    public function getDateInterruption(): ?CarbonInterface
    {
        return $this->dateInterruption;
    }

    public function setDateInterruption(?CarbonInterface $dateInterruption): self
    {
        $this->dateInterruption = $dateInterruption;

        return $this;
    }

    public function getDateDebutAbsence(): ?CarbonInterface
    {
        return $this->dateDebutAbsence;
    }

    public function setDateDebutAbsence(?CarbonInterface $dateDebutAbsence): self
    {
        $this->dateDebutAbsence = $dateDebutAbsence;

        return $this;
    }

    public function getDateFinAbsence(): ?CarbonInterface
    {
        return $this->dateFinAbsence;
    }

    public function setDateFinAbsence(?CarbonInterface $dateFinAbsence): self
    {
        $this->dateFinAbsence = $dateFinAbsence;

        return $this;
    }
}
