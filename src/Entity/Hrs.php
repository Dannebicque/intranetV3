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

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Formation", inversedBy="hrs")
     */
    private $formation;

    /**
     * @return float|null
     */
    public function getNbHeuresTd(): ?float
    {
        return $this->nbHeuresTd;
    }

    /**
     * @param float $nbHeuresTd
     *
     * @return Hrs
     */
    public function setNbHeuresTd(float $nbHeuresTd): self
    {
        $this->nbHeuresTd = $nbHeuresTd;

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
     * @return Hrs
     */
    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    /**
     * @return Diplome|null
     */
    public function getDiplome(): ?Diplome
    {
        return $this->diplome;
    }

    /**
     * @param Diplome|null $diplome
     *
     * @return Hrs
     */
    public function setDiplome(?Diplome $diplome): self
    {
        $this->diplome = $diplome;

        return $this;
    }

    /**
     * @return Personnel|null
     */
    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    /**
     * @param Personnel|null $personnel
     *
     * @return Hrs
     */
    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    /**
     * @return TypeHrs|null
     */
    public function getTypeHrs(): ?TypeHrs
    {
        return $this->typeHrs;
    }

    /**
     * @param TypeHrs|null $typeHrs
     *
     * @return Hrs
     */
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

    /**
     * @return int|null
     */
    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    /**
     * @param int $annee
     *
     * @return Hrs
     */
    public function setAnnee(int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    /**
     * Hrs constructor.
     *
     * @param $annee
     */
    public function __construct($annee)
    {
        $this->annee = $annee;
    }

    public function getFormation(): ?Formation
    {
        return $this->formation;
    }

    public function setFormation(?Formation $formation): self
    {
        $this->formation = $formation;

        return $this;
    }
}
