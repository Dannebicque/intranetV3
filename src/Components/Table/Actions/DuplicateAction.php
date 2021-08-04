<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Actions/DuplicateAction.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2021 18:11
 */

namespace App\Components\Table\Actions;


use Symfony\Component\OptionsResolver\OptionsResolver;

class DuplicateAction extends AbstractButtonAction implements ActionInterface
{
    public const ICON = 'fas fa-copy';
    public const CLASS_CSS = 'btn btn-outline btn-success btn-square';
    public const NAME = 'duplicate';


    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'class' => self::CLASS_CSS,
            'name' => self::NAME,
            'icon' => self::ICON,
        ]);
    }
}
