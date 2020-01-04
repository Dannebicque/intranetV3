<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Groupe.php
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
 * @ORM\Entity(repositoryClass="App\Repository\GroupeRepository")
 */
class Groupe extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"groupe_administration"})
     */
    private $libelle;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeGroupe", inversedBy="groupes")
     * @Groups({"groupe_administration"})
     */
    private $typeGroupe;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"groupe_administration"})
     */
    private $codeApogee;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Groupe", inversedBy="enfants")
     * @Groups({"groupe_administration"})
     */
    private $parent;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Etudiant", mappedBy="groupes")
     */
    private $etudiants;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Groupe", mappedBy="parent", cascade={"remove"})
     */
    private $enfants;

    /**
     * @ORM\Column(type="integer")
     */
    private $ordre;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Parcour", inversedBy="groupes")
     */
    private $parcours;

    public function __construct(TypeGroupe $typeGroupe)
    {
        $this->typeGroupe = $typeGroupe;
        $this->etudiants = new ArrayCollection();
        $this->enfants = new ArrayCollection();
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
     * @return Groupe
     */
    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * @return TypeGroupe|null
     */
    public function getTypeGroupe(): ?TypeGroupe
    {
        return $this->typeGroupe;
    }

    /**
     * @param TypeGroupe|null $typeGroupe
     *
     * @return Groupe
     */
    public function setTypeGroupe(?TypeGroupe $typeGroupe): self
    {
        $this->typeGroupe = $typeGroupe;

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
     * @return Groupe
     */
    public function setCodeApogee(string $codeApogee): self
    {
        $this->codeApogee = $codeApogee;

        return $this;
    }

    /**
     * @return Collection|Etudiant[]
     */
    public function getEtudiants(): Collection
    {
        return $this->etudiants;
    }

    /**
     * @param Etudiant $etudiant
     *
     * @return Groupe
     */
    public function addEtudiant(Etudiant $etudiant): self
    {
        if (!$this->etudiants->contains($etudiant)) {
            $this->etudiants[] = $etudiant;
            $etudiant->addGroupe($this);
        }

        return $this;
    }

    /**
     * @param Etudiant $etudiant
     *
     * @return Groupe
     */
    public function removeEtudiant(Etudiant $etudiant): self
    {
        if ($this->etudiants->contains($etudiant)) {
            $this->etudiants->removeElement($etudiant);
            $etudiant->removeGroupe($this);
        }

        return $this;
    }

    /**
     * @return Collection|Groupe[]
     */
    public function getEnfants(): Collection
    {
        return $this->enfants;
    }

    /**
     * @return Groupe|null
     */
    public function getParent(): ?Groupe
    {
        return $this->parent;
    }

    /**
     * @param Groupe $parent
     *
     * @return Groupe
     */
    public function setParent(Groupe $parent): self
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * @param Groupe $groupe
     *
     * @return Groupe
     */
    public function addGroupe(Groupe $groupe): self
    {
        if (!$this->enfants->contains($groupe)) {
            $this->enfants[] = $groupe;
            $groupe->setParent($this);
        }

        return $this;
    }

    /**
     * @param Groupe $groupe
     *
     * @return Groupe
     */
    public function removeGroupe(Groupe $groupe): self
    {
        if ($this->enfants->contains($groupe)) {
            $this->enfants->removeElement($groupe);
            // set the owning side to null (unless already changed)
            if ($groupe->getParent() === $this) {
                $groupe->setParent(null);
            }
        }

        return $this;
    }

    public function getOrdre(): ?int
    {
        return $this->ordre;
    }

    public function setOrdre(int $ordre): self
    {
        $this->ordre = $ordre;

        return $this;
    }

    public function getParcours(): ?Parcour
    {
        return $this->parcours;
    }

    public function setParcours(?Parcour $parcours): self
    {
        $this->parcours = $parcours;

        return $this;
    }

    public function addEnfant(Groupe $enfant): self
    {
        if (!$this->enfants->contains($enfant)) {
            $this->enfants[] = $enfant;
            $enfant->setParent($this);
        }

        return $this;
    }

    public function removeEnfant(Groupe $enfant): self
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
}
