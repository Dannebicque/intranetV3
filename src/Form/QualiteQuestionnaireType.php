<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/QualiteQuestionnaireType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 14:21
 */

namespace App\Form;

use App\Entity\QuestionnaireQualite;
use App\Entity\Semestre;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\Entity2Type;

class QualiteQuestionnaireType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('semestre', Entity2Type::class, [
                'label' => 'semestre',
                'help' => 'help.semestre.enquete',
                'class' => Semestre::class,
                'choice_label' => 'display',
            ])
            ->add('libelle', TextType::class, ['label' => 'libelle', 'help' => 'help.libelle.enquete'])
            ->add('titre', TextType::class, ['label' => 'titre', 'help' => 'help.titre.enquete'])
            ->add('texteExplication', TextareaType::class,
                ['label' => 'texteExplication', 'help' => 'help.texteExplication.enquete'])
            ->add('dateOuverture', DateTimeType::class,
                ['label' => 'dateOuverture', 'help' => 'help.dateOuverture.enquete'])
            ->add('dateFermeture', DateTimeType::class,
                ['label' => 'dateFermeture', 'help' => 'help.dateFermeture.enquete']);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => QuestionnaireQualite::class,
            'translation_domain' => 'form',
        ]);
    }
}
