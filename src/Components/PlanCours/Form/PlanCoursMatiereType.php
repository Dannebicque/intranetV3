<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Form/PlanCoursMatiereType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\PlanCours\Form;

use App\Entity\PlanCoursMatiere;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanCoursMatiereType extends PlanCoursType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        parent::buildForm($builder, $options);

        $builder
            ->add('descriptionMatiere', TextareaType::class, [
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('objectifs', TextareaType::class, [
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('modalitesEvaluations', TextareaType::class, [
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PlanCoursMatiere::class,
        ]);
    }
}
