<?php

namespace App\Form;

use App\Entity\CreneauBloque;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CreneauBloqueType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('texte')
            ->add('obligatoire')
            ->add('type')
            ->add('creneau')
            ->add('semaine')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => CreneauBloque::class,
        ]);
    }
}
