<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/PersonnelType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 14:21
 */

namespace App\Form;

use App\Entity\Personnel;
use App\Form\Type\CiviliteType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

/**
 * Class PersonnelType.
 */
class PersonnelType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('civilite', CiviliteType::class, [
                'label' => 'civilite',
            ])
            ->add('nom', TextType::class, ['label' => 'nom'])
            ->add('prenom', TextType::class, ['label' => 'prenom'])
            ->add('date_naissance', BirthdayType::class, ['label' => 'date_naissance'])
            ->add('initiales', TextType::class, ['label' => 'initiales', 'required' => false])
            ->add('photoFile', VichFileType::class, ['label' => 'photo', 'required' => false])
            ->add('username', TextType::class, ['label' => 'username'])
            ->add('mail_univ', TextType::class, ['label' => 'mail_univ'])
            ->add('numero_harpege', TextType::class, ['label' => 'numero_harpege', 'required' => false])
            ->add('statut', ChoiceType::class, [
                'label' => 'statut',
                'choices' => [
                    'choice.contractuel' => Personnel::CONTRACTUEL,
                    'choice.mcf' => Personnel::MCF,
                    'choice.pr' => Personnel::PU,
                    'choice.prag' => Personnel::PRAG,
                    'choice.prce' => Personnel::PRCE,
                    'choice.vacataire' => Personnel::VACATAIRE,
                    'choice.ater' => Personnel::ATER,
                ],
                'choice_translation_domain' => 'form',
                'expanded' => true,
            ])
            ->add('nbHeuresService', TextType::class, ['label' => 'nbHeuresService'])
            ->add('site_univ', TextType::class, ['label' => 'site_univ', 'required' => false])
            ->add('mail_perso', TextType::class, ['label' => 'mail_perso', 'required' => false])
            ->add('site_perso', TextType::class, ['label' => 'site_perso', 'required' => false])
            ->add('poste_interne', TextType::class, ['label' => 'poste_interne', 'required' => false])
            ->add('tel_bureau', TextType::class, ['label' => 'tel_bureau', 'required' => false])
            ->add('tel1', TextType::class, ['label' => 'tel1', 'required' => false])
            ->add('tel2', TextType::class, ['label' => 'tel2', 'required' => false])
            ->add('responsabilites', TextareaType::class, ['label' => 'responsabilites', 'required' => false])
            ->add('domaines', TextareaType::class, ['label' => 'domaines', 'required' => false])
            ->add('remarque', TextareaType::class, ['label' => 'remarque', 'required' => false])
            ->add('signature', TextareaType::class, ['label' => 'signature', 'required' => false])
            ->add('entreprise', TextType::class,
                ['label' => 'entreprise', 'required' => false, 'help' => 'help.personnel.entreprise'])
            ->add('bureau1', TextType::class, ['label' => 'bureau1', 'required' => false])
            ->add('bureau2', TextType::class, ['label' => 'bureau2', 'required' => false])
            ->add('adresse', AdresseType::class, ['label' => 'adresse', 'required' => false])
            ->add('cvFile', VichFileType::class, [
                'label' => 'cv',
                'required' => false,
            ])//->add('photo', VichImageType::class, ['label' => 'photo'])
        ;
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Personnel::class,
            'translation_domain' => 'form',
        ]);
    }
}
