<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/DocumentTableType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/01/2023 17:48
 */

namespace App\Table;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Document;
use App\Entity\Semestre;
use App\Entity\TypeDocument;
use App\Form\Type\SearchType;
use App\Repository\SemestreRepository;
use App\Repository\TypeDocumentRepository;
use App\Table\ColumnType\CategorieArticleColumnType;
use App\Table\ColumnType\SemestresColumnType;
use DavidAnnebicque\TableBundle\Adapter\EntityAdapter;
use DavidAnnebicque\TableBundle\Column\BadgeColumnType;
use DavidAnnebicque\TableBundle\Column\DateColumnType;
use DavidAnnebicque\TableBundle\Column\PropertyColumnType;
use DavidAnnebicque\TableBundle\Column\WidgetColumnType;
use DavidAnnebicque\TableBundle\TableBuilder;
use DavidAnnebicque\TableBundle\TableType;
use DavidAnnebicque\TableBundle\Widget\Type\ExportDropdownType;
use DavidAnnebicque\TableBundle\Widget\Type\LinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDeleteLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowDuplicateLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowEditLinkType;
use DavidAnnebicque\TableBundle\Widget\Type\RowShowLinkType;
use DavidAnnebicque\TableBundle\Widget\WidgetBuilder;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class DocumentTableType extends TableType
{
    private ?Departement $departement = null;
    private ?string $source = 'documents';
    private string $base_url = 'administration_document_';

    public function __construct(private readonly CsrfTokenManagerInterface $csrfToken)
    {
    }

    public function buildTable(TableBuilder $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $this->source = $options['source'];

        $builder->addFilter('search', SearchType::class);

        if (Document::ORIGINAUX === $this->source) {
            $this->base_url = 'sa_qualite_documents_';
            $builder->addFilter('typeDocument', EntityType::class, [
                'class' => TypeDocument::class,
                'query_builder' => fn (TypeDocumentRepository $repository) => $repository->findByOriginauxBuilder(),
                'choice_label' => 'libelle',
                'label' => 'Type de document',
                'required' => false,
            ]);
            $builder->addWidget('add', LinkType::class, [
                'route' => 'sa_qualite_type_document_index',
                'route_params' => ['source' => $this->source],
                'class' => 'btn btn-info',
                'text' => 'Type de document',
            ]);
        } else {
            $builder->addFilter('semestres', EntityType::class, [
                'class' => Semestre::class,
                'query_builder' => fn (SemestreRepository $repository) => $repository->findByDepartementBuilder($this->departement),
                'choice_label' => 'display',
                'label' => 'Semestre(s)',
                'required' => false,
            ]);
            $builder->addFilter('typeDocument', EntityType::class, [
                'class' => TypeDocument::class,
                'query_builder' => fn (TypeDocumentRepository $repository) => $repository->findByDepartementBuilder($this->departement),
                'choice_label' => 'libelle',
                'label' => 'Type de document',
                'required' => false,
            ]);
            $builder->addWidget('add', LinkType::class, [
                'route' => 'administration_type_document_index',
                'route_params' => ['source' => $this->source],
                'class' => 'btn btn-info',
                'text' => 'Type de document',
            ]);
        }

        $builder->setLoadUrl($this->base_url.'index', ['source' => $this->source]);

        $builder->addWidget('export', ExportDropdownType::class, [
            'route' => 'administration_document_export',
            'route_params' => ['source' => $this->source],
        ]);

        $builder->addColumn('libelle', PropertyColumnType::class,
            ['label' => 'table.titre', 'translation_domain' => 'messages']);
        $builder->addColumn('typeFichierIconePetit', PropertyColumnType::class,
            ['label' => 'table.type_fichier', 'translation_domain' => 'messages']);
        $builder->addColumn('typeDocument', CategorieArticleColumnType::class,
            ['label' => 'table.categorie', 'translation_domain' => 'messages']);
        if (Document::DOCUMENTS === $this->source) {
            $builder->addColumn('typeDestinataire', BadgeColumnType::class,
                ['label' => 'table.typeDestinataire', 'translation_domain' => 'messages']);
            $builder->addColumn('semestres', SemestresColumnType::class,
                ['label' => 'table.semestres', 'translation_domain' => 'messages']);
        }
        $builder->addColumn('updated', DateColumnType::class, [
            'order' => 'DESC',
            'format' => 'd/m/Y',
            'label' => 'table.updated',
            'translation_domain' => 'messages',
        ]);

        $builder->addColumn('links', WidgetColumnType::class, [
            'build' => function (WidgetBuilder $builder, Document $s) {
                $builder->add('duplicate', RowDuplicateLinkType::class, [
                    'route' => $this->base_url.'duplicate',
                    'route_params' => ['id' => $s->getUuidString(), 'source' => $this->source],
                    'xhr' => false,
                ]);
                $builder->add('show', RowShowLinkType::class, [
                    'route' => $this->base_url.'show',
                    'route_params' => [
                        'id' => $s->getUuidString(), 'source' => $this->source,
                    ],
                    'xhr' => false,
                ]);
                $builder->add('edit', RowEditLinkType::class, [
                    'route' => $this->base_url.'edit',
                    'route_params' => [
                        'id' => $s->getUuidString(), 'source' => $this->source,
                    ],
                    'xhr' => false,
                ]);
                $builder->add('delete', RowDeleteLinkType::class, [
                    'route' => $this->base_url.'delete',
                    'route_params' => ['id' => $s->getUuidString(), 'source' => $this->source],
                    'attr' => [
                        'data-csrf' => $this->csrfToken->getToken('delete'.$s->getUuidString()),
                    ],
                ]);
            },
        ]);

        $builder->useAdapter(EntityAdapter::class, [
            'class' => Document::class,
            'fetch_join_collection' => false,
            'query' => function (QueryBuilder $qb, array $formData) {
                if (Document::DOCUMENTS === $this->source) {
                    $qb->innerJoin('e.semestres', 'c')// récupération de la jointure dans la table dédiée
                    ->innerJoin(Semestre::class, 's', 'WITH', 'c.id = s.id')
                        ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
                        ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
                        ->where('d.departement = :departement')
                        ->setParameter('departement', $this->departement->getId());
                } else {
                    $qb->innerJoin(TypeDocument::class, 't', 'WITH', 'e.typeDocument = t.id')
                        ->where('t.originaux = 1');
                }

                if (isset($formData['search'])) {
                    $qb->andWhere('LOWER(e.libelle) LIKE :search');
                    $qb->orWhere('LOWER(e.libelle) LIKE :search');
                    $qb->setParameter('search', '%'.$formData['search'].'%');
                }

                if (isset($formData['typeDocument'])) {
                    $qb->andWhere('e.typeDocument = :typeDocument');
                    $qb->setParameter('typeDocument', $formData['typeDocument']);
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
            'source' => 'documents',
        ]);
    }
}
