<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/AppelSuiviTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Table;

use App\Classes\Edt\EdtManager;
use App\Classes\Matieres\TypeMatiereManager;
use DavidAnnebicque\TableBundle\Widget\Type\ExportDropdownType;
use App\Entity\AnneeUniversitaire;
use App\Entity\Rattrapage;
use App\Entity\Semestre;
use App\Form\Type\DatePickerType;
use App\Form\Type\SearchType;
use App\Repository\GroupeRepository;
use App\Table\ColumnType\MatiereColumnType;
use App\Table\ColumnType\StatusAppelFaitColumnType;
use DavidAnnebicque\TableBundle\Column\DateColumnType;
use DavidAnnebicque\TableBundle\Column\PropertyColumnType;
use DavidAnnebicque\TableBundle\DTO\TableResult;
use DavidAnnebicque\TableBundle\DTO\TableState;
use DavidAnnebicque\TableBundle\TableBuilder;
use DavidAnnebicque\TableBundle\TableType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AppelSuiviTableType extends TableType
{
    private ?Semestre $semestre = null;
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    public function __construct(
        protected GroupeRepository $groupeRepository,
        private readonly TypeMatiereManager $typeMatiereManager,
        protected EdtManager $edtManager)
    {
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->semestre = $options['semestre'];
        $this->anneeUniversitaire = $options['anneeUniversitaire'];

        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('from', DatePickerType::class, [
            'input_prefix_text' => 'Du',
        ]);
        $builder->addFilter('to', DatePickerType::class, [
            'input_prefix_text' => 'au',
        ]);
        $builder->addFilter('etat_appel', ChoiceType::class, [
            'choices' => ['Fait' => Rattrapage::DEMANDE_ACCEPTEE, 'Non fait' => Rattrapage::DEMANDE_REFUSEE, 'cours à venir' => Rattrapage::DEMANDE_FAITE],
            'required' => false,
            'placeholder' => 'Etat de l\'appel',
        ]);

        $builder->addWidget('export', ExportDropdownType::class, [
            'route' => 'administration_absence_appel_export',
            'route_params' => [
                'semestre' => $this->semestre->getId(),
            ],
        ]);

        $builder->addColumn('dateObjet', DateColumnType::class, [
            'order' => 'ASC',
            'format' => 'd/m/Y',
            'label' => 'table.date',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('heureDebut', DateColumnType::class, [
            'format' => 'H:i',
            'label' => 'table.heure',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('typeIdMatiere', MatiereColumnType::class,
            ['label' => 'table.matiere', 'translation_domain' => 'messages', 'matieres' => $options['matieres']]);

        $builder->addColumn('groupe', PropertyColumnType::class,
            ['label' => 'table.groupe', 'translation_domain' => 'messages']);

        $builder->addColumn('personnel');

        $builder->addColumn('appelFait', StatusAppelFaitColumnType::class,
            [
                'statsAppel' => $options['statsAppel'],
                'label' => 'table.appelFait',
                'translation_domain' => 'messages',
            ]);

        $builder->setLoadUrl('administration_absence_appel_index', ['semestre' => $this->semestre->getId()]);

//        $builder->addColumn('links', WidgetColumnType::class, [
//            'build' => function (WidgetBuilder $builder, Rattrapage $s) {
//                $builder->add('delete', RowDeleteLinkType::class, [
//                    'attr' => [
//                        'data-href' => 'administration_rattrapage_delete',
//                        'data-uuid' => $s->getUuidString(),
//                        'data-csrf' => $this->csrfToken->getToken('delete'.$s->getUuidString()),
//                    ],
//                ]);
//            },
//        ]);
        $builder->useAdapter(function (TableState $state) {
            $orders = $state->getOrderBy();
            $t = [];
            $diplome = $this->semestre->getDiplome();

            if (false === $diplome->isApc()) {
                $matieres = $this->typeMatiereManager->findBySemestre($this->semestre);
            } else {
                $matieres = $this->typeMatiereManager->findByReferentielOrdreSemestre($this->semestre, $this->semestre->getDiplome()->getReferentiel());
            }
            $groupes = $this->groupeRepository->findByDiplomeAndOrdreSemestre($diplome, $this->semestre->getOrdreLmd());
            $data = $this->edtManager->getPlanningSemestre(
                $this->semestre,
                $this->edtManager->transformeMatieres($this->semestre, $matieres),
                $this->anneeUniversitaire,
                $this->edtManager->transformeGroupe($this->semestre, $groupes)
            );
            $data = $data->getEvents();
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
//        $builder->useAdapter(EntityAdapter::class, [
//            // todo: passer par EdtManager pour avoir les infos sur le semestre quelque soit la source et utiliser EvenvementEdt comme DTO
//            'class' => AbsenceEtatAppel::class, // todo: doit être le planning... Passer par un DTO...
//            'fetch_join_collection' => false,
//            'query' => static function (QueryBuilder $qb, array $formData) {
//                // $qb->innerJoin(Etudiant::class, 'etu', 'WITH', 'e.etudiant = etu.id')
//                //    ->where('etu.semestre = :semestre')
//                // ->andWhere('e.anneeUniversitaire = :anneeuniversitaire')
//                // ->setParameter('semestre', $this->semestre->getId());
//                //  ->setParameter('anneeuniversitaire', $this->anneeUniversitaire->getId());
//            },
//        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'orderable' => true,
            'semestre' => null,
            'anneeUniversitaire' => null,
            'matieres' => null,
            'statsAppel' => null,
            'exportable' => true,
        ]);
    }
}
