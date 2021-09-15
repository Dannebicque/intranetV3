<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/AbsenceJustificatifTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 15/09/2021 20:52
 */

namespace App\Table;

use App\Components\Table\Adapter\EntityAdapter;
use App\Components\Table\Column\CheckBoxColumnType;
use App\Components\Table\Column\DateColumnType;
use App\Components\Table\Column\PropertyColumnType;
use App\Components\Table\Column\WidgetColumnType;
use App\Components\Table\TableBuilder;
use App\Components\Table\TableType;
use App\Components\Widget\Type\ButtonDropdownType;
use App\Components\Widget\Type\ButtonType;
use App\Components\Widget\Type\LinkType;
use App\Components\Widget\Type\RowDeleteLinkType;
use App\Components\Widget\Type\RowShowLinkType;
use App\Components\Widget\WidgetBuilder;
use App\Entity\AbsenceJustificatif;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Form\Type\DatePickerType;
use App\Form\Type\SearchType;
use App\Repository\GroupeRepository;
use App\Table\ColumnType\DatePeriodeColumnType;
use App\Table\ColumnType\DatePeriodeJustificatifColumnType;
use App\Table\ColumnType\EtudiantColumnType;
use App\Table\ColumnType\GroupeEtudiantColumnType;
use App\Table\ColumnType\GroupeFromEtudiantColumnType;
use App\Table\ColumnType\StatusJustificatifAbsenceColumnType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class AbsenceJustificatifTableType extends TableType
{
    private ?Semestre $semestre;
    private ?AnneeUniversitaire $anneeUniversitaire;
    private CsrfTokenManagerInterface $csrfToken;
    private RouterInterface $router;

    public function __construct(CsrfTokenManagerInterface $csrfToken, RouterInterface $router)
    {
        $this->csrfToken = $csrfToken;
        $this->router = $router;
    }

    public function buildTable(TableBuilder $builder, array $options)
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
        $builder->addFilter('etat_demande', ChoiceType::class, [
            'choices' => [
                'Acceptée' => AbsenceJustificatif::ACCEPTE,
                'Refusée' => AbsenceJustificatif::REFUSE,
                'En attente' => AbsenceJustificatif::DEPOSE
            ],
            'required' => false,
            'placeholder' => 'Etat de la demande'
        ]);
        $builder->addFilter('groupe', EntityType::class, [
            'class' => Groupe::class,
            'query_builder' => function(GroupeRepository $groupeRepository) {
                return $groupeRepository->findBySemestreBuilder($this->semestre);
            },
            'choice_label' => 'display',
            'required' => false,
            'placeholder' => 'Filtrer par groupe',
        ]);

//        // Export button (use to export data)
        $builder->addWidget('export', ButtonDropdownType::class, [
            'icon' => 'fas fa-download',
            'text' => '',
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
        $builder->addColumn('select', CheckBoxColumnType::class);
        $builder->addColumn('etudiant', EtudiantColumnType::class,
            ['label' => 'table.etudiant', 'translation_domain' => 'messages']);
        $builder->addColumn('etudiantGroupes', GroupeEtudiantColumnType::class,
            ['label' => 'table.groupe', 'translation_domain' => 'messages']);
        $builder->addColumn('periodeAbsence', DatePeriodeJustificatifColumnType::class,
            ['label' => 'table.periodeAbsence', 'translation_domain' => 'messages']);
        $builder->addColumn('created', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'd/m/Y',
            'label' => 'table.created',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('motif', PropertyColumnType::class,
            ['label' => 'table.motif', 'translation_domain' => 'messages']);
        $builder->addColumn('etat', StatusJustificatifAbsenceColumnType::class,
            [
                'label' => 'table.etat_justificatif_absence',
                'translation_domain' => 'messages',
            ]);

        $builder->setLoadUrl('administration_absences_justificatif_semestre_liste',
            ['semestre' => $this->semestre->getId()]);

        $builder->addColumn('apercu', WidgetColumnType::class, [
            'label' => 'apercu',
            'build' => function(WidgetBuilder $builder, AbsenceJustificatif $s) {
                $builder->add('voir.justificatif', ButtonType::class, [
                    'class' => 'btn btn-outline btn-info',
                    'icon' => 'fas fa-eye',
                    'text' => false,
                    'translation_domain' => 'messages',
                    'attr' => ['data-provide' => 'modaler tooltip',
                        'data-url' => $this->router->generate('administration_absence_justificatif_details',
                            ['uuid' => $s->getUuidString()]),
                        'data-title' => 'Détail du justificatif'
                    ]
                ]);
            },
        ]);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function(WidgetBuilder $builder, AbsenceJustificatif $s) {
                switch ($s->getEtat()) {
                    case AbsenceJustificatif::ACCEPTE:
                        $builder->add('demande.acceptee', ButtonType::class, [
                            'class' => 'btn btn-outline btn-success',
                            'title' => 'demande.acceptee',
                            'text' => 'demande.acceptee',
                            'translation_domain' => 'messages',
                        ]);
                        break;
                    case AbsenceJustificatif::REFUSE:
                        $builder->add('demande.refusee', ButtonType::class, [
                            'class' => 'btn btn-outline btn-danger',
                            'title' => 'demande.refusee',
                            'text' => 'demande.refusee',
                            'translation_domain' => 'messages',
                        ]);
                        break;
                    case AbsenceJustificatif::DEPOSE:
                        $builder->add('accepter', ButtonType::class, [
                            'class' => 'btn btn-outline btn-success justificatif-accepte bx_' . $s->getUuidString(),
                            'title' => 'Accepter la demande',
                            'icon' => 'fas fa-check',
                            'attr' => ['data-justificatif' => $s->getUuidString()],
                        ]);
                        $builder->add('refuser', ButtonType::class, [
                            'class' => 'btn btn-outline btn-danger justificatif-refuse bx_' . $s->getUuidString(),
                            'title' => 'Refuser la demande',
                            'icon' => 'fas fa-ban',
                            'attr' => ['data-justificatif' => $s->getUuidString()],
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
            'class' => AbsenceJustificatif::class,
            'fetch_join_collection' => false,
            'query' => function(QueryBuilder $qb, array $formData) {
                $qb->innerJoin(Etudiant::class, 'etu', 'WITH', 'e.etudiant = etu.id')
                    ->where('etu.semestre = :semestre')
                    //    ->andWhere('e.anneeUniversitaire = :anneeuniversitaire')
                    ->setParameter('semestre', $this->semestre->getId());
                //    ->setParameter('anneeuniversitaire', $this->anneeUniversitaire->getId());

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(etu.nom) LIKE :search');
                    $qb->orWhere('LOWER(etu.prenom) LIKE :search');
                    $qb->setParameter('search', '%' . $formData['search'] . '%');
                }

//                if (isset($formData['from'])) {
//                    $qb->andWhere('e.dateEval >= :from');
//                    $qb->setParameter('from', $formData['from']);
//                }
//
//                if (isset($formData['to'])) {
//                    $qb->andWhere('e.dateEval <= :to');
//                    $qb->setParameter('to', $formData['to']);
//                }

                if (isset($formData['etat_demande'])) {
                    $qb->andWhere('e.etat_demande = :etat_demande');
                    $qb->setParameter('etat', $formData['etat_demande']);
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
            'exportable' => true,
        ]);
    }
}
