<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/stage/ContactType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/12/2022 12:09
 */

namespace App\Form\stage;

use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, ['label' => 'Nom * :'])
            ->add('prenom', TextType::class, ['label' => 'Prénom * :'])
            ->add('fonction', TextType::class, ['label' => 'Fonction dans l\'entreprise * :'])
            ->add('telephone', TextType::class, ['label' => 'Téléphone :', 'required' => false])
            ->add('email', EmailType::class, ['label' => 'Email :', 'required' => false])
            ->add('portable', TextType::class, ['label' => 'Portable * :']);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
            'translation_domain' => 'form',
        ]);
    }
}
