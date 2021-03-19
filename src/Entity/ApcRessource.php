<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcRessource.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/03/2021 16:18
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
class ApcRessource extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $libelle;

    /**
     * @ORM\ManyToOne(targetEntity=Semestre::class, inversedBy="apcRessources")
     */
    private $semestre;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $preRequis;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $description;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $motsCles;

    /**
     * @ORM\Column(type="float")
     */
    private float $heuresCM = 0;

    /**
     * @ORM\Column(type="float")
     */
    private float $heuresTD = 0;

    /**
     * @ORM\Column(type="float")
     */
    private float $heuresTP = 0;

    /**
     * @ORM\OneToMany(targetEntity=ApcRessourceCompetence::class, mappedBy="ressource", cascade={"persist","remove"} )
     */
    private $apcRessourceCompetences;

    /**
     * @ORM\OneToMany(targetEntity=ApcRessourceApprentissageCritique::class, mappedBy="ressource")
     */
    private $apcRessourceApprentissageCritiques;

    /**
     * @ORM\OneToMany(targetEntity=ApcSaeRessource::class, mappedBy="ressource")
     */
    private $apcSaeRessources;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private ?string $codeRessource;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $suspendu = false;

    public function __construct()
    {
        $this->apcRessourceCompetences = new ArrayCollection();
        $this->apcRessourceApprentissageCritiques = new ArrayCollection();
        $this->apcSaeRessources = new ArrayCollection();
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

    public function getPreRequis(): ?string
    {
        return $this->preRequis;
    }

    public function setPreRequis(?string $preRequis): self
    {
        $this->preRequis = $preRequis;

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

    public function getMotsCles(): ?string
    {
        return $this->motsCles;
    }

    public function setMotsCles(?string $motsCles): self
    {
        $this->motsCles = $motsCles;

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

    public function getCodeRessource(): ?string
    {
        return $this->codeRessource;
    }

    public function setCodeRessource(string $codeRessource): self
    {
        $this->codeRessource = $codeRessource;

        return $this;
    }

    public function getSuspendu(): ?bool
    {
        return $this->suspendu;
    }

    public function setSuspendu(bool $suspendu): self
    {
        $this->suspendu = $suspendu;

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
     * @param ApcCompetence $competence
     *
     * @return $this
     */
    public function addCompetence(ApcCompetence $competence): self
    {
        $apcRessourceCompetence = new ApcRessourceCompetence($this, $competence);
        $this->addApcRessourceCompetence($apcRessourceCompetence);

        return $this;
    }

    /**
     * @param ApcCompetence $competence
     *
     * @return $this
     */
    public function removeCompetence(ApcCompetence $competence): self
    {
        foreach ($this->apcRessourceCompetences as $apcRessourceCompetence) {
            if ($apcRessourceCompetence->getComparisonType() === $competence) {
                $this->apcRessourceCompetences->removeElement($apcRessourceCompetence);
            }
        }

        return $this;
    }

    public function getNiveau()
    {
        if (count($this->apcRessourceApprentissageCritiques) > 0) {
            $ac = $this->apcRessourceApprentissageCritiques[0]->getApprentissageCritique();

            return $ac !== null ? $ac->getNiveau()->getOrdre() : 0;
        }
    }

}
