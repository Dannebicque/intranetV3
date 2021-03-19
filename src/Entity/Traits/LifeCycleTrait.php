<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Traits/LifeCycleTrait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/03/2021 16:27
 */

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;
use DateTime;

/**
 * Trait LifeCycleTrait
 * @package App\Entity\Traits
 */
trait LifeCycleTrait
{
    /**
     * @var DateTime
     * @ORM\Column(type="datetime")
     */
    private $created;

    /**
     * @var DateTime
     * @ORM\Column(type="datetime")
     */
    private $updated;

    /**
     * @return DateTime
     */
    public function getCreated(): ?DateTime
    {
        return $this->created ?? new DateTime();
    }

    public function setCreated(?DateTime $created): void
    {
        $this->created = $created;
    }

    /**
     * @return DateTime
     */
    public function getUpdated(): ?DateTime
    {
        return $this->updated ?? new DateTime();
    }

    public function setUpdated(?DateTime $updated): void
    {
        $this->updated = $updated;
    }

    /**
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     */
    public function setUpdatedValue(): void
    {
        $this->updated = new DateTime();
    }

    /**
     * @ORM\PrePersist()
     */
    public function setCreatedValue(): void
    {
        $this->created = new DateTime();
    }
}
