<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ArticleTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 19:43
 */

namespace App\Table;

use App\Components\Table\Adapter\EntityAdapter;
use App\Components\Table\Column\BadgeColumnType;
use App\Components\Table\Column\DateColumnType;
use App\Components\Table\Column\PropertyColumnType;
use App\Components\Table\Column\WidgetColumnType;
use App\Components\Table\TableBuilder;
use App\Components\Table\TableType;
use App\Components\Widget\Type\RowLinkType;
use App\Components\Widget\Type\RowShowLinkType;
use App\Components\Widget\WidgetBuilder;
use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\QuestionnaireQualite;
use App\Entity\Semestre;
use App\Form\Type\DatePickerType;
use App\Repository\SemestreRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QualiteTableType extends TableType
{
    private ?Departement $departement = null;

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder->addFilter('from', DatePickerType::class, [
            'input_prefix_text' => 'Du',
        ]);
        $builder->addFilter('to', DatePickerType::class, [
            'input_prefix_text' => 'Au',
        ]);
        $builder->addFilter('semestre', EntityType::class,
            ['class' => Semestre::class,
                'choice_label' => 'libelle',
                'required' => false,
                'query_builder' => fn (SemestreRepository $semestreRepository) => $semestreRepository->findByDepartementBuilder($this->departement),
        ]);

        $builder->addColumn('titre', PropertyColumnType::class, ['label' => 'table.titre']);
        $builder->addColumn('dateOuverture', DateColumnType::class, ['label' => 'table.dateOuverture']);
        $builder->addColumn('dateFermeture', DateColumnType::class, ['label' => 'table.dateFermeture']);
        $builder->addColumn('semestre', BadgeColumnType::class,
            ['label' => 'table.semestre']);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, QuestionnaireQualite $s) {
                $builder->add('apercu', RowLinkType::class, [
                    'route' => 'administration_qualite_apercu',
                    'icon' => 'fas fa-eye',
                    'attr' => ['class' => 'btn btn-square btn-info-outline me-1'],
                    'route_params' => ['id' => $s->getId()],
                    'xhr' => false,
                ]);
                $builder->add('show', RowShowLinkType::class, [
                    'route' => 'administration_qualite_show',
                    'route_params' => [
                        'id' => $s->getId(),
                    ],
                    'xhr' => false,
                ]);
            },
        ]);

        $builder->setLoadUrl('administration_qualite_index');

        $builder->useAdapter(EntityAdapter::class, [
            'class' => QuestionnaireQualite::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                $qb
                    ->innerJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
                    ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
                    ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
                    ->where('d.departement = :departement')
                    ->setParameter('departement', $this->departement->getId());

                if (isset($formData['from'])) {
                    $qb->andWhere('e.dateOuverture >= :from');
                    $qb->setParameter('from', $formData['from']);
                }

                if (isset($formData['to'])) {
                    $qb->andWhere('e.dateFermeture <= :to');
                    $qb->setParameter('to', $formData['to']);
                }
            },
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'orderable' => true,
            'departement' => null,
        ]);
    }
}
