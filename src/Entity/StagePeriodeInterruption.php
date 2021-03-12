<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/StagePeriodeInterruption.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/03/2021 22:10
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use DateTimeInterface;
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
    private $stagePeriode;

    /**
     * @ORM\Column(type="date")
     */
    private $dateDebut;

    /**
     * @ORM\Column(type="date")
     */
    private $dateFin;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $motif;

    public function getStagePeriode(): ?StagePeriode
    {
        return $this->stagePeriode;
    }

    public function setStagePeriode(?StagePeriode $periodeStage): self
    {
        $this->stagePeriode = $periodeStage;

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
