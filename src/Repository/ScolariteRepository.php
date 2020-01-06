<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/ScolariteRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
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
     *
     * @param ManagerRegistry $registry
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
}
