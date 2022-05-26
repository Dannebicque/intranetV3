<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/BCCentreFinancier.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:18
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\BCCentreFinancierRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BCCentreFinancierRepository::class)]
#[ORM\HasLifecycleCallbacks]
class BCCentreFinancier extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\Column(type: Types::STRING, length: 100)]
    private ?string $libelle = null;

    #[ORM\Column(type: Types::STRING, length: 15)]
    private ?string $code = null;

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }
}
