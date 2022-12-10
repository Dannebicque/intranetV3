<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Form/QuestionnaireQuestionTypeQcu.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:23
 */

namespace App\Components\Questionnaire\Form;

use App\Form\QuestionnaireReponseType;
use App\Form\Type\CollectionStimulusType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class QuestionnaireQuestionTypeQcu extends QuestionnaireQuestionType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        parent::buildForm($builder, $options);
        $builder
            ->addEventListener(FormEvents::PRE_SET_DATA, static function(FormEvent $event) {
                $question = $event->getData();

                $config = $question->getParametre();
                $form = $event->getForm();
                $form->add('choix_autre', CheckboxType::class,
                    [
                        'mapped' => false,
                        'label' => 'label.choix_autre',
                        'help' => 'help.choix_autre',
                        'data' => $config['choix_autre'] ?? false,
                    ])
                    ->add('choix_nc', CheckboxType::class,
                        [
                            'mapped' => false,
                            'label' => 'label.choix_nc',
                            'help' => 'help.choix_nc',
                            'data' => $config['choix_nc'] ?? false,
                        ]);
            })
            ->addEventListener(FormEvents::POST_SUBMIT, static function(FormEvent $event) {
                $question = $event->getData();
                $form = $event->getForm();
                $t = $question->getParametre();
                $t['choix_nc'] = $form->get('choix_nc')->getData();
                $t['choix_autre'] = $form->get('choix_autre')->getData();
                $question->setParametre($t);
            })
            ->add('questReponses', CollectionStimulusType::class, [
                'entry_type' => QuestionnaireReponseType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'prototype' => true,
                'allow_delete' => true,
                'label' => 'Réponses pour la question',
                'by_reference' => false,
                'max_items' => 0,
            ]);
    }
}
