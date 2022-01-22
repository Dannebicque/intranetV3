<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/TypeDocumentRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\TypeDocument;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
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

    public function findByDepartement(Departement $departement)
    {
        return $this->findByDepartementBuilder($departement->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByDepartementBuilder($departement): QueryBuilder
    {
        return $this->createQueryBuilder('t')
            ->where('t.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('t.libelle', 'ASC');
    }
}
