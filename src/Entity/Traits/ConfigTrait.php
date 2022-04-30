<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Traits/UuidTrait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;

trait ConfigTrait
{
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::TEXT, nullable: true)]
    private ?string $config = null;

    public function getConfig(): ?array
    {
        if (null !== $this->config) {
            return json_decode($this->config, true, 512, JSON_THROW_ON_ERROR);
        }

        return [];
    }

    public function setConfig(array $config = []): self
    {
        $this->config = json_encode($config, JSON_THROW_ON_ERROR);

        return $this;
    }
}
