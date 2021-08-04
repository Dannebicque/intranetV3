<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DataTable/Widget/RowEditLinkType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2021 17:05
 */

namespace App\DataTable\Widget;


use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\Widget\Type\RowLinkType;

class RowEditLinkType extends RowLinkType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('title', 'action.edit')
            ->setDefault('icon', 'fas fa-edit')
            ->setDefault('class', 'table-link text-warning');
    }
}


