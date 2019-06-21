<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ScolariteMoyenneUeRepository")
 */
class ScolariteMoyenneUe
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Scolarite", inversedBy="scolariteMoyenneUes")
     */
    private $scolarite;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Ue", inversedBy="scolariteMoyenneUes")
     */
    private $ue;

    /**
     * @ORM\Column(type="float")
     */
    private $moyenne;

    /**
     * @ORM\Column(type="integer")
     */
    private $rang = 0;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getScolarite(): ?Scolarite
    {
        return $this->scolarite;
    }

    public function setScolarite(?Scolarite $scolarite): self
    {
        $this->scolarite = $scolarite;

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

    public function getMoyenne(): ?float
    {
        return $this->moyenne;
    }

    public function setMoyenne(float $moyenne): self
    {
        $this->moyenne = $moyenne;

        return $this;
    }

    public function getRang(): ?int
    {
        return $this->rang;
    }

    public function setRang(int $rang): self
    {
        $this->rang = $rang;

        return $this;
    }
}
