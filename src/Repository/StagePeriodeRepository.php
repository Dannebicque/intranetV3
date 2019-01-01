<?php

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\Formation;
use App\Entity\Semestre;
use App\Entity\StagePeriode;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method StagePeriode|null find($id, $lockMode = null, $lockVersion = null)
 * @method StagePeriode|null findOneBy(array $criteria, array $orderBy = null)
 * @method StagePeriode[]    findAll()
 * @method StagePeriode[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StagePeriodeRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, StagePeriode::class);
    }

    /**
     * @param Diplome $diplome
     * @param int     $anneeUniversitaire
     *
     * @return mixed
     */
    public function findByDiplome(Diplome $diplome, $anneeUniversitaire = 0)
    {
        return $this->findByDiplomeBuilder($diplome, $anneeUniversitaire)->getQuery()
            ->getResult();
    }

    /**
     * @param Diplome $diplome
     * @param int     $anneeUniversitaire
     *
     * @return QueryBuilder
     */
    public function findByDiplomeBuilder(Diplome $diplome, $anneeUniversitaire = 0): QueryBuilder
    {

        $query = $this->createQueryBuilder('p')
            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->where('a.diplome = :diplome');

        if ($anneeUniversitaire !== 0) {
            $query->andWhere('p.anneeUniversitaire = :annee')
                ->setParameter('annee', $anneeUniversitaire);
        }

        $query->setParameter('diplome', $diplome->getId())
            ->orderBy('p.anneeUniversitaire', 'DESC')
            ->orderBy('p.numeroPeriode', 'ASC');

        return $query;
    }

    public function findStageEtudiant(Semestre $semestre)
    {
        //todo: filter sur l'année universitaire ?
        //trouver les périodes de stage sur ce semestre et le suivant
        $query = $this->createQueryBuilder('s')
            ->where('s.semestre = :semestreCourant')
            ->setParameter('semestreCourant', $semestre->getId());
        if ($semestre->getSuivant() !== null) {
            $query->orWhere('s.semestre = :semestreSuivant')
                ->setParameter('semestreSuivant', $semestre->getSuivant()->getId());
        }
        $query->orderBy('s.dateDebut', 'DESC');

        return $query->getQuery()->getResult();
    }

    /**
     * @param Formation $formation
     *
     * @return mixed
     */
    public function findByFormation(Formation $formation)
    {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.formation = :formation')
            ->setParameter('formation', $formation->getId())
            ->orderBy('p.anneeUniversitaire', 'DESC')
            ->orderBy('p.numeroPeriode', 'ASC');

        return $query->getQuery()->getResult();
    }

    public function findByFormationBuilder(Formation $formation, $annee) {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.formation = :formation')
            ->andWhere('p.anneeUniversitaire = :annee');

        $query->setParameter('formation', $formation->getId())
            ->setParameter('annee', $annee)
            ->orderBy('p.numeroPeriode', 'ASC');

        return $query;
    }
}
