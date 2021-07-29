<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Actions/ActionButton.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 18:38
 */

namespace App\Components\Table\Actions;


use Symfony\Component\OptionsResolver\OptionsResolver;

class ActionButton implements ActionInterface
{
    const CLASS_CSS = 'btn btn-outline-primary btn-square';
    const DEFAULT_ICON = 'fas fa-wallet';
    static int $nbBouton = 0;
    protected array $params = [];

    public function __construct(array $params = [])
    {
        self::$nbBouton++;

        $resolver = new OptionsResolver();
        $this->configureOptions($resolver);

        $this->params = $resolver->resolve($params);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'class' => self::CLASS_CSS,
            'name' => 'default_bouton_' . self::$nbBouton,
            'icon' => self::DEFAULT_ICON,
            'url' => 'default_bouton_' . self::$nbBouton,
            'identifier' => 'id'
        ]);
        $resolver->setRequired('url');
    }
}
