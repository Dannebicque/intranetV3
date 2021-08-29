<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/DTO/Paging.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 14:37
 */

namespace App\Components\Table\DTO;

class Paging
{
    private int $pageLength;
    private int $pageActive;
    private int $recordsTotal = 0;
    private int $recordsFiltered = 0;
    private int $nbPages = 0;

    public function __construct(array $options = [])
    {
        $this->pageLength = $options['page_length'];
        $this->pageActive = $options['page_active'];
    }

    public function handleRequest(array $paging): void
    {
        if (array_key_exists('pageLength', $paging)) {
            $this->pageLength = $paging['pageLength'];
        }

        if (array_key_exists('pageActive', $paging)) {
            $this->pageActive = $paging['pageActive'];
        }
    }

    public function getData(): array
    {
        return [
            'pageLength' => $this->pageLength,
            'numActivePage' => $this->pageActive,
            'recordsTotal' => $this->recordsTotal,
            'recordsFiltered' => $this->recordsFiltered,
            'firstPage' => 1 === $this->pageActive,
            'lastPage' => $this->pageActive === $this->nbPages,
            'nbPages' => $this->nbPages,
            'start' => $this->getStart(),
        ];
    }

    private function getStart(): int
    {
        return $this->pageActive * $this->pageLength;
    }

    public function setResult(TableResult $tableResult): void
    {
        $this->recordsFiltered = $tableResult->getNbResults();
        $this->recordsTotal = $tableResult->getCount();
        $this->nbPages = ceil($this->recordsTotal / $this->pageLength);
    }
}
