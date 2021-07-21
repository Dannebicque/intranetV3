<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/StagePeriodeInterruption.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/06/2021 21:20
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Carbon\CarbonInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StagePeriodeInterruptionRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class StagePeriodeInterruption extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\StagePeriode", inversedBy="stagePeriodeInterruptions")
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
     * @ORM\Column(type="string", length=255)
     */
    private ?string $motif;

    public function getStagePeriode(): ?StagePeriode
    {
        return $this->stagePeriode;
    }

    public function setStagePeriode(?StagePeriode $periodeStage): self
    {
        $this->stagePeriode = $periodeStage;

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

    public function getMotif(): ?string
    {
        return $this->motif;
    }

    public function setMotif(string $motif): self
    {
        $this->motif = $motif;

        return $this;
    }
}
