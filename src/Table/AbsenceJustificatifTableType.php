<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/AbsenceJustificatifTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Table;

use App\Entity\AbsenceJustificatif;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Enums\AbsenceJustificatifEnum;
use App\Form\Type\DatePickerType;
use App\Form\Type\SearchType;
use App\Repository\GroupeRepository;
use App\Table\ColumnType\DatePeriodeJustificatifColumnType;
use App\Table\ColumnType\EtudiantColumnType;
use App\Table\ColumnType\GroupeEtudiantColumnType;
use App\Table\ColumnType\StatusBadgeEnumColumnType;
use BackedEnum;
use DavidAnnebicque\TableBundle\Adapter\EntityAdapter;
use DavidAnnebicque\TableBundle\Column\CheckBoxColumnType;
use DavidAnnebicque\TableBundle\Column\DateColumnType;
use DavidAnnebicque\TableBundle\Column\PropertyColumnType;
use DavidAnnebicque\TableBundle\Column\WidgetColumnType;
use DavidAnnebicque\TableBundle\TableBuilder;
use DavidAnnebicque\TableBundle\TableType;
use DavidAnnebicque\TableBundle\Widget\Type\ButtonType;
use DavidAnnebicque\TableBundle\Widget\Type\ExportDropdownType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDeleteLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\StimulusButtonModalType;
use DavidAnnebicque\TableBundle\Widget\WidgetBuilder;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\EnumType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class AbsenceJustificatifTableType extends TableType
{
    private ?Semestre $semestre = null;
    private ?AnneeUniversitaire $anneeUniversitaire = null;

    public function __construct(private readonly CsrfTokenManagerInterface $csrfToken, private readonly RouterInterface $router)
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
        $builder->addFilter('etat_demande', EnumType::class, [
            'class' => AbsenceJustificatifEnum::class,
            'required' => false,
            'choice_label' => static fn (BackedEnum $choice): string => 'absence_justificatif.'.$choice->value,
            'placeholder' => 'Etat de la demande',
        ]);

        $builder->addFilter('groupe', EntityType::class, [
            'class' => Groupe::class,
            'query_builder' => fn (GroupeRepository $groupeRepository) => $groupeRepository->findBySemestreBuilder($this->semestre),
            'choice_label' => 'display',
            'required' => false,
            'placeholder' => 'Filtrer par groupe',
        ]);

        $builder->addWidget('export', ExportDropdownType::class, [
            'route' => 'administration_absences_justificatif_semestre_export',
            'route_params' => [
                'semestre' => $this->semestre->getId(),
            ],
            'formats' => ['xlsx'],
        ]);

        $builder->addColumn('select', CheckBoxColumnType::class);
        $builder->addColumn('etudiant', EtudiantColumnType::class,
            ['label' => 'table.etudiant']);
        $builder->addColumn('etudiantGroupes', GroupeEtudiantColumnType::class,
            ['label' => 'table.groupe']);
        $builder->addColumn('periodeAbsence', DatePeriodeJustificatifColumnType::class,
            ['label' => 'table.periodeAbsence']);
        $builder->addColumn('created', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'd/m/Y',
            'label' => 'table.created',
        ]);
        $builder->addColumn('motif', PropertyColumnType::class,
            ['label' => 'table.motif']);
        $builder->addColumn('etat', StatusBadgeEnumColumnType::class,
            [
                'enumClass' => AbsenceJustificatifEnum::class,
                'prefix_trans' => 'absence_justificatif',
                'label' => 'table.etat_justificatif_absence',
            ]);

        $builder->setLoadUrl('administration_absences_justificatif_semestre_liste',
            ['semestre' => $this->semestre->getId()]);

        $builder->addColumn('apercu', WidgetColumnType::class, [
            'label' => 'apercu',
            'build' => function (WidgetBuilder $builder, AbsenceJustificatif $s) {
                $builder->add('voir.justificatif', StimulusButtonModalType::class, [
                    'class' => 'btn btn-outline btn-info',
                    'icon' => 'fas fa-eye',
                    'text' => false,
                    'modalSize' => 'lg',
                    'modalTitle' => 'Détail du justificatif',
                    'modalUrl' => $this->router->generate('administration_absence_justificatif_details',
                        ['uuid' => $s->getUuidString()]),
                ]);
            },
        ]);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, AbsenceJustificatif $s) {
                switch ($s->getEtat()) {
                    case AbsenceJustificatif::ACCEPTE:
                        $builder->add('demande.acceptee', ButtonType::class, [
                            'class' => 'btn btn-outline btn-success me-1',
                            'title' => 'demande.acceptee',
                            'text' => 'demande.acceptee',
                        ]);
                        break;
                    case AbsenceJustificatif::REFUSE:
                        $builder->add('demande.refusee', ButtonType::class, [
                            'class' => 'btn btn-outline btn-danger me-1',
                            'title' => 'demande.refusee',
                            'text' => 'demande.refusee',
                        ]);
                        break;
                    case AbsenceJustificatif::DEPOSE:
                        $builder->add('accepter', ButtonType::class, [
                            'class' => 'btn btn-outline btn-success me-1 justificatif-accepte bx_'.$s->getUuidString(),
                            'title' => 'Accepter la demande',
                            'icon' => 'fas fa-check',
                            'attr' => ['data-justificatif' => $s->getUuidString()],
                        ]);
                        $builder->add('refuser', ButtonType::class, [
                            'class' => 'btn btn-outline btn-danger me-1 justificatif-refuse bx_'.$s->getUuidString(),
                            'title' => 'Refuser la demande',
                            'icon' => 'fas fa-ban',
                            'attr' => ['data-justificatif' => $s->getUuidString()],
                        ]);
                        break;
                }

                $builder->add('delete', RowDeleteLinkType::class, [
                    'route' => 'administration_absence_justificatif_delete',
                    'route_params' => ['id' => $s->getId()],
                    'attr' => [
                        'data-csrf' => $this->csrfToken->getToken('delete'.$s->getUuidString()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => AbsenceJustificatif::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                $qb->innerJoin(Etudiant::class, 'etu', 'WITH', 'e.etudiant = etu.id')
                    ->where('e.semestre = :semestre')
                    ->andWhere('e.anneeUniversitaire = :anneeuniversitaire')
                    ->setParameter('semestre', $this->semestre->getId())
                    ->setParameter('anneeuniversitaire', $this->anneeUniversitaire->getId());

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(etu.nom) LIKE :search');
                    $qb->orWhere('LOWER(etu.prenom) LIKE :search');
                    $qb->setParameter('search', '%'.$formData['search'].'%');
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
                    $qb->andWhere('e.etat = :etat');
                    $qb->setParameter('etat', $formData['etat_demande']);
                }
            },
        ]);
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
