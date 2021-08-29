<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/Type/AddLinkType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 09:56
 */

namespace App\Components\Widget\Type;

use Symfony\Component\OptionsResolver\OptionsResolver;

class AddLinkType extends LinkType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('class', 'btn btn-primary')
            ->setDefault('icon', 'fas fa-plus me-1');
    }
}
