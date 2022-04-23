<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Form/QuestionnaireQuestionTypeEchelle.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 17:35
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
            ->addEventListener(FormEvents::PRE_SET_DATA, static function (FormEvent $event) {
                $question = $event->getData();
                $config = $question->getConfiguration();
                $form = $event->getForm();
                $form->add('min', TextType::class,
                    ['mapped' => false, 'label' => 'label.question.min', 'help' => 'help.question.min', 'data' => $config['min']])
                    ->add('max', TextType::class,
                        ['mapped' => false, 'label' => 'label.question.max', 'help' => 'help.question.max', 'data' => $config['max']])
                    ->add('pas', TextType::class,
                        ['mapped' => false, 'label' => 'label.question.pas', 'help' => 'help.question.pas', 'data' => $config['pas']]);
            })
            ->addEventListener(FormEvents::POST_SUBMIT, static function (FormEvent $event) {
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
