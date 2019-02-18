<?php

namespace App\Form;

use App\Entity\AnneeUniversitaire;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AnneeUniversitaireType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'
            ])
            ->add('annee', ChoiceType::class, [
                'label'   => 'label.annee_courante',
                'choices' => array_combine(range(date('Y') - 2, date('Y') + 4), range(date('Y') - 2, date('Y') + 4))
            ])
            ->add('commentaire', TextareaType::class, ['label'=> 'label.commentaire'])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => AnneeUniversitaire::class,
            'translation_domain' => 'form'
        ]);
    }
}
