<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/BuRapportTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/01/2026 10:38
 */

namespace App\Table;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Entity\StagePeriode;
use App\Entity\StageRapport;
use App\Table\ColumnType\EtudiantColumnType;
use Dannebicque\TableBundle\Adapter\EntityAdapter;
use Dannebicque\TableBundle\Column\BooleanColumnType;
use Dannebicque\TableBundle\Column\PropertyColumnType;
use Dannebicque\TableBundle\Column\WidgetColumnType;
use Dannebicque\TableBundle\TableBuilder;
use Dannebicque\TableBundle\TableType;
use Dannebicque\TableBundle\Widget\Type\RowLinkType;
use Dannebicque\TableBundle\Widget\WidgetBuilder;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\HttpFoundation\RequestStack;

class BuRapportTableType extends TableType
{
    public function __construct(private readonly RequestStack $requestStack)
    {
    }

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
            'data' => $this->departement,
            'placeholder' => 'Sélectionner un département',
            'attr' => [
                'onchange' => 'this.form.requestSubmit();',
            ],
        ]);

        $builder->addFilter('annee', EntityType::class, [
            'class' => Annee::class,
            'choice_label' => 'libelle',
            'required' => false,
            'placeholder' => 'Toutes les années',
            'query_builder' => function (EntityRepository $er): QueryBuilder {
                $qb = $er->createQueryBuilder('a')
                    ->innerJoin('a.diplome', 'd')
                    ->where('a.optAlternance = false')
                    ->andWhere('a.actif = true')
                    ->orderBy('a.ordre', 'ASC');

                $departementId = $this->extractEntityId($this->getSelectedDepartementId() ?? $this->departement);
                if (null !== $departementId) {
                    $qb
                        ->andWhere('d.departement = :departement')
                        ->setParameter('departement', $departementId);
                }

                return $qb;
            },
        ]);

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


        $loadUrlDepartementId = $this->extractEntityId($this->getSelectedDepartementId() ?? $this->departement);
        if (null !== $loadUrlDepartementId) {
            $builder->setLoadUrl('sa_bu_index', [
                'filter' => [
                    'departement' => $loadUrlDepartementId,
                ],
            ]);
        } else {
            $builder->setLoadUrl('sa_bu_index');
        }


        $builder->useAdapter(EntityAdapter::class, [
            'class' => StageRapport::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                $departement = $formData['departement'] ?? $this->departement;
                $departementId = $this->extractEntityId($departement);

                $qb
                    ->innerJoin('e.stageEtudiant', 'se')
                    ->innerJoin('se.stagePeriode', 'sp')
                    ->innerJoin(Semestre::class, 's', 'WITH', 'sp.semestre = s.id')
                    ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
                    ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome');

                if (null === $departementId) {
                    $qb->andWhere('1 = 0');
                } else {
                    $qb
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

                $anneeId = $this->extractEntityId($formData['annee'] ?? null);
                if (null !== $anneeId) {
                    $qb
                        ->andWhere('a.id = :annee')
                        ->setParameter('annee', $anneeId);
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

        if ($value instanceof Departement || $value instanceof Semestre || $value instanceof Diplome || $value instanceof StagePeriode || $value instanceof Annee) {
            return $value->getId();
        }

        return $value;
    }

    private function getSelectedDepartementId(): int|string|null
    {
        $request = $this->requestStack->getCurrentRequest();
        if (null === $request) {
            return null;
        }

        $queryFilter = $request->query->all('filter');
        if (isset($queryFilter['departement']) && '' !== $queryFilter['departement']) {
            return $queryFilter['departement'];
        }

        $requestFilter = $request->request->all('filter');
        if (isset($requestFilter['departement']) && '' !== $requestFilter['departement']) {
            return $requestFilter['departement'];
        }

        $payload = $this->getCurrentRequestPayload();

        return $this->findDepartementIdInArray($payload);
    }

    private function findDepartementIdInArray(?array $data): int|string|null
    {
        if (null === $data) {
            return null;
        }

        if (isset($data['filter']) && is_array($data['filter']) && isset($data['filter']['departement']) && '' !== $data['filter']['departement']) {
            return $data['filter']['departement'];
        }

        if (isset($data['departement']) && '' !== $data['departement']) {
            return $data['departement'];
        }

        foreach ($data as $value) {
            if (!is_array($value)) {
                continue;
            }

            $departementId = $this->findDepartementIdInArray($value);
            if (null !== $departementId) {
                return $departementId;
            }
        }

        return null;
    }

    private function getCurrentRequestPayload(): ?array
    {
        $request = $this->requestStack->getCurrentRequest();
        if (null === $request) {
            return null;
        }

        $content = $request->getContent();
        if ('' === $content) {
            return null;
        }

        try {
            return json_decode($content, true, 512, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return null;
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'orderable' => true,
            'toolbar_form_name' => 'filter',
            'departement' => null,
            'diplome' => null,
            'type' => 'administration',
        ]);
    }
}
