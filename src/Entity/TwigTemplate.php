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
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TwigTemplateRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class TwigTemplate extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $name;

    /**
     * @ORM\Column(type="text")
     */
    private ?string $source;

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

    public function __construct(string $name, string $source)
    {
        $this->name = $name;
        $this->source = $source;
    }
}
