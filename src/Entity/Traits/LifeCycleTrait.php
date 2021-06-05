<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Traits/LifeCycleTrait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 11:21
 */

namespace App\Entity\Traits;

use Carbon\Carbon;
use Carbon\CarbonInterface;
use DateTime;
use Doctrine\ORM\Mapping as ORM;

/**
 * Trait LifeCycleTrait.
 */
trait LifeCycleTrait
{
    /**
     * @ORM\Column(type="datetime")
     */
    private ?CarbonInterface $created;

    /**
     * @ORM\Column(type="datetime")
     */
    private ?CarbonInterface $updated;

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
        return $this->updated ?? Carbon::now();
    }

    public function setUpdated(?CarbonInterface $updated): void
    {
        $this->updated = $updated;
    }

    /**
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     */
    public function setUpdatedValue(): void
    {
        $this->updated = Carbon::now();
    }

    /**
     * @ORM\PrePersist()
     */
    public function setCreatedValue(): void
    {
        $this->created = Carbon::now();
    }
}
