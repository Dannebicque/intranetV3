<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/PersonnelDepartementTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Table;

use DavidAnnebicque\TableBundle\Adapter\EntityAdapter;
use DavidAnnebicque\TableBundle\Column\ColumnType;
use DavidAnnebicque\TableBundle\Column\PropertyColumnType;
use DavidAnnebicque\TableBundle\Column\WidgetColumnType;
use DavidAnnebicque\TableBundle\TableBuilder;
use DavidAnnebicque\TableBundle\TableType;
use DavidAnnebicque\TableBundle\Widget\Type\ExportDropdownType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDeleteLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowEditLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowShowLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\StimulusButtonModalType;
use DavidAnnebicque\TableBundle\Widget\WidgetBuilder;
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
    private ?Departement $departement = null;

    public function __construct(private readonly RouterInterface $router, private readonly CsrfTokenManagerInterface $csrfToken)
    {
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $autoriseToManageAccess = $options['autoriseToManageAccess'];

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

        $builder->addWidget('export', ExportDropdownType::class, [
            'route' => 'administration_personnel_export',
        ]);

        $builder->addColumn('nom', PropertyColumnType::class,
            ['label' => 'table.nom', 'order' => 'ASC']);
        $builder->addColumn('prenom', PropertyColumnType::class,
            ['label' => 'table.prenom']);
        $builder->addColumn('type', TypePersonnelColumnType::class,
            ['label' => 'table.typeUser']);
        $builder->addColumn('contact_personnel', ColumnType::class,
            [
                'label' => 'table.contact_personnel',
                'render' => fn (Personnel $personnel) => Personnel::VACATAIRE === $personnel->getType() ? $personnel->getEntreprise() : $personnel->getPosteInterne(),
            ]);
        $builder->addColumn('numero_harpege', PropertyColumnType::class,
            ['label' => 'table.numero_harpege']);
        $builder->addColumn('mail_univ', PropertyColumnType::class,
            ['label' => 'table.mail_univ']);

        $builder->setLoadUrl('administration_personnel_index');
        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, Personnel $s) use ($autoriseToManageAccess) {
                if (true === $autoriseToManageAccess) {
                    $builder->add('droits', StimulusButtonModalType::class, [
                        'class' => 'btn btn-warning-outline me-1',
                        'icon' => 'fas fa-key',
                        'modalSize' => 'lg',
                        'modalTitle' => 'Gestion des droits des utilisateurs',
                        'modalUrl' => $this->router->generate('administration_personnel_droit',
                            ['personnel' => $s->getId()]),
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
                    'route' => 'administration_personnel_delete',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'attr' => [
                        'data-csrf' => $this->csrfToken->getToken('delete'.$s->getId()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Personnel::class,
            'fetch_join_collection' => true,
            'query' => function (QueryBuilder $qb, array $formData) {
                $qb
                    ->innerJoin(PersonnelDepartement::class, 'pf', 'WITH', 'pf.personnel = e.id')
                    ->where('pf.departement = :departement')
                    ->setParameter('departement', $this->departement->getId());

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.nom) LIKE :search');
                    $qb->orWhere('LOWER(e.prenom) LIKE :search');
                    $qb->setParameter('search', '%'.$formData['search'].'%');
                }

                if (isset($formData['type']) && '' !== $formData['type']) {
                    if (Personnel::ADMINISTRATIF === $formData['type']) {
                        $q = 'e.statut = '.$qb->expr()->literal(Personnel::ADMINISTRATIF).' OR e.statut = '.$qb->expr()->literal(Personnel::TECHNICIEN).' OR e.statut = '.$qb->expr()->literal(Personnel::ASSISTANTE);
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
    ): void {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'orderable' => true,
            'departement' => null,
            'exportable' => true,
            'autoriseToManageAccess' => null,
        ]);
    }
}
