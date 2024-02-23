<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Mcc.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\MatiereTrait;
use App\Repository\MccRepository;
use Carbon\Carbon;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MccRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Mcc extends BaseEntity
{
    use LifeCycleTrait;
    use MatiereTrait;

    #[ORM\Column]
    private ?float $coefficient = null;

    #[ORM\ManyToOne(fetch: 'EAGER', inversedBy: 'mccs')]
    private ?MccTypeEpreuve $typeEpreuve = null;

    public function __clone(): void
    {
        $this->setCreated(Carbon::now());
        $this->setUpdated(Carbon::now());
    }

    public function getCoefficient(): ?float
    {
        return $this->coefficient;
    }

    public function setCoefficient(float $coefficient): self
    {
        $this->coefficient = $coefficient;

        return $this;
    }

    public function getTypeEpreuve(): ?MccTypeEpreuve
    {
        return $this->typeEpreuve;
    }

    public function setTypeEpreuve(?MccTypeEpreuve $typeEpreuve): self
    {
        $this->typeEpreuve = $typeEpreuve;

        return $this;
    }
}
