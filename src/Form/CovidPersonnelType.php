<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/CovidPersonnelType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Form;

use App\Entity\Personnel;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class PersonnelType.
 */
class CovidPersonnelType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, ['label' => 'label.nom', 'attr' => ['readonly' => true]])
            ->add('prenom', TextType::class, ['label' => 'label.prenom', 'attr' => ['readonly' => true]])
            ->add('date_naissance', BirthdayType::class, ['label' => 'label.date_naissance'])
            ->add('lieuNaissance', TextType::class, ['label' => 'label.lieu_naissance'])
            ->add('mail_univ', TextType::class, ['label' => 'label.mail_univ', 'attr' => ['readonly' => true]])
            ->add('mail_perso', TextType::class, [
                'label'    => 'label.mail_perso',
                'required' => false,
                'help'     => 'Indiquer votre mail personnel permettra de faire suivre l\'attestation en PDF sur vos deux adresses. Sans obligation.',
            ])
            ->add('adresse', AdresseType::class, ['label' => 'label.adresse']);
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
