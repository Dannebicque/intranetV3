<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcRessource.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/07/2021 15:41
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ApcRessourceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ApcRessourceRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class ApcRessource extends AbstractMatiere
{
    use LifeCycleTrait;

    public const SOURCE = 'ressource';

    /**
     * @ORM\ManyToOne(targetEntity=Semestre::class, inversedBy="apcRessources")
     */
    private ?Semestre $semestre;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $preRequis;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $motsCles;

    /**
     * @ORM\OneToMany(targetEntity=ApcRessourceCompetence::class, mappedBy="ressource", cascade={"persist","remove"} )
     */
    private Collection $apcRessourceCompetences;

    /**
     * @ORM\OneToMany(targetEntity=ApcRessourceApprentissageCritique::class, mappedBy="ressource")
     */
    private Collection $apcRessourceApprentissageCritiques;

    /**
     * @ORM\OneToMany(targetEntity=ApcSaeRessource::class, mappedBy="ressource")
     */
    private Collection $apcSaeRessources;

    public function __construct()
    {
        $this->apcRessourceCompetences = new ArrayCollection();
        $this->apcRessourceApprentissageCritiques = new ArrayCollection();
        $this->apcSaeRessources = new ArrayCollection();
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    public function getPreRequis(): ?string
    {
        return $this->preRequis;
    }

    public function setPreRequis(?string $preRequis): self
    {
        $this->preRequis = $preRequis;

        return $this;
    }

    public function getMotsCles(): ?string
    {
        return $this->motsCles;
    }

    public function setMotsCles(?string $motsCles): self
    {
        $this->motsCles = $motsCles;

        return $this;
    }

    /**
     * @return Collection|ApcRessourceCompetence[]
     */
    public function getApcRessourceCompetences(): Collection
    {
        return $this->apcRessourceCompetences;
    }

    public function addApcRessourceCompetence(ApcRessourceCompetence $apcRessourceCompetence): self
    {
        if (!$this->apcRessourceCompetences->contains($apcRessourceCompetence)) {
            $this->apcRessourceCompetences[] = $apcRessourceCompetence;
            $apcRessourceCompetence->setRessource($this);
        }

        return $this;
    }

    public function removeApcRessourceCompetence(ApcRessourceCompetence $apcRessourceCompetence): self
    {
        if ($this->apcRessourceCompetences->removeElement($apcRessourceCompetence)) {
            // set the owning side to null (unless already changed)
            if ($apcRessourceCompetence->getRessource() === $this) {
                $apcRessourceCompetence->setRessource(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ApcRessourceApprentissageCritique[]
     */
    public function getApcRessourceApprentissageCritiques(): Collection
    {
        return $this->apcRessourceApprentissageCritiques;
    }

    public function addApcRessourceApprentissageCritique(ApcRessourceApprentissageCritique $apcRessourceApprentissageCritique): self
    {
        if (!$this->apcRessourceApprentissageCritiques->contains($apcRessourceApprentissageCritique)) {
            $this->apcRessourceApprentissageCritiques[] = $apcRessourceApprentissageCritique;
            $apcRessourceApprentissageCritique->setRessource($this);
        }

        return $this;
    }

    public function removeApcRessourceApprentissageCritique(ApcRessourceApprentissageCritique $apcRessourceApprentissageCritique): self
    {
        if ($this->apcRessourceApprentissageCritiques->removeElement($apcRessourceApprentissageCritique)) {
            // set the owning side to null (unless already changed)
            if ($apcRessourceApprentissageCritique->getRessource() === $this) {
                $apcRessourceApprentissageCritique->setRessource(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ApcSaeRessource[]
     */
    public function getApcSaeRessources(): Collection
    {
        return $this->apcSaeRessources;
    }

    public function addApcSaeRessource(ApcSaeRessource $apcSaeRessource): self
    {
        if (!$this->apcSaeRessources->contains($apcSaeRessource)) {
            $this->apcSaeRessources[] = $apcSaeRessource;
            $apcSaeRessource->setRessource($this);
        }

        return $this;
    }

    public function removeApcSaeRessource(ApcSaeRessource $apcSaeRessource): self
    {
        if ($this->apcSaeRessources->removeElement($apcSaeRessource)) {
            // set the owning side to null (unless already changed)
            if ($apcSaeRessource->getRessource() === $this) {
                $apcSaeRessource->setRessource(null);
            }
        }

        return $this;
    }

    public function getDiplome(): ?Diplome
    {
        if (null !== $this->getSemestre()) {
            return $this->getSemestre()->getDiplome();
        }

        return null;
    }

    /**
     * @return Collection|ApcCompetence[]
     */
    public function getCompetences(): Collection
    {
        $comptences = new ArrayCollection();

        foreach ($this->getApcRessourceCompetences() as $apcRessourceCompetence) {
            $comptences->add($apcRessourceCompetence->getCompetence());
        }

        return $comptences;
    }

    /**
     * @return $this
     */
    public function addCompetence(ApcCompetence $competence): self
    {
        $apcRessourceCompetence = new ApcRessourceCompetence($this, $competence);
        $this->addApcRessourceCompetence($apcRessourceCompetence);

        return $this;
    }

    /**
     * @return $this
     */
    public function removeCompetence(ApcCompetence $competence): self
    {
        foreach ($this->apcRessourceCompetences as $apcRessourceCompetence) {
            if ($apcRessourceCompetence->getCompetence() === $competence) {
                $this->apcRessourceCompetences->removeElement($apcRessourceCompetence);
            }
        }

        return $this;
    }

    public function getNiveau(): ?int
    {
        if (count($this->apcRessourceApprentissageCritiques) > 0) {
            $ac = $this->apcRessourceApprentissageCritiques[0]->getApprentissageCritique();

            return null !== $ac ? $ac->getNiveau()->getOrdre() : 0;
        }

        return null;
    }

    public function getJson(): array
    {
        return $this->initTabJson();
    }
}
