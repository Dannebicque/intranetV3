<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/AlternanceFicheSuiviType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Form;

use App\Entity\AlternanceFicheSuivi;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AlternanceFicheSuiviType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('date', DateType::class, ['label' => 'Date de l\'entretien'])
            ->add('methode', ChoiceType::class, [
                'label'    => 'Méthode de l\'entretien',
                'choices'  => ['Téléphone' => 't', 'Visite' => 'v'],
                'expanded' => true
            ])
            ->add('missions', TextareaType::class, ['label' => 'Missions', 'attr' => ['rows' => 10]])
            ->add('integration', ChoiceType::class, [
                'label'    => 'Intégration dans l\'entreprise',
                'expanded' => true,
                'choices'  => ['Faible' => 1, 'Bonne' => 2, 'Très Bonne' => 3, 'Excellente' => 4]
            ])
            ->add('initiative', ChoiceType::class, [
                'label'    => 'Prise d\'initiative',
                'expanded' => true,
                'choices'  => ['Faible' => 1, 'Bonne' => 2, 'Très Bonne' => 3, 'Excellente' => 4]
            ])
            ->add('adaptation', ChoiceType::class, [
                'label'    => 'Capacité d\'adaptation',
                'expanded' => true,
                'choices'  => ['Faible' => 1, 'Bonne' => 2, 'Très Bonne' => 3, 'Excellente' => 4]
            ])
            ->add('performance', ChoiceType::class, [
                'label'    => 'Niveau de performances',
                'expanded' => true,
                'choices'  => ['Faible' => 1, 'Bonne' => 2, 'Très Bonne' => 3, 'Excellente' => 4]
            ])
            ->add('delais', ChoiceType::class, [
                'label'    => 'Respect des délais',
                'expanded' => true,
                'choices'  => ['Faible' => 1, 'Bonne' => 2, 'Très Bonne' => 3, 'Excellente' => 4]
            ])
            ->add('comportement', ChoiceType::class, [
                'label'    => 'Comportement de manière globale',
                'expanded' => true,
                'choices'  => ['Faible' => 1, 'Bonne' => 2, 'Très Bonne' => 3, 'Excellente' => 4]
            ])
            ->add('commentaire', TextareaType::class, ['label' => 'Commentaire libre', 'attr' => ['rows' => 10]])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => AlternanceFicheSuivi::class,
        ]);
    }
}
