<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/HrsTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 11:51
 */

namespace App\Table;

use App\Components\Table\Adapter\EntityAdapter;
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
use App\Entity\Departement;
use App\Entity\Hrs;
use App\Entity\Personnel;
use App\Entity\TypeHrs;
use App\Form\Type\SearchType;
use App\Repository\PersonnelRepository;
use App\Repository\TypeHrsRepository;
use App\Table\ColumnType\PersonnelColumnType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class HrsTableType extends TableType
{
    private ?Departement $departement;
    private ?int $annee;
    private CsrfTokenManagerInterface $csrfToken;

    public function __construct(CsrfTokenManagerInterface $csrfToken)
    {
        $this->csrfToken = $csrfToken;
    }

    public function buildTable(TableBuilder $builder, array $options)
    {
        $this->departement = $options['departement'];
        $this->annee = $options['annee'];

        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('type', EntityType::class, [
            'class' => TypeHrs::class,
            'choice_label' => 'libelle',
            'required' => false,
            'placeholder' => 'Filtrer par type de HRS/Prime',
            'query_builder' => function(TypeHrsRepository $typeHrsRepository) {
                return $typeHrsRepository->findAllBuilder();
            },
        ]);
        $builder->addFilter('personnel', EntityType::class, [
            'class' => Personnel::class,
            'choice_label' => 'displayPr',
            'required' => false,
            'placeholder' => 'Filtrer par personnel',
            'query_builder' => function(PersonnelRepository $personnelRepository) {
                return $personnelRepository->findByDepartementBuilder($this->departement);
            },
        ]);

//        // Export button (use to export data)
        //todo: pourrait être un Widget spécifique avec en option les formats et la base de route...
//        $builder->addWidget('export', ButtonDropdownType::class, [
//            'icon' => 'fas fa-download',
//            'attr' => ['data-toggle' => 'dropdown'],
//            'build' => function(WidgetBuilder $builder) {
//                $builder->add('pdf', LinkType::class, [
//                    'route' => 'administration_hrs_export',
//                    'route_params' => ['_format' => 'pdf'],
//                ]);
//                $builder->add('csv', LinkType::class, [
//                    'route' => 'administration_hrs_export',
//                    'route_params' => ['_format' => 'csv'],
//                ]);
//                $builder->add('excel', LinkType::class, [
//                    'route' => 'administration_hrs_export',
//                    'route_params' => ['_format' => 'xlsx'],
//                ]);
//            },
//        ]);

        $builder->setLoadUrl('administration_hrs_index');

        $builder->addColumn('libelle', PropertyColumnType::class,
            ['label' => 'table.libelle', 'translation_domain' => 'messages']);
        $builder->addColumn('type_hrs', PropertyColumnType::class,
            ['label' => 'table.type_hrs', 'translation_domain' => 'messages']);
        $builder->addColumn('personnel', PersonnelColumnType::class,
            ['label' => 'table.personnel', 'translation_domain' => 'messages']);
        $builder->addColumn('semestreOrDiplome', PropertyColumnType::class,
            ['label' => 'table.semestre_ou_diplome', 'translation_domain' => 'messages']);
        $builder->addColumn('nb_heures_td', PropertyColumnType::class,
            ['label' => 'table.nb_heures_td', 'translation_domain' => 'messages']);
        $builder->addColumn('commentaire', PropertyColumnType::class,
            ['label' => 'table.commentaire', 'translation_domain' => 'messages']);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function(WidgetBuilder $builder, Hrs $s) {
                $builder->add('duplicate', RowDuplicateLinkType::class, [
                    'route' => 'administration_hrs_duplicate',
                    'route_params' => ['id' => $s->getId()],
                    'xhr' => false,
                ]);
                $builder->add('show', RowShowLinkType::class, [
                    'route' => 'administration_hrs_show', //todo: en modal ? Un composant avec la vue, généric?
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
                $builder->add('edit', RowEditLinkType::class, [
                    'route' => 'administration_hrs_edit',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
                $builder->add('delete', RowDeleteLinkType::class, [
                    'attr' => [
                        'data-href' => 'administration_hrs_delete',
                        'data-uuid' => $s->getId(),
                        'data-csrf' => $this->csrfToken->getToken('delete' . $s->getId()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Hrs::class,
            'fetch_join_collection' => false,
            'query' => function(QueryBuilder $qb, array $formData) {
                $qb->where('e.departement = :departement')
                    ->andWhere('e.annee = :annee')
                    ->setParameter('departement', $this->departement->getId())
                    ->setParameter('annee', $this->annee)
                    ->orderBy('e.libelle', 'DESC');

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.libelle) LIKE :search');
                    $qb->setParameter('search', '%' . $formData['search'] . '%');
                }

                if (isset($formData['type']) && '' !== $formData['type']) {
                    $qb->andWhere('e.typeHrs = :type');
                    $qb->setParameter('type', $formData['type']);
                }

                if (isset($formData['personnel']) && '' !== $formData['personnel']) {
                    $qb->andWhere('e.personnel = :personnel');
                    $qb->setParameter('personnel', $formData['personnel']);
                }
            },
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'orderable' => true,
            'departement' => null,
            'annee' => null,
        ]);
    }
}
