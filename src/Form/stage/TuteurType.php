<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/stage/TuteurType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/12/2022 20:16
 */

namespace App\Form\stage;

use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TuteurType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('prenom', TextType::class, [
                'label' => 'Prénom :',
                'attr' => ['autocomplete' => 'off'],
            ])
            ->add('nom', TextType::class, [
                'label' => 'Nom :',
                'required' => false,
                'attr' => ['autocomplete' => 'off'],
            ])
            ->add('fonction', TextType::class, [
                'label' => 'Fonction dans l\'entreprise :',
                'required' => false,
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email :',
                'required' => false,
                'help' => 'l\'email doit être saisi sous la forme : xxxxxx@xxx.xxx.'
            ])
            ->add('telephone', TextType::class, [
                'label' => 'Téléphone :',
                'help' => 'le numéro de téléphone doit comporter 10 chiffres.',
                'required' => false
            ])
            ->add('portable', TextType::class, [
                'label' => 'Portable :',
                'help' => 'le numéro de portable doit comporter 10 chiffres.',
                'required' => false,
                'attr' => ['autocomplete' => 'off'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
            'translation_domain' => 'form',
        ]);
    }
}
