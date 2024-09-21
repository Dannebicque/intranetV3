<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/PersonnelTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/09/2024 10:05
 */

namespace App\Table;

use App\Entity\Departement;
use App\Entity\Personnel;
use App\Entity\PersonnelDepartement;
use App\Form\Type\SearchType;
use App\Table\ColumnType\DepartementsColumnType;
use App\Table\ColumnType\TypePersonnelColumnType;
use Dannebicque\TableBundle\Adapter\EntityAdapter;
use Dannebicque\TableBundle\Column\PropertyColumnType;
use Dannebicque\TableBundle\Column\WidgetColumnType;
use Dannebicque\TableBundle\TableBuilder;
use Dannebicque\TableBundle\TableType;
use Dannebicque\TableBundle\Widget\Type\ButtonType;
use Dannebicque\TableBundle\Widget\Type\ExportDropdownType;
use Dannebicque\TableBundle\Widget\Type\RowDeleteLinkType;
use Dannebicque\TableBundle\Widget\Type\RowEditLinkType;
use Dannebicque\TableBundle\Widget\Type\RowShowLinkType;
use Dannebicque\TableBundle\Widget\WidgetBuilder;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class PersonnelTableType extends TableType
{
    public function __construct(private readonly CsrfTokenManagerInterface $csrfToken)
    {
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $typeAccess = $options['typeAccess'];

        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('departement', EntityType::class, [
            'class' => Departement::class,
            'choice_label' => 'libelle',
            'required' => false,
            'placeholder' => 'Filtrer par département',
        ]);
        $builder->addFilter('statut', ChoiceType::class, [
            'choices' => [
                'Tous' => '',
                'Permanents' => Personnel::PERMANENT,
                'Vacataires' => Personnel::VACATAIRE,
                'Admin./Tech.' => Personnel::ADMINISTRATIF,
            ],
            'required' => true,
            'placeholder' => 'Filtrer par Type',
            'expanded' => false,
            'multiple' => false,
        ]);

        $builder->addWidget('export', ExportDropdownType::class, [
            'route' => 'administration_personnel_export',
        ]);

        $builder->addColumn('nom', PropertyColumnType::class,
            ['label' => 'table.nom', 'order' => 'ASC']);
        $builder->addColumn('prenom', PropertyColumnType::class,
            ['label' => 'table.prenom']);
        $builder->addColumn('typeUser', TypePersonnelColumnType::class,
            [
                'label' => 'table.typeUser',
            ]);
        $builder->addColumn('departements', DepartementsColumnType::class,
            [
                'label' => 'table.departements',
            ]);

        $builder->addColumn('mail_univ', PropertyColumnType::class,
            ['label' => 'table.mail_univ']);

        if ('qualite' === $typeAccess) {
            $builder->addFilter('droit', ChoiceType::class, [
                'choices' => [
                    'Tous' => '',
                    'Autorisé' => true,
                    'Sans accès' => false,
                ],
                'required' => true,
                'placeholder' => 'Filtrer par droits',
                'expanded' => false,
                'multiple' => false,
            ]);

            $builder->setLoadUrl('sa_qualite_originaux_acces_index');

            $builder->addColumn('links', WidgetColumnType::class, [
                'label' => 'Accès Originaux ?',
                'build' => function (WidgetBuilder $builder, Personnel $s) {
                    switch ($s->isAccessOriginaux()) {
                        case true:
                            $builder->add('originaux.acces.autorise', ButtonType::class, [
                                'class' => 'btn btn-outline btn-success me-1 bx_badge_'.$s->getId(),
                                'title' => 'originaux.acces.autorise',
                                'text' => 'originaux.acces.autorise',
                                'translation_domain' => 'messages',
                            ]);
                            break;
                        case false:
                            $builder->add('originaux.pas.access', ButtonType::class, [
                                'class' => 'btn btn-outline btn-danger me-1 bx_badge_'.$s->getId(),
                                'title' => 'originaux.pas.access',
                                'text' => 'originaux.pas.access',
                                'translation_domain' => 'messages',
                            ]);
                            break;
                    }
                },
            ]);

            $builder->addColumn('modLinks', WidgetColumnType::class, [
                'label' => 'Modifier Accés',
                'build' => function (WidgetBuilder $builder, Personnel $s) {
                    switch ($s->isAccessOriginaux()) {
                        case true:
                            $builder->add('refuser', ButtonType::class, [
                                'class' => 'btn btn-outline btn-danger acces-interdit me-1 bx_btn_'.$s->getId(),
                                'title' => 'Retirer l\'accès à originaux',
                                'icon' => 'fas fa-ban',
                                'text' => ' Retirer ?',
                                'attr' => ['data-personnel' => $s->getId()],
                            ]);
                            break;
                        case false:
                            $builder->add('autorise', ButtonType::class, [
                                'class' => 'btn btn-outline btn-success acces-autorise me-1 bx_btn_'.$s->getId(),
                                'title' => 'Autoriser l\'accès à originaux',
                                'icon' => 'fas fa-check',
                                'text' => ' Autoriser ?',
                                'attr' => ['data-personnel' => $s->getId()],
                            ]);
                            break;
                    }
                },
            ]);
        }

        if ('administratif' === $typeAccess) {
            $builder->setLoadUrl('sa_rh_index');
            $builder->addColumn('nbHeuresService', PropertyColumnType::class,
                ['label' => 'table.service']);
            $builder->addColumn('numero_harpege', PropertyColumnType::class,
                ['label' => 'table.numero_harpege']);
            $builder->addColumn('username', PropertyColumnType::class,
                ['label' => 'table.username']);

            $builder->addColumn('links', WidgetColumnType::class, [
                'build' => function (WidgetBuilder $builder, Personnel $s) {
                    $builder->add('show', RowShowLinkType::class, [
                        'route' => 'sa_rh_personnel_show',
                        'route_params' => ['id' => $s->getId()],
                        'target' => '_blank',
                    ]);
                    $builder->add('edit', RowEditLinkType::class, [
                        'route' => 'sa_rh_personnel_edit',
                        'route_params' => [
                            'id' => $s->getId(),
                        ],
                        'target' => '_blank',
                    ]);
                    $builder->add('delete', RowDeleteLinkType::class, [
                        'route' => 'sa_rh_delete_personnel',
                        'route_params' => ['id' => $s->getId()],
                        'attr' => [
                            'data-csrf' => $this->csrfToken->getToken('delete' . $s->getId()),
                        ],
                    ]);
                },
            ]);
        }

        if ('administration' === $typeAccess) {
            $builder->setLoadUrl('sa_rh_index');
            $builder->addColumn('nbHeuresService', PropertyColumnType::class,
                ['label' => 'table.service']);
            $builder->addColumn('numero_harpege', PropertyColumnType::class,
                ['label' => 'table.numero_harpege']);
            $builder->addColumn('username', PropertyColumnType::class,
                ['label' => 'table.username']);

            $builder->addColumn('links', WidgetColumnType::class, [
                'build' => function (WidgetBuilder $builder, Personnel $s) {
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
                        'route' => 'administration_personnel_delete',
                        'route_params' => ['id' => $s->getId()],
                        'attr' => [
                            'data-csrf' => $this->csrfToken->getToken('delete'.$s->getId()),
                        ],
                    ]);
                },
            ]);
        }

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Personnel::class,
            'fetch_join_collection' => true,
            'query' => function (QueryBuilder $qb, array $formData) {
                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.nom) LIKE :search');
                    $qb->orWhere('LOWER(e.prenom) LIKE :search');
                    $qb->setParameter('search', '%'.$formData['search'].'%');
                }

                if (isset($formData['departement'])) {
                    $qb->innerJoin(PersonnelDepartement::class, 'd', 'WITH', 'e.id = d.personnel');
                    $qb->andWhere('d.departement = :departement');
                    $qb->setParameter('departement', $formData['departement']);
                }

                if (isset($formData['droit'])) {
                    $qb->andWhere('e.accessOriginaux = :droit');
                    $qb->setParameter('droit', $formData['droit']);
                }

                if (isset($formData['statut']) && '' !== $formData['statut']) {
                    if (Personnel::ADMINISTRATIF === $formData['statut']) {
                        $q = 'e.statut = '.$qb->expr()->literal(Personnel::ADMINISTRATIF).' OR e.statut = '.$qb->expr()->literal(Personnel::TECHNICIEN).' OR e.statut = '.$qb->expr()->literal(Personnel::ASSISTANTE);
                        $qb->andWhere($q);
                    } else {
                        $qb->andWhere('e.typeUser = :statut');
                        $qb->setParameter('statut', $formData['statut']);
                    }
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
            'exportable' => true,
            'typeAccess' => 'administration',
            'rh' => false,
        ]);
    }
}
