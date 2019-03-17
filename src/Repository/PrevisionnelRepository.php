<?php

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\Departement;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Previsionnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method Previsionnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method Previsionnel[]    findAll()
 * @method Previsionnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PrevisionnelRepository extends ServiceEntityRepository
{
    /**
     * PrevisionnelRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Previsionnel::class);
    }

    /**
     * @param Personnel   $personnel
     * @param Departement $departement
     *
     * @return mixed
     */
    public function findPrevisionnelEnseignantDepartement(Personnel $personnel, Departement $departement)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.matiere = m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'u.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('p.annee = :annee')
            ->andWhere('p.personnel = :personnel')
            ->andWhere('d.departement = :departement')
            ->setParameter('annee', $departement->getOptAnneePrevisionnel())
            ->setParameter('departement', $departement->getId())
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();
    }

    /**
     * @param Personnel $personnel
     * @param           $annee
     *
     * @return array
     */
    public function findPrevisionnelEnseignantComplet(Personnel $personnel, $annee) :array
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Matiere::class, 'e', 'WITH', 'p.matiere = e.id')
            ->where('p.annee = :annee')
            ->andWhere('p.personnel = :personnel')
            ->setParameter('annee', $annee)
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();
    }

    /**
     * @param Matiere $matiere
     * @param         $annee
     *
     * @return mixed
     */
    public function findPrevisionnelMatiere(Matiere $matiere, $annee)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Personnel::class, 'e', 'WITH', 'p.personnel = e.id')
            ->where('p.annee = :annee')
            ->andWhere('p.matiere = :matiere')
            ->setParameter('annee', $annee)
            ->setParameter('matiere', $matiere->getId())
            ->orderBy('e.nom', 'ASC')
            ->orderBy('e.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param Semestre $semestre
     * @param          $annee
     *
     * @return mixed
     */
    public function findPrevisionnelSemestre(Semestre $semestre, $annee)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Personnel::class, 'e', 'WITH', 'p.personnel = e.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.matiere = m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->where('p.annee = :annee')
            ->andWhere('u.semestre = :semestre')
            ->setParameter('annee', $annee)
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('m.codeMatiere', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findByDepartement(Departement $departement, $annee)
    {

        return $this->createQueryBuilder('p')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.matiere = m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'u.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('p.annee = :annee')
            ->andWhere('d.departement = :departement')
            ->setParameter('annee', $annee)
            ->setParameter('departement', $departement->getId())
            ->getQuery()
            ->getResult();

    }

    public function findByDiplome(Diplome $diplome, $annee)
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(Personnel::class, 'p', 'WITH', 's.personnel = p.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 's.matiere = m.id')
            ->innerJoin(Ue::class, 'u', 'with', 'u.id=m.UE')
            ->innerJoin(Semestre::class, 'se', 'with', 'se.id=u.semestre')
            ->innerJoin(Annee::class, 'a', 'with', 'a.id=s.annee')
            ->where('a.diplome = :diplome')
            ->andWhere('s.annee = :annee')
            ->setParameter('diplome', $diplome->getId())
            ->setParameter('annee' ,$annee)
            ->getQuery()
            ->getResult();
    }
}
