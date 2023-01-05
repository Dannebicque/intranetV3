<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/PrevisionnelTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/01/2023 17:48
 */

namespace App\Table;

use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Entity\PersonnelDepartement;
use App\Entity\Semestre;
use App\Form\Type\SearchType;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use App\Table\ColumnType\DepartementsColumnType;
use App\Table\ColumnType\TypePersonnelColumnType;
use DavidAnnebicque\TableBundle\Adapter\EntityAdapter;
use DavidAnnebicque\TableBundle\Column\PropertyColumnType;
use DavidAnnebicque\TableBundle\Column\WidgetColumnType;
use DavidAnnebicque\TableBundle\TableBuilder;
use DavidAnnebicque\TableBundle\TableType;
use DavidAnnebicque\TableBundle\Widget\Type\ExportDropdownType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDeleteLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowEditLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowShowLinkType;
use DavidAnnebicque\TableBundle\Widget\WidgetBuilder;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class PrevisionnelTableType extends TableType
{
    protected Departement $departement;
    protected AnneeUniversitaire $anneeUniversitaire;

    public function __construct(
        private TypeMatiereManager $typeMatiereManager,
        private readonly CsrfTokenManagerInterface $csrfToken
    ) {
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $this->anneeUniversitaire = $options['anneeUniversitaire'];
        $matieres = $this->typeMatiereManager->findByDepartement($this->departement);
        $tabMatieres = [];

        foreach ($matieres as $matiere) {
            $tabMatieres[$matiere->display] = $matiere->getTypeIdMatiere();
        }

        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('semestre', EntityType::class, [
            'attr' => ['data-controller' => 'symfony--ux-autocomplete--autocomplete'],
            'class' => Semestre::class,
            'query_builder' => fn(SemestreRepository $semestreRepository
            ) => $semestreRepository->findByDepartementBuilder($this->departement),
            'choice_label' => 'display',
            'required' => false,
            'placeholder' => 'Filtrer par semestre',
        ]);
        $builder->addFilter('personnel', EntityType::class, [
            'class' => Personnel::class,
            'attr' => ['data-controller' => 'symfony--ux-autocomplete--autocomplete'],
            'query_builder' => fn(PersonnelRepository $personnelRepository
            ) => $personnelRepository->findByDepartementBuilder($this->departement),
            'choice_label' => 'display',
            'required' => false,
            'placeholder' => 'Filtrer par enseignant',
        ]);
        $builder->addFilter('matiere', ChoiceType::class, [
            'choices' => $tabMatieres,
            'required' => false,
            'attr' => ['data-controller' => 'symfony--ux-autocomplete--autocomplete', 'class' => "form-select"],
            'placeholder' => 'Filtrer par matière',
        ]);
        $builder->addFilter('type', ChoiceType::class, [
            'choices' => [
                'Tous' => '',
                'Permanents' => Personnel::PERMANENT,
                'Vacataires' => Personnel::VACATAIRE,
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
        $builder->addColumn('type', TypePersonnelColumnType::class,
            ['label' => 'table.typeUser']);
        $builder->addColumn('departements', DepartementsColumnType::class,
            [
                'label' => 'table.departements',
            ]);

        $builder->addColumn('mail_univ', PropertyColumnType::class,
            ['label' => 'table.mail_univ']);


        $builder->setLoadUrl('sa_rh_index');
        $builder->addColumn('numero_harpege', PropertyColumnType::class,
            ['label' => 'table.numero_harpege']);
        $builder->addColumn('username', PropertyColumnType::class,
            ['label' => 'table.username']);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function(WidgetBuilder $builder, Personnel $s) {
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
                        'data-csrf' => $this->csrfToken->getToken('delete' . $s->getId()),
                    ],
                ]);
            },
        ]);


        $builder->useAdapter(EntityAdapter::class, [
            'class' => Personnel::class,
            'fetch_join_collection' => true,
            'query' => function(QueryBuilder $qb, array $formData) {
                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.nom) LIKE :search');
                    $qb->orWhere('LOWER(e.prenom) LIKE :search');
                    $qb->setParameter('search', '%' . $formData['search'] . '%');
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
    ): void {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'orderable' => true,
            'exportable' => true,
            'departement' => null,
            'anneeUniversitaire' => null,
        ]);
    }
}
