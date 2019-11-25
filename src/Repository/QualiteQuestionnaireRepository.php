<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/QualiteQuestionnaireRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\QualiteQuestionnaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method QualiteQuestionnaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method QualiteQuestionnaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method QualiteQuestionnaire[]    findAll()
 * @method QualiteQuestionnaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QualiteQuestionnaireRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QualiteQuestionnaire::class);
    }

    // /**
    //  * @return QualiteQuestionnaire[] Returns an array of QualiteQuestionnaire objects
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
    public function findOneBySomeField($value): ?QualiteQuestionnaire
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
