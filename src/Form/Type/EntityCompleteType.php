<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/EntityCompleteType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2021 11:50
 */

namespace App\Form\Type;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class EntityCompleteType extends ChoiceCompleteType
{
    public function getParent()
    {
        return EntityType::class;
    }
}
