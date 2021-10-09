<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/QuestionnaireQuestionType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/10/2021 11:05
 */

namespace App\Form;

use App\Entity\QuestionnaireQuestion;
use App\Form\Type\YesNoType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionnaireQuestionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'libelle'])
            ->add('help', TextType::class, ['label' => 'question.help', 'required' => false])
            ->add('type', ChoiceType::class,
                [
                    'expanded' => true,
                    'multiple' => false,
                    'choices' => QuestionnaireQuestion::LISTE_TYPE_QUESTION,
                    'help' => 'texte d\'aide',
                ])
            ->add('obligatoire', YesNoType::class)
            //todo: gérer les options
//            ->add('alignement')
//            ->add('parametre')
            // ->add('questionParent')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => QuestionnaireQuestion::class,
        ]);
    }
}
