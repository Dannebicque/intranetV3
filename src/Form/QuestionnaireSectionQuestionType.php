<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/QuestionnaireSectionQuestionType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 17:36
 */

namespace App\Form;

use App\Entity\QuestionnaireQuestion;
use App\Entity\QuestionnaireSectionQuestion;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionnaireSectionQuestionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('ordre', IntegerType::class, [
                'label' => 'label.ordre_question',
                'help' => 'Ordre de la question dans la section',
            ])
            ->add('question', EntityType::class, [
                'class' => QuestionnaireQuestion::class,
                'choice_label' => 'libelle',
                'label' => 'label.question_choix',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => QuestionnaireSectionQuestion::class,
            'translation_domain' => 'form',
        ]);
    }
}
