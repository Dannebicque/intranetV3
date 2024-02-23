<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Graphs/GraphRenderer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Components\Graphs;

use App\Components\Graphs\DTO\Graph;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class GraphRenderer
{
    public function __construct(protected Environment $twig)
    {
    }

    /**
     * @throws SyntaxError
     * @throws RuntimeError
     * @throws LoaderError
     */
    public function render(Graph $graph): string
    {
        return $this->twig->render($graph->getOption('template'), $this->view($graph));
    }

    private function view(Graph $graph)
    {
    }

}
