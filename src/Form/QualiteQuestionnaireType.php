<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Form/QualiteQuestionnaireType.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Form;

use App\Entity\QualiteQuestionnaire;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QualiteQuestionnaireType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options) : void
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle', 'help' => 'help.libelle.enquete'])
            ->add('titre', TextType::class, ['label' => 'label.titre', 'help' => 'help.titre.enquete'])
            ->add('texteExplication', TextareaType::class, ['label' => 'label.texteExplication', 'help' => 'help.texteExplication.enquete'])
            ->add('dateOuverture', DateTimeType::class, ['label' => 'label.dateOuverture', 'help' => 'help.dateOuverture.enquete'])
            ->add('dateFermeture', DateTimeType::class, ['label' => 'label.dateFermeture', 'help' => 'help.dateFermeture.enquete']);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => QualiteQuestionnaire::class,
            'translation_domain' => 'form'
        ]);
    }
}
