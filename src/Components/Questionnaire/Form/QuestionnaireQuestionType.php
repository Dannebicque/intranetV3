<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Form/QuestionnaireQuestionType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/09/2022 08:17
 */

namespace App\Components\Questionnaire\Form;

use App\Entity\QuestionnaireQuestion;
use App\Entity\QuestionnaireQuestionTag;
use App\Form\Type\EntityCompleteType;
use App\Form\Type\YesNoType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

abstract class QuestionnaireQuestionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, [
                'translation_domain' => 'form',
                'label' => 'label.libelle',
            ])
            ->add('questionnaireQuestionTags', EntityCompleteType::class, [
                'label' => 'label.questionnaireQuestionTags',
                'multiple' => true,
                'required' => false,
                'translation_domain' => 'form',
                'class' => QuestionnaireQuestionTag::class,
                'help' => 'Choisissez un ou plusieurs tag pour retrouver les questions plus facilement',
                'choice_label' => 'libelle',
            ])
            ->add('newQuestionnaireQuestionTags', TextType::class, [
                'label' => 'label.newQuestionnaireQuestionTags',
                'mapped' => false,
                'required' => false,
                'translation_domain' => 'form',
                'help' => 'Si un tag n\'existe pas, vous pouvez les ajouter ici. Séparer par un ";" (point-virgule)',
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
            'data_class' => QuestionnaireQuestion::class,
            'translation_domain' => 'form',
        ]);
    }
}
