<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Traits/TypeDestinataireTrait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/05/2022 14:27
 */

namespace App\Entity\Traits;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

trait TypeDestinataireTrait
{
    #[ORM\Column(type: Types::STRING, length: 5)]
    private ?string $typeDestinataire = 'ETU'; // ou PERS

    public function getTypeDestinataire(): ?string
    {
        return $this->typeDestinataire;
    }

    public function setTypeDestinataire(string $typeDestinataire): self
    {
        $this->typeDestinataire = $typeDestinataire;

        return $this;
    }
}
