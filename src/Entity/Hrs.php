<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\HrsRepository")
 */
class Hrs extends BaseEntity
{
    /**
     * @ORM\Column(type="float")
     */
    private $nbHeuresTd;

    /**
     * @ORM\Column(type="string", length=150)
     */
    private $libelle;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="hrs")
     */
    private $semestre;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Diplome", inversedBy="hrs")
     */
    private $diplome;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="hrs")
     */
    private $personnel;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeHrs", inversedBy="hrs")
     */
    private $typeHrs;

    /**
     * @ORM\Column(type="integer")
     */
    private $annee;

    public function getNbHeuresTd(): ?float
    {
        return $this->nbHeuresTd;
    }

    public function setNbHeuresTd(float $nbHeuresTd): self
    {
        $this->nbHeuresTd = $nbHeuresTd;

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

    public function getDiplome(): ?Diplome
    {
        return $this->diplome;
    }

    public function setDiplome(?Diplome $diplome): self
    {
        $this->diplome = $diplome;

        return $this;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function getTypeHrs(): ?TypeHrs
    {
        return $this->typeHrs;
    }

    public function setTypeHrs(?TypeHrs $typeHrs): self
    {
        $this->typeHrs = $typeHrs;

        return $this;
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

    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    public function setAnnee(int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }
}
