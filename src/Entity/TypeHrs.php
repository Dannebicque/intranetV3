<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/TypeHrs.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TypeHrsRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class TypeHrs extends BaseEntity
{
    use LifeCycleTrait;

    //STAGE, PRP, PCA, HRS

    /**
     * @ORM\Column(type="string", length=100)
     * @Groups({"type_hrs_administration"})
     */
    private $libelle;

    /**
     * @ORM\Column(type="string", length=20)
     * @Groups({"type_hrs_administration"})
     */
    private $type;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Hrs", mappedBy="typeHrs")
     */
    private $hrs;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"type_hrs_administration"})
     */
    private $incluService;

    /**
     * @ORM\Column(type="float")
     * @Groups({"type_hrs_administration"})
     */
    private $maximum;

    public function __construct()
    {
        $this->hrs = new ArrayCollection();
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * @return Collection|Hrs[]
     */
    public function getHrs(): Collection
    {
        return $this->hrs;
    }

    public function addHr(Hrs $hr): self
    {
        if (!$this->hrs->contains($hr)) {
            $this->hrs[] = $hr;
            $hr->setTypeHrs($this);
        }

        return $this;
    }

    public function removeHr(Hrs $hr): self
    {
        if ($this->hrs->contains($hr)) {
            $this->hrs->removeElement($hr);
            // set the owning side to null (unless already changed)
            if ($hr->getTypeHrs() === $this) {
                $hr->setTypeHrs(null);
            }
        }

        return $this;
    }

    public function getIncluService(): ?bool
    {
        return $this->incluService;
    }

    public function setIncluService(bool $incluService): self
    {
        $this->incluService = $incluService;

        return $this;
    }

    public function getMaximum(): ?float
    {
        return $this->maximum;
    }

    public function setMaximum(float $maximum): self
    {
        $this->maximum = $maximum;

        return $this;
    }

    public function getType()
    {
        return $this->type;
    }

    public function setType($type): void
    {
        $this->type = $type;
    }
}
