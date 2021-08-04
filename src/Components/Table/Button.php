<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Button.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/08/2021 09:35
 */

namespace App\Components\Table;


use App\Components\Table\Actions\AbstractButtonAction;

class Button
{

    private string $name;
    private AbstractButtonAction $action;
    private array $options;

    public function __construct(string $name, AbstractButtonAction $abstractButtonAction, array $options)
    {
        $this->name = $name;
        $this->action = $abstractButtonAction;
        $this->options = $options;
    }

    public function getOption(string $param)
    {
        return $this->options[$param];
    }

    public function render(array $options = [])
    {
        return $this->action->render($options);
    }
}
