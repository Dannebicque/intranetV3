<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/EmpruntMateriel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 11:05
 */

namespace App\Entity;

use App\Repository\EmpruntMaterielRepository;
use DateTimeInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EmpruntMaterielRepository::class)]
class EmpruntMateriel extends BaseEntity
{
    public final const ETAT_MATERIEL_DISPO = 'DISPO';
    public final const ETAT_MATERIEL_SORTI = 'SORTI';
    public final const ETAT_MATERIEL_RESERVE = 'RESER';

    #[ORM\ManyToOne(targetEntity: Emprunt::class, inversedBy: 'empruntMateriels')]
    private ?Emprunt $emprunt = null;

    #[ORM\ManyToOne(targetEntity: Materiel::class, inversedBy: 'empruntMateriels')]
    private ?Materiel $materiel = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 5)]
    private ?string $etat = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATETIME_MUTABLE, nullable: true)]
    private ?DateTimeInterface $datesortie = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATETIME_MUTABLE, nullable: true)]
    private ?DateTimeInterface $daterentree = null;

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
