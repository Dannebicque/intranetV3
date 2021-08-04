<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Actions/EditAction.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2021 18:11
 */

namespace App\Components\Table\Actions;


use Symfony\Component\OptionsResolver\OptionsResolver;

class EditAction extends AbstractButtonAction implements ActionInterface
{
    public const ICON = 'fas fa-edit';
    public const CLASS_CSS = 'btn btn-outline btn-warning btn-square';
    public const NAME = 'edit';


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
