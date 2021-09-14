<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/EtudiantSemestreTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/09/2021 18:19
 */

namespace App\Table;

use App\Components\Table\Adapter\EntityAdapter;
use App\Components\Table\Column\PropertyColumnType;
use App\Components\Table\Column\SelectColumnType;
use App\Components\Table\Column\WidgetColumnType;
use App\Components\Table\TableBuilder;
use App\Components\Table\TableType;
use App\Components\Widget\Type\ButtonDropdownType;
use App\Components\Widget\Type\LinkType;
use App\Components\Widget\Type\RowDeleteLinkType;
use App\Components\Widget\Type\RowEditLinkType;
use App\Components\Widget\Type\RowShowLinkType;
use App\Components\Widget\Type\SelectChangeType;
use App\Components\Widget\WidgetBuilder;
use App\Entity\Bac;
use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Form\Type\SearchType;
use App\Repository\GroupeRepository;
use App\Repository\SemestreRepository;
use App\Table\ColumnType\GroupeEtudiantColumnType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class EtudiantSemestreTableType extends TableType
{
    private ?Semestre $semestre;
    private ?Departement $departement;
    private CsrfTokenManagerInterface $csrfToken;

    public function __construct(CsrfTokenManagerInterface $csrfToken)
    {
        $this->csrfToken = $csrfToken;
    }

    public function buildTable(TableBuilder $builder, array $options)
    {
        $this->semestre = $options['semestre'];
        $this->departement = $options['departement'];

        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('groupe', EntityType::class, [
            'class' => Groupe::class,
            'query_builder' => function(GroupeRepository $groupeRepository) {
                return $groupeRepository->findBySemestreBuilder($this->semestre);
            },
            'choice_label' => 'display',
            'required' => false,
            'placeholder' => 'Filtrer par groupe',
        ]);
        $builder->addFilter('bac', EntityType::class, [
            'class' => Bac::class,
            'choice_label' => 'libelle',
            'required' => false,
            'placeholder' => 'Filtrer par bac',
        ]);

//        // Export button (use to export data)
        $builder->addWidget('export', ButtonDropdownType::class, [
            'icon' => 'fas fa-download',
            'text' => '',
            'attr' => ['data-toggle' => 'dropdown'],
            'build' => function (WidgetBuilder $builder) {
                $builder->add('pdf', LinkType::class, [
                    'route' => 'administration_rattrapage_export',
                    'route_params' => ['semestre' => $this->semestre->getId(), '_format' => 'pdf'],
                ]);
                $builder->add('csv', LinkType::class, [
                    'route' => 'administration_rattrapage_export',
                    'route_params' => ['semestre' => $this->semestre->getId(), '_format' => 'csv'],
                ]);
                $builder->add('excel', LinkType::class, [
                    'route' => 'administration_rattrapage_export',
                    'route_params' => ['semestre' => $this->semestre->getId(), '_format' => 'xlsx'],
                ]);
            },
        ]);

        $builder->addColumn('nom', PropertyColumnType::class,
            ['label' => 'table.nom', 'translation_domain' => 'messages', 'order' => 'ASC']);
        $builder->addColumn('prenom', PropertyColumnType::class,
            ['label' => 'table.prenom', 'translation_domain' => 'messages']);
        $builder->addColumn('numetudiant', PropertyColumnType::class,
            ['label' => 'table.numetudiant', 'translation_domain' => 'messages']);
        $builder->addColumn('bac', SelectColumnType::class,
            [
                'label' => 'table.bac',
                'translation_domain' => 'messages',
                'entity' => Bac::class,
                'choice_label' => 'libelle',
                'live_update' => true,
                'live_update_path' => 'path_update',
                'live_update_params' => [],
            ]);
        $builder->addColumn('groupes', GroupeEtudiantColumnType::class,
            ['label' => 'table.groupe', 'translation_domain' => 'messages']);

        $builder->setLoadUrl('administration_etudiant_semestre_index', ['semestre' => $this->semestre->getId()]);

        $builder->addColumn('bac', WidgetColumnType::class, [
            'label' => 'table.bac',
            'translation_domain' => 'messages',
            'build' => function(WidgetBuilder $builder, Etudiant $s) {
                $builder->add('bac', SelectChangeType::class, [
                    'route' => 'adm_etudiant_edit_ajax',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'post_params' => [
                        'field' => 'bac',
                    ],
                    'value' => $s->getBac()?->getId(),
                    'entity' => Bac::class,
                    'choice_label' => 'libelle',
                ]);
            },
        ]);

        $builder->addColumn('semestre', WidgetColumnType::class, [
            'label' => 'table.semestre',
            'translation_domain' => 'messages',
            'build' => function(WidgetBuilder $builder, Etudiant $s) {
                $builder->add('semestre', SelectChangeType::class, [
                    'route' => 'adm_etudiant_edit_ajax',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'post_params' => [
                        'field' => 'semestre',
                    ],
                    'query_builder' => function(SemestreRepository $semestreRepository) {
                        return $semestreRepository->findByDepartementBuilder($this->departement);
                    },
                    'value' => $s->getSemestre()?->getId(),
                    'entity' => Semestre::class,
                    'choice_label' => 'libelle',
                ]);
            },
        ]);

        $builder->addColumn('departement', WidgetColumnType::class, [
            'label' => 'table.departement',
            'translation_domain' => 'messages',
            'build' => function(WidgetBuilder $builder, Etudiant $s) {
                $builder->add('departement', SelectChangeType::class, [
                    'route' => 'adm_etudiant_edit_ajax',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'post_params' => [
                        'field' => 'departement',
                    ],
                    'value' => $s->getDepartement()?->getId(),
                    'entity' => Departement::class,
                    'choice_label' => 'libelle',
                ]);
            },
        ]);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function(WidgetBuilder $builder, Etudiant $s) {
                $builder->add('show', RowShowLinkType::class, [
                    'route' => 'user_profil',
                    'route_params' => [
                        'slug' => $s->getSlug(),
                        'type' => 'etudiant',
                    ],
                    'target' => '_blank',
                ]);
                $builder->add('edit', RowEditLinkType::class, [
                    'route' => 'administration_etudiant_edit',
                    'route_params' => [
                        'id' => $s->getId(),
                        'origin' => 'semestre',
                    ],
                    'target' => '_blank',
                ]);
                $builder->add('delete', RowDeleteLinkType::class, [
                    'attr' => [
                        'data-href' => 'administration_date_delete',
                        'data-uuid' => $s->getId(),
                        'data-csrf' => $this->csrfToken->getToken('delete'.$s->getId()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Etudiant::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                $qb
                    ->where('e.semestre = :semestre')
                    ->setParameter('semestre', $this->semestre->getId());

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.nom) LIKE :search');
                    $qb->orWhere('LOWER(e.prenom) LIKE :search');
                    $qb->setParameter('search', '%'.$formData['search'].'%');
                }
//
//                if (isset($formData['from'])) {
//                    $qb->andWhere('e.dateEval >= :from');
//                    $qb->setParameter('from', $formData['from']);
//                }
//
//                if (isset($formData['to'])) {
//                    $qb->andWhere('e.dateEval <= :to');
//                    $qb->setParameter('to', $formData['to']);
//                }
//
//                if (isset($formData['etat_demande'])) {
//                    $qb->andWhere('e.etat_demande = :etat_demande');
//                    $qb->setParameter('etat_demande', $formData['etat_demande']);
//                }
            },
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'orderable' => true,
            'semestre' => null,
            'departement' => null,
            'exportable' => true,
        ]);
    }
}