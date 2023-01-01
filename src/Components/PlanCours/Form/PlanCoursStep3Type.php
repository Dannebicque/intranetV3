<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/PlanCours/Form/PlanCoursStep3Type.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/01/2023 15:55
 */

namespace App\Components\PlanCours\Form;

use App\Entity\PlanCours;
use App\Form\Type\FloatType;
use App\Form\Type\YesNoType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PlanCoursStep3Type extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('cmRealise', FloatType::class, ['label' => 'Nb heures CM réalisées :'])
            ->add('tdRealise', FloatType::class, ['label' => 'Nb heures TD réalisées :'])
            ->add('tpRealise', FloatType::class, ['label' => 'Nb heures TP réalisées :'])
            ->add('bibliographie', TextareaType::class, [
                'required' => false,
                'label' => 'Bibliographie/sitographie de référence :',
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('planSuivi', YesNoType::class, [
                'label' => 'Plan de cours suivi comme prévu ?',
                'required' => true,
            ])
            ->add('planSuiviCommentaire', TextareaType::class, [
                'label' => 'Commentaire libre sur le suivi du plan de cours :',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('objectifsAtteints', YesNoType::class, [
                'label' => 'Objectifs pédagogiques atteints ?',
                'required' => true,
            ])
            ->add('objectifsFAtteintsCommentaire', TextareaType::class, [
                'label' => 'Commentaire libre sur les objectifs pédagogiques :',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('competencesAcquises', YesNoType::class, [
                'label' => 'Compétences acquises ?',
                'required' => true,
            ])
            ->add('competencesAcquisesCommentaire', TextareaType::class, [
                'required' => false,
                'label' => 'Commentaire libre sur les compétences acquises :',
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('commentaires_step3', TextareaType::class, [
                'label' => 'Commentaire libre :',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ])
            ->add('modeEvaluationCommentaire', TextareaType::class, [
                'label' => 'Commentaire libre sur le mode d\'évaluation :',
                'required' => false,
                'attr' => ['rows' => 10, 'class' => 'tinyMce'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PlanCours::class,
            'anneeUniversitaire' => null,
            'previsionnel' => null,
        ]);
    }
}
