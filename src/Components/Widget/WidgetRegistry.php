<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/WidgetRegistry.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 14:37
 */

namespace App\Components\Widget;

use App\Components\Widget\Type\WidgetType;

class WidgetRegistry
{
    public const TAG_TYPE = 'da.widget.type';

    /**
     * @var WidgetType[]
     */
    protected array $types = [];

    public function registerType(string $name, WidgetType $type)
    {
        $this->types[$name] = $type;
    }

    public function getType(string $name): WidgetType
    {
        if (!isset($this->types[$name])) {
            throw new \InvalidArgumentException(sprintf('Widget "%s" doesn\'t exist, maybe you have forget to register it ?',
                $name));
        }

        return $this->types[$name];
    }
}
