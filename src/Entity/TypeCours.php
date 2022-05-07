<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/TypeCours.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/05/2022 21:28
 */

namespace App\Entity;

use App\Repository\TypeCoursRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TypeCoursRepository::class)]
class TypeCours extends BaseEntity
{
    #[ORM\Column(type: Types::STRING, length: 150)]
    private ?string $libelle = null;

    #[ORM\Column(type: Types::STRING, length: 5)]
    private ?string $libelleCourt = null;

    #[ORM\Column(type: Types::FLOAT)]
    private ?float $ratioHeureEqTd = 1;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $commentaire = null;

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getLibelleCourt(): ?string
    {
        return $this->libelleCourt;
    }

    public function setLibelleCourt(string $libelleCourt): self
    {
        $this->libelleCourt = $libelleCourt;

        return $this;
    }

    public function getRatioHeureEqTd(): ?float
    {
        return $this->ratioHeureEqTd;
    }

    public function setRatioHeureEqTd(float $ratioHeureEqTd): self
    {
        $this->ratioHeureEqTd = $ratioHeureEqTd;

        return $this;
    }

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    public function setCommentaire(?string $commentaire): self
    {
        $this->commentaire = $commentaire;

        return $this;
    }
}
