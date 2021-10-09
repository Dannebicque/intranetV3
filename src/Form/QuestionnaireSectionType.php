<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/QuestionnaireSectionType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/10/2021 11:05
 */

namespace App\Form;

use App\Entity\QuestionnaireSection;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionnaireSectionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('titre')
            ->add('textExplicatif')
            ->add('config')
            ->add('typeCalcul')
            ->add('created')
            ->add('updated');
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => QuestionnaireSection::class,
        ]);
    }
}
