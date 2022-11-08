<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Entreprise.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/11/2022 07:46
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\EntrepriseRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: EntrepriseRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Entreprise extends BaseEntity
{
    use LifeCycleTrait;

    #[Assert\Length(min: 0, max: 30, maxMessage: 'Maximum {{ limit }} caractères')]
    #[ORM\Column(type: Types::STRING, length: 30, nullable: true)]
    private ?string $siret = null;

    #[Groups(groups: ['stage_entreprise_administration', 'alternance_administration'])]
    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $raisonSociale = null;

    #[Groups(groups: ['stage_entreprise_administration', 'alternance_administration'])]
    #[ORM\OneToOne(targetEntity: Adresse::class, cascade: ['persist', 'remove'], fetch: 'EAGER')]
    private ?Adresse $adresse = null;

    #[Groups(groups: ['stage_entreprise_administration', 'alternance_administration'])]
    #[ORM\OneToOne(targetEntity: Contact::class, cascade: ['persist', 'remove'])]
    private ?Contact $responsable = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\StageEtudiant>
     */
    #[ORM\OneToMany(mappedBy: 'entreprise', targetEntity: StageEtudiant::class)]
    private Collection $stageEtudiants;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ProjetEtudiant>
     */
    #[ORM\OneToMany(mappedBy: 'organisme', targetEntity: ProjetEtudiant::class)]
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
