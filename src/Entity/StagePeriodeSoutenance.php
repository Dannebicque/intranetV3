<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/StagePeriodeSoutenance.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:30
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Carbon\CarbonInterface;
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
    private ?CarbonInterface $dateDebut;

    /**
     * @ORM\Column(type="date")
     */
    private ?CarbonInterface $dateFin;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateRenduRapport;

    public function getStagePeriode(): ?StagePeriode
    {
        return $this->stagePeriode;
    }

    public function setStagePeriode(?StagePeriode $stagePeriode): self
    {
        $this->stagePeriode = $stagePeriode;

        return $this;
    }

    public function getDateDebut(): ?CarbonInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(CarbonInterface $dateDebut): self
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getDateFin(): ?CarbonInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(CarbonInterface $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    public function getDateRenduRapport(): ?CarbonInterface
    {
        return $this->dateRenduRapport;
    }

    public function setDateRenduRapport(?CarbonInterface $dateRenduRapport): self
    {
        $this->dateRenduRapport = $dateRenduRapport;

        return $this;
    }
}
