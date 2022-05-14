<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/ArticleType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 10:52
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
    private ?Departement $departement = null;

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
                'attr' => ['rows' => 20, 'class' => 'tinyMce'],
            ])
            // feature: EntytityWithAddType ... Liste avec un bouton ajouter pour inserer en popup un nouvel element dans la bse et la liste. Stimulus
            ->add('categorie', EntityType::class, [
                'class' => ArticleCategorie::class,
                'label' => 'label.article_categorie',
                'choice_label' => 'libelle',
                'query_builder' => fn (ArticleCategorieRepository $articleCategorieRepository) => $articleCategorieRepository->findByDepartementBuilder($this->departement),
                'required' => true,
                'expanded' => false,
                'multiple' => false,
            ])
            ->add('semestres', EntityType::class, [
                'class' => Semestre::class,
                'label' => 'label.semestres_article',
                'choice_label' => 'libelle',
                'query_builder' => fn (SemestreRepository $semestreRepository) => $semestreRepository->findByDepartementBuilder($this->departement),
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
