<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Form/PlanCoursMatiereStep1Type.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/12/2022 17:29
 */

namespace App\Components\PlanCours\Form;

use App\Entity\PlanCoursMatiere;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanCoursMatiereStep1Type extends PlanCoursStep1Type
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        parent::buildForm($builder, $options);
        $builder
            ->add('descriptionMatiere', TextareaType::class, [
                'label' => 'Description du contenu de la matière/module',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('objectifs', TextareaType::class, [
                'label' => 'Objectifs de la matière/module',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('modalitesEvaluations', TextareaType::class, [
                'label' => 'Modalités d\'évaluation de la matière/module',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PlanCoursMatiere::class,
        ]);
    }
}
