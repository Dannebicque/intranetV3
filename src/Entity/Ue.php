<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UeRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Ue extends BaseEntity
{
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
     * @ORM\Column(type="string", length=20)
     */
    private $codeApogee;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $codeVersion;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $codeDepartement;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Matiere", mappedBy="ue")
     */
    private $matieres;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="ues")
     */
    private $semestre;

    /**
     * Ue constructor.
     *
     * @param Semestre $semestre
     */
    public function __construct(Semestre $semestre)
    {
        $this->matieres = new ArrayCollection();
        $this->semestre = $semestre;
    }

    /**
     * @return mixed
     */
    public function getCodeApogee()
    {
        return $this->codeApogee;
    }

    /**
     * @param mixed $codeApogee
     */
    public function setCodeApogee($codeApogee): void
    {
        $this->codeApogee = $codeApogee;
    }

    /**
     * @return mixed
     */
    public function getCodeVersion()
    {
        return $this->codeVersion;
    }

    /**
     * @param mixed $codeVersion
     */
    public function setCodeVersion($codeVersion): void
    {
        $this->codeVersion = $codeVersion;
    }

    /**
     * @return mixed
     */
    public function getCodeDepartement()
    {
        return $this->codeDepartement;
    }

    /**
     * @param mixed $codeDepartement
     */
    public function setCodeDepartement($codeDepartement): void
    {
        $this->codeDepartement = $codeDepartement;
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


}
