<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Twig/TableExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 11:06
 */

namespace App\Components\Table\Twig;

use App\Components\Table\TableRenderer;
use Twig\TwigFunction;
use Twig\Extension\AbstractExtension;

class TableExtension extends AbstractExtension
{
    protected TableRenderer $renderer;

    /**
     * DataTableTwigExtension constructor.
     */
    public function __construct(TableRenderer $renderer)
    {
        $this->renderer = $renderer;
    }

    /**
     * {@inheritdoc}
     */
    public function getFunctions()
    {
        return [
            new TwigFunction('table_render', [$this->renderer, 'render'], [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('fitlers_render', [$this->renderer, 'renderFilters'], [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('paging_render', [$this->renderer, 'renderPaging'], [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('render_export_action', [$this->renderer, 'renderExportAction'], [
                'is_safe' => ['html'],
            ]),
        ];
    }
}
