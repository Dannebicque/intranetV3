<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/CreneauCours.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/05/2021 17:55
 */

namespace App\Entity;

use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CreneauCoursRepository")
 */
class CreneauCours
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire", inversedBy="creneauCours")
     */
    private $anneeUniversitaire;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Departement", inversedBy="creneauCours")
     */
    private $departement;

    /**
     * @ORM\Column(type="integer")
     */
    private $jour;

    /**
     * @ORM\Column(type="time")
     */
    private $debut;

    /**
     * @ORM\Column(type="time")
     */
    private $fin;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CreneauBloque", mappedBy="creneau")
     */
    private $creneauBloques;

    public function __construct()
    {
        $this->creneauBloques = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(?AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

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

    public function getJour(): ?int
    {
        return $this->jour;
    }

    public function setJour(int $jour): self
    {
        $this->jour = $jour;

        return $this;
    }

    public function getDebut(): ?DateTimeInterface
    {
        return $this->debut;
    }

    public function setDebut(DateTimeInterface $debut): self
    {
        $this->debut = $debut;

        return $this;
    }

    public function getFin(): ?DateTimeInterface
    {
        return $this->fin;
    }

    public function setFin(DateTimeInterface $fin): self
    {
        $this->fin = $fin;

        return $this;
    }

    /**
     * @return Collection|CreneauBloque[]
     */
    public function getCreneauBloques(): Collection
    {
        return $this->creneauBloques;
    }

    public function addCreneauBloque(CreneauBloque $creneauBloque): self
    {
        if (!$this->creneauBloques->contains($creneauBloque)) {
            $this->creneauBloques[] = $creneauBloque;
            $creneauBloque->setCreneau($this);
        }

        return $this;
    }

    public function removeCreneauBloque(CreneauBloque $creneauBloque): self
    {
        if ($this->creneauBloques->contains($creneauBloque)) {
            $this->creneauBloques->removeElement($creneauBloque);
            // set the owning side to null (unless already changed)
            if ($creneauBloque->getCreneau() === $this) {
                $creneauBloque->setCreneau(null);
            }
        }

        return $this;
    }

    public function getJourLong()
    {
        $tabJour = [
            1 => 'Lundi',
            2 => 'Mardi',
            3 => 'Mercredi',
            4 => 'Jeudi',
            5 => 'Vendredi',
            6 => 'Samedi',
            7 => 'Dimanche',
        ];

        return $tabJour[$this->getJour()];
    }
}
