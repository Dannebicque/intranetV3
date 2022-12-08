<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/BorneTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Table;

use DavidAnnebicque\TableBundle\Adapter\EntityAdapter;
use DavidAnnebicque\TableBundle\Column\BooleanColumnType;
use DavidAnnebicque\TableBundle\Column\DateColumnType;
use DavidAnnebicque\TableBundle\Column\PropertyColumnType;
use DavidAnnebicque\TableBundle\Column\WidgetColumnType;
use DavidAnnebicque\TableBundle\TableBuilder;
use DavidAnnebicque\TableBundle\TableType;
use DavidAnnebicque\TableBundle\Widget\Type\ExportDropdownType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDeleteLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDuplicateLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowEditLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowShowLinkType;
use DavidAnnebicque\TableBundle\Widget\WidgetBuilder;
use App\Entity\Annee;
use App\Entity\Borne;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Form\Type\DatePickerType;
use App\Form\Type\SearchType;
use App\Table\ColumnType\IconeColumnType;
use App\Table\ColumnType\SemestreColumnType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class BorneTableType extends TableType
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
            'route' => 'administration_borne_export',
        ]);

        $builder->setLoadUrl('administration_borne_index');

        $builder->addColumn('icone', IconeColumnType::class, ['label' => 'icone']);
        $builder->addColumn('message', PropertyColumnType::class, ['label' => 'message']);
        $builder->addColumn('dateDebutPublication', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'd/m/Y',
            'label' => 'dateDebutPublication',
        ]);
        $builder->addColumn('dateFinPublication', DateColumnType::class, [
            'format' => 'd/m/Y',
            'label' => 'dateFinPublication',
        ]);
        $builder->addColumn('visible', BooleanColumnType::class, [
        ]);
        $builder->addColumn('semestres', SemestreColumnType::class, [
            'label' => 'semestres',
        ]);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, Borne $s) {
                $builder->add('duplicate', RowDuplicateLinkType::class, [
                    'route' => 'administration_borne_duplicate',
                    'route_params' => ['id' => $s->getId()],
                    'xhr' => false,
                ]);
                $builder->add('show', RowShowLinkType::class, [
                    'route' => 'administration_borne_show',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
                $builder->add('edit', RowEditLinkType::class, [
                    'route' => 'administration_borne_edit',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
                $builder->add('delete', RowDeleteLinkType::class, [
                    'route' => 'administration_borne_delete',
                    'route_params' => ['id' => $s->getId()],
                    'attr' => [
                        'data-csrf' => $this->csrfToken->getToken('delete'.$s->getId()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Borne::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                $qb->innerJoin('e.semestres', 'c')// récupération de la jointure dans la table dédiée
                ->innerJoin(Semestre::class, 's', 'WITH', 'c.id = s.id')
                    ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
                    ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
                    ->where('d.departement = :departement')
                    ->setParameter('departement', $this->departement->getId());

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.message) LIKE :search');
                    $qb->setParameter('search', '%'.$formData['search'].'%');
                }

                if (isset($formData['from'])) {
                    $qb->andWhere('e.dateDebutPublication >= :from');
                    $qb->orWhere('e.dateFinPublication >= :from');
                    $qb->setParameter('from', $formData['from']);
                }

                if (isset($formData['to'])) {
                    $qb->andWhere('e.dateDebutPublication <= :to');
                    $qb->orWhere('e.dateFinPublication <= :to');
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
