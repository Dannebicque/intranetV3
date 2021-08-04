<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Actions/DeleteAction.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:01
 */

namespace App\Components\Table\Actions;


use Symfony\Component\OptionsResolver\OptionsResolver;

class DeleteAction extends AbstractButtonAction implements ActionInterface
{
    public const ICON = 'fas fa-trash';
    public const CLASS_CSS = 'btn btn-outline btn-danger btn-square';
    public const NAME = 'delete';


    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'class' => self::CLASS_CSS,
            'name' => self::NAME,
            'icon' => self::ICON,
        ]);
    }

    public function render(array $options = []): string
    {
        $url = $this->params['url'] ?? $options['url'];

        return '<a href="' . $url . '" class="' . $this->params['class'] . ' mr-2 supprimer" title="' . $this->params['title'] . '" data-provide="tooltip"><i class="' . $this->params['icon'] . '"></i><span class="sr-only">' . $this->params['title'] . '</span></a>';
    }

}
