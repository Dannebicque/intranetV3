<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/BuRapportTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/01/2026 10:38
 */

namespace App\Table;

use App\Components\Questionnaire\TypeDestinataire\Etudiant;
use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Entity\StagePeriode;
use App\Entity\StageRapport;
use App\Form\Type\DatePickerType;
use App\Repository\StagePeriodeRepository;
use App\Table\ColumnType\EtudiantColumnType;
use Dannebicque\TableBundle\Adapter\EntityAdapter;
use Dannebicque\TableBundle\Column\BooleanColumnType;
use Dannebicque\TableBundle\Column\PropertyColumnType;
use Dannebicque\TableBundle\Column\WidgetColumnType;
use Dannebicque\TableBundle\TableBuilder;
use Dannebicque\TableBundle\TableType;
use Dannebicque\TableBundle\Widget\Type\RowLinkType;
use Dannebicque\TableBundle\Widget\WidgetBuilder;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BuRapportTableType extends TableType
{
    private ?Departement $departement = null;
    private ?Diplome $diplome = null;
    private string $type;

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $this->diplome = $options['diplome'];
        $this->type = $options['type'];

        $builder->addFilter('departement', EntityType::class, [
            'class' => Departement::class,
            'choice_label' => 'libelle',
            'required' => true,
            'placeholder' => 'Sélectionner un département',
        ]);

        $periodeFilterOptions = [
            'class' => StagePeriode::class,
            'choice_label' => static fn(StagePeriode $stagePeriode): string => $stagePeriode->getLibelle() ?? ('Période '.$stagePeriode->getId()),
            'required' => false,
            'placeholder' => 'Filtrer par période de stage',
            'choices' => [],
        ];

        if (null !== $this->departement) {
            $periodeFilterOptions['query_builder'] = fn(StagePeriodeRepository $stagePeriodeRepository
            ) => $stagePeriodeRepository->createQueryBuilder('p')
                ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
                ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
                ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
                ->where('d.departement = :departement')
                ->setParameter('departement', $this->departement->getId())
                ->orderBy('p.anneeUniversitaire', 'DESC')
                ->addOrderBy('p.numeroPeriode', 'ASC');
        }

        $builder->addFilter('stagePeriode', EntityType::class, $periodeFilterOptions);
        $builder->addColumn('stageEtudiant.etudiant', EtudiantColumnType::class, ['label' => 'table.etudiant']);

        $builder->addColumn('motsCles', PropertyColumnType::class, ['label' => 'table.motsCles']);
        $builder->addColumn('confidentialite', BooleanColumnType::class, ['label' => 'table.confidentialite']);


        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, StageRapport $s) {
                $builder->add('show', RowLinkType::class, [
                    'route' => 'app_bu_stage_show_rapport',
                    'route_params' => [
                        'id' => $s->getId(),
                        'type' => $this->type,
                    ],
                    'xhr' => false,
                    'icon' => 'fas fa-eye',
                    'attr' => ['class' => 'btn btn-square btn-primary-outline btn-sm me-1'],
                ]);
                $builder->add('download', RowLinkType::class, [
                    'route' => 'app_bu_stage_download_rapport',
                    'route_params' => [
                        'id' => $s->getId(),
                        'type' => $this->type,
                    ],
                    'xhr' => false,
                    'icon' => 'fas fa-download',
                    'attr' => ['class' => 'btn btn-square btn-primary-outline btn-sm me-1'],
                ]);
            },
        ]);


        $builder->setLoadUrl('sa_bu_index');


        $builder->useAdapter(EntityAdapter::class, [
            'class' => StageRapport::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                $departement = $formData['departement'] ?? $this->departement;
                $departementId = $this->extractEntityId($departement);

                if (null === $departementId) {
                    $qb->andWhere('1 = 0');
                } else {
                    $qb
                        ->innerJoin('e.stageEtudiant', 'se')
                        ->innerJoin('se.stagePeriode', 'sp')
                        ->innerJoin(Semestre::class, 's', 'WITH', 'sp.semestre = s.id')
                        ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
                        ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
                        ->andWhere('d.departement = :departement')
                        ->setParameter('departement', $departementId);
                }

                if (null !== $this->diplome) {
                    $qb
                        ->andWhere('a.diplome = :diplome')
                        ->setParameter('diplome', $this->diplome->getId());
                }

                $stagePeriodeId = $this->extractEntityId($formData['stagePeriode'] ?? null);
                if (null !== $stagePeriodeId) {
                    $qb
                        ->andWhere('sp.id = :stagePeriode')
                        ->setParameter('stagePeriode', $stagePeriodeId);
                }

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

    private function extractEntityId(mixed $value): int|string|null
    {
        if (null === $value || '' === $value) {
            return null;
        }

        if ($value instanceof Departement || $value instanceof Semestre || $value instanceof Diplome || $value instanceof StagePeriode) {
            return $value->getId();
        }

        return $value;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'orderable' => true,
            'departement' => null,
            'diplome' => null,
            'type' => 'administration',
        ]);
    }
}
