<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/PlanCoursSaeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Repository;

use App\Entity\PlanCoursSae;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<\App\Entity\PlanCoursSae>
 *
 * @method PlanCoursSae|null find($id, $lockMode = null, $lockVersion = null)
 * @method PlanCoursSae|null findOneBy(array $criteria, array $orderBy = null)
 * @method PlanCoursSae[]    findAll()
 * @method PlanCoursSae[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlanCoursSaeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlanCoursSae::class);
    }

    public function add(PlanCoursSae $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PlanCoursSae $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PlanCoursMatiere[] Returns an array of PlanCoursMatiere objects
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

//    public function findOneBySomeField($value): ?PlanCoursMatiere
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
