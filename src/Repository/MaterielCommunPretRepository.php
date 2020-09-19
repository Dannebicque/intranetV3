<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/MaterielCommunPretRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 18/09/2020 18:09

namespace App\Repository;

use App\Entity\MaterielCommunPret;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MaterielCommunPret|null find($id, $lockMode = null, $lockVersion = null)
 * @method MaterielCommunPret|null findOneBy(array $criteria, array $orderBy = null)
 * @method MaterielCommunPret[]    findAll()
 * @method MaterielCommunPret[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MaterielCommunPretRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MaterielCommunPret::class);
    }

    // /**
    //  * @return MaterielCommunPret[] Returns an array of MaterielCommunPret objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?MaterielCommunPret
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
