<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/BuRapportTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/01/2026 10:38
 */

namespace App\Table;

use App\Components\Questionnaire\TypeDestinataire\Etudiant;
use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Entity\StageRapport;
use App\Form\Type\DatePickerType;
use App\Repository\SemestreRepository;
use App\Table\ColumnType\EtudiantColumnType;
use Dannebicque\TableBundle\Adapter\EntityAdapter;
use Dannebicque\TableBundle\Column\BooleanColumnType;
use Dannebicque\TableBundle\Column\PropertyColumnType;
use Dannebicque\TableBundle\Column\WidgetColumnType;
use Dannebicque\TableBundle\TableBuilder;
use Dannebicque\TableBundle\TableType;
use Dannebicque\TableBundle\Widget\Type\RowEditLinkType;
use Dannebicque\TableBundle\Widget\Type\RowLinkType;
use Dannebicque\TableBundle\Widget\WidgetBuilder;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BuRapportTableType extends TableType
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

//        $builder->addColumn('departement', PropertyColumnType::class, ['label' => 'table.departement']);
//
//        $builder->addColumn('semestre', PropertyColumnType::class, ['label' => 'table.semestre']);
        $builder->addColumn('stageEtudiant.etudiant', EtudiantColumnType::class, ['label' => 'table.etudiant']);

        $builder->addColumn('motsCles', PropertyColumnType::class, ['label' => 'table.motsCles']);
        $builder->addColumn('confidentialite', BooleanColumnType::class, ['label' => 'table.confidentialite']);


        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, StageRapport $s) {
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
                $builder->add('edit', RowEditLinkType::class, [
                    'route' => 'adm_questionnaire_creation_index',
                    'route_params' => ['questionnaire' => $s->getId(), 'type' => $this->type],
                    'xhr' => false,
                ]);
            },
        ]);


        $builder->setLoadUrl('sa_bu_index');


        $builder->useAdapter(EntityAdapter::class, [
            'class' => StageRapport::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
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
