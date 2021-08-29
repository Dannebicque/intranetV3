<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/Twig/WidgetExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 13:54
 */

namespace App\Components\Widget\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use App\Components\Widget\WidgetRenderer;

class WidgetExtension extends AbstractExtension
{
    protected WidgetRenderer $renderer;

    /**
     * WidgetExtension constructor.
     */
    public function __construct(WidgetRenderer $renderer)
    {
        $this->renderer = $renderer;
    }

    public function getFunctions()
    {
        return [
            new TwigFunction('render_widget', [$this->renderer, 'render'], ['is_safe' => ['html']])
        ];
    }
}
