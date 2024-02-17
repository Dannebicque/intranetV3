<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/StagePeriodeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 17/02/2024 07:18
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Entity\StagePeriode;
use App\Enums\SemestreLienEnum;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method StagePeriode|null find($id, $lockMode = null, $lockVersion = null)
 * @method StagePeriode|null findOneBy(array $criteria, array $orderBy = null)
 * @method StagePeriode[]    findAll()
 * @method StagePeriode[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<StagePeriode>
 */
class StagePeriodeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StagePeriode::class);
    }

    public function findByDiplome(Diplome $diplome, AnneeUniversitaire $anneeUniversitaire): array
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
            ->orderBy('p.anneeUniversitaire', Criteria::DESC)
            ->addOrderBy('p.numeroPeriode', Criteria::ASC);
    }

    public function findStageEtudiant(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): array
    {
        // trouver les périodes de stage sur ce semestre et le suivant
        $query = $this->createQueryBuilder('s')
            ->where('s.semestre = :semestreCourant');


        foreach ($semestre->getSemestreLienDepart() as $semestreLienDepart) {
            if (SemestreLienEnum::SUIVANT === $semestreLienDepart->getSens() && $semestre->getDiplome()->getId() === $semestreLienDepart->getSemestreArrive()->getDiplome()->getId()) {
                $query->orWhere('s.semestre = :semestreSuivant'.$semestreLienDepart->getSemestreArrive()->getId())
                        ->setParameter('semestreSuivant'.$semestreLienDepart->getSemestreArrive()->getId(),
                            $semestreLienDepart->getSemestreArrive()->getId());
            }
        }

        $query->andWhere('s.anneeUniversitaire = :annee')
            ->setParameter('semestreCourant', $semestre->getId())
            ->setParameter('annee', $anneeUniversitaire->getId());

        $query->orderBy('s.numeroPeriode', Criteria::ASC);

        return $query->getQuery()->getResult();
    }

    public function findByDepartement(Departement $departement): array
    {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('p.anneeUniversitaire', Criteria::DESC)
            ->addOrderBy('p.numeroPeriode', Criteria::ASC);

        return $query->getQuery()->getResult();
    }

    public function findByDepartementAndAnneeUniversitaire(Departement $departement, AnneeUniversitaire $anneeUniversitaire): array
    {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.departement = :departement')
            ->andWhere('p.anneeUniversitaire = :annee')
            ->setParameter('departement', $departement->getId())
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->orderBy('p.anneeUniversitaire', Criteria::DESC)
            ->addOrderBy('p.numeroPeriode', Criteria::ASC);

        return $query->getQuery()->getResult();
    }

    public function findByDepartementBuilder(Departement $departement, AnneeUniversitaire $annee): QueryBuilder
    {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.departement = :departement')
            ->andWhere('p.anneeUniversitaire = :annee');

        $query->setParameter('departement', $departement->getId())
            ->setParameter('annee', $annee->getId())
            ->orderBy('p.numeroPeriode', Criteria::ASC);

        return $query;
    }
}
