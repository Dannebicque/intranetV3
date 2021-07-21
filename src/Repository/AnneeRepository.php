<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/AnneeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/07/2021 17:22
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Annee|null find($id, $lockMode = null, $lockVersion = null)
 * @method Annee|null findOneBy(array $criteria, array $orderBy = null)
 * @method Annee[]    findAll()
 * @method Annee[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AnneeRepository extends ServiceEntityRepository
{
    /**
     * AnneeRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Annee::class);
    }

    public function findByDiplomeBuilder($diplome): QueryBuilder
    {
        return $this->createQueryBuilder('a')
            ->where('a.diplome = :diplome')
            ->setParameter('diplome', $diplome);
    }

    public function findByDepartement(Departement $departement)
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->where('d.departement = :departement')
            ->andWhere('a.actif = true')
            ->setParameter('departement', $departement->getId())
            ->getQuery()
            ->getResult();
    }
}
