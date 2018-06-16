<?php

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Matiere|null find($id, $lockMode = null, $lockVersion = null)
 * @method Matiere|null findOneBy(array $criteria, array $orderBy = null)
 * @method Matiere[]    findAll()
 * @method Matiere[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MatiereRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Matiere::class);
    }

    public function findBySemestre(Semestre $semestre)
    {
        return $this->findBySemestreBuilder($semestre->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByFormationBuilder($formation)
    {
        return $this->createQueryBuilder('m')
            ->innerJoin(Ue::class, 'u', 'WITH', 'u.id = m.ue')
            ->innerJoin(Semestre::class, 's', 'WITH', 's.id = u.semestre')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->where('d.formation = :formation')
            ->setParameter('formation', $formation->getId())//todo: id necessaire ?
            ->orderBy('m.codeMatiere', 'ASC')
            ->orderBy('m.libelle', 'ASC');
    }

    public function findBySemestreBuilder(Semestre $semestre)
    {
        return $this->createQueryBuilder('m')
            ->innerJoin(Ue::class, 'u', 'WITH', 'u.id = m.ue')
            ->where('u.semestre = :semestre')
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('m.ue', 'ASC')
            ->orderBy('m.codeMatiere', 'ASC');
    }
}
