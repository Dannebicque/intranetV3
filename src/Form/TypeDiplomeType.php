<?php

namespace App\Form;

use App\Entity\TypeDiplome;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class TypeDiplomeType
 * @package App\Form
 */
class TypeDiplomeType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('sigle', TextType::class, ['label' => 'label.sigle'])
            ->add('nb_semestres', TextType::class, ['label' => 'label.nb_semestres'])
            ->add('niveau_entree', TextType::class, ['label' => 'label.niveau_entree'])
            ->add('niveau_sortie', TextType::class, ['label' => 'label.niveau_sortie']);
    }

    /**
     * @param OptionsResolver $resolver
     *
     * @throws \Symfony\Component\OptionsResolver\Exception\AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => TypeDiplome::class,
            'translation_domain' => 'form'

        ]);
    }
}
