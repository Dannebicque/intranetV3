<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/StageAvenantType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 11:45
 */

namespace App\Form;

use App\Entity\StageAvenant;
use App\Form\Type\CarbonDateTimePickerType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StageAvenantType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nouvelleDateFin', CarbonDateTimePickerType::class, [
                'required' => false,
                'label' => 'nouvelleDateFin',
                'attr' => [
                    'placeholder' => 'Saisir une date...',
                    'data-language' => 'fr',
                    'class' => 'col-sm-3',
                ],
            ])
            ->add('nouvelleDureeJour', TextType::class, [
                'required' => false,
                'label' => 'nouvelleDureeJour',

                'attr' => ['placeholder' => 'Saisir un nombre de jour...', 'class' => 'col-sm-3'],
            ])
            ->add('dateDebutAbsence', CarbonDateTimePickerType::class, [
                'required' => false,
                'label' => 'dateDebutAbsence',
                'attr' => [
                    'placeholder' => 'Saisir une date...',
                    'data-language' => 'fr',
                    'class' => 'col-sm-3',
                ],
            ])
            ->add('dateDebutSuspension', CarbonDateTimePickerType::class, [
                'required' => false,
                'label' => 'dateDebutSuspension',
                'attr' => [
                    'placeholder' => 'Saisir une date...',
                    'data-language' => 'fr',
                    'class' => 'col-sm-3',
                ],
            ])
            ->add('dateFinAbsence', CarbonDateTimePickerType::class, [
                'required' => false,
                'label' => 'dateFinAbsence',
                'attr' => [
                    'placeholder' => 'Saisir une date...',
                    'data-language' => 'fr',
                    'class' => 'col-sm-3',
                ],
            ])
            ->add('dateFinSuspension', CarbonDateTimePickerType::class, [
                'required' => false,
                'label' => 'dateFinSuspension',
                'attr' => [
                    'placeholder' => 'Saisir une date...',
                    'data-language' => 'fr',
                    'class' => 'col-sm-3',
                ],
            ])
            ->add('dateRepriseStage', CarbonDateTimePickerType::class, [
                'required' => false,
                'label' => 'dateRepriseStage',
                'attr' => [
                    'placeholder' => 'Saisir une date...',
                    'data-language' => 'fr',
                    'class' => 'col-sm-3',
                ],
            ])
            ->add('dateInterruption', CarbonDateTimePickerType::class, [
                'required' => false,
                'label' => 'dateInterruption',
                'attr' => [
                    'placeholder' => 'Saisir une date...',
                    'data-language' => 'fr',
                    'class' => 'col-sm-3',
                ],
            ])
            ->add('nouvelleAdresse', AdresseType::class, ['required' => false, 'label' => 'nouvelleAdresse']);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => StageAvenant::class,
            'translation_domain' => 'form',
        ]);
    }
}
