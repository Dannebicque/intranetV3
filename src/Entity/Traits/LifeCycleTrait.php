<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Traits/LifeCycleTrait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/09/2021 08:59
 */

namespace App\Entity\Traits;

use Carbon\Carbon;
use Carbon\CarbonInterface;
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
        if ($this->updated === null) {
            $this->updated = Carbon::now();
        } else {
            $this->updated = $this->updated->addSecond();
        }
    }

    /**
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     */
    public function setUpdatedEntity(): void
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
