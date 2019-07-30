<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/StageEtudiantRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 30/07/2019 08:40
 * @lastUpdate 24/07/2019 13:34
 */

namespace App\Repository;

use App\Entity\Entreprise;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method StageEtudiant|null find($id, $lockMode = null, $lockVersion = null)
 * @method StageEtudiant|null findOneBy(array $criteria, array $orderBy = null)
 * @method StageEtudiant[]    findAll()
 * @method StageEtudiant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StageEtudiantRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, StageEtudiant::class);
    }

    /**
     * @param StagePeriode $stagePeriode
     * @param Etudiant     $etudiant
     *
     * @return mixed
     * @throws NonUniqueResultException
     */
    public function findExist(StagePeriode $stagePeriode, Etudiant $etudiant)
    {
        return $this->createQueryBuilder('s')
            ->where('s.etudiant = :etudiant')
            ->andWhere('s.stagePeriode = :stagePeriode')
            ->setParameter('etudiant', $etudiant)
            ->setParameter('stagePeriode', $stagePeriode)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findByPersonnelAnnee(Personnel $personnel, int $getAnneeUniversitaire)
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(StagePeriode::class, 'p', 'WITH', 's.stagePeriode = p.id')
            ->where('p.anneeUniversitaire = :annee')
            ->andWhere('s.tuteurUniversitaire = :personnel')
            ->setParameter('annee', $getAnneeUniversitaire)
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByPersonnelHistorique(Personnel $personnel, int $getAnneeUniversitaire)
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(StagePeriode::class, 'p', 'WITH', 's.stagePeriode = p.id')
            ->where('p.anneeUniversitaire < :annee')
            ->andWhere('s.tuteurUniversitaire = :personnel')
            ->setParameter('annee', $getAnneeUniversitaire)
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByEtudiantAnnee(Etudiant $etudiant, int $getAnneeUniversitaire)
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(StagePeriode::class, 'p', 'WITH', 's.stagePeriode = p.id')
            ->where('p.anneeUniversitaire = :annee')
            ->andWhere('s.etudiant = :etudiant')
            ->setParameter('annee', $getAnneeUniversitaire)
            ->setParameter('etudiant', $etudiant->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByEtudiantHistorique(Etudiant $etudiant, int $getAnneeUniversitaire)
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(StagePeriode::class, 'p', 'WITH', 's.stagePeriode = p.id')
            ->where('p.anneeUniversitaire < :annee')
            ->andWhere('s.etudiant = :etudiant')
            ->setParameter('annee', $getAnneeUniversitaire)
            ->setParameter('etudiant', $etudiant->getId())
            ->getQuery()
            ->getResult();
    }

    public function findEntreprisesByPeriode(StagePeriode $stagePeriode)
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(Entreprise::class, 'e', 'WITH', 's.entreprise = e.id')
            ->where('s.stagePeriode = :stagePeriode')
            ->setParameter('stagePeriode', $stagePeriode->getId())
            ->orderBy('e.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
