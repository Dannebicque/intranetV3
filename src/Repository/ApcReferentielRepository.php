<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/ApcReferentielRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/07/2022 12:04
 */

namespace App\Repository;

use App\Entity\ApcReferentiel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ApcReferentiel>
 *
 * @method ApcReferentiel|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcReferentiel|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcReferentiel[]    findAll()
 * @method ApcReferentiel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ApcReferentielRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcReferentiel::class);
    }

    public function add(ApcReferentiel $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ApcReferentiel $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ApcReferentiel[] Returns an array of ApcReferentiel objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('a.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ApcReferentiel
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
