<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/TypeDocumentRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:54
 */

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\Document;
use App\Entity\TypeDocument;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TypeDocument|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeDocument|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeDocument[]    findAll()
 * @method TypeDocument[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<TypeDocument>
 */
class TypeDocumentRepository extends ServiceEntityRepository
{
    /**
     * TypeDocumentRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TypeDocument::class);
    }

    public function findByDepartement(Departement $departement): array
    {
        return $this->findByDepartementBuilder($departement)
            ->getQuery()
            ->getResult();
    }

    public function findByDepartementBuilder(Departement $departement): QueryBuilder
    {
        return $this->createQueryBuilder('t')
            ->where('t.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('t.libelle', Order::Ascending->value);
    }

    public function findByOriginauxBuilder(): QueryBuilder
    {
        return $this->createQueryBuilder('t')
            ->where('t.originaux = :true')
            ->setParameter('true', true)
            ->orderBy('t.libelle', Order::Ascending->value);
    }

    public function findByOriginaux(): array
    {
        return $this->findByOriginauxBuilder()
            ->getQuery()
            ->getResult();
    }

    public function getParents(string $source, ?Departement $departement = null): ?QueryBuilder
    {
        if (Document::ORIGINAUX === $source) {
            return $this->createQueryBuilder('t')
                // ->where('t.parent IS NULL')
                ->where('t.originaux = 1')
                ->orderBy('t.libelle', Order::Ascending->value);
        }

        if (null !== $departement && Document::DOCUMENTS === $source) {
            return $this->createQueryBuilder('t')
               // ->where('t.parent IS NULL')
                ->where('t.departement = :departement')
                ->setParameter('departement', $departement->getId())
                ->orderBy('t.libelle', Order::Ascending->value);
        }

        return null;
    }
}
