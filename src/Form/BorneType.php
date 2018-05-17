<?php

namespace App\Form;

use App\Entity\Borne;
use App\Entity\Semestre;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BorneType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('icone', TextType::class, [
                'label' => 'label.icone',
            ])
            ->add('couleur', TextType::class, [
                'label' => 'label.couleur',
            ])
            ->add('message', TextareaType::class, [
                'label' => 'label.message',
            ])
            ->add('url', TextType::class, [
                'label' => 'label.url',
            ])
            ->add('dateDebutPublication', DateTimeType::class, [
                'label' => 'label.dateDebutPublication',
            ])
            ->add('dateFinPublication', DateTimeType::class, [
                'label' => 'label.dateFinPublication',
            ])
            ->add('visible', ChoiceType::class,
                [
                    'choices'                   => ['choice.oui' => true, 'choice.non' => true],
                    'expanded'                  => true,
                    'choice_translation_domain' => 'form',
                    'label'                     => 'label.visible'
                ])
            ->add('semestres', EntityType::class, [
                'class'        => Semestre::class,
                'expanded'     => true,
                'multiple'     => true,
                'choice_label' => 'libelle',
                'label'        => 'label.semestres_article'
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class'         => Borne::class,
            'translation_domain' => 'form'
        ]);
    }
}
