<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Column/ActionsColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:01
 */

namespace App\Components\Table\Column;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\PropertyAccess\PropertyAccessorInterface;
use Symfony\Component\Routing\RouterInterface;

class ActionsColumnType extends ColumnType
{
    protected PropertyAccessorInterface $accessor;
    private mixed $rowData;

    private RouterInterface $router;

    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
        $this->accessor = PropertyAccess::createPropertyAccessor();
    }

    public function render($rowData, array $options): string
    {
        $this->rowData = $rowData;

        return $this->renderProperty($options);
    }

    public function renderProperty(array $options): string
    {
        $actions = $options['actions'];
        $html = '';
        foreach ($actions as $action) {
            $value = $this->accessor->getValue($this->rowData, $action->getOption('property_path'));
            $html .= $action->render([
                'url' => $this->router->generate($action->getOption('url'),
                    [$action->getOption('property_name') => $value])
            ]);
        }

        return $html;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefault('sortable', false)
            ->setDefault('actions', []);
    }
}
