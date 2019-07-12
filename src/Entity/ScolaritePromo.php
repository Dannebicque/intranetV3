<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/ScolaritePromo.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 3/18/19 6:59 AM
 */

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ScolaritePromoRepository")
 */
class ScolaritePromo
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="scolaritePromos")
     */
    private $semestre;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire", inversedBy="scolaritePromos")
     */
    private $anneeUniversitaire;

    /**
     * @ORM\Column(type="float")
     */
    private $min;

    /**
     * @ORM\Column(type="float")
     */
    private $max;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbEtudiants;

    /**
     * @ORM\Column(type="float")
     */
    private $moyenne;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ScolaritePromoUe", mappedBy="scolaritePromo")
     */
    private $scolaritePromoUes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ScolaritePromoMatiere", mappedBy="scolaritePromo")
     */
    private $scolaritePromoMatieres;

    public function __construct()
    {
        $this->scolaritePromoUes = new ArrayCollection();
        $this->scolaritePromoMatieres = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(?AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

        return $this;
    }

    public function getMin(): ?float
    {
        return $this->min;
    }

    public function setMin(float $min): self
    {
        $this->min = $min;

        return $this;
    }

    public function getMax(): ?float
    {
        return $this->max;
    }

    public function setMax(float $max): self
    {
        $this->max = $max;

        return $this;
    }

    public function getNbEtudiants(): ?int
    {
        return $this->nbEtudiants;
    }

    public function setNbEtudiants(int $nbEtudiants): self
    {
        $this->nbEtudiants = $nbEtudiants;

        return $this;
    }

    public function getMoyenne(): ?float
    {
        return $this->moyenne;
    }

    public function setMoyenne(float $moyenne): self
    {
        $this->moyenne = $moyenne;

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
            $scolaritePromoUe->setScolaritePromo($this);
        }

        return $this;
    }

    public function removeScolaritePromoUe(ScolaritePromoUe $scolaritePromoUe): self
    {
        if ($this->scolaritePromoUes->contains($scolaritePromoUe)) {
            $this->scolaritePromoUes->removeElement($scolaritePromoUe);
            // set the owning side to null (unless already changed)
            if ($scolaritePromoUe->getScolaritePromo() === $this) {
                $scolaritePromoUe->setScolaritePromo(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ScolaritePromoMatiere[]
     */
    public function getScolaritePromoMatieres(): Collection
    {
        return $this->scolaritePromoMatieres;
    }

    public function addScolaritePromoMatiere(ScolaritePromoMatiere $scolaritePromoMatiere): self
    {
        if (!$this->scolaritePromoMatieres->contains($scolaritePromoMatiere)) {
            $this->scolaritePromoMatieres[] = $scolaritePromoMatiere;
            $scolaritePromoMatiere->setScolaritePromo($this);
        }

        return $this;
    }

    public function removeScolaritePromoMatiere(ScolaritePromoMatiere $scolaritePromoMatiere): self
    {
        if ($this->scolaritePromoMatieres->contains($scolaritePromoMatiere)) {
            $this->scolaritePromoMatieres->removeElement($scolaritePromoMatiere);
            // set the owning side to null (unless already changed)
            if ($scolaritePromoMatiere->getScolaritePromo() === $this) {
                $scolaritePromoMatiere->setScolaritePromo(null);
            }
        }

        return $this;
    }
}
