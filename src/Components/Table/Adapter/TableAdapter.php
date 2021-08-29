<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Adapter/TableAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 14:07
 */

namespace App\Components\Table\Adapter;

use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Components\Table\DTO\TableResult;
use App\Components\Table\DTO\TableState;

abstract class TableAdapter
{
    public function configureOptions(OptionsResolver $resolver)
    {
    }

    /**
     * @throws AdapterException
     */
    abstract public function getResult(TableState $state, array $options): TableResult;
}
