<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Traits/SoftDeletableTrait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity\Traits;

use Carbon\CarbonInterface;
use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

trait SoftDeletableTrait
{
    /**
     * @var CarbonInterface|null
     */
    #[ORM\Column(type: 'datetime', nullable: true)]
    private ?CarbonInterface $deletedAt = null;

    public function getDeletedAt(): ?CarbonInterface
    {
        return $this->deletedAt;
    }

    public function isDeleted(): bool
    {
        return $this->deletedAt instanceof CarbonInterface;
    }

    public function recover(): void
    {
        $this->deletedAt = null;
    }
}
