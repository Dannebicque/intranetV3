<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/StageAvenant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:19
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\StageAvenantRepository;
use Carbon\CarbonInterface;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=StageAvenantRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class StageAvenant extends BaseEntity
{
    use LifeCycleTrait;

    public const CAS1 = 1;
    public const CAS2 = 2;
    public const CAS3 = 3;
    public const CAS4 = 4;

    /**
     * @ORM\ManyToOne(targetEntity=StageEtudiant::class, inversedBy="stageAvenants")
     */
    private ?StageEtudiant $stageEtudiant;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $cas;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private ?CarbonInterface $nouvelleDateFin;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private ?int $nouvelleDureeJour;

    /**
     * @ORM\OneToOne(targetEntity=Adresse::class, cascade={"persist", "remove"})
     */
    private ?Adresse $nouvelleAdresse;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private ?CarbonInterface $dateDebutSuspension;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private ?CarbonInterface $dateFinSuspension;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private ?CarbonInterface $dateRepriseStage;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private ?CarbonInterface $dateInterruption;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private ?CarbonInterface $dateDebutAbsence;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private ?CarbonInterface $dateFinAbsence;

    /**
     * StageAvenant constructor.
     *
     * @param $stageEtudiant
     */
    public function __construct($stageEtudiant)
    {
        $this->stageEtudiant = $stageEtudiant;
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
