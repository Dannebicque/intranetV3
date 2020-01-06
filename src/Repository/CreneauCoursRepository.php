<?php

// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/CreneauCoursRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\CreneauCours;
use App\Entity\Departement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CreneauCours|null find($id, $lockMode = null, $lockVersion = null)
 * @method CreneauCours|null findOneBy(array $criteria, array $orderBy = null)
 * @method CreneauCours[]    findAll()
 * @method CreneauCours[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CreneauCoursRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CreneauCours::class);
    }

    public function findByAnneeDepartement(Departement $departement, $anneeUniversitaire)
    {
        return $this->createQueryBuilder('c')
            ->where('c.anneeUniversitaire = :annee')
            ->andWhere('c.departement = :departement')
            ->setParameter('annee', $anneeUniversitaire)
            ->setParameter('departement', $departement->getId())
            ->getQuery()
            ->getResult();
    }


}
