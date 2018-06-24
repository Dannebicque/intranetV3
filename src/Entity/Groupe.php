<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\GroupeRepository")
 */
class Groupe extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=50)
     */
    private $libelle;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeGroupe", inversedBy="groupes")
     */
    private $typeGroupe;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $codeApogee;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Etudiant", mappedBy="groupes")
     */
    private $etudiants;

    public function __construct()
    {
        $this->etudiants = new ArrayCollection();
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
}
