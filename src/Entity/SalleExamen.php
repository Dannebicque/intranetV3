<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/SalleExamen.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SalleExamenRepository")
 */
class SalleExamen extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Salle", inversedBy="salleExamens")
     * @Groups({"salle_examen_administration"})
     */
    private $salle;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Departement", inversedBy="salleExamens")
     */
    private $departement;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"salle_examen_administration"})
     */
    private $nbColonnes;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"salle_examen_administration"})
     */
    private $nbRangs;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"salle_examen_administration"})
     */
    private $capacite;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"salle_examen_administration"})
     */
    private $placesInterdites;

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

    public function setDepartement(?Departement $departement): self
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

    public function setPlacesInterdites(string $placesInterdites): self
    {
        $this->placesInterdites = $placesInterdites;

        return $this;
    }
}
