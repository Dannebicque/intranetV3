<?php /**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/StageEtudiantRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 26/08/2019 13:45
 * @lastUpdate 26/08/2019 13:13
 */ /**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/StageEtudiantRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 14/11/2019 14:57
 * @lastUpdate 14/11/2019 14:56
 */ /** @noinspection ALL */
/** @noinspection PhpUnused */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\Entreprise;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;

/**
 * @method StageEtudiant|null find($id, $lockMode = null, $lockVersion = null)
 * @method StageEtudiant|null findOneBy(array $criteria, array $orderBy = null)
 * @method StageEtudiant[]    findAll()
 * @method StageEtudiant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StageEtudiantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
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

    public function findByPersonnelAnnee(Personnel $personnel, AnneeUniversitaire $anneeUniversitaire)
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(StagePeriode::class, 'p', 'WITH', 's.stagePeriode = p.id')
            ->where('p.anneeUniversitaire = :annee')
            ->andWhere('s.tuteurUniversitaire = :personnel')
            ->setParameter('annee', $anneeUniversitaire->getAnnee())
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByPersonnelHistorique(Personnel $personnel, AnneeUniversitaire $anneeUniversitaire)
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(StagePeriode::class, 'p', 'WITH', 's.stagePeriode = p.id')
            ->where('p.anneeUniversitaire < :annee')
            ->andWhere('s.tuteurUniversitaire = :personnel')
            ->setParameter('annee', $anneeUniversitaire->getAnnee())
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByEtudiantAnnee(Etudiant $etudiant, AnneeUniversitaire $anneeUniversitaire)
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(StagePeriode::class, 'p', 'WITH', 's.stagePeriode = p.id')
            ->where('p.anneeUniversitaire = :annee')
            ->andWhere('s.etudiant = :etudiant')
            ->setParameter('annee', $anneeUniversitaire->getAnnee())
            ->setParameter('etudiant', $etudiant->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByEtudiantHistorique(Etudiant $etudiant, AnneeUniversitaire $anneeUniversitaire)
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(StagePeriode::class, 'p', 'WITH', 's.stagePeriode = p.id')
            ->where('p.anneeUniversitaire < :annee')
            ->andWhere('s.etudiant = :etudiant')
            ->setParameter('annee', $anneeUniversitaire->getAnnee())
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
