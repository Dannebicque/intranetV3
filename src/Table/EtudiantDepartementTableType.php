<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/EtudiantDepartementTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:43
 */

namespace App\Table;

use App\Entity\Bac;
use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Form\Type\SearchType;
use App\Repository\SemestreRepository;
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

class EtudiantDepartementTableType extends TableType
{
    private ?Departement $departement = null;

    public function __construct(private readonly CsrfTokenManagerInterface $csrfToken)
    {
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('semestre', EntityType::class, [
            'class' => Semestre::class,
            'choice_label' => 'displayAvecTypeDiplome',
            'required' => false,
            'placeholder' => 'Filtrer par semestre',
            'query_builder' => fn (SemestreRepository $semestreRepository) => $semestreRepository->findByDepartementBuilder($this->departement),
        ]);
        $builder->addFilter('bac', EntityType::class, [
            'class' => Bac::class,
            'choice_label' => 'libelle',
            'required' => false,
            'placeholder' => 'Filtrer par bac',
        ]);

        $builder->addWidget('export', ExportDropdownType::class, [
            'route' => 'administration_all_etudiant_export',
        ]);

        $builder->addColumn('numetudiant', PropertyColumnType::class,
            ['label' => 'table.numetudiant', 'translation_domain' => 'messages']);
        $builder->addColumn('nom', PropertyColumnType::class,
            ['label' => 'table.nom', 'translation_domain' => 'messages', 'order' => 'ASC']);
        $builder->addColumn('prenom', PropertyColumnType::class,
            ['label' => 'table.prenom', 'translation_domain' => 'messages']);
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

        $builder->setLoadUrl('administration_etudiant_index');

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
                    ->where('e.departement = :departement')
                    ->setParameter('departement', $this->departement->getId());

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.nom) LIKE :search');
                    $qb->orWhere('LOWER(e.prenom) LIKE :search');
                    $qb->setParameter('search', '%'.$formData['search'].'%');
                }
            },
        ]);
    }

    public function configureOptions(
        OptionsResolver $resolver
    ): void {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'orderable' => true,
            'departement' => null,
            'exportable' => true,
        ]);
    }
}
