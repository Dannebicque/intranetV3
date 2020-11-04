<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/StageAvenant.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/11/2020 12:17

namespace App\Entity;

use App\Repository\StageAvenantRepository;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=StageAvenantRepository::class)
 */
class StageAvenant extends BaseEntity
{
    public const CAS1 = 1;
    public const CAS2 = 2;
    public const CAS3 = 3;
    public const CAS4 = 4;

    /**
     * @ORM\ManyToOne(targetEntity=StageEtudiant::class, inversedBy="stageAvenants")
     */
    private $stageEtudiant;

    /**
     * @ORM\Column(type="integer")
     */
    private $cas;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $nouvelleDateFin;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nouvelleDureeJour;

    /**
     * @ORM\OneToOne(targetEntity=Adresse::class, cascade={"persist", "remove"})
     */
    private $nouvelleAdresse;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $dateDebutSuspension;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $dateFinSuspension;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $dateRepriseStage;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $dateInterruption;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $dateDebutAbsence;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $dateFinAbsence;

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

    public function getNouvelleDateFin(): ?DateTimeInterface
    {
        return $this->nouvelleDateFin;
    }

    public function setNouvelleDateFin(?DateTimeInterface $nouvelleDateFin): self
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

    public function getDateDebutSuspension(): ?DateTimeInterface
    {
        return $this->dateDebutSuspension;
    }

    public function setDateDebutSuspension(?DateTimeInterface $dateDebutSuspension): self
    {
        $this->dateDebutSuspension = $dateDebutSuspension;

        return $this;
    }

    public function getDateFinSuspension(): ?DateTimeInterface
    {
        return $this->dateFinSuspension;
    }

    public function setDateFinSuspension(?DateTimeInterface $dateFinSuspension): self
    {
        $this->dateFinSuspension = $dateFinSuspension;

        return $this;
    }

    public function getDateRepriseStage(): ?DateTimeInterface
    {
        return $this->dateRepriseStage;
    }

    public function setDateRepriseStage(?DateTimeInterface $dateRepriseStage): self
    {
        $this->dateRepriseStage = $dateRepriseStage;

        return $this;
    }

    public function getDateInterruption(): ?DateTimeInterface
    {
        return $this->dateInterruption;
    }

    public function setDateInterruption(?DateTimeInterface $dateInterruption): self
    {
        $this->dateInterruption = $dateInterruption;

        return $this;
    }

    public function getDateDebutAbsence(): ?DateTimeInterface
    {
        return $this->dateDebutAbsence;
    }

    public function setDateDebutAbsence(?DateTimeInterface $dateDebutAbsence): self
    {
        $this->dateDebutAbsence = $dateDebutAbsence;

        return $this;
    }

    public function getDateFinAbsence(): ?DateTimeInterface
    {
        return $this->dateFinAbsence;
    }

    public function setDateFinAbsence(?DateTimeInterface $dateFinAbsence): self
    {
        $this->dateFinAbsence = $dateFinAbsence;

        return $this;
    }
}
