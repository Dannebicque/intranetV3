<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Repository;

use App\Entity\EtudiantEvenement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<EtudiantEvenement>
 */
class EtudiantEvenementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EtudiantEvenement::class);
    }

    public function save(EtudiantEvenement $evenement, bool $flush = false): void
    {
        $this->getEntityManager()->persist($evenement);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return EtudiantEvenement[] Returns an array of EtudiantEvenement objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('e')
    //            ->andWhere('e.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('e.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?EtudiantEvenement
    //    {
    //        return $this->createQueryBuilder('e')
    //            ->andWhere('e.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

    /**
     * Retourne true si l'étudiant a déjà émargé (present = true) pour l'événement.
     */
    //    public function isPresent(int $etudiantId, int $evenementId): bool
    //    {
    //        $qb = $this->createQueryBuilder('ee')
    //            ->select('COUNT(ee.id)')
    //            ->where('ee.etudiant = :etudiant')
    //            ->andWhere('ee.evenement = :evenement')
    //            ->andWhere('ee.present = :present')
    //            ->setParameter('etudiant', $etudiantId)
    //            ->setParameter('evenement', $evenementId)
    //            ->setParameter('present', true);
    //
    //        $count = (int) $qb->getQuery()->getSingleScalarResult();
    //
    //        return $count > 0;
    //    }
}
