<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/Type/RowShowLinkType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 15:41
 */

namespace App\Components\Widget\Type;

use Symfony\Component\OptionsResolver\OptionsResolver;

class RowShowLinkType extends RowLinkType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('title', 'action.show')
            ->setDefault('icon', 'fas fa-info')
            ->setDefault('class', 'btn btn-square btn-info-outline  mr-1');
    }
}
