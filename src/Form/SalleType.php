<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/SalleType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 14:21
 */

namespace App\Form;

use App\Entity\Salle;
use App\Entity\Site;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class SalleType.
 */
class SalleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'libelle'])
            ->add('capacite', TextType::class, ['label' => 'capacite'])
            ->add('type', ChoiceType::class, [
                'choices' => [
                    Salle::SALLE_AMPHI => Salle::SALLE_AMPHI,
                    Salle::SALLE_INFORMATIQUE => Salle::SALLE_INFORMATIQUE,
                    Salle::SALLE_TD => Salle::SALLE_TD,
                    Salle::SALLE_TP => Salle::SALLE_TP,
                ],
                'label' => 'typesalle',
            ])
            ->add('site', EntityType::class, [
                'class' => Site::class,
                'choice_label' => 'libelle',
                'label' => 'site',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Salle::class,
            'translation_domain' => 'form',
        ]);
    }
}
