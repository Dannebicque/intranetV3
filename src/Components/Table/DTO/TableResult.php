<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/DTO/TableResult.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 12:33
 */

namespace App\Components\Table\DTO;

class TableResult
{
    protected int $count; // The count total of data without paging
    protected int $nbResults;

    /**
     * DataTableResult constructor.
     */
    public function __construct(protected iterable $data = [], ?int $count = null)
    {
        $this->nbResults = count($data);
        $this->count = $count ?? count($data);
    }

    public function getData(): iterable
    {
        return $this->data;
    }

    public function getCount(): int
    {
        return $this->count;
    }

    public function getNbResults(): int
    {
        return $this->nbResults;
    }
}
