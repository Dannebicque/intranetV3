<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Twig/TableExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/07/2021 09:34
 */

namespace App\Components\Table\Twig;

use App\Components\Table\FilterRenderer;
use App\Components\Table\TableRenderer;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class TableExtension extends AbstractExtension
{
    protected TableRenderer $tableRenderer;
    protected FilterRenderer $filterRenderer;

    public function __construct(TableRenderer $tableRenderer, FilterRenderer $filterRenderer)
    {
        $this->tableRenderer = $tableRenderer;
        $this->filterRenderer = $filterRenderer;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('table_render', [$this->tableRenderer, 'render'], [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('fitlers_render', [$this->tableRenderer, 'renderFilters'], [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('filter_render', [$this->filterRenderer, 'render'], [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('paging_render', [$this->tableRenderer, 'renderPaging'], [
                'is_safe' => ['html'],
            ]),
            new TwigFunction('render_export_action', [$this->tableRenderer, 'renderExportAction'], [
                'is_safe' => ['html'],
            ]),
        ];
    }
}
