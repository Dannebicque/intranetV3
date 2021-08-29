<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/DTO/Column.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 14:37
 */

namespace App\Components\Table\DTO;

use App\Components\Table\Column\ColumnType;
use App\Utils\HtmlUtils;

class Column
{
    protected ColumnType $type;

    protected array $options;

    /**
     * Column constructor.
     */
    public function __construct(ColumnType $type, array $options)
    {
        $this->type = $type;
        $this->options = $options;
    }

    public function isOrderable(): bool
    {
        return false !== $this->options['order'];
    }

    public function getDefaultOrder(): ?string
    {
        return is_string($this->options['order']) ? $this->options['order'] : null;
    }

    public function getOrderBy(): array
    {
        return null === $this->options['order_by'] ? [] : (array)$this->options['order_by'];
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function getOption(string $name)
    {
        return $this->options[$name];
    }

    public function render($rowData): string
    {
        if (is_callable($this->options['render'])) {
            $value = (string)call_user_func($this->options['render'], $rowData, $this->options);
        } else {
            $value = $this->type->render($rowData, $this->options);
        }

        $value = $this->options['is_safe_html'] ? $value : HtmlUtils::escape($value);

        return $value;
    }
}
