<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/DTO/TableState.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/10/2021 10:02
 */

namespace App\Components\Table\DTO;

use function in_array;

class TableState
{
    protected Table $table;

    protected int $start = 0;
    protected int $length = -1;

    protected array $orderBy = [];

    protected array $formData = [];
    protected array $paging = [];

    protected bool $isCallback = false;

    /**
     * DataTableState constructor.
     */
    public function __construct(Table $table)
    {
        $this->table = $table;
    }

    public function applyParameters(array $parameters): void
    {
        $this->isCallback = true;

        $this->start = $this->getStart();
        $this->length = $this->getLength();

        if (isset($parameters['order'])) {
            foreach ($parameters['order'] as $orderData) {
                // invalid dir
                if (!in_array($orderData['order'], [Table::SORT_ASCENDING, Table::SORT_DESCENDING])) {
                    continue;
                }

                // invalid column index
                if (!$this->table->hasColumn($orderData['column'])) {
                    continue;
                }

                $c = $this->table->getColumn($orderData['column']);
                // column not orderable

                if (!$c->isOrderable()) {
                    continue;
                }
                $this->addOrderBy($c, $orderData['order']);
            }
        }
    }

    public function getStart(): int
    {
        return $this->paging['start'];
    }

    public function getLength(): int
    {
        return $this->paging['pageLength'];
    }

    public function addOrderBy(Column $column, string $direction): self
    {
        $this->orderBy[] = [$column, $direction];

        return $this;
    }

    public function getTable(): Table
    {
        return $this->table;
    }

    public function getOrderBy(): array
    {
        return $this->orderBy;
    }

    public function getFormData(): array
    {
        return $this->formData;
    }

    public function setFormData(array $formData): self
    {
        $this->formData = $formData;

        return $this;
    }

    public function setPaging(array $paging): self
    {
        $this->paging = $paging;

        return $this;
    }

    public function isCallback(): bool
    {
        return $this->isCallback;
    }
}
