<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/BCDemandRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/09/2021 14:07
 */

namespace App\Repository;

use App\Entity\BCDemand;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method BCDemand|null find($id, $lockMode = null, $lockVersion = null)
 * @method BCDemand|null findOneBy(array $criteria, array $orderBy = null)
 * @method BCDemand[]    findAll()
 * @method BCDemand[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BCDemandRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BCDemand::class);
    }

    // /**
    //  * @return BCDemand[] Returns an array of BCDemand objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?BCDemand
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
