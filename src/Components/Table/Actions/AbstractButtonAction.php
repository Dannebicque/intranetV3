<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Actions/AbstractButtonAction.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:01
 */

namespace App\Components\Table\Actions;

use Symfony\Component\OptionsResolver\OptionsResolver;

abstract class AbstractButtonAction
{
    public const CLASS_CSS = 'btn btn-outline btn-primary btn-square';
    public const DEFAULT_ICON = 'fas fa-wallet';
    public const DEFAULT_NAME = 'fas fa-wallet';
    public static int $nbBouton = 0;
    protected array $params = [];

    public function __construct(array $params = [])
    {
        ++self::$nbBouton;

        $resolver = new OptionsResolver();
        $this->configureOptions($resolver);

        $this->params = $resolver->resolve($params);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'class' => self::CLASS_CSS,
            'name' => 'default_bouton_' . self::$nbBouton,
            'title' => self::DEFAULT_NAME,
            'icon' => self::DEFAULT_ICON,
            'url' => null,
            'property_path' => 'id',
            'property_name' => 'id',
        ]);
        $resolver->setRequired('url');
    }

    public function render(array $options = []): string
    {
        $url = $this->params['url'] ?? $options['url'];

        return '<a href="' . $url . '" class="' . $this->params['class'] . ' mr-2" title="' . $this->params['title'] . '" data-provide="tooltip"><i class="' . $this->params['icon'] . '"></i><span class="sr-only">' . $this->params['title'] . '</span></a>';
    }
}
