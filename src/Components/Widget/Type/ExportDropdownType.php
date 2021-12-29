<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/Type/ButtonDropdownType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 13:54
 */

namespace App\Components\Widget\Type;

use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Components\Widget\DTO\WidgetView;
use App\Components\Widget\WidgetBuilder;

class ExportDropdownType extends ButtonDropdownType
{
    public function buildView(WidgetView $view, array $options)
    {
        parent::buildView($view, $options);
    }

    public function buildWidget(WidgetBuilder $builder, array $options)
    {
        foreach($options['formats'] as $format) {
            $builder->add($format, LinkType::class, [
                'route' => $options['route'],
                'route_params' => array_merge($options['route_params'], ['_format' => $format]),
            ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('icon', 'fas fa-download')
            ->setDefault('text', null)
            ->setDefault('route', null)
            ->setDefault('route_params', [])
            ->setDefault('formats', ['csv', 'xlsx', 'pdf']);

        $resolver
            ->setDefault('class', 'btn-light');
    }

    public function getBlockPrefix(): string
    {
        return 'button_dropdown';
    }
}
