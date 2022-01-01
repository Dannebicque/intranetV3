<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Breadcrumbs/BreadcrumbHelper.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/12/2021 10:45
 */

namespace App\Components\Breadcrumbs;

use App\Components\Breadcrumbs\DTO\Breadcrumb;
use Symfony\Component\Routing\RouterInterface;

class BreadcrumbHelper
{
    /** @var Breadcrumb[] */
    private array $breadcrumbs = [];

    public function __construct(
        private RouterInterface $router
    )
    {
        $this->breadcrumbs[] = new Breadcrumb('dashboard', $this->router->generate('default_homepage'), 'fas fa-home');
    }

    public function addItem(string $name, string $route, array $parameters = [], string $icon = '', bool $translatable = true, string $transDomain = 'breadcrumbs', array $transParams = []): self
    {
        $this->breadcrumbs[] = new Breadcrumb($name, $this->router->generate($route, $parameters), $icon, $translatable, $transDomain, $transParams);

        return $this;
    }

    /**
     * @return \App\Components\Breadcrumbs\DTO\Breadcrumb[]
     */
    public function getBreadcrumbs(): array
    {
        return $this->breadcrumbs;
    }


}
