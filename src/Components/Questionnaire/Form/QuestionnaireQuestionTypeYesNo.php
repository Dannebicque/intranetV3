<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Form/QuestionnaireQuestionTypeYesNo.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 17:35
 */

namespace App\Components\Questionnaire\Form;

use App\Entity\QuestionnaireQuestion;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionnaireQuestionTypeYesNo extends QuestionnaireQuestionType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        parent::buildForm($builder, $options);
        $builder
            //->add('parametre', TextType::class)
            ->add('libelle_1', TextType::class,
                ['mapped' => false, 'label' => 'label.libelle_1', 'help' => 'help.libelle_1', 'data' => 'Oui'])
            ->add('valeur_1', TextType::class,
                ['mapped' => false, 'label' => 'label.valeur_1', 'help' => 'help.valeur_1', 'data' => 1])
            ->add('libelle_2', TextType::class,
                ['mapped' => false, 'label' => 'label.libelle_2', 'help' => 'help.libelle_2', 'data' => 'Non'])
            ->add('valeur_2', TextType::class,
                ['mapped' => false, 'label' => 'label.valeur_2', 'help' => 'help.valeur_2', 'data' => 0]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => QuestionnaireQuestion::class,
        ]);
    }
}
