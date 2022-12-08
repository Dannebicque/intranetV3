<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/QuestionnaireSectionTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Table;

use DavidAnnebicque\TableBundle\Adapter\EntityAdapter;
use DavidAnnebicque\TableBundle\Column\PropertyColumnType;
use DavidAnnebicque\TableBundle\Column\WidgetColumnType;
use DavidAnnebicque\TableBundle\TableBuilder;
use DavidAnnebicque\TableBundle\TableType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDeleteLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDuplicateLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowEditLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowShowLinkType;
use DavidAnnebicque\TableBundle\Widget\WidgetBuilder;
use App\Entity\Departement;
use App\Entity\QuestionnaireSection;
use App\Form\Type\SearchType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class QuestionnaireSectionTableType extends TableType
{
    protected string $type = 'administratif';
    protected ?Departement $departement;

    public function __construct(private readonly CsrfTokenManagerInterface $csrfToken)
    {
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->type = $options['type'];
        $this->departement = $options['departement'];

        $builder->addFilter('search', SearchType::class);

//        $builder->addWidget('export', ExportDropdownType::class, [
//            'route' => 'administration_absence_appel_export',
//            'route_params' => [
//                'semestre' => $this->semestre->getId()
//            ],
//        ]);

        $builder->addColumn('titre', PropertyColumnType::class, ['label' => 'table.titre']);
        $builder->setLoadUrl('adm_questionnaire_section_index', ['type' => $this->type]);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, QuestionnaireSection $s) {
                $builder->add('duplicate', RowDuplicateLinkType::class, [
                    'route' => 'adm_questionnaire_section_duplicate',
                    'route_params' => ['id' => $s->getId(),'type' => $this->type,],
                    'xhr' => false,
                ]);
                $builder->add('show', RowShowLinkType::class, [
                    'route' => 'adm_questionnaire_section_show',
                    'route_params' => [
                        'id' => $s->getId(),
                        'type' => $this->type,
                    ],
                    'xhr' => false,
                ]);
                $builder->add('edit', RowEditLinkType::class, [
                    'route' => 'adm_questionnaire_section_edit',
                    'route_params' => [
                        'id' => $s->getId(),
                        'type' => $this->type,
                    ],
                    'xhr' => false,
                ]);
                $builder->add('delete', RowDeleteLinkType::class, [
                    'route' => 'adm_questionnaire_section_delete',
                    'route_params' => [
                        'id' => $s->getId(),
                        'type' => $this->type,
                    ],
                    'attr' => [
                        'data-href' => 'adm_questionnaire_section_delete',
                        'data-uuid' => $s->getId(),
                        'data-csrf' => $this->csrfToken->getToken('delete'.$s->getId()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => QuestionnaireSection::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                if ('administration' === $this->type && null !== $this->departement) {
                    $qb->andWhere('e.departement = :departement')
                        ->setParameter('departement', $this->departement);
                }
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
            'departement' => null,
            'type' => 'administratif',
        ]);
    }
}
