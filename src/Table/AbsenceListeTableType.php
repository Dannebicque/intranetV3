<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/AbsenceListeTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/09/2022 14:23
 */

namespace App\Table;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyAbsences;
use App\Components\Table\Column\BadgeSeuilColumnType;
use App\Components\Table\Column\PropertyColumnType;
use App\Components\Table\Column\WidgetColumnType;
use App\Components\Table\DTO\TableResult;
use App\Components\Table\DTO\TableState;
use App\Components\Table\TableBuilder;
use App\Components\Table\TableType;
use App\Components\Widget\Type\ExportDropdownType;
use App\Components\Widget\Type\RowLinkType;
use App\Components\Widget\WidgetBuilder;
use App\DTO\AbsencesEtudiant;
use App\Entity\AnneeUniversitaire;
use App\Entity\Semestre;
use App\Form\Type\SearchType;
use App\Table\ColumnType\EtudiantColumnType;
use App\Table\ColumnType\GroupeEtudiantColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AbsenceListeTableType extends TableType
{
    private ?Semestre $semestre = null;
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    public function __construct(
        private readonly TypeMatiereManager $typeMatiereManager,
        private readonly MyAbsences $myAbsences,
    ) {
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->semestre = $options['semestre'];
        $this->anneeUniversitaire = $options['anneeUniversitaire'];

        $builder->addFilter('search', SearchType::class);
//        $builder->addFilter('groupe', EntityType::class, [
//            'class' => Groupe::class,
//            'query_builder' => function(GroupeRepository $groupeRepository) {
//                return $groupeRepository->findBySemestreBuilder($this->semestre);
//            },
//            'choice_label' => 'display',
//            'required' => false,
//            'placeholder' => 'Filtrer par groupe',
//        ]);

        $builder->addWidget('export', ExportDropdownType::class, [
            'route' => 'administration_absences_semestre_liste_export',
            'route_params' => [
                'semestre' => $this->semestre->getId(),
            ],
        ]);

        $builder->addColumn('etudiant', EtudiantColumnType::class,
            ['label' => 'table.etudiant']);
        $builder->addColumn('etudiantGroupes', GroupeEtudiantColumnType::class,
            ['label' => 'table.groupe']);
        $builder->addColumn('nbCoursManques', BadgeSeuilColumnType::class,
            [
                'label' => 'table.nb_cours_manques',
                'seuils' => [
                    5 => 'bg-success',
                    10 => 'bg-warning',
                    20 => 'bg-danger',
                ],
                'badge_defaut' => 'bg-dark',
            ]);
        $builder->addColumn('dureeCoursManques', PropertyColumnType::class,
            [
                'label' => 'table.duree_cours_manques',
                'format_datetime' => 'H:i',
            ]);
        $builder->addColumn('nbDemiJournee', BadgeSeuilColumnType::class,
            [
                'label' => 'table.nb_demi_journee',
                'seuils' => [
                    5 => 'bg-success',
                    10 => 'bg-warning',
                    20 => 'bg-danger',
                ],
                'badge_defaut' => 'bg-dark',
            ]);
        $builder->addColumn('nbNonJustifie', BadgeSeuilColumnType::class,
            [
                'label' => 'table.nb_non_justifies',
                'seuils' => [
                    5 => 'bg-success',
                    10 => 'bg-warning',
                    20 => 'bg-danger',
                ],
                'badge_defaut' => 'bg-dark',
            ]);
        $builder->addColumn('nbJustifie', BadgeSeuilColumnType::class,
            [
                'label' => 'table.nb_justifies',
                'seuils' => [
                    5 => 'bg-success',
                    10 => 'bg-warning',
                    20 => 'bg-danger',
                ],
                'badge_defaut' => 'bg-dark',
            ]);

        $builder->setLoadUrl('administration_absences_semestre_liste',
            ['semestre' => $this->semestre->getId()]);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, AbsencesEtudiant $s) {
                $builder->add('profil', RowLinkType::class, [
                    'title' => 'table.details_absences',
                    'icon' => 'fas fa-eye',
                    'target' => '_blank',
                    'attr' => [
                        'class' => 'btn btn-info btn-outline btn-square',
                        'data-bs-toggle' => 'tooltip',
                        'data-bs-placement' => 'bottom',
                    ],
                    'route' => 'user_profil',
                    'route_params' => [
                        'type' => 'etudiant',
                        'slug' => $s->etudiant->getSlug(),
                        'onglet' => 'absences',
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(function (TableState $state) {
            $orders = $state->getOrderBy();
            $t = [];

            if (false === $this->semestre->getDiplome()->isApc()) {
                $matieres = $this->typeMatiereManager->findBySemestre($this->semestre);
            } else {
                $matieres = $this->typeMatiereManager->findByReferentielOrdreSemestre($this->semestre, $this->semestre->getDiplome()->getReferentiel());
            }

            $data = $this->myAbsences->getAbsencesSemestreDto($matieres, $this->semestre, $this->anneeUniversitaire);

            if (count($orders) > 0) {
                foreach ($orders as $order) {
                    // pour gérer le tri multiple
                    $t = [];
                    foreach ($data as $key => $d) {
                        $t[$key] = $d->{$order[0]->getOption('id')};
                    }
                    if ('ASC' === $order[1]) {
                        asort($t);
                    } else {
                        arsort($t);
                    }
                }

                $results = [];
                foreach ($t as $k => $v) {
                    $results[] = $data[$k];
                }

                $data = $results;
            }

            $pageData = array_slice($data, $state->getStart(), $state->getLength());

            return new TableResult($pageData, count($data));
        });
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'orderable' => true,
            'semestre' => null,
            'anneeUniversitaire' => null,
            'exportable' => true,
        ]);
    }
}
