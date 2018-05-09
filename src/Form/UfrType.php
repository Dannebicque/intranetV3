<?php

namespace App\Form;

use App\Entity\Site;
use App\Entity\Ufr;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UfrType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('sites', EntityType::class, [
                'class' => Site::class,
                'label' => 'label.sites',
                'choice_label' => 'libelle',
                'expanded' => true,
                'multiple' => true
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
            'data_class' => Ufr::class,
            'translation_domain' => 'form'

        ]);
    }
}
