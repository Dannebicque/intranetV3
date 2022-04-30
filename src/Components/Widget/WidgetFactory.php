<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/WidgetFactory.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 14:37
 */

namespace App\Components\Widget;

use App\Components\Widget\DTO\Widget;
use App\Components\Widget\Type\WidgetType;

class WidgetFactory
{
    /**
     * WidgetFactory constructor.
     */
    public function __construct(protected WidgetRegistry $registry)
    {
    }

    public function create(string $type = WidgetType::class, array $options = []): Widget
    {
        return $this->createBuilder($type, $options)->getWidget();
    }

    public function createBuilder(string $type = WidgetType::class, array $options = []): WidgetBuilder
    {
        return $this->createNamedBuilder($this->registry->getType($type)->getBlockPrefix(), $type, $options);
    }

    public function createNamedBuilder(
        string $name,
        string $type = WidgetType::class,
        array $options = []
    ): WidgetBuilder {
        return new WidgetBuilder($this, $this->registry->getType($type), $name, $options);
    }

    public function createNamed(string $name, string $type = WidgetType::class, array $options = []): Widget
    {
        return $this->createNamedBuilder($name, $type, $options)->getWidget();
    }
}
