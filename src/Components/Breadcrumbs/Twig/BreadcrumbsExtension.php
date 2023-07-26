<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Breadcrumbs/Twig/BreadcrumbsExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/07/2023 22:21
 */

namespace App\Components\Breadcrumbs\Twig;

use App\Components\Breadcrumbs\BreadcrumbHelper;
use Twig\Environment;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class BreadcrumbsExtension extends AbstractExtension
{
    private string $template = 'components/breadcrumbs/breadcrumbs.html.twig';

    public function __construct(
        protected BreadcrumbHelper $breadcrumbHelper,
        protected Environment $twig)
    {
    }

    /**
     * @return TwigFunction[]
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('breandcrumbs_render', $this->breadcrumbsRender(...), [
                'is_safe' => ['html'],
            ]),
        ];
    }

    /**
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\LoaderError
     */
    public function breadcrumbsRender(): string
    {
        return $this->twig->render($this->template, ['breadcrumbs' => $this->breadcrumbHelper->getBreadcrumbs()]);
    }
}
