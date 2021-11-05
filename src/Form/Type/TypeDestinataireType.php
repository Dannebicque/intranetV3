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
 * Class TypeDestinataireType.
 */
class TypeDestinataireType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'choices' => [
                'choice.etudiant' => 'ETU',
                'choice.personnel' => 'PERS',
            ],
            'multiple' => false,
            'expanded' => true,
            'help' => 'Définir sur Personnel pour que seul les permanents, et vacataires puissent consulter le document',
            'translation_domain' => 'form',
        ]);
    }

    public function getParent(): ?string
    {
        return ChoiceType::class;
    }
}
