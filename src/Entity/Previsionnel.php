<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Previsionnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/06/2021 20:45
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\MatiereTrait;
use App\Repository\PrevisionnelRepository;
use App\Utils\Tools;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PrevisionnelRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Previsionnel extends BaseEntity
{
    use LifeCycleTrait;
    use MatiereTrait;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $referent = false;

    #[ORM\Column(type: Types::FLOAT)]
    private ?float $nbHCm = 0;

    #[ORM\Column(type: Types::FLOAT)]
    private ?float $nbHTd = 0;

    #[ORM\Column(type: Types::FLOAT)]
    private ?float $nbHTp = 0;

    #[ORM\Column(type: Types::INTEGER)]
    private int $nbGrCm = 0;

    #[ORM\Column(type: Types::INTEGER)]
    private int $nbGrTd = 0;

    #[ORM\Column(type: Types::INTEGER)]
    private int $nbGrTp = 0;

    #[ORM\Column(type: Types::INTEGER)]
    private int $annee;

    #[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'previsionnels')]
    private ?Personnel $personnel;

    public function __construct(int $annee, Personnel $personnel = null)
    {
        $this->annee = $annee;
        $this->personnel = $personnel;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    public function setAnnee(int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getReferent(): ?bool
    {
        return $this->referent;
    }

    public function setReferent(bool $referent): self
    {
        $this->referent = $referent;

        return $this;
    }

    public function getNbHCm(): ?float
    {
        return $this->nbHCm;
    }

    public function setNbHCm(mixed $nbHCm = 0): self
    {
        $this->nbHCm = Tools::convertToFloat($nbHCm);

        return $this;
    }

    public function getNbHTd(): ?float
    {
        return $this->nbHTd;
    }

    public function setNbHTd(mixed $nbHTd = 0): self
    {
        $this->nbHTd = Tools::convertToFloat($nbHTd);

        return $this;
    }

    public function getNbHTp(): ?float
    {
        return $this->nbHTp;
    }

    public function setNbHTp(mixed $nbHTp = 0): self
    {
        $this->nbHTp = Tools::convertToFloat($nbHTp);

        return $this;
    }

    public function getNbGrCm(): ?int
    {
        return $this->nbGrCm;
    }

    public function setNbGrCm(int $nbGrCm = 0): self
    {
        $this->nbGrCm = $nbGrCm;

        return $this;
    }

    public function getNbGrTd(): ?int
    {
        return $this->nbGrTd;
    }

    public function setNbGrTd(int $nbGrTd = 0): self
    {
        $this->nbGrTd = $nbGrTd;

        return $this;
    }

    public function getNbGrTp(): ?int
    {
        return $this->nbGrTp;
    }

    public function setNbGrTp(int $nbGrTp = 0): self
    {
        $this->nbGrTp = $nbGrTp;

        return $this;
    }
}
