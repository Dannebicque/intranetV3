<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/StagePeriodeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/09/2021 18:53
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Entity\StagePeriode;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method StagePeriode|null find($id, $lockMode = null, $lockVersion = null)
 * @method StagePeriode|null findOneBy(array $criteria, array $orderBy = null)
 * @method StagePeriode[]    findAll()
 * @method StagePeriode[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StagePeriodeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StagePeriode::class);
    }

    public function findByDiplome(Diplome $diplome, AnneeUniversitaire $anneeUniversitaire)
    {
        return $this->findByDiplomeBuilder($diplome, $anneeUniversitaire)->getQuery()
            ->getResult();
    }

    public function findByDiplomeBuilder(Diplome $diplome, AnneeUniversitaire $anneeUniversitaire): QueryBuilder
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->where('a.diplome = :diplome')
            ->andWhere('p.anneeUniversitaire = :annee')
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->setParameter('diplome', $diplome->getId())
            ->orderBy('p.anneeUniversitaire', 'DESC')
            ->addOrderBy('p.numeroPeriode', 'ASC');
    }

    public function findStageEtudiant(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire)
    {
        //trouver les périodes de stage sur ce semestre et le suivant
        $query = $this->createQueryBuilder('s')
            ->where('s.semestre = :semestreCourant');

        if (null !== $semestre->getSuivant()) {
            $query->orWhere('s.semestre = :semestreSuivant')
                ->setParameter('semestreSuivant', $semestre->getSuivant()->getId());
        }

        $query->andWhere('s.anneeUniversitaire = :annee')
            ->setParameter('semestreCourant', $semestre->getId())
            ->setParameter('annee', $anneeUniversitaire->getId());
        if (null !== $semestre->getSuivant()) {
            $query->orWhere('s.semestre = :semestreSuivant')
                ->setParameter('semestreSuivant', $semestre->getSuivant()->getId());
        }
        $query->orderBy('s.numeroPeriode', 'ASC');

        return $query->getQuery()->getResult();
    }

    public function findByDepartement(Departement $departement)
    {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('p.anneeUniversitaire', 'DESC')
            ->orderBy('p.numeroPeriode', 'ASC');

        return $query->getQuery()->getResult();
    }

    public function findByDepartementBuilder(Departement $departement, $annee): QueryBuilder
    {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.departement = :departement')
            ->andWhere('p.anneeUniversitaire = :annee');

        $query->setParameter('departement', $departement->getId())
            ->setParameter('annee', $annee)
            ->orderBy('p.numeroPeriode', 'ASC');

        return $query;
    }
}
