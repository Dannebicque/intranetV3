<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Traits/SoftDeletableTrait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/05/2022 14:27
 */

namespace App\Entity\Traits;

use Carbon\CarbonInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

trait SoftDeletableTrait
{
    /**
     * @var CarbonInterface|null
     */
    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
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
