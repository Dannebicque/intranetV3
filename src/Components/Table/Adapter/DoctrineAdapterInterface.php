<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Adapter/DoctrineAdapterInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 14:07
 */

namespace App\Components\Table\Adapter;

use Doctrine\ORM\QueryBuilder;
use App\Components\Table\DTO\TableState;

interface DoctrineAdapterInterface
{
    public function getQueryBuilder(TableState $state, array $options): QueryBuilder;
}
