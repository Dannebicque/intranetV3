<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/Type/EntityCompleteType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/09/2022 09:35
 */

namespace App\Form\Type;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EntityCompleteType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'autocomplete' => true,
            'tom_select_options' => [
                'maxOptions' => null,
            ],
            'attr' => [
                'placeholder' => 'label.veuillez_choisir',
            ],
        ]);
    }

    public function getParent(): ?string
    {
        return EntityType::class;
    }
}
