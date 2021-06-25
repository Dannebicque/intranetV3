<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/SalleExamen.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:06
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SalleExamenRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class SalleExamen extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Salle", inversedBy="salleExamens")
     * @Groups({"salle_examen_administration"})
     */
    private ?Salle $salle;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Departement", inversedBy="salleExamens")
     */
    private Departement $departement;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"salle_examen_administration"})
     */
    private ?int $nbColonnes;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"salle_examen_administration"})
     */
    private ?int $nbRangs;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"salle_examen_administration"})
     */
    private ?int $capacite;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"salle_examen_administration"})
     */
    private ?string $placesInterdites;

    public function __construct(Departement $departement)
    {
        $this->departement = $departement;
    }

    public function getSalle(): ?Salle
    {
        return $this->salle;
    }

    public function setSalle(?Salle $salle): self
    {
        $this->salle = $salle;

        return $this;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }

    public function getNbColonnes(): ?int
    {
        return $this->nbColonnes;
    }

    public function setNbColonnes(int $nbColonnes): self
    {
        $this->nbColonnes = $nbColonnes;

        return $this;
    }

    public function getNbRangs(): ?int
    {
        return $this->nbRangs;
    }

    public function setNbRangs(int $nbRangs): self
    {
        $this->nbRangs = $nbRangs;

        return $this;
    }

    public function getCapacite(): ?int
    {
        return $this->capacite;
    }

    public function setCapacite(int $capacite): self
    {
        $this->capacite = $capacite;

        return $this;
    }

    public function getPlacesInterdites(): ?string
    {
        return $this->placesInterdites;
    }

    public function setPlacesInterdites(?string $placesInterdites): self
    {
        $this->placesInterdites = $placesInterdites;

        return $this;
    }
}
