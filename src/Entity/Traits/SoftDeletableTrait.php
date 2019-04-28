<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Traits/SoftDeletableTrait.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:46 PM
 *  * @lastUpdate 4/28/19 8:42 PM
 *  *
 *
 */

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
