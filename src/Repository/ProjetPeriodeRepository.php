<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ProjetPeriodeRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 18/09/2020 08:45

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\ProjetPeriode;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ProjetPeriode|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProjetPeriode|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProjetPeriode[]    findAll()
 * @method ProjetPeriode[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProjetPeriodeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProjetPeriode::class);
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
            ->orderBy('p.libelle', 'ASC');

        return $query->getQuery()->getResult();
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

        return $this->createQueryBuilder('p')
            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->where('a.diplome = :diplome')
            ->andWhere('p.anneeUniversitaire = :annee')
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->setParameter('diplome', $diplome->getId())
            ->orderBy('p.anneeUniversitaire', 'DESC')
            ->addOrderBy('p.libelle', 'ASC');
    }

    public function findBySemestre(Semestre $semestre)
    {
        return $this->createQueryBuilder('p')
            ->where('p.semestre = :semestre')
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('p.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
