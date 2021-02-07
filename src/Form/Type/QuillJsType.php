<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/QuillJsType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:59
 */

namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class YesNoType.
 */
class QuillJsType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
    }

    public function getParent()
    {
        return TextareaType::class;
    }
}
