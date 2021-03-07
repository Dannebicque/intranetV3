<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ApcNiveauType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/03/2021 17:33
 */

namespace App\Form;

use App\Entity\ApcNiveau;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ApcNiveauType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('libelle')
            ->add('ordre', ChoiceType::class,
                ['choices' => ['B.U.T. 1' => 1, 'B.U.T. 2' => 2, 'B.U.T. 3' => 3], 'expanded' => true])
            ->add('apcApprentissageCritiques', CollectionType::class, [
                'entry_type' => ApcApprentissageCritiqueType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'prototype' => true,
                'allow_delete' => true,
                'label' => 'Apprentissages critiques du niveau de compétence',
                'by_reference' => false,
                'attr' => [
                    'class' => 'selector-apprentissageCritique',
                ],
                'help' => 'Ajoutez les apprentissages critiques du niveau de compétence.',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ApcNiveau::class,
        ]);
    }
}
