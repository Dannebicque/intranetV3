<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Previsionnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PrevisionnelRepository")
 */
class Previsionnel extends BaseEntity
{
    public const DUREE_SEANCE = 1.5;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Matiere", inversedBy="previsionnels", fetch="EAGER")
     */
    private $matiere;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="previsionnels", fetch="EAGER" )
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
    private $nbHCm = 0;

    /**
     * @ORM\Column(type="float")
     */
    private $nbHTd = 0;

    /**
     * @ORM\Column(type="float")
     */
    private $nbHTp = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbGrCm = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbGrTd = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbGrTp = 0;

    /**
     * Previsionnel constructor.
     *
     * @param $matiere
     * @param $personnel
     * @param $annee
     */
    public function __construct(Matiere $matiere, $annee, ?Personnel $personnel = null)
    {
        $this->matiere = $matiere;
        $this->personnel = $personnel;
        $this->annee = $annee;
    }

    public function getMatiere(): ?Matiere
    {
        return $this->matiere;
    }

    /**
     * @return Previsionnel
     */
    public function setMatiere(?Matiere $matiere): self
    {
        $this->matiere = $matiere;

        return $this;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    /**
     * @return Previsionnel
     */
    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    /**
     * @return Previsionnel
     */
    public function setAnnee(int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getReferent(): ?bool
    {
        return $this->referent;
    }

    /**
     * @return Previsionnel
     */
    public function setReferent(bool $referent): self
    {
        $this->referent = $referent;

        return $this;
    }

    public function getNbHCm(): ?float
    {
        return $this->nbHCm;
    }

    /**
     * @return Previsionnel
     */
    public function setNbHCm(?float $nbHCm = 0): self
    {
        $this->nbHCm = $nbHCm;

        return $this;
    }

    public function getNbHTd(): ?float
    {
        return $this->nbHTd;
    }

    /**
     * @return Previsionnel
     */
    public function setNbHTd(float $nbHTd = 0): self
    {
        $this->nbHTd = $nbHTd;

        return $this;
    }

    public function getNbHTp(): ?float
    {
        return $this->nbHTp;
    }

    /**
     * @return Previsionnel
     */
    public function setNbHTp(float $nbHTp = 0): self
    {
        $this->nbHTp = $nbHTp;

        return $this;
    }

    public function getNbGrCm(): ?int
    {
        return $this->nbGrCm;
    }

    /**
     * @return Previsionnel
     */
    public function setNbGrCm(int $nbGrCm = 0): self
    {
        $this->nbGrCm = $nbGrCm;

        return $this;
    }

    public function getNbGrTd(): ?int
    {
        return $this->nbGrTd;
    }

    /**
     * @return Previsionnel
     */
    public function setNbGrTd(int $nbGrTd = 0): self
    {
        $this->nbGrTd = $nbGrTd;

        return $this;
    }

    public function getNbGrTp(): ?int
    {
        return $this->nbGrTp;
    }

    /**
     * @return Previsionnel
     */
    public function setNbGrTp(int $nbGrTp = 0): self
    {
        $this->nbGrTp = $nbGrTp;

        return $this;
    }

    public function getSemestre(): ?Semestre
    {
        if (null !== $this->getMatiere()) {
            return $this->getMatiere()->getSemestre();
        }

        return null;
    }

    public function getNbSeanceCm(): string
    {
        return number_format($this->nbHCm / self::DUREE_SEANCE, 2);
    }

    public function getNbSeanceTd(): string
    {
        return number_format($this->nbHTd / self::DUREE_SEANCE, 2);
    }

    public function getNbSeanceTp(): string
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

    public function getTotalEtudiant()
    {
        return $this->nbHCm + $this->nbHTd + $this->nbHTp;
    }

    public function getDepartement()
    {
        if (null !== $this->getSemestre() &&
            null !== $this->getSemestre()->getDiplome() &&
            null !== $this->getSemestre()->getDiplome()->getDepartement()) {
            return $this->getSemestre()->getDiplome()->getDepartement();
        }

        return null;
    }
}
