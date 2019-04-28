<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Form/ArticleType.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:46 PM
 *  * @lastUpdate 4/28/19 8:45 PM
 *  *
 *
 */

namespace App\Form;

use App\Entity\Article;
use App\Entity\ArticleCategorie;
use App\Entity\Semestre;
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
 * Class ArticleType
 * @package App\Form
 */
class ArticleType extends AbstractType
{
    private $departement;

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add('titre', TextType::class, [
                'label' => 'label.titre',
            ])
            ->add('texte', TextareaType::class, [
                'label' => 'label.texte',
                'attr'  => ['data-provide' => 'quill', 'rows' => 20]
            ])
            ->add('categorie', EntityType::class, [
                'class'         => ArticleCategorie::class,
                'label'         => 'label.article_categorie',
                'choice_label'  => 'libelle',
                'query_builder' => function(ArticleCategorieRepository $articleCategorieRepository) {
                    return $articleCategorieRepository->findByDepartementBuilder($this->departement);
                },
                'required'      => true,
                'expanded'      => false,
                'multiple'      => false
            ])
            ->add('semestres', EntityType::class, array(
                'class'         => Semestre::class,
                'label'         => 'label.semestres_article',
                'choice_label'  => 'libelle',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDepartementBuilder($this->departement);
                },
                'required'      => true,
                'expanded'      => true,
                'multiple'      => true
            ));
    }

    /**
     * @param OptionsResolver $resolver
     *
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Article::class,
            'departement'          => null,
            'translation_domain' => 'form'

        ]);
    }
}
