<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ScolaritePromoUeRepository")
 */
class ScolaritePromoUe
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ScolaritePromo", inversedBy="scolaritePromoUes")
     */
    private $scolaritePromo;

    /**
     * @ORM\Column(type="float")
     */
    private $min;

    /**
     * @ORM\Column(type="float")
     */
    private $max;

    /**
     * @ORM\Column(type="float")
     */
    private $moyenne;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbEtudiants;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Ue", inversedBy="scolaritePromoUes")
     */
    private $ue;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getScolaritePromo(): ?ScolaritePromo
    {
        return $this->scolaritePromo;
    }

    public function setScolaritePromo(?ScolaritePromo $scolaritePromo): self
    {
        $this->scolaritePromo = $scolaritePromo;

        return $this;
    }

    public function getMin(): ?float
    {
        return $this->min;
    }

    public function setMin(float $min): self
    {
        $this->min = $min;

        return $this;
    }

    public function getMax(): ?float
    {
        return $this->max;
    }

    public function setMax(float $max): self
    {
        $this->max = $max;

        return $this;
    }

    public function getMoyenne(): ?float
    {
        return $this->moyenne;
    }

    public function setMoyenne(float $moyenne): self
    {
        $this->moyenne = $moyenne;

        return $this;
    }

    public function getNbEtudiants(): ?int
    {
        return $this->nbEtudiants;
    }

    public function setNbEtudiants(int $nbEtudiants): self
    {
        $this->nbEtudiants = $nbEtudiants;

        return $this;
    }

    public function getUe(): ?Ue
    {
        return $this->ue;
    }

    public function setUe(?Ue $ue): self
    {
        $this->ue = $ue;

        return $this;
    }
}
