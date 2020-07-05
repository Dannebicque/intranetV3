<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Traits/UuidTrait.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Entity\Traits;

use Symfony\Component\Uid\UuidV4;
use Doctrine\ORM\Mapping as ORM;

trait UuidTrait
{
    /**
     * @ORM\Column(type="uuid", unique=true)
     */
    protected $uuid;

    /**
     * @return UuidV4
     */
    public function getUuidString(): string
    {

        return (string)$this->getUuid();
    }

    /**
     * @return UuidV4
     */
    public function getUuid(): ?UuidV4
    {
        return $this->uuid !== null ? UuidV4::fromString($this->uuid) : null;
    }

    public function setUuid(UuidV4 $uuidV4)
    {
        $this->uuid = $uuidV4->toRfc4122();
    }
}
