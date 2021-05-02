<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Previsionnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/05/2021 16:38
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PrevisionnelRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Previsionnel extends BaseEntity
{
    public const DUREE_SEANCE = 1.5;
    use LifeCycleTrait;

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
    private ?int $annee;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $referent = false;

    /**
     * @ORM\Column(type="float")
     */
    private int $nbHCm = 0;

    /**
     * @ORM\Column(type="float")
     */
    private int $nbHTd = 0;

    /**
     * @ORM\Column(type="float")
     */
    private int $nbHTp = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private int $nbGrCm = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private int $nbGrTd = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private int $nbGrTp = 0;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $id_matiere;

    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     */
    private $typeMatiere;

    /**
     * Previsionnel constructor.
     *
     * @param $matiere
     * @param $personnel
     * @param $annee
     */
    public function __construct($annee, ?Personnel $personnel = null)
    {
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

    public function getDepartement()
    {
        if (null !== $this->getSemestre() &&
            null !== $this->getSemestre()->getDiplome() &&
            null !== $this->getSemestre()->getDiplome()->getDepartement()) {
            return $this->getSemestre()->getDiplome()->getDepartement();
        }

        return null;
    }

    public function getIdMatiere(): ?int
    {
        return $this->id_matiere;
    }

    public function setIdMatiere(?int $id_matiere): self
    {
        $this->id_matiere = $id_matiere;

        return $this;
    }

    public function getTypeMatiere(): ?string
    {
        return $this->typeMatiere;
    }

    public function setTypeMatiere(?string $typeMatiere): self
    {
        $this->typeMatiere = $typeMatiere;

        return $this;
    }
}
