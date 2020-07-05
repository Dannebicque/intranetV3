<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/IndisponibilitePersonnelRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:13

namespace App\Repository;

use App\Entity\IndisponibilitePersonnel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method IndisponibilitePersonnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method IndisponibilitePersonnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method IndisponibilitePersonnel[]    findAll()
 * @method IndisponibilitePersonnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IndisponibilitePersonnelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, IndisponibilitePersonnel::class);
    }

    // /**
    //  * @return IndisponibilitePersonnel[] Returns an array of IndisponibilitePersonnel objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?IndisponibilitePersonnel
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
