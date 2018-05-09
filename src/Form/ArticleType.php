<?php

namespace App\Form;

use App\Entity\Article;
use App\Entity\Semestre;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ArticleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titre', TextType::class, [
                'label' => 'label.titre',
            ])
            ->add('texte', TextareaType::class, [
                'label' => 'label.texte',
            ])
            ->add('type', ChoiceType::class, [
                'choices'                   => ['choice.ri'            => 'ri',
                                                'choice.c2i'           => 'C2I',
                                                'choice.info_pratique' => 'infos'
                ],
                'expanded'                  => true,
                'label'                     => 'label.type_article',
                'choice_translation_domain' => 'form'
            ])
            ->add('semestres', EntityType::class, [
                'class'        => Semestre::class,
                'expanded'     => true,
                'multiple'     => true,
                'choice_label' => 'libelle',
                'label'        => 'label.semestres_article'
            ]);
    }

    /**
     * @param OptionsResolver $resolver
     *
     * @throws \Symfony\Component\OptionsResolver\Exception\AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Article::class,
            'translation_domain' => 'form'

        ]);
    }
}
