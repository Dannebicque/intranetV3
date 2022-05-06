<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Widget/DTO/WidgetView.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/05/2022 18:18
 */

namespace App\Components\Widget\DTO;

use ArrayIterator;
use Countable;
use IteratorAggregate;
use Traversable;

class WidgetView implements IteratorAggregate, Countable
{
    public array $vars = [
        'attr' => [],
    ];

    public string $element = 'div';

    /**
     * @var WidgetView[]
     */
    public array $children = [];

    public function addClass(string $class): void
    {
        if (isset($this->vars['attr']['class'])) {
            $this->vars['attr']['class'] .= ' '.$class;
        } else {
            $this->vars['attr']['class'] = $class;
        }
    }

    public function getIterator(): Traversable
    {
        return new ArrayIterator($this->children);
    }

    public function count(): int
    {
        return count($this->children);
    }
}
