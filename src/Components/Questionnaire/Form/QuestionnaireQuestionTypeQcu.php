<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Form/QuestionnaireQuestionTypeQcu.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/05/2022 14:37
 */

namespace App\Components\Questionnaire\Form;

use App\Entity\QuestionnaireQuestion;
use App\Form\QuestionnaireReponseType;
use App\Form\Type\CollectionStimulusType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionnaireQuestionTypeQcu extends QuestionnaireQuestionType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        parent::buildForm($builder, $options);
        $builder
            // ->add('parametre', TextType::class)
            ->add('quizzReponses', CollectionStimulusType::class, [
                'entry_type' => QuestionnaireReponseType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'prototype' => true,
                'allow_delete' => true,
                'label' => 'Réponses pour la question',
                'by_reference' => false,
                'max_items' => 0,

                // 'help' => 'Ajoutez les situations professionnelles de la compétence.',
            ]);
    }
}
