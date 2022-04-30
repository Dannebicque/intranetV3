<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/TypeHrs.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 11:08
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\TypeHrsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TypeHrsRepository::class)]
#[ORM\HasLifecycleCallbacks]
class TypeHrs extends BaseEntity implements \Stringable
{
    use LifeCycleTrait;
    final public const TYPE_HRS_HRS = 'HRS';
    final public const TYPE_HRS_PCA = 'PCA';
    final public const TYPE_HRS_PRP = 'PRP';
    final public const TYPE_HRS_SUIVI = 'Suivi';
    final public const TYPE_HRS_AUTRE = 'Autre';
    final public const TAB_TYPE_HRS = [
        'choice.'.self::TYPE_HRS_HRS => self::TYPE_HRS_HRS,
        'choice.'.self::TYPE_HRS_PCA => self::TYPE_HRS_PCA,
        'choice.'.self::TYPE_HRS_PRP => self::TYPE_HRS_PRP,
        'choice.'.self::TYPE_HRS_SUIVI => self::TYPE_HRS_SUIVI,
        'choice.'.self::TYPE_HRS_AUTRE => self::TYPE_HRS_AUTRE,
    ];

    // STAGE, PRP, PCA, HRS

    #[Groups(['type_hrs_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 100)]
    private ?string $libelle = null;

    #[Groups(['type_hrs_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 20)]
    private ?string $type = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Hrs>
     */
    #[ORM\OneToMany(mappedBy: 'typeHrs', targetEntity: Hrs::class)]
    private Collection $hrs;

    #[Groups(['type_hrs_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::BOOLEAN)]
    private bool $incluService = false;

    #[Groups(['type_hrs_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::FLOAT)]
    private float $maximum = 96;

    public function __construct()
    {
        $this->hrs = new ArrayCollection();
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

    public function setType(?string $type): void
    {
        $this->type = $type;
    }

    public function __toString(): string
    {
        return $this->getLibelle();
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
}
