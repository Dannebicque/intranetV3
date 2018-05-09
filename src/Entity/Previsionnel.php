<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PrevisionnelRepository")
 */
class Previsionnel
{

    public const DUREE_SEANCE = 1.5;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

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
    private $referent;

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

    public function getId()
    {
        return $this->id;
    }

    public function getMatiere(): ?Matiere
    {
        return $this->matiere;
    }

    public function setMatiere(?Matiere $matiere): self
    {
        $this->matiere = $matiere;

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

    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    public function setAnnee(int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getReferent(): ?bool
    {
        return $this->referent;
    }

    public function setReferent(bool $referent): self
    {
        $this->referent = $referent;

        return $this;
    }

    public function getNbHCm(): ?float
    {
        return $this->nbHCm;
    }

    public function setNbHCm(float $nbHCm): self
    {
        $this->nbHCm = $nbHCm;

        return $this;
    }

    public function getNbHTd(): ?float
    {
        return $this->nbHTd;
    }

    public function setNbHTd(float $nbHTd): self
    {
        $this->nbHTd = $nbHTd;

        return $this;
    }

    public function getNbHTp(): ?float
    {
        return $this->nbHTp;
    }

    public function setNbHTp(float $nbHTp): self
    {
        $this->nbHTp = $nbHTp;

        return $this;
    }

    public function getNbGrCm(): ?int
    {
        return $this->nbGrCm;
    }

    public function setNbGrCm(int $nbGrCm): self
    {
        $this->nbGrCm = $nbGrCm;

        return $this;
    }

    public function getNbGrTd(): ?int
    {
        return $this->nbGrTd;
    }

    public function setNbGrTd(int $nbGrTd): self
    {
        $this->nbGrTd = $nbGrTd;

        return $this;
    }

    public function getNbGrTp(): ?int
    {
        return $this->nbGrTp;
    }

    public function setNbGrTp(int $nbGrTp): self
    {
        $this->nbGrTp = $nbGrTp;

        return $this;
    }

    public function getSemestre()
    {
        if ($this->getMatiere() !== null) {
            return $this->getMatiere()->getSemestre();
        }

        return null;
    }

    public function getNbSeanceCm()
    {
        return number_format($this->nbHCm / self::DUREE_SEANCE, 2);
    }

    public function getNbSeanceTd()
    {
        return number_format($this->nbHTd / self::DUREE_SEANCE, 2);
    }

    public function getNbSeanceTp()
    {
        return number_format($this->nbHTp / self::DUREE_SEANCE, 2);
    }

    public function getTotalHCm()
    {
        return $this->nbHCm * $this->nbGrCm;
    }

    public function getTotalHTd()
    {
        return $this->nbHTd * $this->nbGrTd;
    }

    public function getTotalHTp()
    {
        return $this->nbHTp * $this->nbGrTp;
    }

    public function getTotalEqTd()
    {
        return $this->getTotalHCm() * 1.5 + $this->getTotalHTd() + $this->getTotalHTp();
    }

    public function getTotalEtudiant()
    {
        return $this->nbHCm + $this->nbHTd + $this->nbHTp;
    }
}
