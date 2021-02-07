<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/DepartementRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\PersonnelDepartement;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Departement|null find($id, $lockMode = null, $lockVersion = null)
 * @method Departement|null findOneBy(array $criteria, array $orderBy = null)
 * @method Departement[]    findAll()
 * @method Departement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DepartementRepository extends ServiceEntityRepository
{
    /**
     * DepartementRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Departement::class);
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findDepartementEtudiant(Etudiant $etudiant)
    {
        return $this->createQueryBuilder('f')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.departement = f.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.diplome = d.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 's.annee = a.id')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'e.semestre = s.id')
            ->where('e.id = :etudiant')
            ->setParameter('etudiant', $etudiant->getId())
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findDepartementPersonnelDefaut(Personnel $personnel)
    {
        return $this->createQueryBuilder('f')
            ->innerJoin(PersonnelDepartement::class, 'p', 'WITH', 'p.departement = f.id')
            ->where('p.personnel = :personnel')
            ->andWhere('p.defaut = :defaut')
            ->setParameter('personnel', $personnel->getId())
            ->setParameter('defaut', true)
            ->getQuery()
            ->getResult();
    }

    public function findDepartementPersonnel(Personnel $personnel)
    {
        return $this->createQueryBuilder('f')
            ->innerJoin(PersonnelDepartement::class, 'p', 'WITH', 'p.departement = f.id')
            ->where('p.personnel = :personnel')
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();
    }

    public function findActifs()
    {
        return $this->createQueryBuilder('d')
            ->where('d.actif = 1')
            ->orderBy('d.libelle')
            ->getQuery()
            ->getResult();
    }
}
