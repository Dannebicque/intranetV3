<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/CiviliteType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/05/2021 18:31
 */

namespace App\Form\Type;

use App\Entity\Constantes;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class YesNoType.
 */
class CiviliteType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'choices' => [
                Constantes::CIVILITE_HOMME => Constantes::CIVILITE_HOMME,
                Constantes::CIVILITE_FEMME => Constantes::CIVILITE_FEMME,
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
