<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/EmpruntMateriel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 11:05
 */

namespace App\Entity;

use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EmpruntMaterielRepository")
 */
class EmpruntMateriel extends BaseEntity
{
    public const ETAT_MATERIEL_DISPO = 'DISPO';
    public const ETAT_MATERIEL_SORTI = 'SORTI';
    public const ETAT_MATERIEL_RESERVE = 'RESER';

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
