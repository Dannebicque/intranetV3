<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/Type/RowDuplicateLinkType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 15:40
 */

namespace App\Components\Widget\Type;

use Symfony\Component\OptionsResolver\OptionsResolver;

class RowDuplicateLinkType extends RowLinkType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('title', 'action.duplicate')
            ->setDefault('icon', 'fas fa-copy')
            ->setDefault('class', 'btn btn-square btn-success-outline mr-1');
    }
}
