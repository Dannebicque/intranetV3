<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/DateTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 21:58
 */

namespace App\Table;

use App\Entity\Annee;
use App\Entity\Date;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Form\Type\DatePickerType;
use App\Form\Type\SearchType;
use App\Table\ColumnType\SemestresColumnType;
use Dannebicque\TableBundle\Adapter\EntityAdapter;
use Dannebicque\TableBundle\Column\BadgeColumnType;
use Dannebicque\TableBundle\Column\DateColumnType;
use Dannebicque\TableBundle\Column\PropertyColumnType;
use Dannebicque\TableBundle\Column\WidgetColumnType;
use Dannebicque\TableBundle\TableBuilder;
use Dannebicque\TableBundle\TableType;
use Dannebicque\TableBundle\Widget\Type\ExportDropdownType;
use Dannebicque\TableBundle\Widget\Type\RowDeleteLinkType;
use Dannebicque\TableBundle\Widget\Type\RowDuplicateLinkType;
use Dannebicque\TableBundle\Widget\Type\RowEditLinkType;
use Dannebicque\TableBundle\Widget\Type\RowShowLinkType;
use Dannebicque\TableBundle\Widget\WidgetBuilder;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class DateTableType extends TableType
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
            'route' => 'administration_date_export',
        ]);

        $builder->addColumn('libelle', PropertyColumnType::class,
            ['label' => 'table.libelle', 'translation_domain' => 'messages']);
        $builder->addColumn('lieu', PropertyColumnType::class,
            ['label' => 'table.lieu', 'translation_domain' => 'messages']);
        $builder->addColumn('typeDestinataire', BadgeColumnType::class,
            ['label' => 'table.typeDestinataire', 'translation_domain' => 'messages']);
        $builder->addColumn('semestres', SemestresColumnType::class,
            ['label' => 'table.semestres', 'translation_domain' => 'messages']);
        $builder->addColumn('dateDebut', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'd/m/Y',
            'label' => 'table.dateDebut',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('heureDebut', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'H:i',
            'label' => 'table.heureDebut',
            'translation_domain' => 'messages',
        ]);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, Date $s) {
                $builder->add('duplicate', RowDuplicateLinkType::class, [
                    'route' => 'administration_date_duplicate',
                    'route_params' => ['id' => $s->getId()],
                    'xhr' => false,
                ]);
                $builder->add('show', RowShowLinkType::class, [
                    'route' => 'administration_date_show',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
                $builder->add('edit', RowEditLinkType::class, [
                    'route' => 'administration_date_edit',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
                $builder->add('delete', RowDeleteLinkType::class, [
                    'route' => 'administration_date_delete',
                    'route_params' => ['id' => $s->getId()],
                    'attr' => [
                        'data-csrf' => $this->csrfToken->getToken('delete'.$s->getId()),
                    ],
                ]);
            },
        ]);
        $builder->setLoadUrl('administration_date_index');

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Date::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                $qb->innerJoin('e.semestres', 'c')// récupération de la jointure dans la table dédiée
                ->innerJoin(Semestre::class, 's', 'WITH', 'c.id = s.id')
                    ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
                    ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
                    ->where('d.departement = :departement')
                    ->setParameter('departement', $this->departement->getId());

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.libelle) LIKE :search');
                    $qb->orWhere('LOWER(e.lieu) LIKE :search');
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
