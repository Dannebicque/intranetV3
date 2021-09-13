<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/RattrapageTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/09/2021 21:16
 */

namespace App\Table;

use App\Components\Table\Adapter\EntityAdapter;
use App\Components\Table\Column\DateColumnType;
use App\Components\Table\Column\WidgetColumnType;
use App\Components\Table\TableBuilder;
use App\Components\Table\TableType;
use App\Components\Widget\Type\ButtonDropdownType;
use App\Components\Widget\Type\ButtonType;
use App\Components\Widget\Type\LinkType;
use App\Components\Widget\Type\RowDeleteLinkType;
use App\Components\Widget\WidgetBuilder;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Rattrapage;
use App\Entity\Semestre;
use App\Form\Type\DatePickerType;
use App\Form\Type\SearchType;
use App\Repository\GroupeRepository;
use App\Table\ColumnType\EtudiantColumnType;
use App\Table\ColumnType\GroupeEtudiantColumnType;
use App\Table\ColumnType\MatiereColumnType;
use App\Table\ColumnType\PersonnelColumnType;
use App\Table\ColumnType\StatusAbsenceColumnType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class RattrapageTableType extends TableType
{
    private ?Semestre $semestre;
    private array $matieres;
    private ?AnneeUniversitaire $anneeUniversitaire;
    private $absences;
    private CsrfTokenManagerInterface $csrfToken;

    public function __construct(CsrfTokenManagerInterface $csrfToken)
    {
        $this->csrfToken = $csrfToken;
    }

    public function buildTable(TableBuilder $builder, array $options)
    {
        $this->semestre = $options['semestre'];
        $this->anneeUniversitaire = $options['anneeUniversitaire'];
        $this->absences = $options['absences'];
        $this->matieres = $options['matieres'];

        $builder->addFilter('search', SearchType::class);
        $builder->addFilter('from', DatePickerType::class, [
            'input_prefix_text' => 'Du',
        ]);
        $builder->addFilter('to', DatePickerType::class, [
            'input_prefix_text' => 'au',
        ]);
        $builder->addFilter('etat_demande', ChoiceType::class, [
            'choices' => [
                'Acceptée' => Rattrapage::DEMANDE_ACCEPTEE,
                'Refusée' => Rattrapage::DEMANDE_REFUSEE,
                'En attente' => Rattrapage::DEMANDE_FAITE
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
            'build' => function (WidgetBuilder $builder) {
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
//        $builder->add('select', CheckBoxColumnType::class);
        $builder->addColumn('etudiant', EtudiantColumnType::class,
            ['label' => 'table.etudiant', 'translation_domain' => 'messages']);
        $builder->addColumn('groupes', GroupeEtudiantColumnType::class,
            ['label' => 'table.groupe', 'translation_domain' => 'messages']);
        $builder->addColumn('typeIdMatiere', MatiereColumnType::class,
            ['label' => 'table.matiere', 'translation_domain' => 'messages', 'matieres' => $this->matieres]);
        $builder->addColumn('personnel', PersonnelColumnType::class);
        $builder->addColumn('dateEval', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'd/m/Y',
            'label' => 'table.date_evaluation',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('heureEval', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'h:i',
            'label' => 'table.heure_evaluation',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('created', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'd/m/Y',
            'label' => 'table.date_demande',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('absenceJustifiee', StatusAbsenceColumnType::class,
            [
                'absences' => $this->absences,
                'label' => 'table.absence_justifiee',
                'translation_domain' => 'messages',
            ]);

        $builder->setLoadUrl('administration_rattrapage_semestre_index', ['semestre' => $this->semestre->getId()]);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, Rattrapage $s) {
                switch ($s->getEtatDemande()) {
                    case Rattrapage::DEMANDE_ACCEPTEE:
                        $builder->add('demande.acceptee', ButtonType::class, [
                            'class' => 'btn btn-outline btn-success rattrapage-accepte bx_'.$s->getUuidString(),
                            'title' => 'demande.acceptee',
                            'text' => 'demande.acceptee',
                            'translation_domain' => 'messages',
                        ]);
                        break;
                    case Rattrapage::DEMANDE_REFUSEE:
                        $builder->add('demande.refusee', ButtonType::class, [
                            'class' => 'btn btn-outline btn-danger rattrapage-accepte bx_'.$s->getUuidString(),
                            'title' => 'demande.refusee',
                            'text' => 'demande.refusee',
                            'translation_domain' => 'messages',
                        ]);
                        break;
                    case Rattrapage::DEMANDE_FAITE:
                        $builder->add('accepter', ButtonType::class, [
                            'class' => 'btn btn-outline btn-success rattrapage-accepte bx_'.$s->getUuidString(),
                            'title' => 'Accepter la demande',
                            'icon' => 'fas fa-check',
                            'attr' => ['data-rattrapage' => $s->getUuidString()],
                        ]);
                        $builder->add('refuser', ButtonType::class, [
                            'class' => 'btn btn-outline btn-danger rattrapage-refuse bx_'.$s->getUuidString(),
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
                        'data-csrf' => $this->csrfToken->getToken('delete'.$s->getUuidString()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Rattrapage::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                $qb->innerJoin(Etudiant::class, 'etu', 'WITH', 'e.etudiant = etu.id')
                    ->where('etu.semestre = :semestre')
                    ->andWhere('e.anneeUniversitaire = :anneeuniversitaire')
                    ->setParameter('semestre', $this->semestre->getId())
                    ->setParameter('anneeuniversitaire', $this->anneeUniversitaire->getId());

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(etu.nom) LIKE :search');
                    $qb->orWhere('LOWER(etu.prenom) LIKE :search');
                    $qb->setParameter('search', '%'.$formData['search'].'%');
                }

                if (isset($formData['from'])) {
                    $qb->andWhere('e.dateEval >= :from');
                    $qb->setParameter('from', $formData['from']);
                }

                if (isset($formData['to'])) {
                    $qb->andWhere('e.dateEval <= :to');
                    $qb->setParameter('to', $formData['to']);
                }

                if (isset($formData['etat_demande'])) {
                    $qb->andWhere('e.etat_demande = :etat_demande');
                    $qb->setParameter('etat_demande', $formData['etat_demande']);
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
            'exportable' => true,
            'matieres' => null,
        ]);
    }
}
