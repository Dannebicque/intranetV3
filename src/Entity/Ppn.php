<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Ppn.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/06/2021 10:28
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PpnRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Ppn extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $libelle;

    /**
     * @ORM\Column(type="integer")
     */
    private int $annee;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Matiere", mappedBy="ppn")
     */
    private Collection $matieres; //todo: a revoir???

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Diplome", inversedBy="ppns")
     */
    private ?Diplome $diplome;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Semestre", mappedBy="ppnActif")
     */
    private Collection $semestres;

    public function __construct()
    {
        $this->annee = (int)date('Y');
        $this->matieres = new ArrayCollection();
        $this->semestres = new ArrayCollection();
    }

    /**
     * @return string
     */
    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): void
    {
        $this->libelle = $libelle;
    }

    public function getAnnee(): int
    {
        return $this->annee;
    }

    public function setAnnee(int $annee): void
    {
        $this->annee = $annee;
    }

    /**
     * @return Collection|Matiere[]
     */
    public function getMatieres(): Collection
    {
        return $this->matieres;
    }

    public function addMatiere(Matiere $matiere): self
    {
        if (!$this->matieres->contains($matiere)) {
            $this->matieres[] = $matiere;
            $matiere->setPpn($this);
        }

        return $this;
    }

    public function removeMatiere(Matiere $matiere): self
    {
        if ($this->matieres->contains($matiere)) {
            $this->matieres->removeElement($matiere);
            // set the owning side to null (unless already changed)
            if ($matiere->getPpn() === $this) {
                $matiere->setPpn(null);
            }
        }

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
     * @return Collection|Semestre[]
     */
    public function getSemestres(): Collection
    {
        return $this->semestres;
    }

    public function addSemestre(Semestre $semestre): self
    {
        if (!$this->semestres->contains($semestre)) {
            $this->semestres[] = $semestre;
            $semestre->setPpnActif($this);
        }

        return $this;
    }

    public function removeSemestre(Semestre $semestre): self
    {
        if ($this->semestres->contains($semestre)) {
            $this->semestres->removeElement($semestre);
            // set the owning side to null (unless already changed)
            if ($semestre->getPpnActif() === $this) {
                $semestre->setPpnActif(null);
            }
        }

        return $this;
    }
}
