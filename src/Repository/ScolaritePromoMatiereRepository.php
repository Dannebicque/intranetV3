<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/ScolaritePromoMatiereRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\ScolaritePromoMatiere;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ScolaritePromoMatiere|null find($id, $lockMode = null, $lockVersion = null)
 * @method ScolaritePromoMatiere|null findOneBy(array $criteria, array $orderBy = null)
 * @method ScolaritePromoMatiere[]    findAll()
 * @method ScolaritePromoMatiere[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ScolaritePromoMatiereRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ScolaritePromoMatiere::class);
    }

    // /**
    //  * @return ScolaritePromoMatiere[] Returns an array of ScolaritePromoMatiere objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ScolaritePromoMatiere
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
