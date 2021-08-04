<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DataTable/Widget/RowDeleteLinkType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2021 17:05
 */

namespace App\DataTable\Widget;


use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\Widget\Type\RowLinkType;

class RowDeleteLinkType extends RowLinkType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefault('title', 'action.delete')
            ->setDefault('icon', 'fas fa-trash')
            ->setDefault('xhr', true)
            //->setDefault('confirm', 'message.delete_confirm')
            ->setDefault('class', 'table-link text-danger confirm-delete');
    }
}


