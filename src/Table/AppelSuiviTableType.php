<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/AppelSuiviTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/09/2021 10:48
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
use App\Entity\Absence;
use App\Entity\AbsenceEtatAppel;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Rattrapage;
use App\Entity\Semestre;
use App\Form\Type\DatePickerType;
use App\Form\Type\SearchType;
use App\Table\ColumnType\EtudiantColumnType;
use App\Table\ColumnType\GroupeEtudiantColumnType;
use App\Table\ColumnType\MatiereColumnType;
use App\Table\ColumnType\PersonnelColumnType;
use App\Table\ColumnType\StatusAbsenceColumnType;
use App\Table\ColumnType\StatusAppelFaitColumnType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class AppelSuiviTableType extends TableType
{
    private ?Semestre $semestre;
    private ?AnneeUniversitaire $anneeUniversitaire;
    private array $matieres;
    private array $statsAppel;
    private CsrfTokenManagerInterface $csrfToken;

    public function __construct(CsrfTokenManagerInterface $csrfToken)
    {
        $this->csrfToken = $csrfToken;
    }

    public function buildTable(TableBuilder $builder, array $options)
    {
        $this->semestre = $options['semestre'];
        $this->anneeUniversitaire = $options['anneeUniversitaire'];
        $this->matieres = $options['matieres'];
        $this->statsAppel = $options['statsAppel'];

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
            'placeholder' => 'Etat de l\'appel'
        ]);

//        // Export button (use to export data)
        $builder->addWidget('export', ButtonDropdownType::class, [
            'icon' => 'fas fa-download',
            'text' => '',
            'attr' => ['data-toggle' => 'dropdown'],
            'build' => function (WidgetBuilder $builder) {
                $builder->add('pdf', LinkType::class, [
                    'route' => 'administration_absence_appel_export',
                    'route_params' => ['semestre' => $this->semestre->getId(), '_format' => 'pdf'],
                ]);
                $builder->add('csv', LinkType::class, [
                    'route' => 'administration_absence_appel_export',
                    'route_params' => ['semestre' => $this->semestre->getId(), '_format' => 'csv'],
                ]);
                $builder->add('excel', LinkType::class, [
                    'route' => 'administration_absence_appel_export',
                    'route_params' => ['semestre' => $this->semestre->getId(), '_format' => 'xlsx'],
                ]);
            },
        ]);

        $builder->addColumn('date', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'd/m/Y',
            'label' => 'table.date',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('heure', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'h:i',
            'label' => 'table.heure',
            'translation_domain' => 'messages',
        ]);
        $builder->addColumn('typeIdMatiere', MatiereColumnType::class,
            ['label' => 'table.matiere', 'translation_domain' => 'messages', 'matieres' => $this->matieres]);

        $builder->addColumn('groupes', GroupeEtudiantColumnType::class,
            ['label' => 'table.groupe', 'translation_domain' => 'messages']);

        $builder->addColumn('personnel', PersonnelColumnType::class);

        $builder->addColumn('appelFait', StatusAppelFaitColumnType::class,
            [
                'statsAppel' => $this->statsAppel,
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

        $builder->useAdapter(EntityAdapter::class, [
            'class' => AbsenceEtatAppel::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
               // $qb->innerJoin(Etudiant::class, 'etu', 'WITH', 'e.etudiant = etu.id')
                //    ->where('etu.semestre = :semestre')
                   // ->andWhere('e.anneeUniversitaire = :anneeuniversitaire')
                    //->setParameter('semestre', $this->semestre->getId());
                  //  ->setParameter('anneeuniversitaire', $this->anneeUniversitaire->getId());

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
            'matieres' => null,
            'statsAppel' => null,
            'exportable' => true,
        ]);
    }
}
