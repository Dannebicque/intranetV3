<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/PlanCoursRealiseRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2022 12:48
 */

namespace App\Repository;

use App\Entity\PlanCoursRealise;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PlanCoursRealise>
 *
 * @method PlanCoursRealise|null find($id, $lockMode = null, $lockVersion = null)
 * @method PlanCoursRealise|null findOneBy(array $criteria, array $orderBy = null)
 * @method PlanCoursRealise[]    findAll()
 * @method PlanCoursRealise[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlanCoursRealiseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlanCoursRealise::class);
    }

    public function add(PlanCoursRealise $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PlanCoursRealise $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PlanCoursRealise[] Returns an array of PlanCoursRealise objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?PlanCoursRealise
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
