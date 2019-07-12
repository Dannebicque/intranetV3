<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/AlternanceFicheSuiviRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 5/23/19 3:06 PM
 */

namespace App\Repository;

use App\Entity\AlternanceFicheSuivi;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method AlternanceFicheSuivi|null find($id, $lockMode = null, $lockVersion = null)
 * @method AlternanceFicheSuivi|null findOneBy(array $criteria, array $orderBy = null)
 * @method AlternanceFicheSuivi[]    findAll()
 * @method AlternanceFicheSuivi[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AlternanceFicheSuiviRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AlternanceFicheSuivi::class);
    }

    // /**
    //  * @return AlternanceFicheSuivi[] Returns an array of AlternanceFicheSuivi objects
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
    public function findOneBySomeField($value): ?AlternanceFicheSuivi
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
