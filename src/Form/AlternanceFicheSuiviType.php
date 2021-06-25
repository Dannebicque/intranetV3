<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/AlternanceFicheSuiviType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/06/2021 10:28
 */

namespace App\Form;

use App\Entity\AlternanceFicheSuivi;
use App\Form\Type\CarbonDateType;
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
            ->add('date', CarbonDateType::class, ['label' => 'date_entretien'])
            ->add('methode', ChoiceType::class, [
                'label' => 'methode_entretien',
                'choices' => [
                    'telephone' => AlternanceFicheSuivi::VISITE_TELEPHONIQUE,
                    'visite' => AlternanceFicheSuivi::VISITE_PHYSIQUE
                ],
                'expanded' => true,
            ])
            ->add('missions', TextareaType::class, ['label' => 'missions', 'attr' => ['rows' => 10]])
            ->add('integration', ChoiceType::class, [
                'label' => 'integration_entreprise',
                'expanded' => true,
                'choices' => ['faible' => 1, 'bonne' => 2, 'tres_bonne' => 3, 'excellente' => 4],
            ])
            ->add('initiative', ChoiceType::class, [
                'label' => 'prise_initiative',
                'expanded' => true,
                'choices' => ['faible' => 1, 'bonne' => 2, 'tres_bonne' => 3, 'excellente' => 4],
            ])
            ->add('adaptation', ChoiceType::class, [
                'label' => 'capacite_adaptation',
                'expanded' => true,
                'choices' => ['faible' => 1, 'bonne' => 2, 'tres_bonne' => 3, 'excellente' => 4],
            ])
            ->add('performance', ChoiceType::class, [
                'label' => 'niveau_performance',
                'expanded' => true,
                'choices' => ['faible' => 1, 'bonne' => 2, 'tres_bonne' => 3, 'excellente' => 4],
            ])
            ->add('delais', ChoiceType::class, [
                'label' => 'respect_delais',
                'expanded' => true,
                'choices' => ['faible' => 1, 'bonne' => 2, 'tres_bonne' => 3, 'excellente' => 4],
            ])
            ->add('comportement', ChoiceType::class, [
                'label' => 'comportement_maniere_globale',
                'expanded' => true,
                'choices' => ['faible' => 1, 'bonne' => 2, 'tres_bonne' => 3, 'excellente' => 4],
            ])
            ->add('commentaire', TextareaType::class, ['label' => 'commentaire_libre', 'attr' => ['rows' => 10]])
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
