<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/MccType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/12/2022 08:31
 */

namespace App\Form;

use App\Entity\Mcc;
use App\Entity\MccTypeEpreuve;
use App\Form\Type\EntityCompleteType;
use App\Form\Type\FloatType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MccType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('coefficient', FloatType::class, [
                'label' => 'Coefficient',
                'required' => true,
                'input_suffix' => '<span class="input-group-text">%</span>',
                'attr' => ['max' => 100, 'min' => 0],
            ])
            ->add('typeEpreuve', EntityCompleteType::class, [
                'label' => 'Type d\'épreuve',
                'class' => MccTypeEpreuve::class,
                'choice_label' => 'libelle',
                'required' => true,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Mcc::class,
        ]);
    }
}
