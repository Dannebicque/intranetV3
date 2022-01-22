<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Widget/Type/RowDeleteLinkType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 12:18
 */

namespace App\Components\Widget\Type;

use Symfony\Component\OptionsResolver\OptionsResolver;

class RowDeleteLinkType extends RowLinkType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('title', 'action.delete')
            ->setDefault('icon', $this->parameterBag->get('iconDelete'))
            ->setDefault('class', 'btn btn-square btn-danger-outline me-1 supprimer'); //xhr-delete
    }
}
