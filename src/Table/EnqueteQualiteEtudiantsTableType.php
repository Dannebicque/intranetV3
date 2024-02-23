<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/EnqueteQualiteEtudiantsTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:10
 */

namespace App\Table;

use App\Components\Questionnaire\TypeDestinataire\Etudiant;
use App\Entity\QuestQuestionnaire;
use App\Entity\Semestre;
use App\Form\Type\DatePickerType;
use App\Table\ColumnType\PersonnelColumnType;
use App\Table\ColumnType\SemestreColumnType;
use Dannebicque\TableBundle\Adapter\EntityAdapter;
use Dannebicque\TableBundle\Column\DateColumnType;
use Dannebicque\TableBundle\Column\PropertyColumnType;
use Dannebicque\TableBundle\Column\WidgetColumnType;
use Dannebicque\TableBundle\TableBuilder;
use Dannebicque\TableBundle\TableType;
use Dannebicque\TableBundle\Widget\Type\RowDeleteLinkType;
use Dannebicque\TableBundle\Widget\Type\RowDuplicateLinkType;
use Dannebicque\TableBundle\Widget\Type\RowEditLinkType;
use Dannebicque\TableBundle\Widget\Type\RowLinkType;
use Dannebicque\TableBundle\Widget\WidgetBuilder;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class EnqueteQualiteEtudiantsTableType extends TableType
{
    private string $type;

    public function __construct(private readonly CsrfTokenManagerInterface $csrfToken)
    {
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->type = $options['type'];

        $builder->addFilter('from', DatePickerType::class, [
            'input_prefix_text' => 'Du',
        ]);
        $builder->addFilter('to', DatePickerType::class, [
            'input_prefix_text' => 'Au',
        ]);


        $builder->addFilter('semestre', EntityType::class, [
            'class' => Semestre::class,
            'choice_label' => 'display',
            'label' => 'Semestre',
            'required' => false,
        ]);

        $builder->addColumn('titre', PropertyColumnType::class, ['label' => 'table.titre']);
        $builder->addColumn('dateOuverture', DateColumnType::class, ['label' => 'table.dateOuverture']);
        $builder->addColumn('dateFermeture', DateColumnType::class, ['label' => 'table.dateFermeture']);
        $builder->addColumn('semestre', SemestreColumnType::class, ['label' => 'table.semestre']);

        if ($this->type === 'administratif') {
            $builder->addColumn('auteur', PersonnelColumnType::class, ['label' => 'table.auteur']);
        }

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function(WidgetBuilder $builder, QuestQuestionnaire $s) {
                $builder->add('apercu', RowLinkType::class, [
                    'route' => 'administration_qualite_apercu',
                    'title' => 'Aperçu du questionnaire',
                    'icon' => 'fas fa-eye',
                    'attr' => ['class' => 'btn btn-square btn-info-outline btn-sm me-1'],
                    'route_params' => ['id' => $s->getId(), 'type' => $this->type],
                    'xhr' => false,
                ]);
                $builder->add('show', RowLinkType::class, [
                    'route' => 'adm_questionnaire_qualite_detail',
                    'title' => 'Détails du questionnaire et paramètrage',
                    'route_params' => [
                        'id' => $s->getId(),
                        'type' => $this->type,
                    ],
                    'xhr' => false,
                    'icon' => 'fas fa-list-check',
                    'attr' => ['class' => 'btn btn-square btn-primary-outline btn-sm me-1'],
                ]);
                $builder->add('duplicate', RowDuplicateLinkType::class, [
                    'route' => 'adm_questionnaire_qualite_duplicate',
                    'title' => 'Dupliquer le questionnaire',
                    'route_params' => ['id' => $s->getId(), 'type' => $this->type],
                    'xhr' => false,
                ]);
                $builder->add('delete', RowDeleteLinkType::class, [
                    'route' => 'adm_questionnaire_qualite_delete',
                    'title' => 'Supprimer le questionnaire',
                    'route_params' => ['id' => $s->getId(), 'type' => $this->type],
                    'attr' => [
                        'data-csrf' => $this->csrfToken->getToken('delete' . $s->getId()),
                        'data-message' => 'La suppression entrainera la suppression de toutes les données et réponses associées. Voulez-vous continuer ?',
                    ],
                ]);
                $builder->add('edit', RowEditLinkType::class, [
                    'route' => 'adm_questionnaire_creation_index',
                    'title' => 'Modifier le questionnaire',
                    'route_params' => ['questionnaire' => $s->getId(), 'type' => $this->type],
                    'xhr' => false,
                ]);
            },
        ]);

        $builder->setLoadUrl('administratif_enquete_destinataire_index',
            ['typeDestinataire' => $options['typeDestinataire']]);


        $builder->useAdapter(EntityAdapter::class, [
            'class' => QuestQuestionnaire::class,
            'fetch_join_collection' => false,
            'query' => function(QueryBuilder $qb, array $formData) {
                $qb->where('e.typeDestinataire = :typeDestinataire')
                    ->leftJoin('e.semestre', 's')
                    ->setParameter('typeDestinataire', Etudiant::class);

                if (isset($formData['semestre'])) {
                    $qb->andWhere('e.semestre = :semestre');
                    $qb->setParameter('semestre', $formData['semestre']);
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

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'orderable' => true,
            'typeDestinataire' => 'exterieur',
            'effectifs' => null,
            'type' => 'administration',
        ]);
    }
}
