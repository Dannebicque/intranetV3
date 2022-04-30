<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Traits/MatiereTrait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;

trait MatiereTrait
{
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 15, nullable: true)]
    private ?string $typeMatiere = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::INTEGER)]
    private int $idMatiere = 0;

    public function getTypeMatiere(): ?string
    {
        return $this->typeMatiere;
    }

    public function setTypeMatiere(?string $typeMatiere): self
    {
        $this->typeMatiere = $typeMatiere;

        return $this;
    }

    public function getIdMatiere(): ?int
    {
        return $this->idMatiere;
    }

    public function setIdMatiere(int $idMatiere): self
    {
        $this->idMatiere = $idMatiere;

        return $this;
    }

    public function getTypeIdMatiere(): string
    {
        return $this->typeMatiere.'_'.$this->idMatiere;
    }
}
