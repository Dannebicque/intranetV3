<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Form/TypeHrsType.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Form;

use App\Entity\TypeHrs;
use App\Form\Type\YesNoType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class TypeHrsType
 * @package App\Form
 */
class TypeHrsType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('incluService', YesNoType::class, [
                'label' => 'label.incluService'
            ])
            ->add('type', ChoiceType::class, [
                'label'                     => 'label.typehrs',
                'choices'                   => [
                    'choice.hrs'   => 'HRS',
                    'choice.pca'   => 'PCA',
                    'choice.prp'   => 'PRP',
                    'choice.suivi' => 'Suivi',
                    'choice.autre' => 'Autre'
                ],
                'choice_translation_domain' => 'form',
                'expanded'                  => true
            ])
            ->add('maximum', TextType::class, ['label' => 'label.maximum']);
    }

    /**
     * @param OptionsResolver $resolver
     *
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => TypeHrs::class,
            'translation_domain' => 'form'

        ]);
    }
}
