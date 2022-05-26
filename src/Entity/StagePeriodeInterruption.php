<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/StagePeriodeInterruption.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:24
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\StagePeriodeInterruptionRepository;
use Carbon\CarbonInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StagePeriodeInterruptionRepository::class)]
#[ORM\HasLifecycleCallbacks]
class StagePeriodeInterruption extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\ManyToOne(targetEntity: StagePeriode::class, inversedBy: 'stagePeriodeInterruptions')]
    private ?StagePeriode $stagePeriode = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?CarbonInterface $dateDebut = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?CarbonInterface $dateFin = null;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $motif = null;

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
