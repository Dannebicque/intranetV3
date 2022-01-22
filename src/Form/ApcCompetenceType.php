<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ApcCompetenceType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/03/2021 17:26
 */

namespace App\Form;

use App\Entity\ApcCompetence;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ApcCompetenceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom_court', TextType::class, ['help' => 'Mot désignant la compétence'])
            ->add('libelle', TextType::class, ['help' => 'Libellé long de la compétence'])
            ->add('couleur', ChoiceType::class, [
                'choices' => [
                    'Rouge' => 'c1',
                    'Orange' => 'c2',
                    'Jaune' => 'c3',
                    'Vert' => 'c4',
                    'Bleu' => 'c5',
                    'Violet' => 'c6',
                ],
                'expanded' => true,
            ])
            ->add('apcSituationProfessionnelles', CollectionType::class, [
                'entry_type' => ApcSituationProfessionnelleType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'prototype' => true,
                'allow_delete' => true,
                'label' => 'Situations professionnelles de la compétence',
                'by_reference' => false,
                'attr' => [
                    'class' => 'selector-niveauSituationsProfessionnelles',
                ],
                'help' => 'Ajoutez les situations professionnelles de la compétence.',
            ])
            ->add('apcComposanteEssentielles', CollectionType::class, [
                'entry_type' => ApcComposanteEssentielleType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'prototype' => true,
                'allow_delete' => true,
                'label' => 'Composantes essentielles de la compétence',
                'by_reference' => false,
                'attr' => [
                    'class' => 'selector-niveauComposanteEssentielles',
                ],
                'help' => 'Ajoutez les composantes essentielles de la compétence.',
            ])
            ->add('apcNiveaux', CollectionType::class, [
                'entry_type' => ApcNiveauType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'prototype' => true,
                'allow_delete' => true,
                'label' => 'Niveaux de la compétence',
                'by_reference' => false,
                'attr' => [
                    'class' => 'selector-niveauCompetence',
                ],
                'help' => 'Ajoutez les niveaux de la compétence.',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ApcCompetence::class,
            'translation_domain' => 'form',
        ]);
    }
}
