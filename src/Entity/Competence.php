<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CompetenceRepository")
 */
class Competence extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $code;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Diplome", inversedBy="competences")
     */
    private $diplome;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Competence", inversedBy="enfants")
     */
    private $parent;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Competence", mappedBy="parent")
     */
    private $enfants;

    public function __construct(Diplome $diplome)
    {
        $this->diplome = $diplome;
        $this->enfants = new ArrayCollection();
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

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getDiplome(): ?Diplome
    {
        return $this->diplome;
    }

    public function setDiplome(?Diplome $diplome): self
    {
        $this->diplome = $diplome;

        return $this;
    }

    /**
     * @return Collection|Competence[]
     */
    public function getEnfants(): Collection
    {
        return $this->enfants;
    }

    public function addEnfant(Competence $enfant): self
    {
        if (!$this->enfants->contains($enfant)) {
            $this->enfants[] = $enfant;
            $enfant->setParent($this);
        }

        return $this;
    }

    public function removeEnfant(Competence $enfant): self
    {
        if ($this->enfants->contains($enfant)) {
            $this->enfants->removeElement($enfant);
            // set the owning side to null (unless already changed)
            if ($enfant->getParent() === $this) {
                $enfant->setParent(null);
            }
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * @param mixed $parent
     */
    public function setParent($parent): void
    {
        $this->parent = $parent;
    }


}
