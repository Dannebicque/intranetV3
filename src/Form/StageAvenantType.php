<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/StageAvenantType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Form;

use App\Entity\StageAvenant;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StageAvenantType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nouvelleDateFin', DateType::class, [
                'required' => false,
                'label'    => 'nouvelleDateFin',
                'format'   => 'dd/MM/yyyy',
                'widget'   => 'single_text',
                'html5'    => false,

                'attr' => [
                    'placeholder'   => 'Saisir une date...',
                    'data-provide'  => 'datepicker',
                    'data-language' => 'fr',
                    'class'         => 'col-sm-3',
                ],
            ])
            ->add('nouvelleDureeJour', TextType::class, [
                'required' => false,
                'label'    => 'nouvelleDureeJour',

                'attr' => ['placeholder' => 'Saisir un nombre de jour...', 'class' => 'col-sm-3'],
            ])
            ->add('dateDebutAbsence', DateType::class, [
                'required' => false,
                'label'    => 'dateDebutAbsence',
                'format'   => 'dd/MM/yyyy',
                'widget'   => 'single_text',
                'html5'    => false,

                'attr' => [
                    'placeholder'   => 'Saisir une date...',
                    'data-provide'  => 'datepicker',
                    'data-language' => 'fr',
                    'class'         => 'col-sm-3',
                ],
            ])
            ->add('dateDebutSuspension', DateType::class, [
                'required' => false,
                'label'    => 'dateDebutSuspension',
                'format'   => 'dd/MM/yyyy',
                'widget'   => 'single_text',
                'html5'    => false,

                'attr' => [
                    'placeholder'   => 'Saisir une date...',
                    'data-provide'  => 'datepicker',
                    'data-language' => 'fr',
                    'class'         => 'col-sm-3',
                ],
            ])
            ->add('dateFinAbsence', DateType::class, [
                'required' => false,
                'label'    => 'dateFinAbsence',
                'format'   => 'dd/MM/yyyy',
                'widget'   => 'single_text',
                'html5'    => false,

                'attr' => [
                    'placeholder'   => 'Saisir une date...',
                    'data-provide'  => 'datepicker',
                    'data-language' => 'fr',
                    'class'         => 'col-sm-3',
                ],
            ])
            ->add('dateFinSuspension', DateType::class, [
                'required' => false,
                'label'    => 'dateFinSuspension',
                'format'   => 'dd/MM/yyyy',
                'widget'   => 'single_text',
                'html5'    => false,

                'attr' => [
                    'placeholder'   => 'Saisir une date...',
                    'data-provide'  => 'datepicker',
                    'data-language' => 'fr',
                    'class'         => 'col-sm-3',
                ],
            ])
            ->add('dateRepriseStage', DateType::class, [
                'required' => false,
                'label'    => 'dateRepriseStage',
                'format'   => 'dd/MM/yyyy',
                'widget'   => 'single_text',
                'html5'    => false,
                'attr'     => [
                    'placeholder'   => 'Saisir une date...',
                    'data-provide'  => 'datepicker',
                    'data-language' => 'fr',
                    'class'         => 'col-sm-3',
                ],
            ])
            ->add('dateInterruption', DateType::class, [
                'required' => false,
                'label'    => 'dateInterruption',
                'format'   => 'dd/MM/yyyy',
                'widget'   => 'single_text',
                'html5'    => false,
                'attr'     => [
                    'placeholder'   => 'Saisir une date...',
                    'data-provide'  => 'datepicker',
                    'data-language' => 'fr',
                    'class'         => 'col-sm-3',
                ],
            ])
            ->add('nouvelleAdresse', AdresseType::class, ['required' => false, 'label' => 'nouvelleAdresse']);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class'         => StageAvenant::class,
            'translation_domain' => 'form',
        ]);
    }
}
