<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/TypeHrsType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/08/2023 10:19
 */

namespace App\Form;

use App\Entity\TypeHrs;
use App\Enums\TypeHrsEnum;
use App\Form\Type\YesNoType;
use BackedEnum;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EnumType;
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
            ->add('type', EnumType::class, [
                'label' => 'typehrs',
                'class' => TypeHrsEnum::class,
                'choice_label' => static fn(BackedEnum $choice): string => 'type_hrs.' . $choice->value,
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
