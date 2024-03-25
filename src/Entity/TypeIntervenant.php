<?php

/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/TypeIntervenant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 16:10
 */

namespace App\Entity;

use App\Enums\CategorieIutEnum;
use App\Repository\TypeIntervenantRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TypeIntervenantRepository::class)]
class TypeIntervenant
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 30)]
    private ?string $sigle = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $libelle_long = null;

    #[ORM\Column]
    private ?float $maxHeureService = null;

    #[ORM\Column(length: 15, enumType: CategorieIutEnum::class)]
    private ?CategorieIutEnum $categorieIUT = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSigle(): ?string
    {
        return $this->sigle;
    }

    public function setSigle(string $sigle): static
    {
        $this->sigle = $sigle;

        return $this;
    }

    public function getLibelleLong(): ?string
    {
        return $this->libelle_long;
    }

    public function setLibelleLong(?string $libelle_long): static
    {
        $this->libelle_long = $libelle_long;

        return $this;
    }

    public function getMaxHeureService(): ?float
    {
        return $this->maxHeureService;
    }

    public function setMaxHeureService(float $maxHeureService): static
    {
        $this->maxHeureService = $maxHeureService;

        return $this;
    }

    public function getCategorieIUT(): ?CategorieIutEnum
    {
        return $this->categorieIUT;
    }

    public function setCategorieIUT(CategorieIutEnum $categorieIUT): static
    {
        $this->categorieIUT = $categorieIUT;

        return $this;
    }
}
