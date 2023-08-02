<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Form/QuestionnaireQuestionType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/08/2023 13:59
 */

namespace App\Components\Questionnaire\Form;

use App\Entity\QuestQuestion;
use App\Form\Type\YesNoType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

abstract class QuestionnaireQuestionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('type', ChoiceType::class, [
                'translation_domain' => 'form',
                'label' => 'label.type_question',
                'choices' => $options['listeTypeQuestion'],
                'attr' => ['data-action' => 'questionnaire--question#changeTypeQuestion']
            ])
            ->add('libelle', TextareaType::class, [
                'translation_domain' => 'form',
                'label' => 'label.libelle',
                'attr' => ['rows' => 3, 'maxlength' => 255],
            ])
            ->add('help', TextType::class, [
                'label' => 'label.question.help',
                'required' => false,
                'translation_domain' => 'form',
                'help' => 'Texte d\'aide qui sera indiqué avec la question. Exemple signification des valeurs, ...',
            ])
            ->add('obligatoire', YesNoType::class, [
                'label' => 'label.obligatoire',
                'translation_domain' => 'form',
            ]);
//           //todo:ici ou dans type chainée ? ->add('questionParent', EntityCompleteType::class, [
//                'class' => QuestionnaireQuestion::class,
//                'label' => 'label.question_parent',
//                'required' => false,
//                'translation_domain' => 'form',
//                'help' => 'Vous pouvez indiquez une question "parent". Dans ce cas cette question sera située sous la question parent.',
//                'choice_label' => 'libelle',
//            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => QuestQuestion::class,
            'translation_domain' => 'form',
            'listeTypeQuestion' => [],
        ]);
    }
}
