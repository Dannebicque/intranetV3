<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Actions/ActionDuplicate.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 11:06
 */

namespace App\Components\Table\Actions;


use Symfony\Component\OptionsResolver\OptionsResolver;

class ActionDuplicate extends ActionButton
{
    public const ICON = 'fas fa-garbadge';
    public const CLASS_CSS = 'btn btn-outline-danger btn-square';
    public const NAME = 'duplicate';


    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'class' => self::CLASS_CSS,
            'name' => self::NAME,
            'icon' => self::ICON,
        ]);
    }
}
