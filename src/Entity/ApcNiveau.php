<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ApcNiveau.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2021 19:17
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ApcNiveauRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ApcNiveauRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class ApcNiveau extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $libelle;

    /**
     * @ORM\ManyToOne(targetEntity=ApcCompetence::class, inversedBy="apcNiveaux")
     */
    private ?ApcCompetence $competence;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $ordre;

    /**
     * @ORM\ManyToOne(targetEntity=Annee::class, inversedBy="apcNiveaux")
     */
    private ?Annee $annee;

    /**
     * @ORM\OneToMany(targetEntity=ApcApprentissageCritique::class, mappedBy="niveau", cascade={"persist","remove"})
     */
    private $apcApprentissageCritiques;

    /**
     * @ORM\OneToMany(targetEntity=ApcParcoursNiveau::class, mappedBy="niveau")
     */
    private $apcParcoursNiveaux;

    public function __construct(ApcCompetence $competence = null)
    {
        $this->setCompetence($competence);
        $this->apcApprentissageCritiques = new ArrayCollection();
        $this->apcParcoursNiveaux = new ArrayCollection();
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

    public function getCompetence(): ?ApcCompetence
    {
        return $this->competence;
    }

    public function setCompetence(?ApcCompetence $competence): self
    {
        $this->competence = $competence;

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

    public function getAnnee(): ?Annee
    {
        return $this->annee;
    }

    public function setAnnee(?Annee $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    /**
     * @return Collection|ApcApprentissageCritique[]
     */
    public function getApcApprentissageCritiques(): Collection
    {
        return $this->apcApprentissageCritiques;
    }

    public function addApcApprentissageCritique(ApcApprentissageCritique $apcApprentissageCritique): self
    {
        if (!$this->apcApprentissageCritiques->contains($apcApprentissageCritique)) {
            $this->apcApprentissageCritiques[] = $apcApprentissageCritique;
            $apcApprentissageCritique->setNiveau($this);
        }

        return $this;
    }

    public function removeApcApprentissageCritique(ApcApprentissageCritique $apcApprentissageCritique): self
    {
        if ($this->apcApprentissageCritiques->contains($apcApprentissageCritique)) {
            $this->apcApprentissageCritiques->removeElement($apcApprentissageCritique);
            // set the owning side to null (unless already changed)
            if ($apcApprentissageCritique->getNiveau() === $this) {
                $apcApprentissageCritique->setNiveau(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ApcParcoursNiveau[]
     */
    public function getApcParcoursNiveaux(): Collection
    {
        return $this->apcParcoursNiveaux;
    }

    public function addApcParcoursNiveau(ApcParcoursNiveau $apcParcoursNiveaux): self
    {
        if (!$this->apcParcoursNiveaux->contains($apcParcoursNiveaux)) {
            $this->apcParcoursNiveaux[] = $apcParcoursNiveaux;
            $apcParcoursNiveaux->setNiveau($this);
        }

        return $this;
    }

    public function removeApcParcoursNiveau(ApcParcoursNiveau $apcParcoursNiveaux): self
    {
        if ($this->apcParcoursNiveaux->removeElement($apcParcoursNiveaux)) {
            // set the owning side to null (unless already changed)
            if ($apcParcoursNiveaux->getNiveau() === $this) {
                $apcParcoursNiveaux->setNiveau(null);
            }
        }

        return $this;
    }

    public function display()
    {
        switch ($this->ordre) {
            case 1:
                $niv = 'Novice';
                break;
            case 2:
                $niv = 'Intermédiaire';
                break;
            case 3:
                $niv = 'Compétent';
                break;
        }

        return $this->getCompetence()->getNomCourt() . ' - Niveau ' . $niv . '(' . $this->ordre . ')';
    }
}
