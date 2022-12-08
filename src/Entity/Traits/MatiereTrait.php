<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Traits/MatiereTrait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/12/2022 08:54
 */

namespace App\Entity\Traits;

use App\DTO\Matiere;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

trait MatiereTrait
{
    #[ORM\Column(type: Types::STRING, length: 15, nullable: true)]
    private ?string $typeMatiere = null;

    #[ORM\Column(type: Types::INTEGER)]
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

    public function setTypeIdMatiere(?Matiere $matiere): void
    {
        if ($matiere !== null) {
            $this->setIdMatiere($matiere->id);
            $this->setTypeMatiere($matiere->typeMatiere);
        }
    }
}
