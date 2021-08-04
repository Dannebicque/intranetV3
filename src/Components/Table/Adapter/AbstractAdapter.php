<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Adapter/AbstractAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/08/2021 10:49
 */

namespace App\Components\Table\Adapter;

use App\Components\Table\DTO\TableResult;
use App\Components\Table\Table;
use Symfony\Component\OptionsResolver\OptionsResolver;

abstract class AbstractAdapter
{

    public function configureOptions(OptionsResolver $resolver): void
    {
    }

    abstract public function getResult(Table $table, array $options): TableResult;
}
