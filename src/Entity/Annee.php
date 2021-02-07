<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Annee.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity;

use App\Classes\Tools;
use App\Entity\Traits\ApogeeTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AnneeRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Annee extends BaseEntity
{
    use ApogeeTrait;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"annee"})
     */
    private ?string $libelle;

    /**
     * @ORM\Column(name="ordre", type="integer")
     */
    private int $ordre = 1;

    /**
     * @ORM\Column(type="string", length=150, nullable=true)
     * @Groups({"annee"})
     */
    private ?string $libelleLong;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $optAlternance = false;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Diplome", inversedBy="annees")
     */
    private ?Diplome $diplome;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Semestre", mappedBy="annee")
     * @ORM\OrderBy({"ordreLmd"="ASC"})
     */
    private $semestres;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $actif = true;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Alternance", mappedBy="annee")
     */
    private $alternances;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private ?string $couleur;

    /**
     * @ORM\OneToMany(targetEntity=ApcNiveau::class, mappedBy="annee")
     */
    private $apcNiveaux;

    public function __construct()
    {
        $this->semestres = new ArrayCollection();
        $this->alternances = new ArrayCollection();
        $this->apcNiveaux = new ArrayCollection();
    }

    /**
     * @return string
     */
    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle($libelle): void
    {
        $this->libelle = $libelle;
    }

    /**
     * @return int
     */
    public function getOrdre(): ?int
    {
        return $this->ordre;
    }

    public function setOrdre(int $ordre): void
    {
        $this->ordre = $ordre;
    }

    /**
     * @return string
     */
    public function getLibelleLong(): ?string
    {
        return $this->libelleLong;
    }

    public function setLibelleLong(string $libelleLong): void
    {
        $this->libelleLong = $libelleLong;
    }

    public function isOptAlternance(): bool
    {
        return $this->optAlternance;
    }

    public function setOptAlternance(bool $optAlternance): void
    {
        $this->optAlternance = $optAlternance;
    }

    /**
     * @param $name
     * @param $value
     */
    public function update($name, $value): void
    {
        Tools::updateFields($name, $value, $this);
    }

    public function getDiplome(): ?Diplome
    {
        return $this->diplome;
    }

    /**
     * @return Annee
     */
    public function setDiplome(?Diplome $diplome): self
    {
        $this->diplome = $diplome;

        return $this;
    }

    /**
     * @return Collection|Semestre[]
     */
    public function getSemestres(): Collection
    {
        return $this->semestres;
    }

    /**
     * @return Annee
     */
    public function addSemestre(Semestre $semestre): self
    {
        if (!$this->semestres->contains($semestre)) {
            $this->semestres[] = $semestre;
            $semestre->setAnnee($this);
        }

        return $this;
    }

    /**
     * @return Annee
     */
    public function removeSemestre(Semestre $semestre): self
    {
        if ($this->semestres->contains($semestre)) {
            $this->semestres->removeElement($semestre);
            // set the owning side to null (unless already changed)
            if ($semestre->getAnnee() === $this) {
                $semestre->setAnnee(null);
            }
        }

        return $this;
    }

    public function getActif(): ?bool
    {
        return $this->actif;
    }

    public function setActif(bool $actif): self
    {
        $this->actif = $actif;

        return $this;
    }

    /**
     * @return Collection|Alternance[]
     */
    public function getAlternances(): Collection
    {
        return $this->alternances;
    }

    public function addAlternance(Alternance $alternance): self
    {
        if (!$this->alternances->contains($alternance)) {
            $this->alternances[] = $alternance;
            $alternance->setAnnee($this);
        }

        return $this;
    }

    public function removeAlternance(Alternance $alternance): self
    {
        if ($this->alternances->contains($alternance)) {
            $this->alternances->removeElement($alternance);
            // set the owning side to null (unless already changed)
            if ($alternance->getAnnee() === $this) {
                $alternance->setAnnee(null);
            }
        }

        return $this;
    }

    public function getAnneeUniversitaire()
    {
        if (null !== $this->getDiplome() && null !== $this->getDiplome()->getAnneeUniversitaire()) {
            return $this->getDiplome()->getAnneeUniversitaire()->getAnnee();
        }

        return 0;
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

    public function getOptAlternance(): ?bool
    {
        return $this->optAlternance;
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
            $apcNiveau->setAnnee($this);
        }

        return $this;
    }

    public function removeApcNiveau(ApcNiveau $apcNiveau): self
    {
        if ($this->apcNiveaux->contains($apcNiveau)) {
            $this->apcNiveaux->removeElement($apcNiveau);
            // set the owning side to null (unless already changed)
            if ($apcNiveau->getAnnee() === $this) {
                $apcNiveau->setAnnee(null);
            }
        }

        return $this;
    }
}
