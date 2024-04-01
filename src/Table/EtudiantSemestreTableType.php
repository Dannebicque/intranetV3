<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/EtudiantSemestreTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/03/2024 18:35
 */

namespace App\Table;

use App\Entity\Bac;
use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Form\Type\SearchType;
use App\Repository\GroupeRepository;
use App\Repository\SemestreRepository;
use App\Table\ColumnType\GroupeEtudiantColumnType;
use Dannebicque\TableBundle\Adapter\EntityAdapter;
use Dannebicque\TableBundle\Column\PropertyColumnType;
use Dannebicque\TableBundle\Column\SelectColumnType;
use Dannebicque\TableBundle\Column\WidgetColumnType;
use Dannebicque\TableBundle\TableBuilder;
use Dannebicque\TableBundle\TableType;
use Dannebicque\TableBundle\Widget\Type\ExportDropdownType;
use Dannebicque\TableBundle\Widget\Type\RowDeleteLinkType;
use Dannebicque\TableBundle\Widget\Type\RowEditLinkType;
use Dannebicque\TableBundle\Widget\Type\RowShowLinkType;
use Dannebicque\TableBundle\Widget\Type\SelectChangeType;
use Dannebicque\TableBundle\Widget\WidgetBuilder;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class EtudiantSemestreTableType extends TableType
{
    private ?Semestre $semestre = null;
    private ?Departement $departement = null;

    public function __construct(private readonly CsrfTokenManagerInterface $csrfToken)
    {
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->semestre = $options['semestre'];
        $this->departement = $options['departement'];

        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('groupe', EntityType::class, [
            'class' => Groupe::class,
            'query_builder' => fn (GroupeRepository $groupeRepository) => $groupeRepository->findBySemestreBuilder($this->semestre),
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

        $builder->addWidget('export', ExportDropdownType::class, [
            'route' => 'administration_etudiant_semestre_export',
            'route_params' => [
                'semestre' => $this->semestre->getId(),
            ],
        ]);

        $builder->addColumn('nom', PropertyColumnType::class,
            ['label' => 'table.nom', 'translation_domain' => 'messages', 'order' => 'ASC']);
        $builder->addColumn('prenom', PropertyColumnType::class,
            ['label' => 'table.prenom', 'translation_domain' => 'messages']);
        $builder->addColumn('numEtudiant', PropertyColumnType::class,
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
            'build' => function (WidgetBuilder $builder, Etudiant $s) {
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
            'build' => function (WidgetBuilder $builder, Etudiant $s) {
                $builder->add('semestre', SelectChangeType::class, [
                    'route' => 'adm_etudiant_edit_ajax',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'post_params' => [
                        'field' => 'semestre',
                    ],
                    'query_builder' => fn (SemestreRepository $semestreRepository) => $semestreRepository->findByDepartementBuilder($this->departement),
                    'value' => $s->getSemestre()?->getId(),
                    'entity' => Semestre::class,
                    'choice_label' => 'libelle',
                ]);
            },
        ]);

        $builder->addColumn('departement', WidgetColumnType::class, [
            'label' => 'table.departement',
            'translation_domain' => 'messages',
            'build' => function (WidgetBuilder $builder, Etudiant $s) {
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
            'build' => function (WidgetBuilder $builder, Etudiant $s) {
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
                    'route' => 'administration_etudiant_delete',
                    'route_params' => ['uuid' => $s->getUuidString()],
                    'attr' => [
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

                if (isset($formData['groupe']) && '' !== trim($formData['groupe'])) {
                    $qb->innerJoin('e.groupes', 'g');
                    $qb->andWhere('g.id = :groupe');
                    $qb->setParameter('groupe', $formData['groupe']);
                }
            },
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'orderable' => true,
            'semestre' => null,
            'departement' => null,
            'exportable' => true,
        ]);
    }
}
