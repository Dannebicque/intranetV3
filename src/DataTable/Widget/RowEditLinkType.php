<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DataTable/Widget/RowEditLinkType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 08:39
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
            ->setDefault('icon', 'mdi mdi-pencil')
            ->setDefault('class', 'table-link text-warning');
    }
}


