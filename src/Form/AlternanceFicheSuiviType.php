<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/AlternanceFicheSuiviType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:29
 */

namespace App\Form;

use App\Entity\AbstractFicheSuivi;
use App\Entity\AlternanceFicheSuivi;
use App\Form\Type\DatePickerType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AlternanceFicheSuiviType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('date', DatePickerType::class, ['label' => 'label.date_entretien'])
            ->add('methode', ChoiceType::class, [
                'label' => 'label.methode_entretien',
                'choices' => [
                    'telephone' => AbstractFicheSuivi::VISITE_TELEPHONIQUE,
                    'visite' => AbstractFicheSuivi::VISITE_PHYSIQUE,
                ],
                'expanded' => true,
            ])
            ->add('missions', TextareaType::class, ['label' => 'label.missions', 'attr' => ['rows' => 10]])
            ->add('integration', ChoiceType::class, [
                'label' => 'label.integration_entreprise',
                'expanded' => true,
                'choices' => ['label.faible' => 1, 'label.bonne' => 2, 'label.tres_bonne' => 3, 'label.excellente' => 4, 'Non applicable' => 0],
            ])
            ->add('initiative', ChoiceType::class, [
                'label' => 'label.prise_initiative',
                'expanded' => true,
                'choices' => ['label.faible' => 1, 'label.bonne' => 2, 'label.tres_bonne' => 3, 'label.excellente' => 4, 'Non applicable' => 0],
            ])
            ->add('adaptation', ChoiceType::class, [
                'label' => 'label.capacite_adaptation',
                'expanded' => true,
                'choices' => ['label.faible' => 1, 'label.bonne' => 2, 'label.tres_bonne' => 3, 'label.excellente' => 4, 'Non applicable' => 0],
            ])
            ->add('performance', ChoiceType::class, [
                'label' => 'label.niveau_performance',
                'expanded' => true,
                'choices' => ['label.faible' => 1, 'label.bonne' => 2, 'label.tres_bonne' => 3, 'label.excellente' => 4, 'Non applicable' => 0],
            ])
            ->add('delais', ChoiceType::class, [
                'label' => 'label.respect_delais',
                'expanded' => true,
                'choices' => ['label.faible' => 1, 'label.bonne' => 2, 'label.tres_bonne' => 3, 'label.excellente' => 4, 'Non applicable' => 0],
            ])
            ->add('comportement', ChoiceType::class, [
                'label' => 'label.comportement_maniere_globale',
                'expanded' => true,
                'choices' => ['label.faible' => 1, 'label.bonne' => 2, 'label.tres_bonne' => 3, 'label.excellente' => 4, 'Non applicable' => 0],
            ])
            ->add('commentaire', TextareaType::class, ['label' => 'label.commentaire_libre', 'attr' => ['rows' => 10]])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => AlternanceFicheSuivi::class,
            'translation_domain' => 'form',
        ]);
    }
}
