<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/ApcCompetence.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/08/2022 17:55
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ApcComptenceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ApcComptenceRepository::class)]
#[ORM\HasLifecycleCallbacks]
class ApcCompetence extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelle = null;

    #[ORM\Column(type: Types::STRING, length: 50)]
    private ?string $nomCourt = null;

    #[ORM\Column(type: Types::STRING, length: 20)]
    private ?string $couleur = null;

    #[ORM\ManyToOne(targetEntity: ApcReferentiel::class, inversedBy: 'apcComptences')]
    private ?ApcReferentiel $apcReferentiel = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ApcComposanteEssentielle>
     */
    #[ORM\OneToMany(mappedBy: 'competence', targetEntity: ApcComposanteEssentielle::class, cascade: [
        'persist',
        'remove',
    ])]
    private Collection $apcComposanteEssentielles;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ApcNiveau>
     */
    #[ORM\OneToMany(mappedBy: 'competence', targetEntity: ApcNiveau::class, cascade: ['persist', 'remove'])]
    private Collection $apcNiveaux;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ApcRessourceCompetence>
     */
    #[ORM\OneToMany(mappedBy: 'competence', targetEntity: ApcRessourceCompetence::class)]
    private Collection $apcRessourceCompetences;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ApcSaeCompetence>
     */
    #[ORM\OneToMany(mappedBy: 'competence', targetEntity: ApcSaeCompetence::class)]
    private Collection $apcSaeCompetences;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ApcSituationProfessionnelle>
     */
    #[ORM\OneToMany(mappedBy: 'competence', targetEntity: ApcSituationProfessionnelle::class, cascade: [
        'persist',
        'remove',
    ])]
    private Collection $apcSituationProfessionnelles;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Ue>
     */
    #[ORM\OneToMany(mappedBy: 'apcCompetence', targetEntity: Ue::class)]
    private Collection $ue;

    public function __construct(ApcReferentiel $referentiel)
    {
        $this->apcComposanteEssentielles = new ArrayCollection();
        $this->apcNiveaux = new ArrayCollection();
        $this->setApcReferentiel($referentiel);
        $this->apcRessourceCompetences = new ArrayCollection();
        $this->apcSaeCompetences = new ArrayCollection();
        $this->apcSituationProfessionnelles = new ArrayCollection();
        $this->ue = new ArrayCollection();
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
        return $this->nomCourt;
    }

    public function setNomCourt(string $nomCourt): self
    {
        $this->nomCourt = trim($nomCourt);

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

    public function getApcReferentiel(): ?ApcReferentiel
    {
        return $this->apcReferentiel;
    }

    public function setApcReferentiel(?ApcReferentiel $apcReferentiel): self
    {
        $this->apcReferentiel = $apcReferentiel;

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
        // set the owning side to null (unless already changed)
        if ($this->apcRessourceCompetences->removeElement($apcRessourceCompetence) && $apcRessourceCompetence->getCompetence() === $this) {
            $apcRessourceCompetence->setCompetence(null);
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
        // set the owning side to null (unless already changed)
        if ($this->apcSaeCompetences->removeElement($apcSaeCompetence) && $apcSaeCompetence->getCompetence() === $this) {
            $apcSaeCompetence->setCompetence(null);
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
        // set the owning side to null (unless already changed)
        if ($this->apcSituationProfessionnelles->removeElement($apcSituationProfessionnelle) && $apcSituationProfessionnelle->getCompetence() === $this) {
            $apcSituationProfessionnelle->setCompetence(null);
        }

        return $this;
    }

    /**
     * @return Collection|Ue[]
     */
    public function getUe(): Collection
    {
        return $this->ue;
    }

    public function addUe(Ue $ue): self
    {
        if (!$this->ue->contains($ue)) {
            $this->ue[] = $ue;
            $ue->setApcCompetence($this);
        }

        return $this;
    }

    public function removeUe(Ue $ue): self
    {
        // set the owning side to null (unless already changed)
        if ($this->ue->removeElement($ue) && $ue->getApcCompetence() === $this) {
            $ue->setApcCompetence(null);
        }

        return $this;
    }
}
