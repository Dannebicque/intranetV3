<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Form/PlanCoursSaeStep1Type.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/02/2024 14:48
 */

namespace App\Components\PlanCours\Form;

use App\Entity\PlanCoursSae;
use App\Form\Type\FloatType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanCoursSaeStep1Type extends PlanCoursStep1Type
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        parent::buildForm($builder, $options);
        $builder
            ->add('description', TextareaType::class, [
                'label' => 'Description de la mise en application de la SAE :',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            //todo: reprendre le texte de la SAE dans document qualité
            ->add('miseEnOeuvre', TextareaType::class, [
                'label' => 'Mise en oeuvre de la SAE :',
                'help' => 'Modalités de mise en oeuvre de la SAE (travail individuel, en groupe, nombre de collègues impliqués, …)',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('projetPrevu', FloatType::class, [
                'label' => 'Nb heures de projet en autonomie prévues :',
                'help' => 'Par défaut rappel de la valeur du PN, mais modifiable si vous ne faite qu\'une partie du module',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('modalitesEvaluations', TextareaType::class, [
                'label' => 'Modalités d\'évaluation de la SAE :',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('livrables', TextareaType::class, [
                'label' => 'Livrables attendus',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('modaliteEncadrementAutonomie', TextareaType::class, [
                'label' => 'Modalités d\'encadrement des heures en autonomie :',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefaults([
            'data_class' => PlanCoursSae::class,
        ]);
    }
}
