<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ActualiteTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:43
 */

namespace App\Table;

use App\Entity\Actualite;
use App\Entity\Departement;
use App\Form\Type\DatePickerType;
use App\Form\Type\SearchType;
use Dannebicque\TableBundle\Adapter\EntityAdapter;
use Dannebicque\TableBundle\Column\DateColumnType;
use Dannebicque\TableBundle\Column\PropertyColumnType;
use DavidAnnebicque\TableBundle\Column\WidgetColumnType;
use DavidAnnebicque\TableBundle\TableBuilder;
use DavidAnnebicque\TableBundle\TableType;
use DavidAnnebicque\TableBundle\Widget\Type\ExportDropdownType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDeleteLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDuplicateLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowEditLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowShowLinkType;
use DavidAnnebicque\TableBundle\Widget\WidgetBuilder;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class ActualiteTableType extends TableType
{
    private ?Departement $departement = null;

    public function __construct(private readonly CsrfTokenManagerInterface $csrfToken)
    {
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('from', DatePickerType::class, [
            'input_prefix_text' => 'Du',
        ]);
        $builder->addFilter('to', DatePickerType::class, [
            'input_prefix_text' => 'Au',
        ]);

        $builder->addWidget('export', ExportDropdownType::class, [
            'route' => 'administration_actualite_export',
        ]);

        $builder->setLoadUrl('administration_actualite_index');

        $builder->addColumn('titre', PropertyColumnType::class,
            ['label' => 'table.titre', 'translation_domain' => 'messages']);
        $builder->addColumn('texte', PropertyColumnType::class,
            ['label' => 'table.texte', 'translation_domain' => 'messages']);
        $builder->addColumn('updated', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'd/m/Y',
            'label' => 'table.updated',
            'translation_domain' => 'messages',
        ]);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, Actualite $s) {
                $builder->add('duplicate', RowDuplicateLinkType::class, [
                    'route' => 'administration_actualite_duplicate',
                    'route_params' => ['id' => $s->getId()],
                    'xhr' => false,
                ]);
                $builder->add('show', RowShowLinkType::class, [
                    'route' => 'administration_actualite_show',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
                $builder->add('edit', RowEditLinkType::class, [
                    'route' => 'administration_actualite_edit',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
                $builder->add('delete', RowDeleteLinkType::class, [
                    'route' => 'administration_actualite_delete',
                    'route_params' => ['id' => $s->getId()],
                    'attr' => [
                        'data-csrf' => $this->csrfToken->getToken('delete'.$s->getId()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Actualite::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                $qb->where('e.departement = :departement')
                    ->setParameter('departement', $this->departement->getId())
                    ->orderBy('e.updated', Criteria::DESC);

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
        ]);
    }
}
