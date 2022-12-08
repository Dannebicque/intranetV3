<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/HrsTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Table;

use DavidAnnebicque\TableBundle\Adapter\EntityAdapter;
use DavidAnnebicque\TableBundle\Column\EntityColumnType;
use DavidAnnebicque\TableBundle\Column\PropertyColumnType;
use DavidAnnebicque\TableBundle\Column\WidgetColumnType;
use DavidAnnebicque\TableBundle\TableBuilder;
use DavidAnnebicque\TableBundle\TableType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDeleteLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDuplicateLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowEditLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\StimulusButtonModalType;
use DavidAnnebicque\TableBundle\Widget\WidgetBuilder;
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
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class HrsTableType extends TableType
{
    private ?Departement $departement = null;
    private ?int $annee = null;

    public function __construct(private readonly RouterInterface $router, private readonly CsrfTokenManagerInterface $csrfToken)
    {
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $this->annee = $options['annee'];

        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('type', EntityType::class, [
            'class' => TypeHrs::class,
            'choice_label' => 'libelle',
            'required' => false,
            'placeholder' => 'Filtrer par type de HRS/Prime',
            'query_builder' => fn (TypeHrsRepository $typeHrsRepository) => $typeHrsRepository->findAllBuilder(),
        ]);
        $builder->addFilter('personnel', EntityType::class, [
            'class' => Personnel::class,
            'choice_label' => 'displayPr',
            'required' => false,
            'placeholder' => 'Filtrer par personnel',
            'query_builder' => fn (PersonnelRepository $personnelRepository) => $personnelRepository->findByDepartementBuilder($this->departement),
        ]);

        $builder->setLoadUrl('administration_hrs_index', ['annee' => $this->annee]);

        $builder->addColumn('libelle', PropertyColumnType::class,
            ['label' => 'table.libelle', 'translation_domain' => 'messages', 'order' => 'ASC']);
        $builder->addColumn('typeHrs', EntityColumnType::class,
            ['label' => 'table.type_hrs', 'translation_domain' => 'messages',
            'display_field' => 'libelle', 'class' => TypeHrs::class, ]);
        $builder->addColumn('personnel', PersonnelColumnType::class,
            ['label' => 'table.personnel', 'translation_domain' => 'messages']);
        $builder->addColumn('semestreOrDiplome', PropertyColumnType::class,
            ['label' => 'table.semestre_ou_diplome', 'translation_domain' => 'messages']);
        $builder->addColumn('nbHeuresTd', PropertyColumnType::class,
            ['label' => 'table.nb_heures_td', 'translation_domain' => 'messages']);
        $builder->addColumn('commentaire', PropertyColumnType::class,
            ['label' => 'table.commentaire', 'translation_domain' => 'messages']);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, Hrs $s) {
                $builder->add('duplicate', RowDuplicateLinkType::class, [
                    'route' => 'administration_hrs_duplicate',
                    'route_params' => ['id' => $s->getId()],
                    'xhr' => false,
                ]);
                $builder->add('show', StimulusButtonModalType::class, [
                    'text' => false,
                    'class' => 'btn btn-info-outline me-1',
                    'icon' => 'fas fa-info',
                    'modalTitle' => 'Détails de la prime/HRS',
                    'modalUrl' => $this->router->generate('administration_hrs_show',
                        ['id' => $s->getId()]),
                ]);
                $builder->add('edit', RowEditLinkType::class, [
                    'route' => 'administration_hrs_edit',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
                $builder->add('delete', RowDeleteLinkType::class, [
                    'route' => 'administration_hrs_delete',
                    'route_params' => ['id' => $s->getId()],
                    'attr' => [
                        'data-csrf' => $this->csrfToken->getToken('delete'.$s->getId()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Hrs::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                $qb->where('e.departement = :departement')
                    ->andWhere('e.annee = :annee')
                    ->setParameter('departement', $this->departement->getId())
                    ->setParameter('annee', $this->annee);

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.libelle) LIKE :search');
                    $qb->setParameter('search', '%'.$formData['search'].'%');
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

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'orderable' => true,
            'departement' => null,
            'annee' => null,
        ]);
    }
}
