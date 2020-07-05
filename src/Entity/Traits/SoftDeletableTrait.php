<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Traits/SoftDeletableTrait.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:14

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 26/08/2018
 * Time: 11:05
 */

namespace App\Entity\Traits;

use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

trait SoftDeletableTrait
{
    /**
     * @var DateTime|null
     *
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $deletedAt;

    public function getDeletedAt(): ?DateTime
    {
        return $this->deletedAt;
    }

    public function isDeleted(): bool
    {
        return $this->deletedAt instanceof DateTimeInterface;
    }

    public function recover(): void
    {
        $this->deletedAt = null;
    }
}
