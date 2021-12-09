<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/Type/RowShowLinkType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 12:18
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
            ->setDefault('icon', $this->parameterBag->get('iconShow'))
            ->setDefault('class', 'btn btn-square btn-info-outline me-1');
    }
}
