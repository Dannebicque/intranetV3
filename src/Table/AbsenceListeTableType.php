<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/AbsenceListeTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 12:35
 */

namespace App\Table;

use App\Components\Table\Adapter\EntityAdapter;
use App\Components\Table\Column\BadgeColumnType;
use App\Components\Table\Column\WidgetColumnType;
use App\Components\Table\TableBuilder;
use App\Components\Table\TableType;
use App\Components\Widget\Type\ButtonDropdownType;
use App\Components\Widget\Type\ButtonType;
use App\Components\Widget\Type\LinkType;
use App\Components\Widget\Type\RowShowLinkType;
use App\Components\Widget\WidgetBuilder;
use App\Entity\Absence;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Form\Type\SearchType;
use App\Repository\GroupeRepository;
use App\Table\ColumnType\EtudiantColumnType;
use App\Table\ColumnType\GroupeEtudiantColumnType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class AbsenceListeTableType extends TableType
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

        $builder->addColumn('etudiant', EtudiantColumnType::class,
            ['label' => 'table.etudiant', 'translation_domain' => 'messages']);
        $builder->addColumn('etudiantGroupes', GroupeEtudiantColumnType::class,
            ['label' => 'table.groupe', 'translation_domain' => 'messages']);
        $builder->addColumn('nbCoursManques', BadgeColumnType::class, //ajouter des seuils?
            ['label' => 'table.nb_cours_manques', 'translation_domain' => 'messages']);
        $builder->addColumn('dureeCoursManques', BadgeColumnType::class, //ajouter des seuils?
            ['label' => 'table.duree_cours_manques', 'translation_domain' => 'messages']);
        $builder->addColumn('dureeDemiJournee', BadgeColumnType::class, //ajouter des seuils?
            ['label' => 'table.duree_demi_journee', 'translation_domain' => 'messages']);
        $builder->addColumn('nbNonJustifies', BadgeColumnType::class, //ajouter des seuils?
            ['label' => 'table.nb_non_justifies', 'translation_domain' => 'messages']);
        $builder->addColumn('nbJustifies', BadgeColumnType::class, //ajouter des seuils?
            ['label' => 'table.nb_justifies', 'translation_domain' => 'messages']);


        $builder->setLoadUrl('administration_absences_justificatif_semestre_liste',
            ['semestre' => $this->semestre->getId()]);

        $builder->addColumn('apercu', WidgetColumnType::class, [
            'label' => 'apercu',
            'build' => function(WidgetBuilder $builder, Absence $s) {
                $builder->add('voir.justificatif', ButtonType::class, [
                    'class' => 'btn btn-outline btn-info',
                    'icon' => 'fas fa-eye',
                    'text' => false,
                    'translation_domain' => 'messages',
                    'attr' => [
                        'data-provide' => 'modaler tooltip',
                        'data-url' => $this->router->generate('administration_absence_justificatif_details',
                            ['uuid' => $s->getUuidString()]),
                        'data-title' => 'Détail du justificatif'
                    ]
                ]);
            },
        ]);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function(WidgetBuilder $builder, Absence $s) {


                $builder->add('profil', RowShowLinkType::class, [
                    'attr' => [
                        'data-href' => 'administration_rattrapage_delete',
                        'data-uuid' => $s->getUuidString(),
                        'data-csrf' => $this->csrfToken->getToken('delete' . $s->getUuidString()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Absence::class,
            'fetch_join_collection' => false,
            'query' => function(QueryBuilder $qb, array $formData) {
                $qb->innerJoin(Etudiant::class, 'etu', 'WITH', 'e.etudiant = etu.id')
                    ->where('e.semestre = :semestre')
                    ->andWhere('e.anneeUniversitaire = :anneeuniversitaire')
                    ->setParameter('semestre', $this->semestre->getId())
                    ->setParameter('anneeuniversitaire', $this->anneeUniversitaire->getId());

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(etu.nom) LIKE :search');
                    $qb->orWhere('LOWER(etu.prenom) LIKE :search');
                    $qb->setParameter('search', '%' . $formData['search'] . '%');
                }

                if (isset($formData['etat_demande']) && '' !== trim($formData['etat_demande'])) {
                    $qb->andWhere('e.etat_demande = :etat_demande');
                    $qb->setParameter('etat', $formData['etat_demande']);
                }

                if (isset($formData['groupe']) && '' !== trim($formData['groupe'])) {
                    $qb->innerJoin('etu.groupes', 'g');
                    $qb->andWhere('g.id = :groupe');
                    $qb->setParameter('groupe', $formData['groupe']);
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
