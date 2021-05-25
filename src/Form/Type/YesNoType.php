<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/YesNoType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/05/2021 16:35
 */

namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class YesNoType.
 */
class YesNoType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'choices' => [
                'choice.oui' => true,
                'choice.non' => false,
            ],
            'multiple' => false,
            'expanded' => true,
            'translation_domain' => 'form',
        ]);
    }

    public function getParent(): ?string
    {
        return ChoiceType::class;
    }
}
