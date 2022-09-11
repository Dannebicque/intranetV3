<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Form/QuestionnaireQuestionTypeYesNo.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/09/2022 16:46
 */

namespace App\Components\Questionnaire\Form;

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
                $config = $question->getConfiguration();
                $form = $event->getForm();
                $form->add('libelle_1', TextType::class,
                    ['mapped' => false, 'label' => 'label.libelle_1', 'help' => 'help.libelle_1', 'data' => $config['libelle_1'] ?? 'Oui'])
                    ->add('valeur_1', TextType::class,
                        ['mapped' => false, 'label' => 'label.valeur_1', 'help' => 'help.valeur_1', 'data' => $config['valeur_1'] ?? 1])
                    ->add('libelle_2', TextType::class,
                        ['mapped' => false, 'label' => 'label.libelle_2', 'help' => 'help.libelle_2', 'data' => $config['libelle_2'] ?? 'Non'])
                    ->add('valeur_2', TextType::class,
                        ['mapped' => false, 'label' => 'label.valeur_2', 'help' => 'help.valeur_2', 'data' => $config['valeur_2'] ?? 0]);
            })
            ->addEventListener(FormEvents::POST_SUBMIT, static function (FormEvent $event) {
                $question = $event->getData();
                $form = $event->getForm();
                $t = $question->getConfiguration();
                $t['libelle_1'] = $form->get('libelle_1')->getData();
                $t['valeur_1'] = $form->get('valeur_1')->getData();
                $t['libelle_2'] = $form->get('libelle_2')->getData();
                $t['valeur_2'] = $form->get('valeur_2')->getData();
                $question->setConfiguration($t);
            });
        // ->add('parametre', TextType::class)
    }
}
