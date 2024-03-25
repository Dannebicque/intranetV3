<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Breadcrumbs/BreadcrumbHelper.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Components\Breadcrumbs;

use App\Components\Breadcrumbs\DTO\Breadcrumb;
use Symfony\Component\Routing\RouterInterface;

class BreadcrumbHelper
{
    /** @var Breadcrumb[] */
    private array $breadcrumbs = [];

    public function __construct(
        private readonly RouterInterface $router
    ) {
        $this->breadcrumbs[] = new Breadcrumb('dashboard', $this->router->generate('default_homepage'), 'fas fa-home');
    }

    public function addItem(string $name, string $route, array $parameters = [], string $icon = '', bool $translatable = true, string $transDomain = 'breadcrumbs', array $transParams = []): self
    {
        $this->breadcrumbs[] = new Breadcrumb($name, $this->router->generate($route, $parameters), $icon, $translatable, $transDomain, $transParams);

        return $this;
    }

    public function addLastItem(string $name, string $icon = '', bool $translatable = true, string $transDomain = 'breadcrumbs', array $transParams = []): self
    {
        $this->breadcrumbs[] = new Breadcrumb($name, '', $icon, $translatable, $transDomain, $transParams);

        return $this;
    }

    /**
     * @return Breadcrumb[]
     */
    public function getBreadcrumbs(): array
    {
        return $this->breadcrumbs;
    }

    public function addAdministration(): BreadcrumbHelper
    {
        $this->breadcrumbs[] = new Breadcrumb('Administration', $this->router->generate('administration_index'));

        return $this;
    }
}
