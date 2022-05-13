<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/QuestionnaireQuestionTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/05/2022 15:13
 */

namespace App\Table;

use App\Components\Table\Adapter\EntityAdapter;
use App\Components\Table\Column\BooleanColumnType;
use App\Components\Table\Column\ManyColumnType;
use App\Components\Table\Column\PropertyColumnType;
use App\Components\Table\Column\WidgetColumnType;
use App\Components\Table\TableBuilder;
use App\Components\Table\TableType;
use App\Components\Widget\Type\RowDeleteLinkType;
use App\Components\Widget\Type\RowDuplicateLinkType;
use App\Components\Widget\Type\RowEditLinkType;
use App\Components\Widget\Type\RowShowLinkType;
use App\Components\Widget\WidgetBuilder;
use App\Entity\QuestionnaireQuestion;
use App\Entity\QuestionnaireQuestionTag;
use App\Form\Type\EntityCompleteType;
use App\Form\Type\SearchType;
use App\Table\ColumnType\PersonnelColumnType;
use App\Table\ColumnType\TypeQuestionColumnType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class QuestionnaireQuestionTableType extends TableType
{
    public function __construct(private readonly CsrfTokenManagerInterface $csrfToken)
    {
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $typeQuestions = $options['typeQuestions'];

        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('type', ChoiceType::class,
            ['label' => 'Type de question', 'choices' => $typeQuestions, 'required' => false]);
        $builder->addFilter('tag', EntityCompleteType::class,
            ['label' => 'Tag', 'class' => QuestionnaireQuestionTag::class, 'choice_label' => 'libelle']);

//        $builder->addWidget('export', ExportDropdownType::class, [
//            'route' => 'administration_absence_appel_export',
//            'route_params' => [
//                'semestre' => $this->semestre->getId()
//            ],
//        ]);

        $builder->addColumn('libelle', PropertyColumnType::class, ['label' => 'table.libelle']);
        $builder->addColumn('type', TypeQuestionColumnType::class, ['label' => 'table.type']);
        $builder->addColumn('questionnaireQuestionTags', ManyColumnType::class, [
            'label' => 'table.questionnaireQuestionTags',
            'one_renderer' => fn ($elem) => '<span class="badge bg-primary me-1">'.$elem->getLibelle().'</span>',
        ]);
        $builder->addColumn('auteur', PersonnelColumnType::class, ['label' => 'table.auteur']);
        $builder->addColumn('obligatoire', BooleanColumnType::class, ['label' => 'table.obligatoire']);

        $builder->setLoadUrl('sadm_questionnaire_question_index');

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, QuestionnaireQuestion $s) {
                $builder->add('duplicate', RowDuplicateLinkType::class, [
                    'route' => 'sadm_questionnaire_question_duplicate',
                    'route_params' => ['id' => $s->getId()],
                    'xhr' => false,
                ]);
                $builder->add('show', RowShowLinkType::class, [
                    'route' => 'sadm_questionnaire_question_show',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
                $builder->add('edit', RowEditLinkType::class, [
                    'route' => 'sadm_questionnaire_question_edit',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
                $builder->add('delete', RowDeleteLinkType::class, [
                    'route' => 'sadm_questionnaire_question_delete',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'attr' => [
                        'data-csrf' => $this->csrfToken->getToken('delete'.$s->getId()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => QuestionnaireQuestion::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.titre) LIKE :search');
                    $qb->orWhere('LOWER(e.texte) LIKE :search');
                    $qb->setParameter('search', '%'.$formData['search'].'%');
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
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'orderable' => true,
            'typeQuestions' => null,
        ]);
    }
}
