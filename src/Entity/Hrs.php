<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Hrs.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 11:16
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\HrsRepository")
 */
class Hrs extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="float")
     * @Groups({"hrs_administration"})
     */
    private ?float $nbHeuresTd;

    /**
     * @ORM\Column(type="string", length=150)
     * @Groups({"hrs_administration"})
     */
    private ?string $libelle;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="hrs")
     * @Groups({"hrs_administration"})
     */
    private ?Semestre $semestre = null;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Diplome", inversedBy="hrs")
     */
    private ?Diplome $diplome = null;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="hrs")
     * @Groups({"hrs_administration"})
     */
    private ?Personnel $personnel;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeHrs", inversedBy="hrs")
     * @Groups({"hrs_administration"})
     */
    private ?TypeHrs $typeHrs;

    /**
     * @ORM\Column(type="integer")
     */
    private int $annee;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Departement", inversedBy="hrs")
     */
    private ?Departement $departement;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private ?string $commentaire;

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

    public function setAnnee(int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

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

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    public function setCommentaire(?string $commentaire): self
    {
        $this->commentaire = $commentaire;

        return $this;
    }

    public function semestreOrDiplome()
    {
        if ($this->getDiplome() !== null && $this->getSemestre() === null) {
            return $this->getDiplome()->getDisplay();
        }

        if ($this->getDiplome() === null && $this->getSemestre() !== null) {
            return $this->getSemestre()->getLibelle();
        }

        return '-err-';

    }
}
