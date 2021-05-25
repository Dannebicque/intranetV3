<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/QuizzQuestionType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/05/2021 18:35
 */

namespace App\Form;

use App\Entity\QuestionnaireQuestion;
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
            ->add('libelle', TextType::class, ['label' => 'libelle'])
            ->add('help', TextType::class, ['label' => 'question.help', 'required' => false])
            ->add('type', ChoiceType::class,
                [
                    'expanded' => true,
                    'multiple' => false,
                    'choices'  => QuestionnaireQuestion::LISTE_TYPE_QUESTION,
                    'help'     => 'texte d\'aide',
                ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => QuestionnaireQuestion::class,
        ]);
    }
}
