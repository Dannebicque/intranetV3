<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/BacType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/05/2022 19:14
 */

namespace App\Form;

use App\Entity\Bac;
use App\Enums\BacEnum;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EnumType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use UnitEnum;

class BacType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('libelleLong', TextType::class, ['label' => 'label.libelle_long'])
            ->add('codeApogee', TextType::class, ['label' => 'label.codeApogee'])
            ->add('typeBac', EnumType::class, [
                'label' => 'label.typeBac',
                'class' => BacEnum::class,
                'help' => 'help.typeBac',
                'choice_label' => static fn (UnitEnum $choice): string => 'bac_type.'.$choice->value,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Bac::class,
            'translation_domain' => 'form',
        ]);
    }
}
