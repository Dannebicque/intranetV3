<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/QuestionnaireQuestionTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/10/2021 11:51
 */

namespace App\Table;

use App\Components\Table\Adapter\EntityAdapter;
use App\Components\Table\Column\BooleanColumnType;
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
use App\Entity\QuestionnaireQuestion;
use App\Form\Type\SearchType;
use App\Table\ColumnType\PersonnelColumnType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class QuestionnaireQuestionTableType extends TableType
{
    private CsrfTokenManagerInterface $csrfToken;

    public function __construct(CsrfTokenManagerInterface $csrfToken)
    {
        $this->csrfToken = $csrfToken;
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('type', ChoiceType::class,
            ['label' => 'Type de question', 'choices' => QuestionnaireQuestion::LISTE_TYPE_QUESTION]);

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

        //système de panier de question?

        $builder->addColumn('libelle', PropertyColumnType::class, ['label' => 'table.libelle']);
        $builder->addColumn('type', PropertyColumnType::class, ['label' => 'table.type']);
        $builder->addColumn('auteur', PersonnelColumnType::class, ['label' => 'table.auteur']);
        $builder->addColumn('obligatoire', BooleanColumnType::class, ['label' => 'table.obligatoire']);

        $builder->setLoadUrl('sadm_questionnaire_question_index');

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function(WidgetBuilder $builder, QuestionnaireQuestion $s) {
                $builder->add('duplicate', RowDuplicateLinkType::class, [
                    'route' => 'administration_article_duplicate',
                    'route_params' => ['id' => $s->getId()],
                    'xhr' => false,
                ]);
                $builder->add('show', RowShowLinkType::class, [
                    'route' => 'administration_article_show',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
                $builder->add('edit', RowEditLinkType::class, [
                    'route' => 'administration_article_edit',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
                $builder->add('delete', RowDeleteLinkType::class, [
                    'attr' => [
                        'data-href' => 'administration_article_delete',
                        'data-uuid' => $s->getId(),
                        'data-csrf' => $this->csrfToken->getToken('delete' . $s->getId()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => QuestionnaireQuestion::class,
            'fetch_join_collection' => false,
            'query' => function(QueryBuilder $qb, array $formData) {
                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.titre) LIKE :search');
                    $qb->orWhere('LOWER(e.texte) LIKE :search');
                    $qb->setParameter('search', '%' . $formData['search'] . '%');
                }

                if (isset($formData['from'])) {
                    $qb->andWhere('e.updated >= :from');
                    $qb->setParameter('from', $formData['from']);
                }

                if (isset($formData['to'])) {
                    $qb->andWhere('e.updated <= :to');
                    $qb->setParameter('to', $formData['to']);
                }
            },
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'orderable' => true,
        ]);
    }
}