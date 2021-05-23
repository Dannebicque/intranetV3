<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/StageAvenantType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/05/2021 18:24
 */

namespace App\Form;

use App\Entity\StageAvenant;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\DatepickerType;

class StageAvenantType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nouvelleDateFin', DatepickerType::class, [
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
            ->add('dateDebutAbsence', DatepickerType::class, [
                'required' => false,
                'label' => 'dateDebutAbsence',
                'attr' => [
                    'placeholder' => 'Saisir une date...',
                    'data-language' => 'fr',
                    'class' => 'col-sm-3',
                ],
            ])
            ->add('dateDebutSuspension', DatepickerType::class, [
                'required' => false,
                'label' => 'dateDebutSuspension',
                'attr' => [
                    'placeholder' => 'Saisir une date...',
                    'data-language' => 'fr',
                    'class' => 'col-sm-3',
                ],
            ])
            ->add('dateFinAbsence', DatepickerType::class, [
                'required' => false,
                'label' => 'dateFinAbsence',
                'attr' => [
                    'placeholder' => 'Saisir une date...',
                    'data-language' => 'fr',
                    'class' => 'col-sm-3',
                ],
            ])
            ->add('dateFinSuspension', DatepickerType::class, [
                'required' => false,
                'label' => 'dateFinSuspension',
                'attr' => [
                    'placeholder' => 'Saisir une date...',
                    'data-language' => 'fr',
                    'class' => 'col-sm-3',
                ],
            ])
            ->add('dateRepriseStage', DatepickerType::class, [
                'required' => false,
                'label' => 'dateRepriseStage',
                'attr' => [
                    'placeholder' => 'Saisir une date...',
                    'data-language' => 'fr',
                    'class' => 'col-sm-3',
                ],
            ])
            ->add('dateInterruption', DatepickerType::class, [
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
