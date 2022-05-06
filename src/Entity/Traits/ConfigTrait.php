<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Traits/ConfigTrait.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/05/2022 14:27
 */

namespace App\Entity\Traits;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

trait ConfigTrait
{
    #[ORM\Column(type: Types::TEXT, nullable: true)]
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
