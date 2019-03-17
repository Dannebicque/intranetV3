<?php

namespace App\Repository;

use App\Entity\SalleExamen;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method SalleExamen|null find($id, $lockMode = null, $lockVersion = null)
 * @method SalleExamen|null findOneBy(array $criteria, array $orderBy = null)
 * @method SalleExamen[]    findAll()
 * @method SalleExamen[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SalleExamenRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, SalleExamen::class);
    }

    public function findByDepartement($departement, $nbResult = 0): array
    {
        $q = $this->createQueryBuilder('a')
            ->andWhere('a.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('a.created', 'DESC');

        if ($nbResult > 0) {
            $q->setMaxResults($nbResult);
        }

        return $q->getQuery()
            ->getResult();
    }
}
