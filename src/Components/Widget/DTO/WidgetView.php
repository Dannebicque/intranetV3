<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/DTO/WidgetView.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 19:11
 */

namespace App\Components\Widget\DTO;

use ArrayIterator;
use Countable;
use IteratorAggregate;

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

    public function addClass(string $class)
    {
        if (isset($this->vars['attr']['class'])) {
            $this->vars['attr']['class'] .= ' ' . $class;
        } else {
            $this->vars['attr']['class'] = $class;
        }
    }

    public function getIterator(): iterable
    {
        return new ArrayIterator($this->children);
    }

    public function count(): int
    {
        return count($this->children);
    }
}
