<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ScolariteDiplomesTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/11/2026 12:36
 */

namespace App\Table;

use App\Entity\Diplome;
use App\Form\Type\DiplomeEntityType;
use App\Form\Type\SearchType;
use App\Form\Type\TypeDiplomeEntityType;
use App\Form\Type\YesNoType;
use Dannebicque\TableBundle\Adapter\EntityAdapter;
use Dannebicque\TableBundle\Column\BooleanColumnType;
use Dannebicque\TableBundle\Column\EntityColumnType;
use Dannebicque\TableBundle\Column\PropertyColumnType;
use Dannebicque\TableBundle\Column\WidgetColumnType;
use Dannebicque\TableBundle\DTO\Table;
use Dannebicque\TableBundle\TableBuilder;
use Dannebicque\TableBundle\TableType;
use Dannebicque\TableBundle\Widget\Type\RowShowLinkType;
use Dannebicque\TableBundle\Widget\WidgetBuilder;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ScolariteDiplomesTableType extends TableType
{
    public function buildTable(TableBuilder $builder, array $options): void
    {
        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('diplome', DiplomeEntityType::class);
        $builder->addFilter('typeDiplome', TypeDiplomeEntityType::class);
        $builder->addFilter('actif', YesNoType::class, ['label' => 'Diplômes actifs', "data" => 1]);

        $builder->addColumn('typeDiplome', EntityColumnType::class,
            ['label' => 'table.typeDiplome', 'display_field' => 'libelle', 'order' => Table::SORT_ASCENDING, 'order_by' => 't.libelle']);
        $builder->addColumn('libelle', PropertyColumnType::class, ['label' => 'table.libelle']);
        $builder->addColumn('actif', BooleanColumnType::class, ['label' => 'table.actif']);
        $builder->addColumn('anneeUniversitaire', EntityColumnType::class,
            ['label' => 'table.anneeUniversitaire', 'display_field' => 'displayAnneeUniversitaire']);

        $builder->setLoadUrl('sa_scolarite_index');

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, Diplome $s) {
                $builder->add('show', RowShowLinkType::class, [
                    'route' => 'sa_scolarite_diplome',
                    'route_params' => [
                        'diplome' => $s->getId(),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Diplome::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                $qb->join('e.typeDiplome', 't');

                if (isset($formData['actif'])) {
                    $qb->andWhere('e.actif = :actif');
                    $qb->setParameter('actif', $formData['actif']);
                } else {
                    $qb->andWhere('e.actif = 1');
                }

                if (isset($formData['diplome'])) {
                    $qb->andWhere('e.id = :diplome');
                    $qb->setParameter('diplome', $formData['diplome']);
                }

                if (isset($formData['typeDiplome'])) {
                    $qb->andWhere('e.typeDiplome = :typeDiplome');
                    $qb->setParameter('typeDiplome', $formData['typeDiplome']);
                }
            },
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'orderable' => true,
            'translation_domain' => 'table',
        ]);
    }
}
