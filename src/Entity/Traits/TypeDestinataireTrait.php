<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Traits/UuidTrait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;

trait TypeDestinataireTrait
{
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 5)]
    private ?string $typeDestinataire = 'ETU'; //ou PERS

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
