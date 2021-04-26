<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/StagePeriodeSoutenance.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/04/2021 15:30
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StagePeriodeSoutenanceRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class StagePeriodeSoutenance extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\StagePeriode", inversedBy="stagePeriodeSoutenances")
     */
    private ?StagePeriode $stagePeriode;

    /**
     * @ORM\Column(type="date")
     */
    private ?DateTimeInterface $dateDebut;

    /**
     * @ORM\Column(type="date")
     */
    private ?DateTimeInterface $dateFin;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?DateTimeInterface $dateRenduRapport;

    public function getStagePeriode(): ?StagePeriode
    {
        return $this->stagePeriode;
    }

    public function setStagePeriode(?StagePeriode $stagePeriode): self
    {
        $this->stagePeriode = $stagePeriode;

        return $this;
    }

    public function getDateDebut(): ?DateTimeInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(DateTimeInterface $dateDebut): self
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getDateFin(): ?DateTimeInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(DateTimeInterface $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    public function getDateRenduRapport(): ?DateTimeInterface
    {
        return $this->dateRenduRapport;
    }

    public function setDateRenduRapport(?DateTimeInterface $dateRenduRapport): self
    {
        $this->dateRenduRapport = $dateRenduRapport;

        return $this;
    }
}
