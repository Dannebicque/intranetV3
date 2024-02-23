<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/TypeGroupe.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Enums\TypeGroupeEnum;
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
    //todo: repasser par une table type_groupe_semestre pour les liens, et adapter les requetes pour filter par semestre et son ordre et diplome identique ? PLus fiable ?
    use LifeCycleTrait;

    #[Groups(['type_groupe_administration'])]
    #[ORM\Column(type: Types::STRING, length: 100)]
    private ?string $libelle = null;

    /**
     * @var Collection<int, Groupe>
     */
    #[ORM\OneToMany(mappedBy: 'typeGroupe', targetEntity: Groupe::class, fetch: 'EAGER', orphanRemoval: true)]
    #[ORM\OrderBy(value: ['ordre' => 'ASC'])]
    private Collection $groupes;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $defaut = false;

    #[ORM\Column(type: Types::STRING, length: 2, enumType: TypeGroupeEnum::class)]
    private ?TypeGroupeEnum $type = null;

    #[ORM\Column(type: 'boolean')]
    private bool $mutualise = false;

    #[ORM\ManyToOne(inversedBy: 'typeGroupes')]
    /** @deprecated */
    private ?Diplome $diplome;

    #[ORM\Column(nullable: true)]
    /** @deprecated */
    private ?int $ordreSemestre;

    #[ORM\ManyToMany(targetEntity: Semestre::class, inversedBy: 'typeGroupess')]
    private Collection $semestres;

    //('ne plus utiliser, et avoir Diplome + semestre')]
    /** @deprecated */
    #[Groups(['type_groupe_administration'])] #[ORM\ManyToOne(targetEntity: Semestre::class, inversedBy: 'typeGroupes')]
    private ?Semestre $semestre;

    public function __construct(
        ?Semestre $semestre
    ) {
        $this->groupes = new ArrayCollection();
//        $this->ordreSemestre = $semestre->getOrdreLmd();
//        $this->diplome = $semestre->getDiplome()->getParent() ?? $semestre->getDiplome();
        $this->semestres = new ArrayCollection();
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
        return TypeGroupeEnum::TYPE_GROUPE_TD === $this->getType();
    }

    public function getType(): ?TypeGroupeEnum
    {
        return $this->type;
    }

    public function setType(TypeGroupeEnum $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function isTP(): bool
    {
        return TypeGroupeEnum::TYPE_GROUPE_TP === $this->getType();
    }

    public function isCM(): bool
    {
        return TypeGroupeEnum::TYPE_GROUPE_CM === $this->getType();
    }

    public function getDisplay(): string
    {
        if ($this->getDiplome()?->isApc()) {
            // todo: fusionner dès que semestre ne sera plus utilisé
            return 'S'.$this->ordreSemestre.' | '.$this->getLibelle();
        }

        return null !== $this->getSemestre() ? $this->getSemestre()->getLibelle().' | '.$this->getLibelle() : $this->getLibelle();
    }

    /** @deprecated */
    public function getDisplaySemestreDiplome(): string
    {
            return 'S'.$this->ordreSemestre.' | '.$this->getDiplome()?->getDisplayCourt();
    }

    /** @deprecated */
    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    /** @deprecated */
    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    public function isMutualise(): ?bool
    {
        return $this->mutualise;
    }

    public function setMutualise(bool $mutualise): self
    {
        $this->mutualise = $mutualise;

        return $this;
    }

    /** @deprecated */
    public function getDiplome(): ?Diplome
    {
        return $this->diplome;
    }

    /** @deprecated */
    public function setDiplome(?Diplome $diplome): self
    {
        $this->diplome = $diplome;

        return $this;
    }

    /** @deprecated */
    public function getOrdreSemestre(): ?int
    {
        return $this->ordreSemestre;
    }

    /** @deprecated */
    public function setOrdreSemestre(?int $ordreSemestre): self
    {
        $this->ordreSemestre = $ordreSemestre;

        return $this;
    }

    /**
     * @return Collection<int, Semestre>
     */
    public function getSemestres(): Collection
    {
        return $this->semestres;
    }

    public function addSemestre(Semestre $semestre): self
    {
        if (!$this->semestres->contains($semestre)) {
            $this->semestres->add($semestre);
        }

        return $this;
    }

    public function removeSemestre(Semestre $semestre): self
    {
        $this->semestres->removeElement($semestre);

        return $this;
    }
}
