<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ApcParcoursRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/12/2020 08:53

namespace App\Repository;

use App\Entity\ApcParcours;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcParcours|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcParcours|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcParcours[]    findAll()
 * @method ApcParcours[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ApcParcoursRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcParcours::class);
    }

    // /**
    //  * @return ApcParcours[] Returns an array of ApcParcours objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ApcParcours
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
