<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Form/QuestionnaireQuestionTypeEchelle.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/09/2022 16:48
 */

namespace App\Components\Questionnaire\Form;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class QuestionnaireQuestionTypeEchelle extends QuestionnaireQuestionType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        parent::buildForm($builder, $options);
        $builder
            ->addEventListener(FormEvents::PRE_SET_DATA, static function(FormEvent $event) {
                $question = $event->getData();

                $config = $question->getConfiguration();
                $form = $event->getForm();
                $form->add('min', TextType::class,
                    [
                        'mapped' => false,
                        'label' => 'label.question.min',
                        'help' => 'help.question.min',
                        'data' => $config['min'] ?? 0,
                    ])
                    ->add('max', TextType::class,
                        [
                            'mapped' => false,
                            'label' => 'label.question.max',
                            'help' => 'help.question.max',
                            'data' => $config['max'] ?? 10,
                        ])
                    ->add('pas', TextType::class,
                        [
                            'mapped' => false,
                            'label' => 'label.question.pas',
                            'help' => 'help.question.pas',
                            'data' => $config['pas'] ?? 1,
                        ]);
            })
            ->addEventListener(FormEvents::POST_SUBMIT, static function(FormEvent $event) {
                $question = $event->getData();
                $form = $event->getForm();
                $t = $question->getConfiguration();
                $t['min'] = $form->get('min')->getData();
                $t['max'] = $form->get('max')->getData();
                $t['pas'] = $form->get('pas')->getData();
                $question->setConfiguration($t);
            });
    }
}
