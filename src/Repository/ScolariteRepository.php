<?php

namespace App\Repository;

use App\Entity\Scolarite;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\Formation;

/**
 * @method Scolarite|null find($id, $lockMode = null, $lockVersion = null)
 * @method Scolarite|null findOneBy(array $criteria, array $orderBy = null)
 * @method Scolarite[]    findAll()
 * @method Scolarite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ScolariteRepository extends ServiceEntityRepository
{
    /**
     * ScolariteRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Scolarite::class);
    }

    public function findEtudiantsFormation($annee, Formation $formation)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'p.etudiant = e.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.formation = :formation')
            ->andWhere('e.promotion = :annee')
            ->setParameter('formation', $formation->getId())
            ->setParameter('annee', $annee)
            ->orderBy('e.nom', 'asc')
            ->orderBy('e.prenom', 'asc')
            ->orderBy('p.ordre', 'asc')
            ->getQuery()
            ->getResult();
    }
}
