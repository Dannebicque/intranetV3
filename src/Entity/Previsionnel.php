<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PrevisionnelRepository")
 */
class Previsionnel extends BaseEntity
{
    public const DUREE_SEANCE = 1.5;


    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Matiere", inversedBy="previsionnels")
     */
    private $matiere;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="previsionnels")
     */
    private $personnel;

    /**
     * @ORM\Column(type="integer")
     */
    private $annee;

    /**
     * @ORM\Column(type="boolean")
     */
    private $referent = false;

    /**
     * @ORM\Column(type="float")
     */
    private $nbHCm;

    /**
     * @ORM\Column(type="float")
     */
    private $nbHTd;

    /**
     * @ORM\Column(type="float")
     */
    private $nbHTp;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbGrCm;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbGrTd;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbGrTp;

    /**
     * Previsionnel constructor.
     *
     * @param $matiere
     * @param $personnel
     * @param $annee
     */
    public function __construct(Matiere $matiere, Personnel $personnel, $annee)
    {
        $this->matiere = $matiere;
        $this->personnel = $personnel;
        $this->annee = $annee;
    }


    /**
     * @return Matiere|null
     */
    public function getMatiere(): ?Matiere
    {
        return $this->matiere;
    }

    /**
     * @param Matiere|null $matiere
     *
     * @return Previsionnel
     */
    public function setMatiere(?Matiere $matiere): self
    {
        $this->matiere = $matiere;

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
     * @return Previsionnel
     */
    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
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
     * @return Previsionnel
     */
    public function setAnnee(int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    /**
     * @return bool|null
     */
    public function getReferent(): ?bool
    {
        return $this->referent;
    }

    /**
     * @param bool $referent
     *
     * @return Previsionnel
     */
    public function setReferent(bool $referent): self
    {
        $this->referent = $referent;

        return $this;
    }

    /**
     * @return float|null
     */
    public function getNbHCm(): ?float
    {
        return $this->nbHCm;
    }

    /**
     * @param float $nbHCm
     *
     * @return Previsionnel
     */
    public function setNbHCm(float $nbHCm): self
    {
        $this->nbHCm = $nbHCm;

        return $this;
    }

    /**
     * @return float|null
     */
    public function getNbHTd(): ?float
    {
        return $this->nbHTd;
    }

    /**
     * @param float $nbHTd
     *
     * @return Previsionnel
     */
    public function setNbHTd(float $nbHTd): self
    {
        $this->nbHTd = $nbHTd;

        return $this;
    }

    /**
     * @return float|null
     */
    public function getNbHTp(): ?float
    {
        return $this->nbHTp;
    }

    /**
     * @param float $nbHTp
     *
     * @return Previsionnel
     */
    public function setNbHTp(float $nbHTp): self
    {
        $this->nbHTp = $nbHTp;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getNbGrCm(): ?int
    {
        return $this->nbGrCm;
    }

    /**
     * @param int $nbGrCm
     *
     * @return Previsionnel
     */
    public function setNbGrCm(int $nbGrCm): self
    {
        $this->nbGrCm = $nbGrCm;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getNbGrTd(): ?int
    {
        return $this->nbGrTd;
    }

    /**
     * @param int $nbGrTd
     *
     * @return Previsionnel
     */
    public function setNbGrTd(int $nbGrTd): self
    {
        $this->nbGrTd = $nbGrTd;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getNbGrTp(): ?int
    {
        return $this->nbGrTp;
    }

    /**
     * @param int $nbGrTp
     *
     * @return Previsionnel
     */
    public function setNbGrTp(int $nbGrTp): self
    {
        $this->nbGrTp = $nbGrTp;

        return $this;
    }

    /**
     * @return Semestre|null
     */
    public function getSemestre() : ?Semestre
    {
        if ($this->getMatiere() !== null) {
            return $this->getMatiere()->getSemestre();
        }

        return null;
    }

    /**
     * @return string
     */
    public function getNbSeanceCm() :string
    {
        return number_format($this->nbHCm / self::DUREE_SEANCE, 2);
    }

    /**
     * @return string
     */
    public function getNbSeanceTd() :string
    {
        return number_format($this->nbHTd / self::DUREE_SEANCE, 2);
    }

    /**
     * @return string
     */
    public function getNbSeanceTp() :string
    {
        return number_format($this->nbHTp / self::DUREE_SEANCE, 2);
    }

    /**
     * @return float|int
     */
    public function getTotalHCm()
    {
        return $this->nbHCm * $this->nbGrCm;
    }

    /**
     * @return float|int
     */
    public function getTotalHTd()
    {
        return $this->nbHTd * $this->nbGrTd;
    }

    /**
     * @return float|int
     */
    public function getTotalHTp()
    {
        return $this->nbHTp * $this->nbGrTp;
    }

    /**
     * @return float|int
     */
    public function getTotalEqTd()
    {
        return $this->getTotalHCm() * 1.5 + $this->getTotalHTd() + $this->getTotalHTp();
    }

    /**
     * @return mixed
     */
    public function getTotalEtudiant()
    {
        return $this->nbHCm + $this->nbHTd + $this->nbHTp;
    }
}
