<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/QuestionnaireQualiteTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 17:38
 */

namespace App\Table;

use App\Components\Table\Adapter\EntityAdapter;
use App\Components\Table\Column\BooleanColumnType;
use App\Components\Table\Column\EntityColumnType;
use App\Components\Table\Column\PropertyColumnType;
use App\Components\Table\Column\WidgetColumnType;
use App\Components\Table\TableBuilder;
use App\Components\Table\TableType;
use App\Components\Widget\Type\RowShowLinkType;
use App\Components\Widget\WidgetBuilder;
use App\Entity\Diplome;
use App\Entity\TypeDiplome;
use App\Form\Type\SearchType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ScolariteDiplomesTableType extends TableType
{
    public function buildTable(TableBuilder $builder, array $options): void
    {
        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('diplome', EntityType::class,
            options: [
                'class' => Diplome::class,
                'choice_label' => 'displayCourt',
                'required' => false,
                'placeholder' => 'filtre.diplome',
                'translation_domain' => 'table',
            ]);
        $builder->addFilter('typeDiplome', EntityType::class,
            [
                'class' => TypeDiplome::class,
                'choice_label' => 'libelle',
                'required' => false,
                'placeholder' => 'filtre.typeDiplome',
                'translation_domain' => 'table',
            ]);

        $builder->addColumn('typeDiplome', EntityColumnType::class,
            ['label' => 'table.typeDiplome', 'display_field' => 'libelle']);
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
        $resolver->setDefaults([
            'orderable' => true,
            'translation_domain' => 'table',
        ]);
    }
}
