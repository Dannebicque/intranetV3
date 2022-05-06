<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Traits/LifeCycleTrait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/05/2022 14:27
 */

namespace App\Entity\Traits;

use Carbon\Carbon;
use Carbon\CarbonInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

/**
 * Trait LifeCycleTrait.
 */
trait LifeCycleTrait
{
    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?CarbonInterface $created = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?CarbonInterface $updated = null;

    public function getCreated(): ?CarbonInterface
    {
        return $this->created ?? Carbon::now();
    }

    public function setCreated(?CarbonInterface $created): void
    {
        $this->created = $created;
    }

    public function getUpdated(): ?CarbonInterface
    {
        return $this->updated;
    }

    public function setUpdated(?CarbonInterface $updated): void
    {
        $this->updated = $updated;
    }

    public function setUpdatedValue(): void
    {
        $this->updated = Carbon::now();
    }

    #[ORM\PrePersist]
    #[ORM\PreUpdate]
    public function setUpdatedEntity(): void
    {
        $this->updated = Carbon::now();
    }

    #[ORM\PrePersist]
    public function setCreatedValue(): void
    {
        $this->created = Carbon::now();
    }
}
