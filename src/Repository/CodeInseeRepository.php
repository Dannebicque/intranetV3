<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/CodeInseeRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/09/2020 08:34

namespace App\Repository;

use App\Entity\CodeInsee;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CodeInsee|null find($id, $lockMode = null, $lockVersion = null)
 * @method CodeInsee|null findOneBy(array $criteria, array $orderBy = null)
 * @method CodeInsee[]    findAll()
 * @method CodeInsee[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CodeInseeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CodeInsee::class);
    }

    // /**
    //  * @return CodeInsee[] Returns an array of CodeInsee objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CodeInsee
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
