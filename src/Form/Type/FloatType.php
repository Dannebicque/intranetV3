<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/FloatType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/06/2021 11:48
 */

namespace App\Form\Type;

use App\Form\Transformer\FloatTypeTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

/**
 * Class YesNoType.
 */
class FloatType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->addModelTransformer(new FloatTypeTransformer());
    }

    public function getParent(): ?string
    {
        return TextType::class;
    }
}
