<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ArticleType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 10:56
 */

namespace App\Form;

use App\Entity\Article;
use App\Entity\ArticleCategorie;
use App\Entity\Departement;
use App\Entity\Semestre;
use App\Form\Type\TypeDestinataireType;
use App\Repository\ArticleCategorieRepository;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class ArticleType.
 */
class ArticleType extends AbstractType
{
    private ?Departement $departement;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add('titre', TextType::class, [
                'label' => 'label.titre',
            ])
            ->add('typeDestinataire', TypeDestinataireType::class, ['label' => 'label.typedestinataire'])
            ->add('texte', TextareaType::class, [
                'label' => 'label.texte',
                'attr' => ['rows' => 20, 'class' => 'tinyMce'], //todo: tinyMce ne fonctionne plus
            ])
            ->add('categorie', EntityType::class, [
                'class' => ArticleCategorie::class,
                'label' => 'label.article_categorie',
                'choice_label' => 'libelle',
                'query_builder' => function (ArticleCategorieRepository $articleCategorieRepository) {
                    return $articleCategorieRepository->findByDepartementBuilder($this->departement);
                },
                'required' => true,
                'expanded' => false,
                'multiple' => false,
            ])
            ->add('semestres', EntityType::class, [
                'class' => Semestre::class,
                'label' => 'label.semestres_article',
                'choice_label' => 'libelle',
                'query_builder' => function (SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDepartementBuilder($this->departement);
                },
                'required' => true,
                'expanded' => true,
                'multiple' => true,
            ]);
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Article::class,
            'departement' => null,
            'translation_domain' => 'form',
        ]);
    }
}
