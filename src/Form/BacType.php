<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/BacType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/07/2021 11:15
 */

namespace App\Form;

use App\Entity\Bac;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BacType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('libelleLong', TextType::class, ['label' => 'label.libelle_long'])
            ->add('codeApogee', TextType::class, ['label' => 'label.codeApogee'])
            ->add('typeBac', ChoiceType::class, ['label' => 'label.typeBac', 'choices' => Bac::TAB_TYPE_BAC])
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
