<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/ApcNiveauType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/04/2024 12:10
 */

namespace App\Form;

use App\Entity\ApcNiveau;
use App\Form\Type\CollectionStimulusType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ApcNiveauType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle')
            ->add('ordre', ChoiceType::class,
                ['choices' => ['B.U.T. 1' => 1, 'B.U.T. 2' => 2, 'B.U.T. 3' => 3], 'expanded' => true])
            ->add('apcApprentissageCritiques', CollectionStimulusType::class, [
                'entry_type' => ApcApprentissageCritiqueType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'prototype' => true,
                'allow_delete' => true,
                'label' => 'Apprentissages critiques du niveau de compétence',
                'by_reference' => false,
                'prototype_name' => '__niveau__',
                'attr' => [
                    'class' => 'selector-apprentissageCritique',
                ],
                'help' => 'Ajoutez les apprentissages critiques du niveau de compétence.',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ApcNiveau::class,
            'translation_domain' => 'form',
        ]);
    }
}
