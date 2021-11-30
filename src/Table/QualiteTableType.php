<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ArticleTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 19:43
 */

namespace App\Table;

use App\Components\Table\Adapter\EntityAdapter;
use App\Components\Table\Column\BadgeColumnType;
use App\Components\Table\Column\DateColumnType;
use App\Components\Table\Column\PropertyColumnType;
use App\Components\Table\Column\WidgetColumnType;
use App\Components\Table\TableBuilder;
use App\Components\Table\TableType;
use App\Components\Widget\Type\ButtonDropdownType;
use App\Components\Widget\Type\LinkType;
use App\Components\Widget\Type\RowDeleteLinkType;
use App\Components\Widget\Type\RowDuplicateLinkType;
use App\Components\Widget\Type\RowEditLinkType;
use App\Components\Widget\Type\RowShowLinkType;
use App\Components\Widget\WidgetBuilder;
use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\QuestionnaireQualite;
use App\Entity\Semestre;
use App\Form\Type\DatePickerType;
use App\Table\ColumnType\CategorieArticleColumnType;
use App\Table\ColumnType\SemestreColumnType;
use App\Entity\Article;
use App\Entity\ArticleCategorie;
use App\Entity\Departement;
use App\Form\Type\SearchType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class QualiteTableType extends TableType
{
    private ?Departement $departement;
    private CsrfTokenManagerInterface $csrfToken;

    public function __construct(CsrfTokenManagerInterface $csrfToken)
    {
        $this->csrfToken = $csrfToken;
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder->addFilter('from', DatePickerType::class, [
            'input_prefix_text' => 'Du',
        ]);
        $builder->addFilter('to', DatePickerType::class, [
            'input_prefix_text' => 'Au',
        ]);

//        // Export button (use to export data)
        $builder->addWidget('export', ButtonDropdownType::class, [
            'icon' => 'fas fa-download',
            'attr' => ['data-toggle' => 'dropdown'],
            'build' => function(WidgetBuilder $builder) {
                $builder->add('pdf', LinkType::class, [
                    'route' => 'administration_article_export',
                    'route_params' => ['_format' => 'pdf'],
                ]);
                $builder->add('csv', LinkType::class, [
                    'route' => 'administration_article_export',
                    'route_params' => ['_format' => 'csv'],
                ]);
                $builder->add('excel', LinkType::class, [
                    'route' => 'administration_article_export',
                    'route_params' => ['_format' => 'xlsx'],
                ]);
            },
        ]);

        $builder->addColumn('titre', PropertyColumnType::class, ['label' => 'titre']);
        $builder->addColumn('dateOuverture', DateColumnType::class, ['label' => 'dateOuverture']);
        $builder->addColumn('dateFermeture', DateColumnType::class, ['label' => 'dateFermeture']);
        $builder->addColumn('semestre', BadgeColumnType::class,
            ['label' => 'table.semestre', 'translation_domain' => 'messages']);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function(WidgetBuilder $builder, QuestionnaireQualite $s) {
//                $builder->add('duplicate', RowDuplicateLinkType::class, [
//                    'route' => 'administration_article_duplicate',
//                    'route_params' => ['id' => $s->getId()],
//                    'xhr' => false,
//                ]);
                $builder->add('show', RowShowLinkType::class, [
                    'route' => 'administration_qualite_show',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
//                $builder->add('edit', RowEditLinkType::class, [
//                    'route' => 'administration_article_edit',
//                    'route_params' => [
//                        'id' => $s->getId(),
//                    ],
//                    'xhr' => false,
//                ]);
//                $builder->add('delete', RowDeleteLinkType::class, [
//                    'route' => 'administration_article_delete',
//                    'route_params' => [
//                        'id' => $s->getId(),
//                    ],
//                    'attr' => [
//                        'data-href' => 'administration_article_delete',
//                        'data-uuid' => $s->getId(),
//                        'data-csrf' => $this->csrfToken->getToken('delete' . $s->getId()),
//                    ],
//                ]);
            },
        ]);

        $builder->setLoadUrl('administration_qualite_index');

        $builder->useAdapter(EntityAdapter::class, [
            'class' => QuestionnaireQualite::class,
            'fetch_join_collection' => false,
            'query' => function(QueryBuilder $qb, array $formData) {
                $qb
                    ->innerJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
                    ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
                    ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
                    ->where('d.departement = :departement')
                    ->setParameter('departement', $this->departement->getId());

                if (isset($formData['from'])) {
                    $qb->andWhere('e.dateOuverture >= :from');
                    $qb->setParameter('from', $formData['from']);
                }

                if (isset($formData['to'])) {
                    $qb->andWhere('e.dateFermeture <= :to');
                    $qb->setParameter('to', $formData['to']);
                }
            },
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'orderable' => true,
            'departement' => null,
        ]);
    }
}
