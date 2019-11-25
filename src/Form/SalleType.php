<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Form/SalleType.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

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
 * Class SalleType
 * @package App\Form
 */
class SalleType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('capacite', TextType::class, ['label' => 'label.capacite'])
            ->add('type', ChoiceType::class, [
                'choices' => [
                    Salle::SALLE_AMPHI        => Salle::SALLE_AMPHI,
                    Salle::SALLE_INFORMATIQUE => Salle::SALLE_INFORMATIQUE,
                    Salle::SALLE_TD           => Salle::SALLE_TD,
                    Salle::SALLE_TP           => Salle::SALLE_TP
                ],
                'label'   => 'label.typesalle'
            ])
            ->add('site', EntityType::class, [
                'class'        => Site::class,
                'choice_label' => 'libelle',
                'label'        => 'label.site'
            ]);
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Salle::class,
        ]);
    }
}
