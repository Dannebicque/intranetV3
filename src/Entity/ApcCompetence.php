<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcCompetence.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/03/2021 17:53
 */

namespace App\Entity;

use App\Repository\ApcComptenceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ApcComptenceRepository::class)
 */
class ApcCompetence extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $nom_court;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $couleur;

    /**
     * @ORM\ManyToOne(targetEntity=Diplome::class, inversedBy="apcComptences")
     */
    private $diplome;

    /**
     * @ORM\OneToMany(targetEntity=ApcComposanteEssentielle::class, mappedBy="competence", cascade={"persist","remove"})
     */
    private $apcComposanteEssentielles;

    /**
     * @ORM\OneToMany(targetEntity=ApcNiveau::class, mappedBy="competence", cascade={"persist","remove"})
     */
    private $apcNiveaux;

    /**
     * @ORM\OneToMany(targetEntity=ApcRessourceCompetence::class, mappedBy="competence")
     */
    private $apcRessourceCompetences;

    /**
     * @ORM\OneToMany(targetEntity=ApcSaeCompetence::class, mappedBy="competence")
     */
    private $apcSaeCompetences;

    /**
     * @ORM\OneToMany(targetEntity=ApcSituationProfessionnelle::class, mappedBy="competence",
     *                                                                 cascade={"persist","remove"})
     */
    private $apcSituationProfessionnelles;

    public function __construct(Diplome $diplome)
    {
        $this->apcComposanteEssentielles = new ArrayCollection();
        $this->apcNiveaux = new ArrayCollection();
        $this->setDiplome($diplome);
        $this->apcRessourceCompetences = new ArrayCollection();
        $this->apcSaeCompetences = new ArrayCollection();
        $this->apcSituationProfessionnelles = new ArrayCollection();
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

    public function getNomCourt(): ?string
    {
        return $this->nom_court;
    }

    public function setNomCourt(string $nom_court): self
    {
        $this->nom_court = $nom_court;

        return $this;
    }

    public function getCouleur(): ?string
    {
        return $this->couleur;
    }

    public function setCouleur(string $couleur): self
    {
        $this->couleur = $couleur;

        return $this;
    }

    public function getDiplome(): ?Diplome
    {
        return $this->diplome;
    }

    public function setDiplome(?Diplome $diplome): self
    {
        $this->diplome = $diplome;

        return $this;
    }

    /**
     * @return Collection|ApcComposanteEssentielle[]
     */
    public function getApcComposanteEssentielles(): Collection
    {
        return $this->apcComposanteEssentielles;
    }

    public function addApcComposanteEssentielle(ApcComposanteEssentielle $apcComposanteEssentielle): self
    {
        if (!$this->apcComposanteEssentielles->contains($apcComposanteEssentielle)) {
            $this->apcComposanteEssentielles[] = $apcComposanteEssentielle;
            $apcComposanteEssentielle->setCompetence($this);
        }

        return $this;
    }

    public function removeApcComposanteEssentielle(ApcComposanteEssentielle $apcComposanteEssentielle): self
    {
        if ($this->apcComposanteEssentielles->contains($apcComposanteEssentielle)) {
            $this->apcComposanteEssentielles->removeElement($apcComposanteEssentielle);
            // set the owning side to null (unless already changed)
            if ($apcComposanteEssentielle->getCompetence() === $this) {
                $apcComposanteEssentielle->setCompetence(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ApcNiveau[]
     */
    public function getApcNiveaux(): Collection
    {
        return $this->apcNiveaux;
    }

    public function addApcNiveau(ApcNiveau $apcNiveau): self
    {
        if (!$this->apcNiveaux->contains($apcNiveau)) {
            $this->apcNiveaux[] = $apcNiveau;
            $apcNiveau->setCompetence($this);
        }

        return $this;
    }

    public function removeApcNiveau(ApcNiveau $apcNiveau): self
    {
        if ($this->apcNiveaux->contains($apcNiveau)) {
            $this->apcNiveaux->removeElement($apcNiveau);
            // set the owning side to null (unless already changed)
            if ($apcNiveau->getCompetence() === $this) {
                $apcNiveau->setCompetence(null);
            }
        }

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
            $apcRessourceCompetence->setCompetence($this);
        }

        return $this;
    }

    public function removeApcRessourceCompetence(ApcRessourceCompetence $apcRessourceCompetence): self
    {
        if ($this->apcRessourceCompetences->removeElement($apcRessourceCompetence)) {
            // set the owning side to null (unless already changed)
            if ($apcRessourceCompetence->getCompetence() === $this) {
                $apcRessourceCompetence->setCompetence(null);
            }
        }

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
            $apcSaeCompetence->setCompetence($this);
        }

        return $this;
    }

    public function removeApcSaeCompetence(ApcSaeCompetence $apcSaeCompetence): self
    {
        if ($this->apcSaeCompetences->removeElement($apcSaeCompetence)) {
            // set the owning side to null (unless already changed)
            if ($apcSaeCompetence->getCompetence() === $this) {
                $apcSaeCompetence->setCompetence(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ApcSituationProfessionnelle[]
     */
    public function getApcSituationProfessionnelles(): Collection
    {
        return $this->apcSituationProfessionnelles;
    }

    public function addApcSituationProfessionnelle(ApcSituationProfessionnelle $apcSituationProfessionnelle): self
    {
        if (!$this->apcSituationProfessionnelles->contains($apcSituationProfessionnelle)) {
            $this->apcSituationProfessionnelles[] = $apcSituationProfessionnelle;
            $apcSituationProfessionnelle->setCompetence($this);
        }

        return $this;
    }

    public function removeApcSituationProfessionnelle(ApcSituationProfessionnelle $apcSituationProfessionnelle): self
    {
        if ($this->apcSituationProfessionnelles->removeElement($apcSituationProfessionnelle)) {
            // set the owning side to null (unless already changed)
            if ($apcSituationProfessionnelle->getCompetence() === $this) {
                $apcSituationProfessionnelle->setCompetence(null);
            }
        }

        return $this;
    }
}
