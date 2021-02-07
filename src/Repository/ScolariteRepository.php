<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ScolariteRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Scolarite|null find($id, $lockMode = null, $lockVersion = null)
 * @method Scolarite|null findOneBy(array $criteria, array $orderBy = null)
 * @method Scolarite[]    findAll()
 * @method Scolarite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ScolariteRepository extends ServiceEntityRepository
{
    /**
     * ScolariteRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Scolarite::class);
    }

    public function findEtudiantsDepartement($annee, Departement $departement)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'p.etudiant = e.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.departement = :departement')
            ->andWhere('e.promotion = :annee')
            ->setParameter('departement', $departement->getId())
            ->setParameter('annee', $annee)
            ->orderBy('e.nom', 'asc')
            ->orderBy('e.prenom', 'asc')
            ->orderBy('p.ordre', 'asc')
            ->getQuery()
            ->getResult();
    }

    public function findByEtudiant(Etudiant $etudiant)
    {
        return $this->createQueryBuilder('s')
            ->where('s.etudiant = :etudiant')
            ->setParameter('etudiant', $etudiant->getId())
            ->orderBy('s.ordre', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findByEtudiantDepartement(Etudiant $etudiant, Departement $departement)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'p.etudiant = e.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.departement = :departement')
            ->andWhere('p.etudiant = :etudiant')
            ->setParameter('departement', $departement->getId())
            ->setParameter('etudiant', $etudiant->getId())
            ->orderBy('e.nom', 'asc')
            ->orderBy('e.prenom', 'asc')
            ->orderBy('p.ordre', 'asc')
            ->getQuery()
            ->getResult();
    }

    /**
     * @return int|mixed|string
     * @throws NoResultException
     *
     * @throws NonUniqueResultException
     */
    public function findOrdreMax(Etudiant $etudiant)
    {
        return $this->createQueryBuilder('p')
            ->select('MAX(p.ordre) as max')
            ->where('p.etudiant = :etudiant')
            ->setParameter('etudiant', $etudiant->getId())
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function findBySemestreArray(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire)
    {
        $result = $this->createQueryBuilder('s')
            ->where('s.semestre = :semestre')
            ->andWhere('s.anneeUniversitaire = :anneeUniversitaire')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('anneeUniversitaire', $anneeUniversitaire->getId())
            ->getQuery()
            ->getResult();

        $t = [];
        foreach ($result as $r) {
            $t[$r->getEtudiant()->getId()] = $r;
        }

        return $t;
    }
}
