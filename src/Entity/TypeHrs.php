<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/TypeHrs.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Enums\TypeHrsEnum;
use App\Repository\TypeHrsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Stringable;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TypeHrsRepository::class)]
#[ORM\HasLifecycleCallbacks]
class TypeHrs extends BaseEntity implements Stringable
{
    use LifeCycleTrait;

    #[Groups(['type_hrs_administration'])]
    #[ORM\Column(type: Types::STRING, length: 100)]
    private ?string $libelle = null;

    #[Groups(['type_hrs_administration'])]
    #[ORM\Column(type: Types::STRING, length: 20, nullable: true, enumType: TypeHrsEnum::class)]
    private TypeHrsEnum|null $type = null;

    /**
     * @var Collection<int, Hrs>
     */
    #[ORM\OneToMany(mappedBy: 'typeHrs', targetEntity: Hrs::class)]
    private Collection $hrs;

    #[Groups(['type_hrs_administration'])]
    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $incluService = false;

    #[Groups(['type_hrs_administration'])]
    #[ORM\Column(type: Types::FLOAT)]
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

    public function getType(): ?TypeHrsEnum
    {
        return $this->type;
    }

    public function setType(?TypeHrsEnum $type): void
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
