<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/MccTypeEpreuveRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/12/2022 16:49
 */

namespace App\Repository;

use App\Entity\MccTypeEpreuve;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MccTypeEpreuve>
 *
 * @method MccTypeEpreuve|null find($id, $lockMode = null, $lockVersion = null)
 * @method MccTypeEpreuve|null findOneBy(array $criteria, array $orderBy = null)
 * @method MccTypeEpreuve[]    findAll()
 * @method MccTypeEpreuve[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MccTypeEpreuveRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MccTypeEpreuve::class);
    }

    public function save(MccTypeEpreuve $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(MccTypeEpreuve $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return MccTypeEpreuve[] Returns an array of MccTypeEpreuve objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('m.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?MccTypeEpreuve
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
