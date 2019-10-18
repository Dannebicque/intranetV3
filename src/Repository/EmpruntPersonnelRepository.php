<?php
/**
 * Copyright (C) 10 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/EmpruntPersonnelRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 18/10/2019 08:06
 * @lastUpdate 05/10/2019 09:16
 */

namespace App\Repository;

use App\Entity\EmpruntPersonnel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method EmpruntPersonnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method EmpruntPersonnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method EmpruntPersonnel[]    findAll()
 * @method EmpruntPersonnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EmpruntPersonnelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EmpruntPersonnel::class);
    }

    // /**
    //  * @return EmpruntPersonnel[] Returns an array of EmpruntPersonnel objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?EmpruntPersonnel
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
