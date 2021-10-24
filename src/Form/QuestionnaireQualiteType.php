<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/QuestionnaireQualiteType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/10/2021 11:05
 */

namespace App\Form;

use App\Entity\QuestionnaireQualite;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionnaireQualiteType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('libelle')
            ->add('dateOuverture')
            ->add('dateFermeture')
            ->add('titre')
            ->add('texteExplication')
            ->add('texteDebut')
            ->add('textFin')
            ->add('uuid')
            ->add('created')
            ->add('updated')
            ->add('semestre');
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => QuestionnaireQualite::class,
        ]);
    }
}
