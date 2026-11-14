<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/PersonnelRattrapageTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/11/2026 20:25
 */

namespace App\Table;

use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\Rattrapage;
use App\Entity\Semestre;
use App\Form\Type\DatePickerType;
use App\Form\Type\SearchType;
use App\Table\ColumnType\EtudiantColumnType;
use App\Table\ColumnType\GroupeEtudiantColumnType;
use App\Table\ColumnType\MatiereColumnType;
use App\Table\ColumnType\SemestreColumnType;
use App\Table\ColumnType\StatusAbsenceColumnType;
use Dannebicque\TableBundle\Adapter\EntityAdapter;
use Dannebicque\TableBundle\Column\DateColumnType;
use Dannebicque\TableBundle\Column\WidgetColumnType;
use Dannebicque\TableBundle\TableBuilder;
use Dannebicque\TableBundle\TableType;
use Dannebicque\TableBundle\Widget\Type\ButtonType;
use Dannebicque\TableBundle\Widget\Type\ExportDropdownType;
use Dannebicque\TableBundle\Widget\WidgetBuilder;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PersonnelRattrapageTableType extends TableType
{
    private ?Personnel $personnel = null;
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->personnel = $options['personnel'];
        $this->anneeUniversitaire = $options['anneeUniversitaire'];
        $absences = $options['absences'];
        $matieres = $options['matieres'];
        $semestres = $options['semestres'];

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
                'En attente' => Rattrapage::DEMANDE_FAITE,
                'Refusée' => Rattrapage::DEMANDE_REFUSEE,
            ],
            'required' => false,
            'placeholder' => 'Etat de la demande',
        ]);
        if (!empty($semestres)) {
            $builder->addFilter('semestre', EntityType::class, [
                'class' => Semestre::class,
                'choices' => $semestres,
                'choice_label' => 'libelle',
                'required' => false,
                'placeholder' => 'Filtrer par semestre',
            ]);
        }

        if ($options['exportable']) {
            $builder->addWidget('export', ExportDropdownType::class, [
                'route' => 'application_personnel_rattrapage_export',
                'route_params' => [],
            ]);
        }

        $builder->addColumn('etudiant', EtudiantColumnType::class, [
            'label' => 'table.etudiant',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('semestre', SemestreColumnType::class, [
            'label' => 'table.semestre',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('groupes', GroupeEtudiantColumnType::class, [
            'label' => 'table.groupe',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('typeIdMatiere', MatiereColumnType::class, [
            'label' => 'table.matiere',
            'translation_domain' => 'messages',
            'matieres' => $matieres,
        ]);
        $builder->addColumn('dateEval', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'd/m/Y',
            'label' => 'table.date_evaluation',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('heureEval', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'H:i',
            'label' => 'table.heure_evaluation',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('created', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'd/m/Y',
            'label' => 'table.date_demande',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('absenceJustifiee', StatusAbsenceColumnType::class, [
            'absences' => $absences,
            'label' => 'table.absence_justifiee',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('dateRattrapage', DateColumnType::class, [
            'format' => 'd/m/Y',
            'label' => 'table.date_rattrapage',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('heureRattrapage', DateColumnType::class, [
            'format' => 'H:i',
            'label' => 'table.heure_rattrapage',
            'translation_domain' => 'messages',
        ]);

        $builder->addColumn('links', WidgetColumnType::class, [
            'label' => 'table.etat',
            'translation_domain' => 'messages',
            'build' => function (WidgetBuilder $builder, Rattrapage $s) {
                switch ($s->getEtatDemande()) {
                    case Rattrapage::DEMANDE_ACCEPTEE:
                        $builder->add('demande.acceptee', ButtonType::class, [
                            'class' => 'btn btn-outline btn-success disabled',
                            'title' => 'demande.acceptee',
                            'text' => 'demande.acceptee',
                            'translation_domain' => 'messages',
                        ]);
                        break;
                    case Rattrapage::DEMANDE_REFUSEE:
                        $builder->add('demande.refusee', ButtonType::class, [
                            'class' => 'btn btn-outline btn-danger disabled',
                            'title' => 'demande.refusee',
                            'text' => 'demande.refusee',
                            'translation_domain' => 'messages',
                        ]);
                        break;
                    case Rattrapage::DEMANDE_FAITE:
                    default:
                        $builder->add('demande.en_attente', ButtonType::class, [
                            'class' => 'btn btn-outline btn-info disabled',
                            'title' => 'en.attente',
                            'text' => 'en.attente',
                            'translation_domain' => 'messages',
                        ]);
                        break;
                }
            },
        ]);

        $builder->setLoadUrl('application_personnel_rattrapage_index');

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Rattrapage::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                $qb->innerJoin(Etudiant::class, 'etu', 'WITH', 'e.etudiant = etu.id')
                    ->where('e.personnel = :personnel')
                    ->andWhere('e.anneeUniversitaire = :anneeuniversitaire')
                    ->setParameter('personnel', $this->personnel->getId())
                    ->setParameter('anneeuniversitaire', $this->anneeUniversitaire->getId());

                if (!empty($formData['search'])) {
                    $qb->andWhere('(LOWER(etu.nom) LIKE :search OR LOWER(etu.prenom) LIKE :search)');
                    $qb->setParameter('search', '%' . strtolower($formData['search']) . '%');
                }

                if (!empty($formData['from'])) {
                    $qb->andWhere('e.dateEval >= :from');
                    $qb->setParameter('from', $formData['from']);
                }

                if (!empty($formData['to'])) {
                    $qb->andWhere('e.dateEval <= :to');
                    $qb->setParameter('to', $formData['to']);
                }

                if (isset($formData['etat_demande']) && '' !== trim((string)$formData['etat_demande'])) {
                    $qb->andWhere('e.etatDemande = :etat_demande');
                    $qb->setParameter('etat_demande', $formData['etat_demande']);
                }

                if (!empty($formData['semestre'])) {
                    $qb->andWhere('e.semestre = :semestre');
                    $qb->setParameter('semestre', $formData['semestre']);
                }
            },
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'orderable' => true,
            'personnel' => null,
            'anneeUniversitaire' => null,
            'semestres' => [],
            'absences' => [],
            'exportable' => true,
            'matieres' => [],
        ]);
    }
}
