<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DataTable/EtudiantTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 14:21
 */

namespace App\DataTable;


use App\Entity\Etudiant;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Component\DataTable\Adapter\EntityAdapter;
use Umbrella\CoreBundle\Component\DataTable\Column\PropertyColumnType;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\DataTableType;
use Umbrella\CoreBundle\Component\DataTable\ToolbarBuilder;
use Umbrella\CoreBundle\Form\SearchType;

class EtudiantTableType extends DataTableType
{

    public function buildToolbar(ToolbarBuilder $builder, array $options)
    {
        $builder->addFilter('search', SearchType::class);
//        $builder->addFilter('from', DatepickerType::class, [
//            'input_prefix_text' => 'From'
//        ]);
//        $builder->addFilter('to', DatepickerType::class, [
//            'input_prefix_text' => 'To'
//        ]);
//
//        if ($options['show_mission_status_filter']) {
//            $builder->addFilter('missionStatus', MissionStatusChoiceType::class, [
//                'required' => false,
//                'placeholder' => 'Mission status'
//            ]);
//        }
//
//        // Add button (use to add data)
//        if ($options['editable']) {
//            $builder->addWidget('add', AddLinkType::class, [
//                'route' => 'app_admin_datatableaction_edit',
//                'xhr' => true
//            ]);
//        }
//
//        // Export button (use to export data)
//        if ($options['exportable']) {
//            $builder->addWidget('export', ButtonDropdownType::class, [
//                'icon' => 'mdi mdi-file-download-outline',
//                'build' => function (WidgetBuilder $builder) {
//                    $builder->add('export_filtered', LinkType::class, [
//                        'route' => 'app_admin_datatableaction_dumpfiltered',
//                        'attr' => ['data-export' => self::EXPORT_FILTER]
//                    ]);
//                    $builder->add('export_selected', LinkType::class, [
//                        'route' => 'app_admin_datatableaction_dumpselected',
//                        'attr' => ['data-export' => self::EXPORT_SELECTION]
//                    ]);
//                }
//            ]);
//        }
    }

    /**
     * {@inheritdoc}
     */
    public function buildTable(DataTableBuilder $builder, array $options)
    {
        // Checkbox column (use to select data exported)
//        if ($options['exportable']) {
//            $builder->add('select', CheckBoxColumnType::class);
//        }

//        $builder->add('date', DateColumnType::class, [
//            'order' => 'DESC',
//            'format' => 'd M Y',
//            'drag_handle' => $options['row_reorder'] // Use this column to drag if row_reorder is true
//        ]);
        $builder->add('nom', PropertyColumnType::class);
        $builder->add('prenom', PropertyColumnType::class);

//        $builder->add('detail', PropertyColumnType::class);
//
//        $builder->add('cost', PropertyColumnType::class, [
//            'is_safe_html' => true,
//            'renderer' => function (SpaceMission $s) {
//                return null === $s->cost ? '' : sprintf('<span class="badge badge-primary">%.2f m</span>', $s->cost);
//            }
//        ]);

//        $builder->add('rocketStatus', StatusColumnType::class);
//
//        $builder->add('missionStatus', StatusColumnType::class);

//        // Links / Actions column (use to edit data)
//        if ($options['editable']) {
//            $builder->add('links', WidgetColumnType::class, [
//                'build' => function (WidgetBuilder $builder, SpaceMission $s) {
//                    $builder->add('add', RowEditLinkType::class, [
//                        'route' => 'app_admin_datatableaction_edit',
//                        'route_params' => ['id' => $s->id]
//                    ]);
//
//                    $builder->add('delete', RowDeleteLinkType::class, [
//                        'route' => 'app_admin_datatableaction_delete',
//                        'route_params' => ['id' => $s->id]
//                    ]);
//                }
//            ]);
//        }

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Etudiant::class,
            'fetch_join_collection' => false,
            'query' => function(QueryBuilder $qb, array $formData) use ($options) {
//                if ($options['row_reorder']) {
//                    $qb->orderBy('e.nom', 'ASC');
//                }

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.nom) LIKE :search');
                    $qb->orWhere('LOWER(e.prenom) LIKE :search');
                    $qb->setParameter('search', '%' . $formData['search'] . '%');
                }

//                if (isset($formData['groupe'])) {
//                    $qb->andWhere('e.groupe = :groupe');
//                    $qb->setParameter('groupe', $formData['groupe']);
//                }

//                if (isset($formData['from'])) {
//                    $qb->andWhere('e.date >= :from');
//                    $qb->setParameter('from', $formData['from']);
//                }
//
//                if (isset($formData['to'])) {
//                    $qb->andWhere('e.date <= :to');
//                    $qb->setParameter('to', $formData['to']);
//                }

//                if ($options['mission_status']) {
//                    $qb->andWhere('e.missionStatus = :_missionStatus');
//                    $qb->setParameter('_missionStatus', $options['mission_status']);
//                }
            }
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'row_reorder' => false,
            'orderable' => function(Options $options) {
                return !$options['row_reorder'];
            },
        ]);

//        $resolver
//            ->define('administration_etudiant_show')
//            ->default(true)
//            ->allowedTypes('bool');
//
//        $resolver
//            ->define('exportable')
//            ->default(false)
//            ->allowedTypes('bool');

//        $resolver
//            ->define('editable')
//            ->default(false)
//            ->allowedTypes('bool');

//        // filter table depending of options
//        $resolver
//            ->define('mission_status')
//            ->default(null)
//            ->allowedValues(
//                SpaceMission::MISSION_FAILURE,
//                SpaceMission::MISSION_PARTIAL_FAILURE,
//                SpaceMission::MISSION_PRELAUNCH_FAILURE,
//                SpaceMission::MISSION_SUCCESS,
//                null
//            );
    }
}
