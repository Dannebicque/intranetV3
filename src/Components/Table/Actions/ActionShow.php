<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Actions/ActionShow.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 11:06
 */

namespace App\Components\Table\Actions;

use Symfony\Component\OptionsResolver\OptionsResolver;

class ActionShow extends ActionButton
{
    public const ICON = 'fas fa-eye';
    public const CLASS_CSS = 'btn btn-outline-info btn-square';
    public const NAME = 'show';

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
