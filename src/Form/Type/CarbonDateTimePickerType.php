<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/CarbonDateTimePickerType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 11:42
 */

namespace App\Form\Type;

use App\Form\Transformer\CarbonToDateTimeTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Umbrella\CoreBundle\Form\DatepickerType;

/**
 * Class YesNoType.
 */
class CarbonDateTimePickerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->addModelTransformer(new CarbonToDateTimeTransformer());
    }

    public function getParent(): ?string
    {
        return DatepickerType::class;
    }
}
