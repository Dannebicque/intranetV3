<?php

namespace App\Repository;

use App\Entity\TypeDocument;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TypeDocument|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeDocument|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeDocument[]    findAll()
 * @method TypeDocument[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeDocumentRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TypeDocument::class);
    }

    /**
     * @param $formation
     *
     * @return mixed
     */
    public function findByFormation($formation)
    {
        return $this->createQueryBuilder('t')
            ->where('t.formation = :formation')
            ->setParameter('formation', $formation)
            ->orderBy('t.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }

//    /**
//     * @return Categorie[] Returns an array of Categorie objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Categorie
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
