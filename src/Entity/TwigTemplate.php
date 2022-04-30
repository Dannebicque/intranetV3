<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/TwigTemplate.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:30
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

    public function __construct(#[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 255)] private ?string $name, #[ORM\Column(type: \Doctrine\DBAL\Types\Types::TEXT)] private ?string $source)
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
