<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Adapter/AbstractAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 12:15
 */

namespace App\Components\Table\Adapter;

use App\Components\Table\DTO\TableResult;
use App\Components\Table\Table;
use Symfony\Component\OptionsResolver\OptionsResolver;

abstract class AbstractAdapter
{

    public function configureOptions(OptionsResolver $resolver)
    {
    }


    abstract public function getResult(Table $state, array $options): TableResult;
}
