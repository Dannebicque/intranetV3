<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/Type/ButtonDropdownType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 13:54
 */

namespace App\Components\Widget\Type;

use App\Components\Widget\WidgetBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ExportDropdownType extends ButtonDropdownType
{
    public function buildWidget(WidgetBuilder $builder, array $options): void
    {
        foreach ($options['formats'] as $format) {
            $builder->add($format, LinkType::class, [
                'route' => $options['route'],
                'route_params' => array_merge($options['route_params'], ['_format' => $format]),
            ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
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
}
