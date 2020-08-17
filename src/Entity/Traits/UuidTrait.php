<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Traits/UuidTrait.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/08/2020 10:27

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;

trait UuidTrait
{
    /**
     * @ORM\Column(type="uuid_binary")
     */
    private $uuid;

    /**
     * @return string
     */
    public function getUuidString(): string
    {

        return (string)$this->getUuid();
    }

    public function getUuid()
    {
        return $this->uuid;
    }

    /**
     * @param mixed $uuid
     */
    public function setUuid($uuid): void
    {
        $this->uuid = $uuid;
    }
}
