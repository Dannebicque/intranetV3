<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Column/DetailsHandleColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 18:38
 */

namespace App\Components\Table\Column;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Utils\HtmlUtils;

class DetailsHandleColumnType extends ColumnType
{
    public function render($rowData, array $options): string
    {
        $details = call_user_func($options['render_details'], $rowData, $options);

        if (empty($details)) {
            return '';
        }

        $expanded = is_callable($options['expanded'])
            ? call_user_func($options['expanded'], $rowData, $options)
            : $options['expanded'];

        return sprintf(
            '<a href data-tag="dt:details" data-init-state="%s" row-details="%s" class="row-details-handle"><i class="mdi"></i></a>',
            $expanded ? 'expanded' : 'collapsed',
            HtmlUtils::escape($details, 'html_attr')
        );
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('label', null)
            ->setRequired('render_details')
            ->setAllowedTypes('render_details', 'callable')
            ->setDefault('expanded', false)
            ->setAllowedTypes('expanded', ['boolean', 'callable'])
            ->setDefault('is_safe_html', true);
    }
}
