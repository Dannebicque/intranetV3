<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/EtudiantProfilType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/05/2021 18:31
 */

namespace App\Form;

use App\Entity\Etudiant;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class EtudiantProfilType.
 */
class EtudiantProfilType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('mail_perso', EmailType::class, ['required' => false, 'label' => 'mail_perso'])
            ->add('site_perso', UrlType::class, ['required' => false, 'label' => 'site_perso'])
            ->add('tel1', TextType::class, ['label' => 'tel1'])
            ->add('tel2', TextType::class, ['required' => false, 'label' => 'tel2'])
            ->add('signature', TextType::class, ['required' => false, 'label' => 'signature'])
            ->add('adresse', AdresseType::class, ['label' => 'adresse'])
            ->add('adresseParentale', AdresseType::class, ['label' => 'adresseParentale', 'required' => false]);
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Etudiant::class,
            'translation_domain' => 'form',
        ]);
    }
}
