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
use App\Repository\SalleExamenRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: SalleExamenRepository::class)]
#[ORM\HasLifecycleCallbacks]
class SalleExamen extends BaseEntity
{
    use LifeCycleTrait;

    #[Groups(groups: ['salle_examen_administration'])]
    #[ORM\ManyToOne(targetEntity: Salle::class, inversedBy: 'salleExamens')]
    private ?Salle $salle = null;

    #[Groups(groups: ['salle_examen_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::INTEGER)]
    private ?int $nbColonnes = null;

    #[Groups(groups: ['salle_examen_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::INTEGER)]
    private ?int $nbRangs = null;

    #[Groups(groups: ['salle_examen_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::INTEGER)]
    private ?int $capacite = null;

    #[Groups(groups: ['salle_examen_administration'])]
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 255, nullable: true)]
    private ?string $placesInterdites = null;

    public function __construct(#[ORM\ManyToOne(targetEntity: Departement::class, inversedBy: 'salleExamens')] private ?\App\Entity\Departement $departement)
    {
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

    public function setPlacesInterdites(?string $placesInterdites): self
    {
        $this->placesInterdites = $placesInterdites;

        return $this;
    }
}
