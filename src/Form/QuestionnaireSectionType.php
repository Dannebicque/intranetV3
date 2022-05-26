<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/QuestionnaireSectionType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 11:38
 */

namespace App\Form;

use App\Entity\QuestionnaireSection;
use App\Form\Type\CollectionStimulusType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionnaireSectionType extends AbstractType
{
    // todo: ConfigurableSection doit être un type de section... sinon comment créer la section ?

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $listeSection = $options['listeSection'];
        $listeSectionAdapter = $options['listeSectionAdapter'];
        $builder
            ->add('titre', TextType::class, [
                'label' => 'label.titre',
            ])
            ->add('textExplicatif', TextareaType::class, [
                'label' => 'label.text_explicatif',
                'help' => 'Texte introductif de la section, affiché en début de page',
                'required' => false,
            ])
            ->add('typeSection', ChoiceType::class, [
                'choices' => $listeSection,
                'label' => 'label.typeSection',
                'expanded' => true,
            ])
            ->add('sectionAdapter', ChoiceType::class, [
                'choices' => $listeSectionAdapter,
                'label' => 'label.sectionAdapter',
                'required' => false,
                'expanded' => true,
                'mapped' => false,
            ])
            ->add('qualiteSectionQuestions', CollectionStimulusType::class, [
                'entry_type' => QuestionnaireSectionQuestionType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'prototype' => true,
                'allow_delete' => true,
                'label' => 'Questions pour la question',
                'by_reference' => false,
                'max_items' => 0,
                'help' => 'Il est possible d\'ajouter les questions plus tard',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => QuestionnaireSection::class,
            'listeSection' => null,
            'listeSectionAdapter' => null,
            'translation_domain' => 'form',
        ]);
    }
}
