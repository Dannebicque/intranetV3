<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/QuestionnaireSectionType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 17:36
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
    private array $listeSection;
    private array $listeSectionAdapter;

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->listeSection = $options['listeSection'];
        $this->listeSectionAdapter = $options['listeSectionAdapter'];
        $builder
            ->add('titre', TextType::class, [
                'label' => 'label.titre'
            ])
            ->add('textExplicatif', TextareaType::class, [
                'label' => 'label.text_explicatif',
                'help' => 'Texte introductif de la section, affiché en début de page',
                'required' => false
            ])
            ->add('typeSection', ChoiceType::class, [
                'choices' => $this->listeSection,
                'label' => 'label.typeSection',
                'expanded' => true,
            ])
            ->add('sectionAdapter', ChoiceType::class, [
                'choices' => $this->listeSectionAdapter,
                'label' => 'label.sectionAdapter',
                'expanded' => true,
                'mapped' => false
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

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => QuestionnaireSection::class,
            'listeSection' => null,
            'listeSectionAdapter' => null

        ]);
    }
}
