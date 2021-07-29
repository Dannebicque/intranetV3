<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Button.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 11:06
 */

namespace App\Components\Table;


use App\Components\Table\Actions\ActionInterface;

class Button
{

    public function setType(ActionInterface $action)
    {

        return $this;
    }
}
