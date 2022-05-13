<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ScolariteDiplomesTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/05/2022 15:13
 */

namespace App\Table;

use App\Components\Table\Adapter\EntityAdapter;
use App\Components\Table\Column\BooleanColumnType;
use App\Components\Table\Column\EntityColumnType;
use App\Components\Table\Column\PropertyColumnType;
use App\Components\Table\Column\WidgetColumnType;
use App\Components\Table\DTO\Table;
use App\Components\Table\TableBuilder;
use App\Components\Table\TableType;
use App\Components\Widget\Type\RowShowLinkType;
use App\Components\Widget\WidgetBuilder;
use App\Entity\Diplome;
use App\Form\Type\DiplomeEntityType;
use App\Form\Type\SearchType;
use App\Form\Type\TypeDiplomeEntityType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ScolariteDiplomesTableType extends TableType
{
    public function buildTable(TableBuilder $builder, array $options): void
    {
        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('diplome', DiplomeEntityType::class);
        $builder->addFilter('typeDiplome', TypeDiplomeEntityType::class);

        $builder->addColumn('typeDiplome', EntityColumnType::class,
            ['label' => 'table.typeDiplome', 'display_field' => 'libelle', 'order' => Table::SORT_ASCENDING]);
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
