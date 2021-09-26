<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/BCServiceFaitRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/09/2021 14:18
 */

namespace App\Repository;

use App\Entity\BCServiceFait;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method BCServiceFait|null find($id, $lockMode = null, $lockVersion = null)
 * @method BCServiceFait|null findOneBy(array $criteria, array $orderBy = null)
 * @method BCServiceFait[]    findAll()
 * @method BCServiceFait[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BCServiceFaitRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BCServiceFait::class);
    }

    // /**
    //  * @return BCServiceFait[] Returns an array of BCServiceFait objects
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
    public function findOneBySomeField($value): ?BCServiceFait
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
