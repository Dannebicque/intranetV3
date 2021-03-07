<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Entreprise.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/03/2021 07:54
 */

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EntrepriseRepository")
 */
class Entreprise extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     * @Assert\Length(
     *      min = 0,
     *      max = 30,
     *      maxMessage = "Maximum {{ limit }} caractères"
     * )
     */
    private ?string $siret;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({ "stage_entreprise_administration"})
     */
    private ?string $raisonSociale;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Adresse", cascade={"persist", "remove"})
     * @Groups({ "stage_entreprise_administration"})
     */
    private ?Adresse $adresse;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Contact", cascade={"persist", "remove"})
     * @Groups({"stage_entreprise_administration"})
     */
    private ?Contact $responsable;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\StageEtudiant", mappedBy="entreprise")
     */
    private Collection $stageEtudiants;

    /**
     * @ORM\OneToMany(targetEntity=ProjetEtudiant::class, mappedBy="organisme")
     */
    private Collection $projetEtudiants;

    public function __construct()
    {
        $this->stageEtudiants = new ArrayCollection();
        $this->projetEtudiants = new ArrayCollection();
    }

    public function getSiret(): ?string
    {
        return $this->siret;
    }

    public function setSiret(?string $siret): self
    {
        $this->siret = $siret;

        return $this;
    }

    public function getRaisonSociale(): ?string
    {
        return $this->raisonSociale;
    }

    public function setRaisonSociale(string $raisonSociale): self
    {
        $this->raisonSociale = $raisonSociale;

        return $this;
    }

    public function getAdresse(): ?Adresse
    {
        return $this->adresse;
    }

    public function setAdresse(?Adresse $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getResponsable(): ?Contact
    {
        return $this->responsable;
    }

    public function setResponsable(?Contact $responsable): self
    {
        $this->responsable = $responsable;

        return $this;
    }

    /**
     * @return Collection|StageEtudiant[]
     */
    public function getStageEtudiants(): Collection
    {
        return $this->stageEtudiants;
    }

    public function addStageEtudiant(StageEtudiant $stageEtudiant): self
    {
        if (!$this->stageEtudiants->contains($stageEtudiant)) {
            $this->stageEtudiants[] = $stageEtudiant;
            $stageEtudiant->setEntreprise($this);
        }

        return $this;
    }

    public function removeStageEtudiant(StageEtudiant $stageEtudiant): self
    {
        if ($this->stageEtudiants->contains($stageEtudiant)) {
            $this->stageEtudiants->removeElement($stageEtudiant);
            // set the owning side to null (unless already changed)
            if ($stageEtudiant->getEntreprise() === $this) {
                $stageEtudiant->setEntreprise(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ProjetEtudiant[]
     */
    public function getProjetEtudiants(): Collection
    {
        return $this->projetEtudiants;
    }

    public function addProjetEtudiant(ProjetEtudiant $projetEtudiant): self
    {
        if (!$this->projetEtudiants->contains($projetEtudiant)) {
            $this->projetEtudiants[] = $projetEtudiant;
            $projetEtudiant->setOrganisme($this);
        }

        return $this;
    }

    public function removeProjetEtudiant(ProjetEtudiant $projetEtudiant): self
    {
        if ($this->projetEtudiants->contains($projetEtudiant)) {
            $this->projetEtudiants->removeElement($projetEtudiant);
            // set the owning side to null (unless already changed)
            if ($projetEtudiant->getOrganisme() === $this) {
                $projetEtudiant->setOrganisme(null);
            }
        }

        return $this;
    }
}
