<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/PlanCoursHistoriqueEdtRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 20:58
 */

namespace App\Repository;

use App\Entity\PlanCoursHistoriqueEdt;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PlanCoursHistoriqueEdt>
 *
 * @method PlanCoursHistoriqueEdt|null find($id, $lockMode = null, $lockVersion = null)
 * @method PlanCoursHistoriqueEdt|null findOneBy(array $criteria, array $orderBy = null)
 * @method PlanCoursHistoriqueEdt[]    findAll()
 * @method PlanCoursHistoriqueEdt[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlanCoursHistoriqueEdtRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlanCoursHistoriqueEdt::class);
    }

    public function add(PlanCoursHistoriqueEdt $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PlanCoursHistoriqueEdt $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PlanCoursHistoriqueEdt[] Returns an array of PlanCoursHistoriqueEdt objects
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

//    public function findOneBySomeField($value): ?PlanCoursHistoriqueEdt
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
