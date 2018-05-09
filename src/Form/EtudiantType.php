<?php

namespace App\Form;

use App\Entity\Etudiant;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EtudiantType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom')
            ->add('prenom')
            ->add('mail_univ')
            ->add('site_univ')
            ->add('mail_perso')
            ->add('site_perso')
            ->add('sexe')
            ->add('date_naissance')
            ->add('tel1')
            ->add('tel2')
            ->add('remarque')
            ->add('signature')
            ->add('visible')
            ->add('photo')
            ->add('adresse')
            ->add('semestre')
            ->add('num_etudiant')
            ->add('num_ine')
            ->add('bac')
            ->add('annee_bac')
            ->add('username')

        ;
    }

    /**
     * @param OptionsResolver $resolver
     *
     * @throws \Symfony\Component\OptionsResolver\Exception\AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Etudiant::class,
            'translation_domain' => 'form'
        ]);
    }
}
