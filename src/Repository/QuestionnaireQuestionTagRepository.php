<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuestionnaireQuestionTagRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 13:22
 */

namespace App\Repository;

use App\Entity\QuestionnaireQuestionTag;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method QuestionnaireQuestionTag|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnaireQuestionTag|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnaireQuestionTag[]    findAll()
 * @method QuestionnaireQuestionTag[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestionnaireQuestionTagRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireQuestionTag::class);
    }

    // /**
    //  * @return QuestionnaireQuestionTag[] Returns an array of QuestionnaireQuestionTag objects
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
    public function findOneBySomeField($value): ?QuestionnaireQuestionTag
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
