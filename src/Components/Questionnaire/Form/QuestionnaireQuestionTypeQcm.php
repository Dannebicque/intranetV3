<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Form/QuestionnaireQuestionTypeQcm.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:23
 */

namespace App\Components\Questionnaire\Form;

use App\Form\QuestionnaireReponseType;
use App\Form\Type\CollectionStimulusType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class QuestionnaireQuestionTypeQcm extends QuestionnaireQuestionType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        parent::buildForm($builder, $options);
        $builder
            ->add('questReponses', CollectionStimulusType::class, [
                'entry_type' => QuestionnaireReponseType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'prototype' => true,
                'allow_delete' => true,
                'label' => 'Réponses pour la question',
                'by_reference' => false,
                'max_items' => 0,
            ])
            ->addEventListener(FormEvents::PRE_SET_DATA, static function(FormEvent $event) {
                $question = $event->getData();

                $config = $question->getParametre();
                $form = $event->getForm();
                $form
                    ->add('maxChoix', IntegerType::class, [
                        'mapped' => false,
                        'label' => 'label.maxChoix',
                        'help' => 'Indiquez un nombre maximum de réponses acceptées. Laisser 0 si pas de limite.',
                        'data' => $config['maxChoix'] ?? 0,
                    ]);
            })
            ->addEventListener(FormEvents::POST_SUBMIT, static function(FormEvent $event) {
                $question = $event->getData();
                $form = $event->getForm();
                $t = $question->getParametre();
                $t['maxChoix'] = $form->get('maxChoix')->getData();
                $question->setParametre($t);
            });
    }

}
