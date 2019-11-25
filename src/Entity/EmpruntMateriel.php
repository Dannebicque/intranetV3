<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/EmpruntMateriel.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EmpruntMaterielRepository")
 */
class EmpruntMateriel
{
    public const ETAT_MATERIEL_DISPO = 'DISPO';
    public const ETAT_MATERIEL_SORTI = 'SORTI';

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Emprunt", inversedBy="empruntMateriels")
     */
    private $emprunt;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Materiel", inversedBy="empruntMateriels")
     */
    private $materiel;

    /**
     * @ORM\Column(type="string", length=5)
     */
    private $etat;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $datesortie;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $daterentree;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmprunt(): ?Emprunt
    {
        return $this->emprunt;
    }

    public function setEmprunt(?Emprunt $emprunt): self
    {
        $this->emprunt = $emprunt;

        return $this;
    }

    public function getMateriel(): ?Materiel
    {
        return $this->materiel;
    }

    public function setMateriel(?Materiel $materiel): self
    {
        $this->materiel = $materiel;

        return $this;
    }

    public function getEtat(): ?string
    {
        return $this->etat;
    }

    public function setEtat(string $etat): self
    {
        $this->etat = $etat;

        return $this;
    }

    public function getDatesortie(): ?DateTimeInterface
    {
        return $this->datesortie;
    }

    public function setDatesortie(DateTimeInterface $datesortie): self
    {
        $this->datesortie = $datesortie;

        return $this;
    }

    public function getDaterentree(): ?DateTimeInterface
    {
        return $this->daterentree;
    }

    public function setDaterentree(DateTimeInterface $daterentree): self
    {
        $this->daterentree = $daterentree;

        return $this;
    }
}
