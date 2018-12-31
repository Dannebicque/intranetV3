<?php

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\Formation;
use App\Entity\Personnel;
use App\Entity\PersonnelFormation;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Formation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Formation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Formation[]    findAll()
 * @method Formation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FormationRepository extends ServiceEntityRepository
{
    /**
     * FormationRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Formation::class);
    }

    /**
     * @param Etudiant $etudiant
     *
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findFormationEtudiant(Etudiant $etudiant)
    {
        return $this->createQueryBuilder('f')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.formation = f.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.diplome = d.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 's.annee = a.id')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'e.semestre = s.id')
            ->where('e.id = :etudiant')
            ->setParameter('etudiant', $etudiant->getId())
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * @param Personnel $personnel
     *
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findFormationPersonnelDefaut(Personnel $personnel)
    {
        return $this->createQueryBuilder('f')
            ->innerJoin(PersonnelFormation::class, 'p', 'WITH', 'p.formation = f.id')
            ->where('p.personnel = :personnel')
            ->andWhere('p.defaut = :defaut')
            ->setParameter('personnel', $personnel->getId())
            ->setParameter('defaut', true)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param Personnel $personnel
     *
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findFormationPersonnel(Personnel $personnel)
    {
        return $this->createQueryBuilder('f')
            ->innerJoin(PersonnelFormation::class, 'p', 'WITH', 'p.formation = f.id')
            ->where('p.personnel = :personnel')
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();
    }
}
