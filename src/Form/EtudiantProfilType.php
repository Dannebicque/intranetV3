<?php

namespace App\Form;

use App\Entity\Etudiant;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EtudiantProfilType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('mail_perso', TextType::class)
            ->add('site_perso', TextType::class)
            ->add('tel1', TextType::class)
            ->add('tel2', TextType::class)
            ->add('signature', TextType::class)
            ->add('adresse', AdresseType::class)
            ->add('adresseParentale', AdresseType::class);
    }

    /**
     * @param OptionsResolver $resolver
     *
     * @throws \Symfony\Component\OptionsResolver\Exception\AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Etudiant::class,
            'translation_domain' => 'form'
        ]);
    }
}
