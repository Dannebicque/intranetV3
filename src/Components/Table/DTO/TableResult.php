<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/DTO/TableResult.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 12:06
 */

namespace App\Components\Table\DTO;


class TableResult
{
    protected iterable $data;

    protected int $count; // The count total of data without paging

    /**
     * DataTableResult constructor.
     */
    public function __construct(iterable $data = [], ?int $count = null)
    {
        $this->data = $data;
        $this->count = null === $count ? count($data) : $count;
    }

    public function getData(): iterable
    {
        return $this->data;
    }

    public function getCount(): int
    {
        return $this->count;
    }
}
