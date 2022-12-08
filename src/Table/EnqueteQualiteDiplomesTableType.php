<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/EnqueteQualiteDiplomesTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Table;

use App\Entity\Diplome;
use App\Form\Type\DiplomeEntityType;
use App\Form\Type\SearchType;
use App\Form\Type\TypeDiplomeEntityType;
use App\Table\ColumnType\NbEtudiantsColumnType;
use App\Table\ColumnType\SemestresAvecActifColumnType;
use DavidAnnebicque\TableBundle\Adapter\EntityAdapter;
use DavidAnnebicque\TableBundle\Column\EntityColumnType;
use DavidAnnebicque\TableBundle\Column\PropertyColumnType;
use DavidAnnebicque\TableBundle\DTO\Table;
use DavidAnnebicque\TableBundle\TableBuilder;
use DavidAnnebicque\TableBundle\TableType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EnqueteQualiteDiplomesTableType extends TableType
{
    public function buildTable(TableBuilder $builder, array $options): void
    {
        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('diplome', DiplomeEntityType::class);
        $builder->addFilter('typeDiplome', TypeDiplomeEntityType::class);

        $builder->addColumn('typeDiplome', EntityColumnType::class,
            ['label' => 'table.typeDiplome', 'display_field' => 'libelle', 'order' => Table::SORT_ASCENDING]);
        $builder->addColumn('libelle', PropertyColumnType::class, ['label' => 'table.libelle']);
        $builder->addColumn('id', NbEtudiantsColumnType::class,
            ['label' => 'table.nbEtudiants', 'effectifs' => $options['effectifs']]);
        $builder->addColumn('semestres', SemestresAvecActifColumnType::class, ['label' => 'table.semestre']);

        $builder->setLoadUrl('administratif_enquete_etudiant_index');

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Diplome::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                $qb->where('e.actif = true');

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
            'effectifs' => null,
            'translation_domain' => 'table',
        ]);
    }
}
