<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/PersonnelDepartementTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/10/2021 10:02
 */

namespace App\Table;

use App\Components\Table\Adapter\EntityAdapter;
use App\Components\Table\Column\PropertyColumnType;
use App\Components\Table\Column\WidgetColumnType;
use App\Components\Table\TableBuilder;
use App\Components\Table\TableType;
use App\Components\Widget\Type\ButtonDropdownType;
use App\Components\Widget\Type\ButtonType;
use App\Components\Widget\Type\LinkType;
use App\Components\Widget\Type\ModalLinkType;
use App\Components\Widget\Type\RowDeleteLinkType;
use App\Components\Widget\Type\RowEditLinkType;
use App\Components\Widget\Type\RowLinkType;
use App\Components\Widget\Type\RowShowLinkType;
use App\Components\Widget\WidgetBuilder;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Entity\PersonnelDepartement;
use App\Form\Type\SearchType;
use App\Table\ColumnType\TypePersonnelColumnType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class PersonnelDepartementTableType extends TableType
{
    private ?Departement $departement;
    private bool $autoriseToManageAccess;
    private RouterInterface $router;
    private CsrfTokenManagerInterface $csrfToken;

    public function __construct(
        RouterInterface $router,
        CsrfTokenManagerInterface $csrfToken
    ) {
        $this->csrfToken = $csrfToken;
        $this->router = $router;
    }

    public function buildTable(TableBuilder $builder, array $options)
    {
        $this->departement = $options['departement'];
        $this->type = $options['type'];
        $this->autoriseToManageAccess = $options['autoriseToManageAccess'];

        $builder->addFilter('search', SearchType::class);

        $builder->addFilter('type', ChoiceType::class, [
            'choices' => [
                'Tous' => '',
                'Permanents' => Personnel::PERMANENT,
                'Vacataires' => Personnel::VACATAIRE,
                'Admin./Tech.' => Personnel::ADMINISTRATIF,
            ],
            'required' => true,
            'placeholder' => 'Filtrer par Type',
            'expanded' => true,
            'multiple' => false,
        ]);

        // Export button (use to export data)
        $builder->addWidget('export', ButtonDropdownType::class, [
            'icon' => 'fas fa-download',
            'text' => '',
            'attr' => ['data-toggle' => 'dropdown'],
            'build' => function(WidgetBuilder $builder) {
                $builder->add('pdf', LinkType::class, [
                    'route' => 'administration_personnel_export',
                    'route_params' => ['_format' => 'pdf'],
                ]);
                $builder->add('csv', LinkType::class, [
                    'route' => 'administration_all_etudiant_export',
                    'route_params' => ['_format' => 'csv'],
                ]);
                $builder->add('excel', LinkType::class, [
                    'route' => 'administration_all_etudiant_export',
                    'route_params' => ['_format' => 'xlsx'],
                ]);
            },
        ]);

        $builder->addColumn('nom', PropertyColumnType::class,
            ['label' => 'table.nom', 'translation_domain' => 'messages', 'order' => 'ASC']);
        $builder->addColumn('prenom', PropertyColumnType::class,
            ['label' => 'table.prenom', 'translation_domain' => 'messages']);
        $builder->addColumn('type', TypePersonnelColumnType::class,
            ['label' => 'table.typeUser', 'translation_domain' => 'messages']);
        $builder->addColumn('poste_interne', PropertyColumnType::class,
            [
                'label' => 'table.poste_interne',
                'translation_domain' => 'messages',
            ]); //todo: colonne contact pour afficher l'info selon le type
        $builder->addColumn('entreprise', PropertyColumnType::class,
            ['label' => 'table.entreprise', 'translation_domain' => 'messages']);
        $builder->addColumn('numero_harpege', PropertyColumnType::class,
            ['label' => 'table.numero_harpege', 'translation_domain' => 'messages']);
        $builder->addColumn('mail_univ', PropertyColumnType::class,
            ['label' => 'table.mail_univ', 'translation_domain' => 'messages']);

        $builder->setLoadUrl('administration_personnel_index');
        $autoriseToManageAccess = $this->autoriseToManageAccess;
        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function(WidgetBuilder $builder, Personnel $s) use ($autoriseToManageAccess) {
                if (true === $autoriseToManageAccess) {
                    $builder->add('droits', ButtonType::class, [
                        'class' => 'btn btn-warning-outline mr-1',
                        'icon' => 'fas fa-key',
                        'attr' => [
                            'data-size' => 'lg',
                            'data-confirm-text' => 'Fermer',
                            'data-placement' => 'bottom',
                            'data-title' => 'Gestion des droits des utilisateurs',
                            'data-provide' => 'modaler tooltip',
                            'data-url' => $this->router->generate('administration_personnel_droit',
                                ['personnel' => $s->getId()])
                        ]
                    ]);
                }

                $builder->add('show', RowShowLinkType::class, [
                    'route' => 'user_profil',
                    'route_params' => [
                        'slug' => $s->getSlug(),
                        'type' => 'personnel',
                    ],
                    'target' => '_blank',
                ]);
                $builder->add('edit', RowEditLinkType::class, [
                    'route' => 'administration_personnel_edit',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'target' => '_blank',
                ]);
                $builder->add('delete', RowDeleteLinkType::class, [
                    'attr' => [
                        'data-href' => 'administration_personnel_delete',
                        'data-uuid' => $s->getId(),
                        'data-csrf' => $this->csrfToken->getToken('delete' . $s->getId()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Personnel::class,
            'fetch_join_collection' => true,
            'query' => function(QueryBuilder $qb, array $formData) {
                $qb
                    ->innerJoin(PersonnelDepartement::class, 'pf', 'WITH', 'pf.personnel = e.id')
                    ->where('pf.departement = :departement')
                    ->setParameter('departement', $this->departement->getId());

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.nom) LIKE :search');
                    $qb->orWhere('LOWER(e.prenom) LIKE :search');
                    $qb->setParameter('search', '%' . $formData['search'] . '%');
                }

                if (isset($formData['type']) && '' !== $formData['type']) {
                    if (Personnel::ADMINISTRATIF === $formData['type']) {
                        $q = 'e.statut = ' . $qb->expr()->literal(Personnel::ADMINISTRATIF) . ' OR e.statut = ' . $qb->expr()->literal(Personnel::TECHNICIEN) . ' OR e.statut = ' . $qb->expr()->literal(Personnel::ASSISTANTE);
                        $qb->andWhere($q);
                    } else {
                        $qb->andWhere('e.typeUser = :type');
                        $qb->setParameter('type', $formData['type']);
                    }
                }
            },
        ]);
    }

    public function configureOptions(
        OptionsResolver $resolver
    ) {
        $resolver->setDefaults([
            'orderable' => true,
            'departement' => null,
            'type' => null,
            'exportable' => true,
            'autoriseToManageAccess' => null,
        ]);
    }
}
