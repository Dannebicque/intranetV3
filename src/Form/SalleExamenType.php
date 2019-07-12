<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Form/SalleExamenType.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 12/2/18 4:16 PM
 */

namespace App\Form;

use App\Entity\Salle;
use App\Entity\SalleExamen;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SalleExamenType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('salle', EntityType::class, ['class' => Salle::class, 'choice_label' => 'libelle', 'label' => 'libelle.salle'])
            ->add('nbColonnes', TextType::class, ['label' => 'libelle.nbColonnes'])
            ->add('nbRangs', TextType::class, ['label' => 'libelle.nbRangs'])
            ->add('capacite', TextType::class, ['label' => 'libelle.capacite'])
            ->add('placesInterdites', TextareaType::class, ['label' => 'libelle.placesInterdites', 'help' => 'Séparer les places par des ";"'])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => SalleExamen::class,
            'translation_domain' => 'form'
        ]);
    }
}
