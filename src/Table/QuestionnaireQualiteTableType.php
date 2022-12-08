<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/QuestionnaireQualiteTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Table;

use DavidAnnebicque\TableBundle\Adapter\EntityAdapter;
use DavidAnnebicque\TableBundle\Column\DateColumnType;
use DavidAnnebicque\TableBundle\Column\PropertyColumnType;
use DavidAnnebicque\TableBundle\Column\WidgetColumnType;
use DavidAnnebicque\TableBundle\TableBuilder;
use DavidAnnebicque\TableBundle\TableType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDeleteLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDuplicateLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowEditLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowShowLinkType;
use DavidAnnebicque\TableBundle\Widget\WidgetBuilder;
use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\QuestionnaireQualite;
use App\Entity\Semestre;
use App\Form\Type\DatePickerType;
use App\Form\Type\DiplomeEntityType;
use App\Form\Type\SearchType;
use App\Repository\DiplomeRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class QuestionnaireQualiteTableType extends TableType
{
    protected string $type = 'administratif';
    protected ?Departement $departement;

    public function __construct(private readonly CsrfTokenManagerInterface $csrfToken)
    {
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->type = $options['type'];
        $this->departement = $options['departement'];
        $builder->addFilter('search', SearchType::class);
        if ('administratif' === $this->type) {
            $builder->addFilter('diplome', DiplomeEntityType::class);
        } else {
            $builder->addFilter('diplome', EntityType::class, [
                'class' => Diplome::class,
                'query_builder' => function (DiplomeRepository $diplomeRepository) {
                    return $diplomeRepository->findByDepartementBuilder($this->departement);
                },
                'choice_label' => 'display',
                'required' => false,
                'placeholder' => 'Filtrer par diplôme',
            ]);
        }
        $builder->addFilter('from', DatePickerType::class, [
            'input_prefix_text' => 'Du',
        ]);
        $builder->addFilter('to', DatePickerType::class, [
            'input_prefix_text' => 'Au',
        ]);

//        $builder->addWidget('export', ExportDropdownType::class, [
//            'route' => 'administration_absence_appel_export',
//            'route_params' => [
//                'semestre' => $this->semestre->getId()
//            ],
//        ]);

        $builder->addColumn('libelle', PropertyColumnType::class, ['label' => 'table.libelle']);
        $builder->addColumn('dateOuverture', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'd/m/Y',
            'label' => 'table.dateOuverture',
        ]);
        $builder->addColumn('dateFermeture', DateColumnType::class, [
            'format' => 'd/m/Y',
            'label' => 'table.dateFermeture',
        ]);
        $builder->addColumn('semestre', PropertyColumnType::class, ['label' => 'table.semestre']);
        $builder->addColumn('diplome', PropertyColumnType::class, ['label' => 'table.diplome']);
        $builder->setLoadUrl('adm_questionnaire_qualite_index', ['type' => $this->type]);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, QuestionnaireQualite $s) {
                $builder->add('duplicate', RowDuplicateLinkType::class, [
                    'route' => 'adm_questionnaire_qualite_duplicate',
                    'route_params' => ['id' => $s->getId(), 'type' => $this->type],
                    'xhr' => false,
                ]);
                $builder->add('show', RowShowLinkType::class, [
                    'route' => 'adm_questionnaire_qualite_show',
                    'route_params' => [
                        'id' => $s->getId(),
                        'type' => $this->type,
                    ],
                    'xhr' => false,
                ]);
                $builder->add('edit', RowEditLinkType::class, [
                    'route' => 'adm_questionnaire_qualite_edit',
                    'route_params' => [
                        'id' => $s->getId(),
                        'type' => $this->type,
                    ],
                    'xhr' => false,
                ]);
                $builder->add('delete', RowDeleteLinkType::class, [
                    'attr' => [
                        'data-href' => 'adm_questionnaire_qualite_delete',
                        'data-uuid' => $s->getId(),
                        'data-csrf' => $this->csrfToken->getToken('delete'.$s->getId()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => QuestionnaireQualite::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                if ('administration' === $this->type && null !== $this->departement) {
                    $qb->andWhere('e.departement = :departement')
                        ->setParameter('departement', $this->departement);
                }

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.titre) LIKE :search');
                    $qb->orWhere('LOWER(e.libelle) LIKE :search');
                    $qb->orWhere('LOWER(e.texteDebut) LIKE :search');
                    $qb->orWhere('LOWER(e.texteFin) LIKE :search');
                    $qb->setParameter('search', '%'.$formData['search'].'%');
                }

                if (isset($formData['diplome'])) {
                    $qb->innerJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id');
                    $qb->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id');
                    $qb->andWhere('a.diplome = :diplome');
                    $qb->setParameter('diplome', $formData['diplome']);
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
            'translation_domain' => 'table',
            'type' => 'administratif',
            'departement' => null,
        ]);
    }
}
