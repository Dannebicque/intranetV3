<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/TwigTemplate.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:24
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\TwigTemplateRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TwigTemplateRepository::class)]
#[ORM\HasLifecycleCallbacks]
class TwigTemplate extends BaseEntity
{
    use LifeCycleTrait;

    public function __construct(#[ORM\Column(type: Types::STRING, length: 255)] private ?string $name, #[ORM\Column(type: Types::TEXT)] private ?string $source)
    {
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getSource(): ?string
    {
        return $this->source;
    }

    public function setSource(string $source): self
    {
        $this->source = $source;

        return $this;
    }
}
