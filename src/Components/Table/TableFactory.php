<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/TableFactory.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 15:01
 */

namespace App\Components\Table;

use App\Components\Table\DTO\Table;

class TableFactory
{
    protected TableRegistry $registry;

    protected TableBuilderHelper $helper;

    /**
     * DataTableFactory constructor.
     */
    public function __construct(TableRegistry $registry, TableBuilderHelper $helper)
    {
        $this->registry = $registry;
        $this->helper = $helper;
    }

    public function create(string $type, array $options = []): Table
    {
        return $this->createBuilder($type, $options)->getTable();
    }

    public function createBuilder(string $type, array $options = []): TableBuilder
    {
        return new TableBuilder($this->helper, $this->registry->getType($type), $options);
    }
}
