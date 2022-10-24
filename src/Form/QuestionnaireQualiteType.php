<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/QuestionnaireQualiteType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 14:55
 */

namespace App\Form;

use App\Entity\QuestionnaireQualite;
use App\Entity\Semestre;
use App\Form\Type\CollectionStimulusType;
use App\Form\Type\DatePickerType;
use App\Form\Type\EntityCompleteType;
use App\Repository\SemestreRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionnaireQualiteType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, [
                'label' => 'label.libelle',
                'help' => 'Libellé court, affiché dans l\'administration',
            ])
            ->add('titre', TextType::class, [
                'label' => 'label.titre',
                'help' => 'Titre du questionnaire affiché aux étudiants',
            ])
            ->add('texteExplication', TextareaType::class, [
                'attr' => ['class' => 'tinyMce', 'rows' => 10],
                'label' => 'label.texteExplication',
                'required' => false,
                'help' => 'Texte d\'explication du questionnaire. Affiché dans la liste des questionnaires.',
            ])
            ->add('texteDebut', TextareaType::class, [
                'attr' => ['class' => 'tinyMce', 'rows' => 10],
                'label' => 'label.texteDebut',
                'required' => false,
                'help' => 'Texte introductif du questionnaire, affiché au début de l\'enquête',
            ])
            ->add('textFin', TextareaType::class, [
                'attr' => ['class' => 'tinyMce', 'rows' => 10],
                'label' => 'label.texteFin',
                'required' => false,
                'help' => 'Texte affiché à la fin du questionnaire, une fois l\'ensemble des sections complétées.',
            ])
            ->add('semestre', EntityCompleteType::class, [
                'label' => 'label.semestre',
                'choice_label' => 'display',
                'class' => Semestre::class,
                'query_builder' => fn (SemestreRepository $semestreRepository) => $semestreRepository->findSemestresActifBuilder(),
                'help' => 'Semestre concerné par l\'enquête.',
            ])
            ->add('dateOuverture', DatePickerType::class, [
                'label' => 'label.dateOuverture',
                'enable_time' => true,
                'required' => false,
                'help' => 'Date d\'ouverture du questionnaire. Peut être complété par la suite.',
            ])
            ->add('dateFermeture', DatePickerType::class, [
                'label' => 'label.dateFermeture',
                'enable_time' => true,
                'required' => false,
                'help' => 'Date de fermeture du questionnaire. Peut être complété par la suite.',
            ])
            ->add('sections', CollectionStimulusType::class, [
                'entry_type' => QuestionnaireQuestionnaireSectionType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'prototype' => true,
                'allow_delete' => true,
                'label' => 'Sections pour le questionnaire',
                'by_reference' => false,
                'max_items' => 0,

                // 'help' => 'Ajoutez les situations professionnelles de la compétence.',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => QuestionnaireQualite::class,
            'translation_domain' => 'form',
        ]);
    }
}
