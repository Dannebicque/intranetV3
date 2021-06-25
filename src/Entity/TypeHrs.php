<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/TypeHrs.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/06/2021 10:28
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

    public const TYPE_HRS_HRS = 'HRS';
    public const TYPE_HRS_PCA = 'PCA';
    public const TYPE_HRS_PRP = 'PRP';
    public const TYPE_HRS_SUIVI = 'Suivi';
    public const TYPE_HRS_AUTRE = 'Autre';

    public const TAB_TYPE_HRS = [
        'choice.' . self::TYPE_HRS_HRS => self::TYPE_HRS_HRS,
        'choice.' . self::TYPE_HRS_PCA => self::TYPE_HRS_PCA,
        'choice.' . self::TYPE_HRS_PRP => self::TYPE_HRS_PRP,
        'choice.' . self::TYPE_HRS_SUIVI => self::TYPE_HRS_SUIVI,
        'choice.' . self::TYPE_HRS_AUTRE => self::TYPE_HRS_AUTRE,
    ];

    //STAGE, PRP, PCA, HRS

    /**
     * @ORM\Column(type="string", length=100)
     * @Groups({"type_hrs_administration"})
     */
    private ?string $libelle;

    /**
     * @ORM\Column(type="string", length=20)
     * @Groups({"type_hrs_administration"})
     */
    private ?string $type;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Hrs", mappedBy="typeHrs")
     */
    private Collection $hrs;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"type_hrs_administration"})
     */
    private bool $incluService = false;

    /**
     * @ORM\Column(type="float")
     * @Groups({"type_hrs_administration"})
     */
    private float $maximum = 96;

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

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType($type): void
    {
        $this->type = $type;
    }
}
