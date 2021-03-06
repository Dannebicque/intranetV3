<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Hrs.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\HrsRepository")
 */
class Hrs extends BaseEntity
{
    /**
     * @ORM\Column(type="float")
     * @Groups({"hrs_administration"})
     */
    private $nbHeuresTd;

    /**
     * @ORM\Column(type="string", length=150)
     * @Groups({"hrs_administration"})
     */
    private $libelle;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="hrs")
     * @Groups({"hrs_administration"})
     */
    private $semestre;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Diplome", inversedBy="hrs")
     */
    private $diplome;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="hrs")
     * @Groups({"hrs_administration"})
     */
    private $personnel;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeHrs", inversedBy="hrs")
     * @Groups({"hrs_administration"})
     */
    private $typeHrs;

    /**
     * @ORM\Column(type="integer")
     */
    private $annee;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Departement", inversedBy="hrs")
     */
    private $departement;

    public function getNbHeuresTd(): ?float
    {
        return $this->nbHeuresTd;
    }

    /**
     * @return Hrs
     */
    public function setNbHeuresTd(float $nbHeuresTd): self
    {
        $this->nbHeuresTd = $nbHeuresTd;

        return $this;
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    /**
     * @return Hrs
     */
    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    public function getDiplome(): ?Diplome
    {
        return $this->diplome;
    }

    /**
     * @return Hrs
     */
    public function setDiplome(?Diplome $diplome): self
    {
        $this->diplome = $diplome;

        return $this;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    /**
     * @return Hrs
     */
    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function getTypeHrs(): ?TypeHrs
    {
        return $this->typeHrs;
    }

    /**
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

    public function setLibelle($libelle): void
    {
        $this->libelle = $libelle;
    }

    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    /**
     * @return Hrs
     */
    public function setAnnee(int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    /**
     * Hrs constructor.
     */
    public function __construct(Departement $departement)
    {
        $this->annee = $departement->getOptAnneePrevisionnel();
        $this->departement = $departement;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }
}
