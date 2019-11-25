<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/StagePeriodeRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Entity\StagePeriode;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\QueryBuilder;

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

    /**
     * @param Diplome            $diplome
     * @param AnneeUniversitaire $anneeUniversitaire
     *
     * @return mixed
     */
    public function findByDiplome(Diplome $diplome, AnneeUniversitaire $anneeUniversitaire)
    {
        return $this->findByDiplomeBuilder($diplome, $anneeUniversitaire)->getQuery()
            ->getResult();
    }

    /**
     * @param Diplome            $diplome
     * @param AnneeUniversitaire $anneeUniversitaire
     *
     * @return QueryBuilder
     */
    public function findByDiplomeBuilder(Diplome $diplome, AnneeUniversitaire $anneeUniversitaire): QueryBuilder
    {

        $query = $this->createQueryBuilder('p')
            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->where('a.diplome = :diplome')
            ->andWhere('p.anneeUniversitaire = :annee')
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->setParameter('diplome', $diplome->getId())
            ->orderBy('p.anneeUniversitaire', 'DESC')
            ->addOrderBy('p.numeroPeriode', 'ASC');

        return $query;
    }

    public function findStageEtudiant(Semestre $semestre)
    {
        //trouver les périodes de stage sur ce semestre et le suivant
        $query = $this->createQueryBuilder('s')
            ->where('s.semestre = :semestreCourant')
            ->andWhere('s.anneeUniversitaire = :annee')
            ->setParameter('semestreCourant', $semestre->getId())
            ->setParameter('annee', $semestre->getAnneeUniversitaire()->getId());
        if ($semestre->getSuivant() !== null) {
            $query->orWhere('s.semestre = :semestreSuivant')
                ->setParameter('semestreSuivant', $semestre->getSuivant()->getId());
        }
        $query->orderBy('s.dateDebut', 'DESC');

        return $query->getQuery()->getResult();
    }

    /**
     * @param Departement $departement
     *
     * @return mixed
     */
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
