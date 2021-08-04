<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Actions.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/07/2021 17:50
 */

namespace App\Components\Table;

use App\Components\Table\Actions\AbstractButtonAction;

class Actions
{
    protected array $actions = [];
    protected string $label_column = 'Actions';

    public function __construct()
    {
    }

    public function addAction(Button $buttonAction)
    {
        //todo: vérifier si pas déjà présent?
        $this->actions[] = $buttonAction;
    }

    public function getActions()
    {
        return $this->actions;
    }

    public function hasActions()
    {
        return count($this->actions) > 0;
    }
}
