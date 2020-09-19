<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/MaterielCommunRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 18/09/2020 16:55

namespace App\Repository;

use App\Entity\MaterielCommun;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MaterielCommun|null find($id, $lockMode = null, $lockVersion = null)
 * @method MaterielCommun|null findOneBy(array $criteria, array $orderBy = null)
 * @method MaterielCommun[]    findAll()
 * @method MaterielCommun[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MaterielCommunRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MaterielCommun::class);
    }

    // /**
    //  * @return MaterielCommun[] Returns an array of MaterielCommun objects
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
    public function findOneBySomeField($value): ?MaterielCommun
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
