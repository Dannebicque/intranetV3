<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Form/QuizzQuestionType.php
// @author     David Annebicque
// @project intranetv3
// @date 28/11/2019 14:27
// @lastUpdate 27/11/2019 12:53

namespace App\Form;

use App\Entity\QuizzQuestion;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuizzQuestionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('help', TextType::class, ['label' => 'label.question.help', 'required' => false])
            ->add('type', ChoiceType::class,
                [
                    'expanded' => true,
                    'multiple' => false,
                    'choices'  => QuizzQuestion::LISTE_TYPE_QUESTION,
                    'help'     => 'texte d\'aide'
                ]);
    }


    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => QuizzQuestion::class,
        ]);
    }
}
