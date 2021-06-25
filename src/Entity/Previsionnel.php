<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Previsionnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 11:17
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\MatiereTrait;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PrevisionnelRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Previsionnel extends BaseEntity
{
    use LifeCycleTrait;
    use MatiereTrait;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="previsionnels", fetch="EAGER" )
     */
    private ?Personnel $personnel;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $annee;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $referent = false;

    /**
     * @ORM\Column(type="float")
     */
    private float $nbHCm = 0;

    /**
     * @ORM\Column(type="float")
     */
    private float $nbHTd = 0;

    /**
     * @ORM\Column(type="float")
     */
    private float $nbHTp = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private int $nbGrCm = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private int $nbGrTd = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private int $nbGrTp = 0;

    public function __construct(int $annee, ?Personnel $personnel = null)
    {
        $this->personnel = $personnel;
        $this->annee = $annee;
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

    public function setNbHCm(float $nbHCm = 0): self
    {
        $this->nbHCm = $nbHCm;

        return $this;
    }

    public function getNbHTd(): ?float
    {
        return $this->nbHTd;
    }

    public function setNbHTd(float $nbHTd = 0): self
    {
        $this->nbHTd = $nbHTd;

        return $this;
    }

    public function getNbHTp(): ?float
    {
        return $this->nbHTp;
    }

    public function setNbHTp(float $nbHTp = 0): self
    {
        $this->nbHTp = $nbHTp;

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
