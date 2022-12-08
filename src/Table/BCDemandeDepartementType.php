<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/BCDemandeDepartementType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Table;

use DavidAnnebicque\TableBundle\Adapter\EntityAdapter;
use DavidAnnebicque\TableBundle\Column\DateColumnType;
use DavidAnnebicque\TableBundle\Column\PropertyColumnType;
use DavidAnnebicque\TableBundle\Column\WidgetColumnType;
use DavidAnnebicque\TableBundle\TableBuilder;
use DavidAnnebicque\TableBundle\TableType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDeleteLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDuplicateLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowEditLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowShowLinkType;
use DavidAnnebicque\TableBundle\Widget\WidgetBuilder;
use App\Entity\BCDemande;
use App\Entity\Departement;
use App\Form\Type\DatePickerType;
use App\Form\Type\SearchType;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class BCDemandeDepartementType extends TableType
{
    private ?Departement $departement = null;

    public function __construct(private readonly CsrfTokenManagerInterface $csrfToken)
    {
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('from', DatePickerType::class, [
            'input_prefix_text' => 'Du',
        ]);
        $builder->addFilter('to', DatePickerType::class, [
            'input_prefix_text' => 'Au',
        ]);
        $builder->addFilter('etat_process', ChoiceType::class, [
            'choices' => [
                'En attente' => BCDemande::BC_PRESTATION_SERVICE,
                'Validé responsable' => BCDemande::BC_PRESTATION_SERVICE,
                'Validé direction' => BCDemande::BC_PRESTATION_SERVICE,
                'Validé Compta/CSA' => BCDemande::BC_PRESTATION_SERVICE,
                'Validé Migo en attente' => BCDemande::BC_PRESTATION_SERVICE,
                'Cloturé' => BCDemande::BC_PRESTATION_SERVICE,
            ],
            'required' => false,
            'placeholder' => 'Etat de la demande',
        ]);

//        $builder->addWidget('export', ExportDropdownType::class, [
//            'route' => 'administration_absence_appel_export',
//            'route_params' => [
//                'semestre' => $this->semestre->getId()
//            ],
//        ]);

        $builder->setLoadUrl('administration_bc_demande_index');

        $builder->addColumn('dateDemandeInitiale', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'd/m/Y',
            'label' => 'table.dateDemandeInitiale',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('objet', PropertyColumnType::class,
            ['label' => 'table.objet', 'translation_domain' => 'messages']);
        $builder->addColumn('montantTTC', PropertyColumnType::class,
            ['label' => 'table.montantTTC', 'translation_domain' => 'messages']);
        $builder->addColumn('etat_process', PropertyColumnType::class,
            ['label' => 'table.etat_process', 'translation_domain' => 'messages']);
        // todo: autres dates/étapes

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, BCDemande $s) {
                $builder->add('duplicate', RowDuplicateLinkType::class, [
                    'route' => 'administration_bc_demande_duplicate',
                    'route_params' => ['id' => $s->getId()],
                    'xhr' => false,
                ]);
                $builder->add('show', RowShowLinkType::class, [
                    'route' => 'administration_bc_demande_show',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
                $builder->add('edit', RowEditLinkType::class, [
                    'route' => 'administration_bc_demande_edit',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
                $builder->add('delete', RowDeleteLinkType::class, [
                    'route' => 'administration_bc_demande_delete',
                    'route_params' => ['id' => $s->getId()],
                    'attr' => [
                        'data-csrf' => $this->csrfToken->getToken('delete'.$s->getId()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => BCDemande::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                $qb->where('e.departement = :departement')
                    ->setParameter('departement', $this->departement->getId())
                    ->orderBy('e.updated', Criteria::DESC);
            },
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'orderable' => true,
            'departement' => null,
        ]);
    }
}
