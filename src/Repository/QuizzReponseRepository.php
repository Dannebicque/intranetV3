<?php
/**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/QuizzReponseRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 09/11/2019 10:16
 * @lastUpdate 06/11/2019 17:05
 */

namespace App\Repository;

use App\Entity\QuizzReponse;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method QuizzReponse|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuizzReponse|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuizzReponse[]    findAll()
 * @method QuizzReponse[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuizzReponseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuizzReponse::class);
    }

    // /**
    //  * @return QuizzReponse[] Returns an array of QuizzReponse objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('q.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?QuizzReponse
    {
        return $this->createQueryBuilder('q')
            ->andWhere('q.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
