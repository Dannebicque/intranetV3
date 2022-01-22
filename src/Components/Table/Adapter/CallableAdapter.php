<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Adapter/CallableAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 14:07
 */

namespace App\Components\Table\Adapter;

use App\Components\Table\DTO\TableResult;
use App\Components\Table\DTO\TableState;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CallableAdapter extends TableAdapter
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver
            ->setRequired('callable')
            ->setAllowedTypes('callable', 'callable');
    }

    public function getResult(TableState $state, array $options): TableResult
    {
        return call_user_func($options['callable'], $state);
    }
}
