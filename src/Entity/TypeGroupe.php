<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

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
     */
    private $semestre;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $libelle;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $codeApogee;

    /**
     * @ORM\Column(type="string", length=5)
     */
    private $type;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Groupe", mappedBy="typeGroupe")
     */
    private $groupes;

    public function __construct()
    {
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
     * @return null|string
     */
    public function getCodeApogee(): ?string
    {
        return $this->codeApogee;
    }

    /**
     * @param string $codeApogee
     *
     * @return TypeGroupe
     */
    public function setCodeApogee(string $codeApogee): self
    {
        $this->codeApogee = $codeApogee;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getType(): ?string
    {
        return $this->type;
    }

    /**
     * @param string $type
     *
     * @return TypeGroupe
     */
    public function setType(string $type): self
    {
        $this->type = $type;

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
}
