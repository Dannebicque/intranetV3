<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/AppelSuiviTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 10:53
 */

namespace App\Table;

use App\Components\Table\Adapter\EntityAdapter;
use App\Components\Table\Column\DateColumnType;
use App\Components\Table\Column\EntityColumnType;
use App\Components\Table\TableBuilder;
use App\Components\Table\TableType;
use App\Components\Widget\Type\ExportDropdownType;
use App\Entity\AbsenceEtatAppel;
use App\Entity\Rattrapage;
use App\Form\Type\DatePickerType;
use App\Form\Type\SearchType;
use App\Table\ColumnType\MatiereColumnType;
use App\Table\ColumnType\PersonnelColumnType;
use App\Table\ColumnType\StatusAppelFaitColumnType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AppelSuiviTableType extends TableType
{
    public function buildTable(TableBuilder $builder, array $options): void
    {
        $semestre = $options['semestre'];
        $anneeUniversitaire = $options['anneeUniversitaire'];

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
                'semestre' => $semestre->getId(),
            ],
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
            ['label' => 'table.matiere', 'translation_domain' => 'messages', 'matieres' => $options['matieres']]);

        $builder->addColumn('groupe', EntityColumnType::class,
            ['label' => 'table.groupe', 'translation_domain' => 'messages', 'display_field' => 'libelle']);

        $builder->addColumn('personnel', PersonnelColumnType::class);

        $builder->addColumn('appelFait', StatusAppelFaitColumnType::class,
            [
                'statsAppel' => $options['statsAppel'],
                'label' => 'table.appelFait',
                'translation_domain' => 'messages',
            ]);

        $builder->setLoadUrl('administration_absence_appel_index', ['semestre' => $semestre->getId()]);

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
            // todo: passer par EdtManager pour avoir les infos sur le semestre quelque soit la source et utiliser EvenvementEdt comme DTO
            'class' => AbsenceEtatAppel::class, // todo: doit être le planning... Passer par un DTO...
            'fetch_join_collection' => false,
            'query' => static function (QueryBuilder $qb, array $formData) {
                // $qb->innerJoin(Etudiant::class, 'etu', 'WITH', 'e.etudiant = etu.id')
                //    ->where('etu.semestre = :semestre')
                // ->andWhere('e.anneeUniversitaire = :anneeuniversitaire')
                // ->setParameter('semestre', $this->semestre->getId());
                //  ->setParameter('anneeuniversitaire', $this->anneeUniversitaire->getId());
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
            'matieres' => null,
            'statsAppel' => null,
            'exportable' => true,
        ]);
    }
}
