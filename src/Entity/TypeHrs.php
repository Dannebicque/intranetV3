<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TypeHrsRepository")
 */
class TypeHrs extends BaseEntity
{

    //STAGE, PRP, PCA, HRS

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $libelle;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $type;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Hrs", mappedBy="typeHrs")
     */
    private $hrs;

    /**
     * @ORM\Column(type="boolean")
     */
    private $incluService;

    /**
     * @ORM\Column(type="float")
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

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType($type): void
    {
        $this->type = $type;
    }


}
