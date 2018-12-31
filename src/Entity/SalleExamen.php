<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SalleExamenRepository")
 */
class SalleExamen extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Salle", inversedBy="salleExamens")
     */
    private $salle;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Formation", inversedBy="salleExamens")
     */
    private $formation;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbColonnes;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbRangs;

    /**
     * @ORM\Column(type="integer")
     */
    private $capacite;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $placesInterdites;

    public function __construct(Formation $formation)
    {
        $this->formation = $formation;
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

    public function getFormation(): ?Formation
    {
        return $this->formation;
    }

    public function setFormation(?Formation $formation): self
    {
        $this->formation = $formation;

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
