<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/PersonnelProfilType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/09/2021 21:26
 */

namespace App\Form;

use App\Entity\Personnel;
use App\Form\Type\CiviliteType;
use App\Form\Type\DatePickerType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

/**
 * Class PersonnelProfilType.
 */
class PersonnelProfilType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $locale = $options['locale'];

        $builder
            ->add('civilite', CiviliteType::class, [
                'label' => 'civilite',
            ])
            ->add('nom', TextType::class, ['label' => 'nom'])
            ->add('prenom', TextType::class, ['label' => 'prenom'])
            ->add('mail_univ', TextType::class, ['label' => 'mail_univ', 'disabled' => true])
            ->add('site_univ', TextType::class, ['label' => 'site_univ', 'required' => false])
            ->add('mail_perso', TextType::class, ['label' => 'mail_perso', 'required' => false])
            ->add('site_perso', TextType::class, ['label' => 'site_perso', 'required' => false])
            ->add('date_naissance', DatePickerType::class, [
                'label' => 'date_naissance',
                'attr' => ['data-options' => ['locale' => $locale]],
            ])
            ->add(
                'numero_harpege',
                TextType::class,
                ['label' => 'numero_harpege', 'disabled' => true, 'help' => 'Si erreur contacté les RH']
            )
            ->add('statut', ChoiceType::class, [
                'label' => 'statut',
                'choices' => [
                    'choice.mcf' => 'MCF',
                    'choice.pr' => 'PU',
                    'choice.prag' => 'PRAG',
                    'choice.prce' => 'PRCE',
                    'choice.vacataire' => 'PRO',
                ],
                'choice_translation_domain' => 'form',
                'expanded' => true,
            ])
            ->add('poste_interne', TextType::class, ['label' => 'poste_interne', 'required' => false])
            ->add('tel_bureau', TextType::class, ['label' => 'tel_bureau', 'required' => false])
            ->add('tel1', TextType::class, ['label' => 'tel1', 'required' => false])
            ->add('tel2', TextType::class, ['label' => 'tel2', 'required' => false])
            ->add('responsabilites', TextareaType::class, ['label' => 'responsabilites', 'required' => false])
            ->add('domaines', TextareaType::class, ['label' => 'domaines', 'required' => false])
            ->add('remarque', TextareaType::class, ['label' => 'remarque', 'required' => false])
            ->add('signature', TextareaType::class, ['label' => 'signature', 'required' => false])
            ->add('entreprise', TextType::class, ['label' => 'entreprise', 'required' => false])
            ->add('bureau1', TextType::class, ['label' => 'bureau1', 'required' => false])
            ->add('bureau2', TextType::class, ['label' => 'bureau2', 'required' => false])
            ->add('adresse', AdresseType::class, ['label' => 'adresse', 'required' => false])
            ->add('cvFile', VichFileType::class, [
                'label' => 'cv',
                'required' => false,
                'download_label' => 'apercu',
                'allow_delete' => false,
            ])
            ->add('photoFile', VichFileType::class, [
                'label' => 'photo',
                'required' => false,
                'download_label' => 'apercu',
                'allow_delete' => false,
            ]);
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Personnel::class,
            'translation_domain' => 'form',
            'locale' => 'fr',
        ]);
    }
}
