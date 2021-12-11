<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Groupe.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/09/2021 22:20
 */

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
    private ?string $libelle;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeGroupe", inversedBy="groupes")
     * @Groups({"groupe_administration"})
     */
    private ?TypeGroupe $typeGroupe;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups({"groupe_administration"})
     */
    private ?string $codeApogee = '';

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Groupe", inversedBy="enfants")
     * @Groups({"groupe_administration"})
     */
    private ?Groupe $parent;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Etudiant", mappedBy="groupes")
     * @ORM\OrderBy({"nom"="asc", "prenom"="asc"})
     */
    private Collection $etudiants;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Groupe", mappedBy="parent", cascade={"remove"})
     */
    private Collection $enfants;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"groupe_administration"})
     */
    private ?int $ordre;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Parcour", inversedBy="groupes")
     * @Groups({"groupe_administration"})
     */
    private ?Parcour $parcours;

    /**
     * @ORM\ManyToMany(targetEntity=CovidAttestationEtudiant::class, mappedBy="groupes")
     */
    private Collection $covidAttestationEtudiants;

    /**
     * @ORM\OneToMany(targetEntity=AbsenceEtatAppel::class, mappedBy="groupe")
     */
    private $absenceEtatAppels;

    public function __construct()
    {
        $this->etudiants = new ArrayCollection();
        $this->enfants = new ArrayCollection();
        $this->covidAttestationEtudiants = new ArrayCollection();
        $this->absenceEtatAppels = new ArrayCollection();
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

    public function getTypeGroupe(): ?TypeGroupe
    {
        return $this->typeGroupe;
    }

    public function setTypeGroupe(?TypeGroupe $typeGroupe): self
    {
        $this->typeGroupe = $typeGroupe;

        return $this;
    }

    public function getCodeApogee(): ?string
    {
        return $this->codeApogee;
    }

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

    public function addEtudiant(Etudiant $etudiant): self
    {
        if (!$this->etudiants->contains($etudiant)) {
            $this->etudiants[] = $etudiant;
            $etudiant->addGroupe($this);
        }

        return $this;
    }

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

    public function getParent(): ?self
    {
        return $this->parent;
    }

    public function setParent(self $parent): self
    {
        $this->parent = $parent;

        return $this;
    }

    public function addGroupe(self $groupe): self
    {
        if (!$this->enfants->contains($groupe)) {
            $this->enfants[] = $groupe;
            $groupe->setParent($this);
        }

        return $this;
    }

    public function removeGroupe(self $groupe): self
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

    public function addEnfant(self $enfant): self
    {
        if (!$this->enfants->contains($enfant)) {
            $this->enfants[] = $enfant;
            $enfant->setParent($this);
        }

        return $this;
    }

    public function removeEnfant(self $enfant): self
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
     * @return Collection|CovidAttestationEtudiant[]
     */
    public function getCovidAttestationEtudiants(): Collection
    {
        return $this->covidAttestationEtudiants;
    }

    public function addCovidAttestationEtudiant(CovidAttestationEtudiant $covidAttestationEtudiant): self
    {
        if (!$this->covidAttestationEtudiants->contains($covidAttestationEtudiant)) {
            $this->covidAttestationEtudiants[] = $covidAttestationEtudiant;
            $covidAttestationEtudiant->addGroupe($this);
        }

        return $this;
    }

    public function removeCovidAttestationEtudiant(CovidAttestationEtudiant $covidAttestationEtudiant): self
    {
        if ($this->covidAttestationEtudiants->contains($covidAttestationEtudiant)) {
            $this->covidAttestationEtudiants->removeElement($covidAttestationEtudiant);
            $covidAttestationEtudiant->removeGroupe($this);
        }

        return $this;
    }

    public function getDisplaySemestre(): string
    {
        if (null !== $this->getTypeGroupe() && null !== $this->getTypeGroupe()->getSemestre()) {
            return $this->getTypeGroupe()->getSemestre()->display() . ' | ' . $this->getLibelle();
        }

        return '-Err Semestre-';
    }

    public function getDisplay(): string
    {
        if (null !== $this->getTypeGroupe()) {
            return $this->getTypeGroupe()->getLibelle() . ' ' . $this->getLibelle();
        }

        return '-Err Semestre-';
    }

    /**
     * @return Collection|AbsenceEtatAppel[]
     */
    public function getAbsenceEtatAppels(): Collection
    {
        return $this->absenceEtatAppels;
    }

    public function addAbsenceEtatAppel(AbsenceEtatAppel $absenceEtatAppel): self
    {
        if (!$this->absenceEtatAppels->contains($absenceEtatAppel)) {
            $this->absenceEtatAppels[] = $absenceEtatAppel;
            $absenceEtatAppel->setGroupe($this);
        }

        return $this;
    }

    public function removeAbsenceEtatAppel(AbsenceEtatAppel $absenceEtatAppel): self
    {
        // set the owning side to null (unless already changed)
        if ($this->absenceEtatAppels->removeElement($absenceEtatAppel) && $absenceEtatAppel->getGroupe() === $this) {
            $absenceEtatAppel->setGroupe(null);
        }

        return $this;
    }
}
