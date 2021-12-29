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
use App\Components\Table\Column\EntityColumnType;
use App\Components\Table\Column\PropertyColumnType;
use App\Components\Table\TableBuilder;
use App\Components\Table\TableType;
use App\Entity\Diplome;
use App\Entity\TypeDiplome;
use App\Form\Type\SearchType;
use App\Table\ColumnType\NbEtudiantsColumnType;
use App\Table\ColumnType\DepartementsColumnType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EnqueteQualiteDiplomesTableType extends TableType
{
    public function buildTable(TableBuilder $builder, array $options): void
    {
        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('diplome', EntityType::class,
            ['class' => Diplome::class, 'choice_label' => 'displayCourt', 'required' => false]);
        $builder->addFilter('typeDiplome', EntityType::class,
            ['class' => TypeDiplome::class, 'choice_label' => 'libelle', 'required' => false]);

        $builder->addColumn('typeDiplome', EntityColumnType::class, ['label' => 'table.typeDiplome', 'display_field' => 'libelle']);
        $builder->addColumn('libelle', PropertyColumnType::class, ['label' => 'table.libelle']);
        $builder->addColumn('id', NbEtudiantsColumnType::class, ['label' => 'table.nbEtudiants','effectifs' => $options['effectifs']]);
        $builder->addColumn('semestres', DepartementsColumnType::class, ['label' => 'table.semestre']);

        $builder->setLoadUrl('administratif_enquete_index');

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Diplome::class,
            'fetch_join_collection' => false,
            'query' => function(QueryBuilder $qb, array $formData) {
                if (isset($formData['diplome'])) {
                    $qb->andWhere('e.id = :diplome');
                    $qb->setParameter('diplome', $formData['diplome']);
                }

                if (isset($formData['typeDiplome'])) {
                    $qb->andWhere('e.type_diplome = :type_diplome');
                    $qb->setParameter('type_diplome', $formData['typeDiplome']);
                }
            },
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'orderable' => true,
            'effectifs' => null,
            'translation_domain' => 'table'
        ]);
    }
}
