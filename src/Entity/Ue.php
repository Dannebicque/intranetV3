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
    private $numero_ue = 1;

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
    private $nb_ects = 1;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $code_apogee;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $code_version;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $code_departement;

    /**
     * @var Semestre
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre")
     */
    private $semestre;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Matiere", mappedBy="ue")
     */
    private $matieres;

    public function __construct()
    {
        $this->matieres = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getCodeApogee()
    {
        return $this->code_apogee;
    }

    /**
     * @param mixed $code_apogee
     */
    public function setCodeApogee($code_apogee): void
    {
        $this->code_apogee = $code_apogee;
    }

    /**
     * @return mixed
     */
    public function getCodeVersion()
    {
        return $this->code_version;
    }

    /**
     * @param mixed $code_version
     */
    public function setCodeVersion($code_version): void
    {
        $this->code_version = $code_version;
    }

    /**
     * @return mixed
     */
    public function getCodeDepartement()
    {
        return $this->code_departement;
    }

    /**
     * @param mixed $code_departement
     */
    public function setCodeDepartement($code_departement): void
    {
        $this->code_departement = $code_departement;
    }

    /**
     * @return Semestre
     */
    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    /**
     * @param Semestre $semestre
     */
    public function setSemestre(Semestre $semestre): void
    {
        $this->semestre = $semestre;
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
        return $this->numero_ue;
    }

    /**
     * @param int $numero_ue
     */
    public function setNumeroUe(int $numero_ue): void
    {
        $this->numero_ue = $numero_ue;
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
        return $this->nb_ects;
    }

    /**
     * @param float $nb_ects
     */
    public function setNbEcts(float $nb_ects): void
    {
        $this->nb_ects = $nb_ects;
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

    public function addMatiere(Matiere $matiere): self
    {
        if (!$this->matieres->contains($matiere)) {
            $this->matieres[] = $matiere;
            $matiere->setUe($this);
        }

        return $this;
    }

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


}
