<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Form/QuestionnaireQuestionTypeYesNo.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/12/2022 17:19
 */

namespace App\Components\Questionnaire\Form;

use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class QuestionnaireQuestionTypeYesNo extends QuestionnaireQuestionType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        parent::buildForm($builder, $options);

        $builder
            ->addEventListener(FormEvents::PRE_SET_DATA, static function (FormEvent $event) {
                $question = $event->getData();
                $config = $question->getParametre();
                $form = $event->getForm();
                $form->add('libelle_1', TextType::class,
                    [
                        'mapped' => false,
                        'label' => 'label.libelle_1',
                        'help' => 'help.libelle_1',
                        'data' => $config['libelle_1'] ?? 'Oui'
                    ])
                    ->add('valeur_1', TextType::class,
                        [
                            'mapped' => false,
                            'label' => 'label.valeur_1',
                            'help' => 'help.valeur_1',
                            'data' => $config['valeur_1'] ?? 1
                        ])
                    ->add('libelle_2', TextType::class,
                        [
                            'mapped' => false,
                            'label' => 'label.libelle_2',
                            'help' => 'help.libelle_2',
                            'data' => $config['libelle_2'] ?? 'Non'
                        ])
                    ->add('valeur_2', TextType::class,
                        [
                            'mapped' => false,
                            'label' => 'label.valeur_2',
                            'help' => 'help.valeur_2',
                            'data' => $config['valeur_2'] ?? 0
                        ])
                    ->add('choix_autre', CheckboxType::class,
                        [
                            'mapped' => false,
                            'required' => false,
                            'label' => 'label.choix_autre',
                            'help' => 'help.choix_autre',
                            'data' => $config['choix_autre'] ?? false,
                        ])
                    ->add('choix_nc', CheckboxType::class,
                        [
                            'mapped' => false,
                            'required' => false,
                            'label' => 'label.choix_nc',
                            'help' => 'help.choix_nc',
                            'data' => $config['choix_nc'] ?? false,
                        ]);
            })
            ->addEventListener(FormEvents::POST_SUBMIT, static function (FormEvent $event) {
                $question = $event->getData();
                $form = $event->getForm();
                $t = $question->getParametre();
                $t['choix_nc'] = $form->get('choix_nc')->getData();
                $t['choix_autre'] = $form->get('choix_autre')->getData();
                $t['libelle_1'] = $form->get('libelle_1')->getData();
                $t['valeur_1'] = $form->get('valeur_1')->getData();
                $t['libelle_2'] = $form->get('libelle_2')->getData();
                $t['valeur_2'] = $form->get('valeur_2')->getData();
                $question->setParametre($t);
            });
    }
}
