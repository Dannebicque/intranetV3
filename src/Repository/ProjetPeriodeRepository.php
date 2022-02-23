<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ProjetPeriodeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

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
 * @extends ServiceEntityRepository<ProjetPeriode>
 */
class ProjetPeriodeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProjetPeriode::class);
    }

    public function findByDepartement(Departement $departement): array
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
            ->orderBy('p.anneeUniversitaire', 'DESC')
            ->addOrderBy('p.libelle', 'ASC');
    }

    public function findBySemestre(Semestre $semestre): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.semestre = :semestre')
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('p.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
