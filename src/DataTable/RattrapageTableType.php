<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DataTable/RattrapageTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/05/2021 16:35
 */

namespace App\DataTable;

use App\DataTable\ColumnType\EtudiantColumnType;
use App\DataTable\ColumnType\GroupeEtudiantColumnType;
use App\DataTable\ColumnType\MatiereColumnType;
use App\DataTable\ColumnType\PersonnelColumnType;
use App\DataTable\ColumnType\StatusAbsenceColumnType;
use App\DataTable\Widget\RowDeleteLinkType;
use App\Entity\Etudiant;
use App\Entity\Rattrapage;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Umbrella\CoreBundle\Component\DataTable\Adapter\EntityAdapter;
use Umbrella\CoreBundle\Component\DataTable\Column\DateColumnType;
use Umbrella\CoreBundle\Component\DataTable\Column\WidgetColumnType;
use Umbrella\CoreBundle\Component\DataTable\DataTableBuilder;
use Umbrella\CoreBundle\Component\DataTable\DataTableType;
use Umbrella\CoreBundle\Component\DataTable\ToolbarBuilder;
use Umbrella\CoreBundle\Component\Widget\Type\ButtonDropdownType;
use Umbrella\CoreBundle\Component\Widget\Type\ButtonType;
use Umbrella\CoreBundle\Component\Widget\Type\LinkType;
use Umbrella\CoreBundle\Component\Widget\WidgetBuilder;
use Umbrella\CoreBundle\Form\DatepickerType;
use Umbrella\CoreBundle\Form\SearchType;

class RattrapageTableType extends DataTableType
{
    private $semestre;
    private $anneeUniversitaire;
    private $absences;
    private $csrfToken;

    public function __construct(CsrfTokenManagerInterface $csrfToken)
    {
        $this->csrfToken = $csrfToken;
    }

    public function buildToolbar(ToolbarBuilder $builder, array $options)
    {
        $this->semestre = $options['semestre'];
        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('from', DatepickerType::class, [
            'input_prefix_text' => 'From',
        ]);
        $builder->addFilter('to', DatepickerType::class, [
            'input_prefix_text' => 'To',
        ]);

//        // Export button (use to export data)
        $builder->addWidget('export', ButtonDropdownType::class, [
            'icon' => 'mdi mdi-download',
            'attr' => ['data-toggle' => 'dropdown'],
            'build' => function(WidgetBuilder $builder) {
                $builder->add('pdf', LinkType::class, [
                    'route' => 'administration_rattrapage_export',
                    'route_params' => ['semestre' => $this->semestre->getId(), '_format' => 'pdf'],
                ]);
                $builder->add('csv', LinkType::class, [
                    'route' => 'administration_rattrapage_export',
                    'route_params' => ['semestre' => $this->semestre->getId(), '_format' => 'csv'],
                ]);
                $builder->add('excel', LinkType::class, [
                    'route' => 'administration_rattrapage_export',
                    'route_params' => ['semestre' => $this->semestre->getId(), '_format' => 'xlsx'],
                ]);
            },
        ]);
    }

    public function buildTable(DataTableBuilder $builder, array $options)
    {
        $this->semestre = $options['semestre'];
        $this->anneeUniversitaire = $options['anneeUniversitaire'];
        $this->absences = $options['absences'];

//        $builder->add('select', CheckBoxColumnType::class);
        $builder->add('etudiant', EtudiantColumnType::class);
        $builder->add('groupes', GroupeEtudiantColumnType::class, ['label' => 'groupe']);
        $builder->add('typeIdMatiere', MatiereColumnType::class, ['label' => 'matiere']);
        $builder->add('personnel', PersonnelColumnType::class);
        $builder->add('dateEval', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'd/m/Y',
            'label' => 'date_evaluation',
        ]);
        $builder->add('heureEval', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'h:i',
            'label' => 'heure_evaluation',
        ]);
        $builder->add('created', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'd/m/Y',
            'label' => 'date_demande',
        ]);
        $builder->add('absenceJustifiee', StatusAbsenceColumnType::class,
            [
                'absences' => $this->absences,
                'label' => 'absence_justifiee',
            ]);

        $builder->add('links', WidgetColumnType::class, [
            'build' => function(WidgetBuilder $builder, Rattrapage $s) {
                switch ($s->getEtatDemande()) {
                    case Rattrapage::DEMANDE_ACCEPTEE:
                        $builder->add('demande.acceptee', ButtonType::class, [
                            'class' => 'btn btn-outline btn-success rattrapage-accepte bx_' . $s->getUuidString(),
                            'title' => 'Demande acceptée',
                        ]);
                        break;
                    case Rattrapage::DEMANDE_REFUSEE:
                        $builder->add('demande.refusee', ButtonType::class, [
                            'class' => 'btn btn-outline btn-danger rattrapage-accepte bx_' . $s->getUuidString(),
                            'title' => 'Demande refusée',
                        ]);
                        break;
                    case Rattrapage::DEMANDE_FAITE:
                        $builder->add('accepter', ButtonType::class, [
                            'class' => 'btn btn-outline btn-success rattrapage-accepte bx_' . $s->getUuidString(),
                            'title' => 'Accepter la demande',
                            'icon' => 'fas fa-check',
                            'attr' => ['data-rattrapage' => $s->getUuidString()],
                        ]);
                        $builder->add('refuser', ButtonType::class, [
                            'class' => 'btn btn-outline btn-danger rattrapage-refuse bx_' . $s->getUuidString(),
                            'title' => 'Refuser la demande',
                            'icon' => 'fas fa-ban',
                            'attr' => ['data-rattrapage' => $s->getUuidString()],
                        ]);
                        break;
                }

                $builder->add('delete', RowDeleteLinkType::class, [
                    'attr' => [
                        'data-href' => 'administration_rattrapage_delete',
                        'data-uuid' => $s->getUuidString(),
                        'data-csrf' => $this->csrfToken->getToken('delete' . $s->getUuidString()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Rattrapage::class,
            'fetch_join_collection' => false,
            'query' => function(QueryBuilder $qb, array $formData) {
                $qb->innerJoin(Etudiant::class, 'etu', 'WITH', 'e.etudiant = etu.id')
                    ->where('etu.semestre = :semestre')
                    ->andWhere('e.anneeUniversitaire = :anneeuniversitaire')
                    ->setParameter('semestre', $this->semestre->getId())
                    ->setParameter('anneeuniversitaire', $this->anneeUniversitaire->getId());

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(etu.nom) LIKE :search');
                    $qb->orWhere('LOWER(etu.prenom) LIKE :search');
                    $qb->setParameter('search', '%' . $formData['search'] . '%');
                }

                if (isset($formData['from'])) {
                    $qb->andWhere('e.dateEval >= :from');
                    $qb->setParameter('from', $formData['from']);
                }

                if (isset($formData['to'])) {
                    $qb->andWhere('e.dateEval <= :to');
                    $qb->setParameter('to', $formData['to']);
                }
            },
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'orderable' => true,
            'semestre' => null,
            'anneeUniversitaire' => null,
            'absences' => null,
        ]);

//        $resolver
//            ->define('administration_etudiant_show')
//            ->default(true)
//            ->allowedTypes('bool');
//
        $resolver
            ->define('exportable')
            ->default(true)
            ->allowedTypes('bool');

//        $resolver
//            ->define('editable')
//            ->default(false)
//            ->allowedTypes('bool');

//        // filter table depending of options
//        $resolver
//            ->define('mission_status')
//            ->default(null)
//            ->allowedValues(
//                SpaceMission::MISSION_FAILURE,
//                SpaceMission::MISSION_PARTIAL_FAILURE,
//                SpaceMission::MISSION_PRELAUNCH_FAILURE,
//                SpaceMission::MISSION_SUCCESS,
//                null
//            );
    }
}
