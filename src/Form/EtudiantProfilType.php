<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Form/EtudiantProfilType.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 4/28/19 8:46 PM
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
 * Class EtudiantProfilType
 * @package App\Form
 */
class EtudiantProfilType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('mail_perso', EmailType::class, ['required' => false, 'label' => 'label.mail_perso'])
            ->add('site_perso', UrlType::class, ['required' => false, 'label' => 'label.site_perso'])
            ->add('tel1', TextType::class, ['label' => 'label.tel1'])
            ->add('tel2', TextType::class, ['required' => false, 'label' => 'label.tel2'])
            ->add('signature', TextType::class, ['required' => false, 'label' => 'label.signature'])
            ->add('adresse', AdresseType::class, ['label' => 'label.adresse'])
            ->add('adresseParentale', AdresseType::class, ['label' => 'label.adresseParentale']);
    }

    /**
     * @param OptionsResolver $resolver
     *
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Etudiant::class,
            'translation_domain' => 'form'
        ]);
    }
}
