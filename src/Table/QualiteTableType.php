<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/QualiteTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/02/2024 17:55
 */

namespace App\Table;

use App\Components\Questionnaire\TypeDestinataire\Etudiant;
use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\QuestQuestionnaire;
use App\Entity\Semestre;
use App\Form\Type\DatePickerType;
use App\Repository\SemestreRepository;
use App\Table\ColumnType\PersonnelColumnType;
use Dannebicque\TableBundle\Adapter\EntityAdapter;
use Dannebicque\TableBundle\Column\BadgeColumnType;
use Dannebicque\TableBundle\Column\DateColumnType;
use Dannebicque\TableBundle\Column\PropertyColumnType;
use Dannebicque\TableBundle\Column\WidgetColumnType;
use Dannebicque\TableBundle\TableBuilder;
use Dannebicque\TableBundle\TableType;
use Dannebicque\TableBundle\Widget\Type\RowDuplicateLinkType;
use Dannebicque\TableBundle\Widget\Type\RowEditLinkType;
use Dannebicque\TableBundle\Widget\Type\RowLinkType;
use Dannebicque\TableBundle\Widget\WidgetBuilder;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QualiteTableType extends TableType
{
    private ?Departement $departement = null;
    private ?Diplome $diplome = null;
    private string $type;

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $this->diplome = $options['diplome'];
        $this->type = $options['type'];

        $builder->addFilter('from', DatePickerType::class, [
            'input_prefix_text' => 'Du',
        ]);
        $builder->addFilter('to', DatePickerType::class, [
            'input_prefix_text' => 'Au',
        ]);
        if (null !== $this->departement) {
            $builder->addFilter('semestre', EntityType::class,
                [
                    'class' => Semestre::class,
                    'choice_label' => 'libelle',
                    'required' => false,
                    'query_builder' => fn(SemestreRepository $semestreRepository
                    ) => $semestreRepository->findByDepartementBuilder($this->departement),
                ]);
        }

        if (null !== $this->diplome) {
            $builder->addFilter('semestre', EntityType::class,
                [
                    'class' => Semestre::class,
                    'choice_label' => 'libelle',
                    'required' => false,
                    'query_builder' => fn(SemestreRepository $semestreRepository
                    ) => $semestreRepository->findByDiplomeBuilder($this->diplome),
                ]);
        }

        $builder->addColumn('titre', PropertyColumnType::class, ['label' => 'table.titre']);
        $builder->addColumn('dateOuverture', DateColumnType::class, ['label' => 'table.dateOuverture']);
        $builder->addColumn('dateFermeture', DateColumnType::class, ['label' => 'table.dateFermeture']);
        $builder->addColumn('typeDestinataire', BadgeColumnType::class,
            ['label' => 'table.typeDestinataire']);
        $builder->addColumn('semestre', BadgeColumnType::class,
            ['label' => 'table.semestre']);
        if ($this->type === 'administratif') {
            $builder->addColumn('auteur', PersonnelColumnType::class, ['label' => 'table.auteur']);
        }

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function(WidgetBuilder $builder, QuestQuestionnaire $s) {
                $builder->add('apercu', RowLinkType::class, [
                    'route' => 'administration_qualite_apercu',
                    'icon' => 'fas fa-eye',
                    'attr' => ['class' => 'btn btn-square btn-info-outline btn-sm me-1'],
                    'route_params' => ['id' => $s->getId(), 'type' => $this->type],
                    'xhr' => false,
                ]);
                $builder->add('show', RowLinkType::class, [
                    'route' => 'adm_questionnaire_qualite_detail',
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
                    'route_params' => ['id' => $s->getId(), 'type' => $this->type],
                    'xhr' => false,
                ]);
                $builder->add('edit', RowEditLinkType::class, [
                    'route' => 'adm_questionnaire_creation_index',
                    'route_params' => ['questionnaire' => $s->getId(), 'type' => $this->type],
                    'xhr' => false,
                ]);
            },
        ]);

        if ($this->type === 'administration') {
            $builder->setLoadUrl('administration_qualite_index', ['type' => $this->type]);
        } else {
            $builder->setLoadUrl('sa_qualite_diplome', ['diplome' => $this->diplome->getId()]);
        }


        $builder->useAdapter(EntityAdapter::class, [
            'class' => QuestQuestionnaire::class,
            'fetch_join_collection' => false,
            'query' => function(QueryBuilder $qb, array $formData) {
                $qb->where('e.typeDestinataire = :typeDestinataire')
                    ->setParameter('typeDestinataire', Etudiant::class);

                if (null !== $this->departement) {
                    $qb
                        ->andWhere('e.departement = :departement')
                        ->setParameter('departement', $this->departement->getId());
                }

                if (null !== $this->diplome) {
                    $qb
                        ->innerJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
                        ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
                        ->andWhere('a.diplome = :diplome')
                        ->setParameter('diplome', $this->diplome->getId());
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
            'departement' => null,
            'diplome' => null,
            'type' => 'administration',
        ]);
    }
}
