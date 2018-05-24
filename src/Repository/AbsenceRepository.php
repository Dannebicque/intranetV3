<?php

namespace App\Repository;

use App\Entity\Absence;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Absence|null find($id, $lockMode = null, $lockVersion = null)
 * @method Absence|null findOneBy(array $criteria, array $orderBy = null)
 * @method Absence[]    findAll()
 * @method Absence[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AbsenceRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Absence::class);
    }

    public function getAbsencesMatiere(Matiere $matiere, $anneeCourante)
    {
        return $this->createQueryBuilder('m')
            ->where('m.id = :matiere')
            ->andWhere('m.anneeuniversitaire = :annee')
            ->setParameter('matiere', $matiere->getId())
            ->setParameter('annee', $anneeCourante)
            ->orderBy('m.date', 'DESC')
            ->orderBy('m.heure', 'DESC')
            ->getQuery()
            ->getResult();

    }

    public function findBySemestre(Semestre $semestre, $anneeCourante)
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'a.etudiant =e.id')
            ->where('e.semestre = :semestre')
            ->andWhere('a.anneeuniversitaire = :annee')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('annee', $anneeCourante)
            ->orderBy('a.date', 'DESC')
            ->orderBy('a.heure', 'DESC')
            ->getQuery()
            ->getResult();
    }

//    /**
//     * @return Absence[] Returns an array of Absence objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Absence
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
