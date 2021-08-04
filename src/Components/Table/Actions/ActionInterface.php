<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Actions/ActionInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/08/2021 10:46
 */

namespace App\Components\Table\Actions;

use Symfony\Component\OptionsResolver\OptionsResolver;

interface ActionInterface
{
    public function render(array $options = []);

    public function configureOptions(OptionsResolver $resolver);
}
