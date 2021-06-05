<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/TypeHrsType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 10:56
 */

namespace App\Form;

use App\Entity\TypeHrs;
use App\Form\Type\YesNoType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class TypeHrsType.
 */
class TypeHrsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'libelle'])
            ->add('incluService', YesNoType::class, [
                'label' => 'incluService',
            ])
            ->add('type', ChoiceType::class, [
                'label' => 'typehrs',
                'choices' => TypeHrs::TAB_TYPE_HRS,
                'choice_translation_domain' => 'form',
                'expanded' => true,
            ])
            ->add('maximum', TextType::class, ['label' => 'maximum']);
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TypeHrs::class,
            'translation_domain' => 'form',
        ]);
    }
}
