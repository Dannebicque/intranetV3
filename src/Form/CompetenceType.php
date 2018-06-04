<?php

namespace App\Form;

use App\Entity\Competence;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CompetenceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('libelle', TextType::class, [
                'label' => 'label.libelle',
            ])
            ->add('code', TextType::class, [
                'label' => 'label.code',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class'         => Competence::class,
            'translation_domain' => 'form'
        ]);
    }
}
