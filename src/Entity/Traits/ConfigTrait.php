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
    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $config = null;

    public function getConfig(): ?array
    {
        if (null !== $this->config) {
            return json_decode($this->config, true);
        }

        return [];
    }

    public function setConfig(array $config = []): self
    {
        $this->config = json_encode($config);

        return $this;
    }
}
