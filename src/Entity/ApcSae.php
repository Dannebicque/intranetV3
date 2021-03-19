<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcSae.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/03/2021 21:14
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ApcSaeRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ApcSaeRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class ApcSae extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @ORM\ManyToOne(targetEntity=Semestre::class, inversedBy="apcSaes")
     */
    private $semestre;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="float")
     */
    private $heuresCM = 0;

    /**
     * @ORM\Column(type="float")
     */
    private $heuresTD = 0;

    /**
     * @ORM\Column(type="float")
     */
    private $heuresTP = 0;

    /**
     * @ORM\Column(type="float")
     */
    private $heuresProjet = 0;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $livrables;

    /**
     * @ORM\OneToMany(targetEntity=ApcSaeCompetence::class, mappedBy="sae", cascade={"persist","remove"})
     */
    private $apcSaeCompetences;

    /**
     * @ORM\OneToMany(targetEntity=ApcSaeRessource::class, mappedBy="sae", cascade={"persist","remove"})
     */
    private $apcSaeRessources;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $codeSae;

    /**
     * @ORM\OneToMany(targetEntity=ApcSaeApprentissageCritique::class, mappedBy="sae")
     */
    private $apcSaeApprentissageCritiques;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $exemples;

    public function __construct()
    {
        $this->apcSaeCompetences = new ArrayCollection();
        $this->apcSaeRessources = new ArrayCollection();
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

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getHeuresCM(): ?float
    {
        return $this->heuresCM;
    }

    public function setHeuresCM(float $heuresCM): self
    {
        $this->heuresCM = $heuresCM;

        return $this;
    }

    public function getHeuresTD(): ?float
    {
        return $this->heuresTD;
    }

    public function setHeuresTD(float $heuresTD): self
    {
        $this->heuresTD = $heuresTD;

        return $this;
    }

    public function getHeuresTP(): ?float
    {
        return $this->heuresTP;
    }

    public function setHeuresTP(float $heuresTP): self
    {
        $this->heuresTP = $heuresTP;

        return $this;
    }

    public function getHeuresProjet(): ?float
    {
        return $this->heuresProjet;
    }

    public function setHeuresProjet(float $heuresProjet): self
    {
        $this->heuresProjet = $heuresProjet;

        return $this;
    }

    public function getLivrables(): ?string
    {
        return $this->livrables;
    }

    public function setLivrables(?string $livrables): self
    {
        $this->livrables = $livrables;

        return $this;
    }

    /**
     * @return Collection|ApcSaeCompetence[]
     */
    public function getApcSaeCompetences(): Collection
    {
        return $this->apcSaeCompetences;
    }

    public function addApcSaeCompetence(ApcSaeCompetence $apcSaeCompetence): self
    {
        if (!$this->apcSaeCompetences->contains($apcSaeCompetence)) {
            $this->apcSaeCompetences[] = $apcSaeCompetence;
            $apcSaeCompetence->setSae($this);
        }

        return $this;
    }

    public function removeApcSaeCompetence(ApcSaeCompetence $apcSaeCompetence): self
    {
        if ($this->apcSaeCompetences->removeElement($apcSaeCompetence)) {
            // set the owning side to null (unless already changed)
            if ($apcSaeCompetence->getSae() === $this) {
                $apcSaeCompetence->setSae(null);
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
            $apcSaeRessource->setSae($this);
        }

        return $this;
    }

    public function removeApcSaeRessource(ApcSaeRessource $apcSaeRessource): self
    {
        if ($this->apcSaeRessources->removeElement($apcSaeRessource)) {
            // set the owning side to null (unless already changed)
            if ($apcSaeRessource->getSae() === $this) {
                $apcSaeRessource->setSae(null);
            }
        }

        return $this;
    }

    public function getCodeSae(): ?string
    {
        return $this->codeSae;
    }

    public function setCodeSae(string $codeSae): self
    {
        $this->codeSae = $codeSae;

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

        foreach ($this->getApcSaeCompetences() as $apcSaeCompetence) {
            $comptences->add($apcSaeCompetence->getCompetence());
        }

        return $comptences;
    }

    /**
     * @param ApcCompetence $competence
     *
     * @return $this
     */
    public function addCompetence(ApcCompetence $competence): self
    {
        $apcSaeCompetence = new ApcSaeCompetence($this, $competence);
        $this->addApcSaeCompetence($apcSaeCompetence);

        return $this;
    }

    /**
     * @param ApcCompetence $competence
     *
     * @return $this
     */
    public function removeCompetence(ApcCompetence $competence): self
    {
        foreach ($this->apcSaeCompetences as $apcSaeCompetence) {
            if ($apcSaeCompetence->getComparisonType() === $competence) {
                $this->apcSaeCompetences->removeElement($apcSaeCompetence);
            }
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
            $apcSaeApprentissageCritique->setSae($this);
        }

        return $this;
    }

    public function removeApcSaeApprentissageCritique(ApcSaeApprentissageCritique $apcSaeApprentissageCritique): self
    {
        if ($this->apcSaeApprentissageCritiques->removeElement($apcSaeApprentissageCritique)) {
            // set the owning side to null (unless already changed)
            if ($apcSaeApprentissageCritique->getSae() === $this) {
                $apcSaeApprentissageCritique->setSae(null);
            }
        }

        return $this;
    }

    public function getExemples(): ?string
    {
        return $this->exemples;
    }

    public function setExemples(?string $exemples): self
    {
        $this->exemples = $exemples;

        return $this;
    }
}
