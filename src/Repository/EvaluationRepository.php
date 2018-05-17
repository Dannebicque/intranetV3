<?php

namespace App\Repository;

use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Evaluation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Evaluation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Evaluation[]    findAll()
 * @method Evaluation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EvaluationRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Evaluation::class);
    }

    public function findBySemestre(Semestre $semestre)
    {
        return $this->createQueryBuilder('e')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'm.id = e.matiere')
            ->innerJoin(Ue::class, 'u', 'WITH', 'u.id = m.ue')
            ->where('u.semestre = :semestre')
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('e.date_evaluation', 'ASC')
            ->getQuery()
            ->getResult();
    }

//    /**
//     * @return Evaluation[] Returns an array of Evaluation objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Evaluation
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
