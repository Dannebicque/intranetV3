<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ContactType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/05/2021 18:29
 */

namespace App\Form;

use App\Entity\Contact;
use App\Form\Type\CiviliteType;
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
            ->add('civilite', CiviliteType::class, ['label' => 'civilite'])
            ->add('nom', TextType::class, ['label' => 'nom'])
            ->add('prenom', TextType::class, ['label' => 'prenom'])
            ->add('fonction', TextType::class, ['label' => 'fonction'])
            ->add('email', EmailType::class, ['label' => 'email', 'required' => false])
            ->add('telephone', TextType::class, ['label' => 'telephone', 'required' => false])
            ->add('portable', TextType::class, ['label' => 'portable', 'required' => false])
            ->add('fax', TextType::class, ['label' => 'fax', 'required' => false])

        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Contact::class,
            'translation_domain' => 'form',
        ]);
    }
}
