<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ProjetEtudiant.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/09/2020 18:16

namespace App\Entity;

use App\Repository\ProjetEtudiantRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProjetEtudiantRepository::class)
 */
class ProjetEtudiant extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity=ProjetPeriode::class, inversedBy="projetEtudiants")
     */
    private $projetPeriode;

    /**
     * @ORM\ManyToOne(targetEntity=Entreprise::class, inversedBy="projetEtudiants")
     */
    private $organisme;

    /**
     * @ORM\Column(type="boolean")
     */
    private $tempComplet;

    /**
     * @ORM\Column(type="float")
     */
    private $duree;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $uniteDuree;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $sujet;

    /**
     * @ORM\Column(type="text")
     */
    private $activitesConfiees;

    /**
     * @ORM\ManyToMany(targetEntity=Etudiant::class, inversedBy="projetEtudiants")
     */
    private $etudiants;

    public function __construct()
    {
        $this->etudiants = new ArrayCollection();
    }

    public function getProjetPeriode(): ?ProjetPeriode
    {
        return $this->projetPeriode;
    }

    public function setProjetPeriode(?ProjetPeriode $projetPeriode): self
    {
        $this->projetPeriode = $projetPeriode;

        return $this;
    }

    public function getOrganisme(): ?Entreprise
    {
        return $this->organisme;
    }

    public function setOrganisme(?Entreprise $organisme): self
    {
        $this->organisme = $organisme;

        return $this;
    }

    public function getTempComplet(): ?bool
    {
        return $this->tempComplet;
    }

    public function setTempComplet(bool $tempComplet): self
    {
        $this->tempComplet = $tempComplet;

        return $this;
    }

    public function getDuree(): ?float
    {
        return $this->duree;
    }

    public function setDuree(float $duree): self
    {
        $this->duree = $duree;

        return $this;
    }

    public function getUniteDuree(): ?string
    {
        return $this->uniteDuree;
    }

    public function setUniteDuree(string $uniteDuree): self
    {
        $this->uniteDuree = $uniteDuree;

        return $this;
    }

    public function getSujet(): ?string
    {
        return $this->sujet;
    }

    public function setSujet(string $sujet): self
    {
        $this->sujet = $sujet;

        return $this;
    }

    public function getActivitesConfiees(): ?string
    {
        return $this->activitesConfiees;
    }

    public function setActivitesConfiees(string $activitesConfiees): self
    {
        $this->activitesConfiees = $activitesConfiees;

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
        }

        return $this;
    }

    public function removeEtudiant(Etudiant $etudiant): self
    {
        if ($this->etudiants->contains($etudiant)) {
            $this->etudiants->removeElement($etudiant);
        }

        return $this;
    }
}
