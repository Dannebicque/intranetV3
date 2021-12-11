<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcApprentissageCritique.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 17:31
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ApcApprentissageCritiqueRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ApcApprentissageCritiqueRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class ApcApprentissageCritique extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $libelle;

    /**
     * @ORM\ManyToOne(targetEntity=ApcNiveau::class, inversedBy="apcApprentissageCritiques")
     */
    private ?ApcNiveau $niveau;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private ?string $code;

    /**
     * @ORM\OneToMany(targetEntity=ApcRessourceApprentissageCritique::class, mappedBy="apprentissageCritique")
     */
    private Collection $apcRessourceApprentissageCritiques;

    /**
     * @ORM\OneToMany(targetEntity=ApcSaeApprentissageCritique::class, mappedBy="apprentissageCritique")
     */
    private Collection $apcSaeApprentissageCritiques;

    /**
     * ApcApprentissageCritique constructor.
     *
     * @param $niveau
     */
    public function __construct($niveau = null)
    {
        $this->niveau = $niveau;
        $this->apcRessourceApprentissageCritiques = new ArrayCollection();
        $this->apcSaeApprentissageCritiques = new ArrayCollection();
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

    public function getNiveau(): ?ApcNiveau
    {
        return $this->niveau;
    }

    public function setNiveau(?ApcNiveau $niveau): self
    {
        $this->niveau = $niveau;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = trim($code);

        return $this;
    }

    /**
     * @return Collection|ApcRessourceApprentissageCritique[]
     */
    public function getApcRessourceApprentissageCritiques(): Collection
    {
        return $this->apcRessourceApprentissageCritiques;
    }

    public function addApcRessourceApprentissageCritique(
        ApcRessourceApprentissageCritique $apcRessourceApprentissageCritique
    ): self {
        if (!$this->apcRessourceApprentissageCritiques->contains($apcRessourceApprentissageCritique)) {
            $this->apcRessourceApprentissageCritiques[] = $apcRessourceApprentissageCritique;
            $apcRessourceApprentissageCritique->setApprentissageCritique($this);
        }

        return $this;
    }

    public function removeApcRessourceApprentissageCritique(
        ApcRessourceApprentissageCritique $apcRessourceApprentissageCritique
    ): self {
        // set the owning side to null (unless already changed)
        if ($this->apcRessourceApprentissageCritiques->removeElement($apcRessourceApprentissageCritique) && $apcRessourceApprentissageCritique->getApprentissageCritique() === $this) {
            $apcRessourceApprentissageCritique->setApprentissageCritique(null);
        }

        return $this;
    }

    /**
     * @return Collection|ApcSaeApprentissageCritique[]
     */
    public function getApcSaeApprentissageCritiques(): Collection
    {
        return $this->apcSaeApprentissageCritiques;
    }

    public function addApcSaeApprentissageCritique(ApcSaeApprentissageCritique $apcSaeApprentissageCritique): self
    {
        if (!$this->apcSaeApprentissageCritiques->contains($apcSaeApprentissageCritique)) {
            $this->apcSaeApprentissageCritiques[] = $apcSaeApprentissageCritique;
            $apcSaeApprentissageCritique->setApprentissageCritique($this);
        }

        return $this;
    }

    public function removeApcSaeApprentissageCritique(ApcSaeApprentissageCritique $apcSaeApprentissageCritique): self
    {
        // set the owning side to null (unless already changed)
        if ($this->apcSaeApprentissageCritiques->removeElement($apcSaeApprentissageCritique) && $apcSaeApprentissageCritique->getApprentissageCritique() === $this) {
            $apcSaeApprentissageCritique->setApprentissageCritique(null);
        }

        return $this;
    }

    public function getCompetence(): ?ApcCompetence
    {
        if (null !== $this->getNiveau()) {
            return $this->getNiveau()->getCompetence();
        }

        return null;
    }
}
