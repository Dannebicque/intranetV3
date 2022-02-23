<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/TypeGroupe.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/06/2021 10:28
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\TypeGroupeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TypeGroupeRepository::class)]
#[ORM\HasLifecycleCallbacks]
class TypeGroupe extends BaseEntity
{
    use LifeCycleTrait;
    public const TYPE_GROUPE_CM = 'CM';
    public const TYPE_GROUPE_TD = 'TD';
    public const TYPE_GROUPE_TP = 'TP';
    public const TYPES = [self::TYPE_GROUPE_CM, self::TYPE_GROUPE_TD, self::TYPE_GROUPE_TP, self::TYPE_GROUPE_LV];
    public const TYPE_GROUPE_LV = 'LV';

    #[Groups(['type_groupe_administration'])]
    #[ORM\ManyToOne(targetEntity: Semestre::class, inversedBy: 'typeGroupes')]
    private Semestre $semestre;

    #[Groups(['type_groupe_administration'])]
    #[ORM\Column(type: Types::STRING, length: 100)]
    private ?string $libelle;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Groupe>
     */
    #[ORM\OneToMany(mappedBy: 'typeGroupe', targetEntity: Groupe::class, fetch: 'EAGER', orphanRemoval: true)]
    #[ORM\OrderBy(value: ['ordre' => 'ASC'])]
    private Collection $groupes;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $defaut = false;

    #[ORM\Column(type: Types::STRING, length: 2)]
    private ?string $type;

    public function __construct(Semestre $semestre)
    {
        $this->semestre = $semestre;
        $this->groupes = new ArrayCollection();
    }

    /**
     * @return Collection|Groupe[]
     */
    public function getGroupes(): Collection
    {
        return $this->groupes;
    }

    public function addGroupe(Groupe $groupe): self
    {
        if (!$this->groupes->contains($groupe)) {
            $this->groupes[] = $groupe;
            $groupe->setTypeGroupe($this);
        }

        return $this;
    }

    public function removeGroupe(Groupe $groupe): self
    {
        if ($this->groupes->contains($groupe)) {
            $this->groupes->removeElement($groupe);
            // set the owning side to null (unless already changed)
            if ($groupe->getTypeGroupe() === $this) {
                $groupe->setTypeGroupe(null);
            }
        }

        return $this;
    }

    public function getArray(): array
    {
        return [
            'id' => $this->getId(),
            'libelle' => $this->getLibelle(),
            'defaut' => $this->getDefaut(),
        ];
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

    public function getDefaut(): ?bool
    {
        return $this->defaut;
    }

    public function setDefaut(bool $defaut): self
    {
        $this->defaut = $defaut;

        return $this;
    }

    public function isTD(): bool
    {
        return self::TYPE_GROUPE_TD === mb_strtoupper($this->getType());
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function isTP(): bool
    {
        return self::TYPE_GROUPE_TP === mb_strtoupper($this->getType());
    }

    public function isCM(): bool
    {
        return self::TYPE_GROUPE_CM === mb_strtoupper($this->getType());
    }

    public function getDisplay(): string
    {
        return null !== $this->getSemestre() ? $this->getSemestre()->getLibelle().' | '.$this->getLibelle() : $this->getLibelle();
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }
}
