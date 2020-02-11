<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/TypeGroupe.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TypeGroupeRepository")
 */
class TypeGroupe extends BaseEntity
{
    public const TYPE_GROUPE_CM = 'cm';
    public const TYPE_GROUPE_TD = 'td';
    public const TYPE_GROUPE_TP = 'tp';

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="typeGroupes")
     * @Groups({"type_groupe_administration"})
     */
    private $semestre;

    /**
     * @ORM\Column(type="string", length=100)
     * @Groups({"type_groupe_administration"})
     */
    private $libelle;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Groupe", mappedBy="typeGroupe")
     * @ORM\OrderBy({"libelle" = "ASC"})
     */
    private $groupes;

    /**
     * @ORM\Column(type="boolean")
     */
    private $defaut = false;

    /**
     * @ORM\Column(type="string", length=2)
     */
    private $type;

    public function __construct(Semestre $semestre)
    {
        $this->semestre = $semestre;
        $this->groupes = new ArrayCollection();
    }

    /**
     * @return Semestre|null
     */
    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    /**
     * @param Semestre|null $semestre
     *
     * @return TypeGroupe
     */
    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    /**
     * @param string $libelle
     *
     * @return TypeGroupe
     */
    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * @return Collection|Groupe[]
     */
    public function getGroupes(): Collection
    {
        return $this->groupes;
    }

    /**
     * @param Groupe $groupe
     *
     * @return TypeGroupe
     */
    public function addGroupe(Groupe $groupe): self
    {
        if (!$this->groupes->contains($groupe)) {
            $this->groupes[] = $groupe;
            $groupe->setTypeGroupe($this);
        }

        return $this;
    }

    /**
     * @param Groupe $groupe
     *
     * @return TypeGroupe
     */
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

    public function getDefaut(): ?bool
    {
        return $this->defaut;
    }

    public function setDefaut(bool $defaut): self
    {
        $this->defaut = $defaut;

        return $this;
    }

    /**
     * @return array
     */
    public function getArray(): array
    {
        return [
            'id' => $this->getId(),
            'libelle' => $this->getLibelle(),
            'defaut' => $this->getDefaut()
        ];
    }

    public function isTD(): bool
    {
        return strtolower($this->getType()) === self::TYPE_GROUPE_TD;
    }

    public function isTP(): bool
    {
        return strtolower($this->getType()) === self::TYPE_GROUPE_TP;
    }

    public function isCM(): bool
    {
        return strtolower($this->getType()) === self::TYPE_GROUPE_CM;
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

    public function getDisplay(){
        return $this->getSemestre() !== null ? $this->getSemestre()->getLibelle() . ' | '.$this->getLibelle() : $this->getLibelle();
    }
}
