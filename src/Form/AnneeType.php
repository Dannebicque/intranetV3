<?php

namespace App\Form;

use App\Entity\Annee;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AnneeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, [
                'label' => 'label.libelle'
            ])
            ->add('libelle_long', TextType::class, [
                'label' => 'label.libelle_long'
            ])
            ->add('code_apogee', TextType::class, [
                'label' => 'label.code_apogee'
            ])
            ->add('code_version', TextType::class, [
                'label' => 'label.code_version'
            ])
            ->add('code_departement', TextType::class, [
                'label' => 'label.code_departement'
            ])
            ->add('ordre', TextType::class, [
                'label' => 'label.ordre'
            ])
            ->add('couleur_cm', TextType::class, [
                'label' => 'label.couleur_cm',
                'required' =>false
            ])
            ->add('couleur_td', TextType::class, [
                'label' => 'label.couleur_td',
                'required' =>false
            ])
            ->add('couleur_tp', TextType::class, [
                'label' => 'label.couleur_tp',
                'required' =>false
            ])
            ->add('couleur_texte', TextType::class, [
                'label' => 'label.couleur_texte',
                'required' =>false
            ])

            ->add('opt_alternance', ChoiceType::class, [
                'label' => 'label.opt_alternance',
                'choices' => ['choice.oui' => true, 'choice.non' => true],
                'choice_translation_domain' => 'form',
                'expanded' => true,
            ])
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
            'data_class' => Annee::class,
            'translation_domain' => 'form'
        ]);
    }
}
