<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/QuizzQuestionnaireRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\QuizzQuestionnaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method QuizzQuestionnaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuizzQuestionnaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuizzQuestionnaire[]    findAll()
 * @method QuizzQuestionnaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuizzQuestionnaireRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuizzQuestionnaire::class);
    }

    // /**
    //  * @return QuizzQuestionnaire[] Returns an array of QuizzQuestionnaire objects
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
    public function findOneBySomeField($value): ?QuizzQuestionnaire
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
