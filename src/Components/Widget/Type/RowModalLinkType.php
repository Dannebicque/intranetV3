<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/Type/RowModalLinkType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/10/2021 11:36
 */

namespace App\Components\Widget\Type;

use Symfony\Component\OptionsResolver\OptionsResolver;

class RowModalLinkType extends RowLinkType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('stimulus', true)
            ->setDefault('text', false)
            ->setDefault('class', 'table-link')
            ->setDefault('stimulus-controller', null);
//            ->setDefault('class', 'table-link')
//            ->setDefault('class', 'table-link');
    }
}
