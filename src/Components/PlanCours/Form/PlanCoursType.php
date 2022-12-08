<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Form/PlanCoursType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\PlanCours\Form;

use App\Entity\PlanCours;
use App\Form\Type\FloatType;
use App\Form\Type\YesNoType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanCoursType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('coefficient', FloatType::class, ['label' => 'Coefficient'])
            ->add('nbNotes', IntegerType::class, ['label' => 'Nombre de notes'])
            ->add('cmPrevu', FloatType::class, ['label' => 'Nb heures CM prévu', 'help' => 'Par défaut rappel de la valeur du PN, mais modifiable si vous ne faite qu\'une partie du module'])
            ->add('cmRealise', FloatType::class, ['label' => 'Nb heures CM réalisé'])
            ->add('tdPrevu', FloatType::class, ['label' => 'Nb heures TD prévu', 'help' => 'Par défaut rappel de la valeur du PN, mais modifiable si vous ne faite qu\'une partie du module'])
            ->add('tdRealise', FloatType::class, ['label' => 'Nb heures TD réalisé'])
            ->add('tpPrevu', FloatType::class, ['label' => 'Nb heures TP prévu', 'help' => 'Par défaut rappel de la valeur du PN, mais modifiable si vous ne faite qu\'une partie du module'])
            ->add('tpRealise', FloatType::class, ['label' => 'Nb heures TP prévu'])
            ->add('bibliographie', TextareaType::class, [
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('planSuivi', YesNoType::class, [
                'required' => false,
            ])
            ->add('planSuiviCommentaire', TextareaType::class, [
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('objectifsAtteints', YesNoType::class, [
                'required' => false,
            ])
            ->add('objectifsFAtteintsCommentaire', TextareaType::class, [
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('competencesAcquises', YesNoType::class)
            ->add('competencesAcquisesCommentaire', TextareaType::class, [
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('commentaires', TextareaType::class, [
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('modeEvaluationCommentaire', TextareaType::class, [
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PlanCours::class,
        ]);
    }
}
