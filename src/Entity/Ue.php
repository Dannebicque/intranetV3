<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Ue.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 21/08/2019 12:29
 * @lastUpdate 21/08/2019 12:15
 */

namespace App\Entity;

use App\Entity\Traits\ApogeeTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UeRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Ue extends BaseEntity
{
    use ApogeeTrait;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $numeroUe = 1;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $coefficient = 1;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $nbEcts = 1;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Matiere", mappedBy="ue")
     */
    private $matieres;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="ues")
     */
    private $semestre;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ScolariteMoyenneUe", mappedBy="ue")
     */
    private $scolariteMoyenneUes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ScolaritePromoUe", mappedBy="ue")
     */
    private $scolaritePromoUes;

    /**
     * @ORM\Column(type="boolean")
     */
    private $actif = true;

    /**
     * Ue constructor.
     *
     * @param Semestre $semestre
     */
    public function __construct(Semestre $semestre)
    {
        $this->matieres = new ArrayCollection();
        $this->semestre = $semestre;
        $this->scolariteMoyenneUes = new ArrayCollection();
        $this->scolaritePromoUes = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    /**
     * @param mixed $libelle
     */
    public function setLibelle($libelle): void
    {
        $this->libelle = $libelle;
    }

    /**
     * @return int
     */
    public function getNumeroUe(): int
    {
        return $this->numeroUe;
    }

    /**
     * @param int $numeroUe
     */
    public function setNumeroUe(int $numeroUe): void
    {
        $this->numeroUe = $numeroUe;
    }

    /**
     * @return float
     */
    public function getCoefficient(): float
    {
        return $this->coefficient;
    }

    /**
     * @param float $coefficient
     */
    public function setCoefficient(float $coefficient): void
    {
        $this->coefficient = $coefficient;
    }

    /**
     * @return float
     */
    public function getNbEcts(): float
    {
        return $this->nbEcts;
    }

    /**
     * @param float $nbEcts
     */
    public function setNbEcts(float $nbEcts): void
    {
        $this->nbEcts = $nbEcts;
    }

    /**
     * @return Diplome|null
     */
    public function getDiplome(): ?Diplome
    {
        if ($this->semestre !== null && $this->semestre->getAnnee() !== null && $this->semestre->getAnnee()->getDiplome() !== null) {
            return $this->semestre->getAnnee()->getDiplome();
        }

        return null;
    }

    /**
     * @return Collection|Matiere[]
     */
    public function getMatieres(): Collection
    {
        return $this->matieres;
    }

    /**
     * @param Matiere $matiere
     *
     * @return Ue
     */
    public function addMatiere(Matiere $matiere): self
    {
        if (!$this->matieres->contains($matiere)) {
            $this->matieres[] = $matiere;
            $matiere->setUe($this);
        }

        return $this;
    }

    /**
     * @param Matiere $matiere
     *
     * @return Ue
     */
    public function removeMatiere(Matiere $matiere): self
    {
        if ($this->matieres->contains($matiere)) {
            $this->matieres->removeElement($matiere);
            // set the owning side to null (unless already changed)
            if ($matiere->getUe() === $this) {
                $matiere->setUe(null);
            }
        }

        return $this;
    }

    /**
     * @return Semestre|null
     */
    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    /**
     * @param Semestre|null $semestre
     *
     * @return Ue
     */
    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    /**
     * @return Collection|ScolariteMoyenneUe[]
     */
    public function getScolariteMoyenneUes(): Collection
    {
        return $this->scolariteMoyenneUes;
    }

    public function addScolariteMoyenneUe(ScolariteMoyenneUe $scolariteMoyenneUe): self
    {
        if (!$this->scolariteMoyenneUes->contains($scolariteMoyenneUe)) {
            $this->scolariteMoyenneUes[] = $scolariteMoyenneUe;
            $scolariteMoyenneUe->setUe($this);
        }

        return $this;
    }

    public function removeScolariteMoyenneUe(ScolariteMoyenneUe $scolariteMoyenneUe): self
    {
        if ($this->scolariteMoyenneUes->contains($scolariteMoyenneUe)) {
            $this->scolariteMoyenneUes->removeElement($scolariteMoyenneUe);
            // set the owning side to null (unless already changed)
            if ($scolariteMoyenneUe->getUe() === $this) {
                $scolariteMoyenneUe->setUe(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ScolaritePromoUe[]
     */
    public function getScolaritePromoUes(): Collection
    {
        return $this->scolaritePromoUes;
    }

    public function addScolaritePromoUe(ScolaritePromoUe $scolaritePromoUe): self
    {
        if (!$this->scolaritePromoUes->contains($scolaritePromoUe)) {
            $this->scolaritePromoUes[] = $scolaritePromoUe;
            $scolaritePromoUe->setUe($this);
        }

        return $this;
    }

    public function removeScolaritePromoUe(ScolaritePromoUe $scolaritePromoUe): self
    {
        if ($this->scolaritePromoUes->contains($scolaritePromoUe)) {
            $this->scolaritePromoUes->removeElement($scolaritePromoUe);
            // set the owning side to null (unless already changed)
            if ($scolaritePromoUe->getUe() === $this) {
                $scolaritePromoUe->setUe(null);
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

    public function getDisplay(): string
    {
        return 'UE '.$this->getNumeroUe().' | '.$this->getLibelle();
    }
}
