<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/TableFactory.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/08/2021 17:22
 */

namespace App\Components\Table;

class TableFactory
{
    protected TableRegistry $tableRegistry;

    public function __construct(
        TableRegistry $tableRegistry
    ) {
        $this->tableRegistry = $tableRegistry;
    }

    public function create(string $type, array $options = []): Table
    {
        return $this->tableRegistry->getTableType($type)->createTable($options);
    }
}
