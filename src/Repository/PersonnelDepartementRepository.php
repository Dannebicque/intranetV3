<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/PersonnelDepartementRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\Personnel;
use App\Entity\PersonnelDepartement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;

/**
 * @method PersonnelDepartement|null find($id, $lockMode = null, $lockVersion = null)
 * @method PersonnelDepartement|null findOneBy(array $criteria, array $orderBy = null)
 * @method PersonnelDepartement[]    findAll()
 * @method PersonnelDepartement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PersonnelDepartementRepository extends ServiceEntityRepository
{
    /**
     * PersonnelDepartementRepository constructor.
     *
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PersonnelDepartement::class);
    }

    /**
     * @param $type
     * @param $departement
     *
     * @return array
     */
    public function findByType($type, $departement): array
    {
        return $this->createQueryBuilder('f')
            ->innerJoin(Personnel::class, 'p', 'WITH', 'f.personnel = p.id')
            ->where('p.typeUser = :type')
            ->andWhere('f.departement = :departement')
            ->setParameter('type', $type)
            ->setParameter('departement', $departement)
            ->orderBy('p.nom', 'DESC')
            ->orderBy('p.prenom', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function findByPersonnel($user)
    {
        return $this->createQueryBuilder('f')
            ->innerJoin(Personnel::class, 'p', 'WITH', 'f.personnel = p.id')
            ->innerJoin(Departement::class, 'm', 'WITH', 'f.departement = m.id')
            ->where('f.personnel = :personnel')
            ->setParameter('personnel', $user)
            ->orderBy('m.libelle', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function findByPersonnelDepartement(Personnel $personnel, Departement $departement)
    {
        return $this->createQueryBuilder('f')
            ->where('f.personnel = :personnel')
            ->andWhere('f.departement = :departement')
            ->setParameter('personnel', $personnel)
            ->setParameter('departement', $departement)
            ->getQuery()
            ->getResult();
    }

    public function findDroitsByPersonnelDepartement(Personnel $personnel, Departement $departement)
    {
        return $this->createQueryBuilder('f')
            ->select('f.roles')
            ->where('f.personnel = :personnel')
            ->andWhere('f.departement = :departement')
            ->setParameter('personnel', $personnel)
            ->setParameter('departement', $departement)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param Personnel   $personnel
     * @param Departement $departement
     *
     * @return PersonnelDepartement|null
     * @throws NonUniqueResultException
     */
    public function findOneByPersonnelDepartement(Personnel $personnel, Departement $departement): ?PersonnelDepartement
    {
        return $this->createQueryBuilder('f')
            ->where('f.personnel = :personnel')
            ->andWhere('f.departement = :departement')
            ->setParameter('personnel', $personnel)
            ->setParameter('departement', $departement)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
