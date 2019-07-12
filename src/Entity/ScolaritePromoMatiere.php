<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/ScolaritePromoMatiere.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 3/18/19 6:59 AM
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ScolaritePromoMatiereRepository")
 */
class ScolaritePromoMatiere
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ScolaritePromo", inversedBy="scolaritePromoMatieres")
     */
    private $scolaritePromo;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Matiere", inversedBy="scolaritePromoMatieres")
     */
    private $matiere;

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

    public function getMatiere(): ?Matiere
    {
        return $this->matiere;
    }

    public function setMatiere(?Matiere $matiere): self
    {
        $this->matiere = $matiere;

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
}
