<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/QuestionnaireQuestionnaireSectionType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 17:36
 */

namespace App\Form;

use App\Entity\QuestionnaireQuestionnaireSection;
use App\Entity\QuestionnaireSection;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionnaireQuestionnaireSectionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('ordre', IntegerType::class, [
                'label' => 'label.ordre',
            ])
            ->add('section', EntityType::class, [
                'class' => QuestionnaireSection::class,
                'choice_label' => 'titre',
                'label' => 'label.section',
            ])
           // ->add('config')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => QuestionnaireQuestionnaireSection::class,
            'translation_domain' => 'form',
        ]);
    }
}
