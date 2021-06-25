<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/CarbonDateTimeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 16:55
 */

namespace App\Form\Type;

use App\Form\Transformer\CarbonToDateTimeTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\FormBuilderInterface;

/**
 * Class YesNoType.
 */
class CarbonDateTimeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->addModelTransformer(new CarbonToDateTimeTransformer());
    }

    public function getParent(): ?string
    {
        return DateTimeType::class;
    }
}
