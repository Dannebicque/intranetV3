<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/TableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 08:39
 */

namespace App\Components\Table;

use Symfony\Component\Routing\RouterInterface;

abstract class TableType
{
    protected Table $table;
    protected RouterInterface $router;

    public function __construct(Table $table, RouterInterface $router)
    {
        $this->table = $table;
        $this->router = $router;
    }

    public function createTable()
    {
    }
}
