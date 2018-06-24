<?php

namespace App\Repository;

use App\Entity\Etudiant;
use App\Entity\Rattrapage;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Rattrapage|null find($id, $lockMode = null, $lockVersion = null)
 * @method Rattrapage|null findOneBy(array $criteria, array $orderBy = null)
 * @method Rattrapage[]    findAll()
 * @method Rattrapage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RattrapageRepository extends ServiceEntityRepository
{
    /**
     * RattrapageRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Rattrapage::class);
    }

    /**
     * @param Semestre $semestre
     *
     * @return mixed
     */
    public function findBySemestre(Semestre $semestre)
    {
        return $this->createQueryBuilder('r')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'r.etudiant = e.id')
            ->where('e.semestre = :semestre')
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('e.nom', 'ASC')
            ->orderBy('e.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param Etudiant $etudiant
     *
     * @return mixed
     */
    public function findByEtudiant(Etudiant $etudiant)
    {
        return $this->createQueryBuilder('r')
            ->where('r.etudiant = :etudiant')
            ->setParameter('etudiant', $etudiant->getId())
            ->orderBy('r.created', 'DESC')
            ->orderBy('r.dateEval', 'DESC')
            ->getQuery()
            ->getResult();
    }
}
