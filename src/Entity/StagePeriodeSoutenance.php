<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/StagePeriodeSoutenance.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:24
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\StagePeriodeSoutenanceRepository;
use Carbon\CarbonInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StagePeriodeSoutenanceRepository::class)]
#[ORM\HasLifecycleCallbacks]
class StagePeriodeSoutenance extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\ManyToOne(targetEntity: StagePeriode::class, inversedBy: 'stagePeriodeSoutenances')]
    private ?StagePeriode $stagePeriode = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?CarbonInterface $dateDebut = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?CarbonInterface $dateFin = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateRenduRapport = null;

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
