<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Form/PlanCoursSaeStep3Type.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/12/2022 17:36
 */

namespace App\Components\PlanCours\Form;

use App\Entity\PlanCoursSae;
use App\Form\Type\FloatType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanCoursSaeStep3Type extends PlanCoursStep3Type
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        parent::buildForm($builder, $options);
        $builder
            ->add('projetRealise', FloatType::class, [
                'label' => 'Nb heures Projet en autonomie réalisées',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('livrablesRendus', TextareaType::class, [
                'label' => 'Commentaire sur les livrables attendus et rendus',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PlanCoursSae::class,
        ]);
    }
}
