<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/TypeMaterielRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:09
 */

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\TypeMateriel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TypeMateriel|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeMateriel|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeMateriel[]    findAll()
 * @method TypeMateriel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<TypeMateriel>
 */
class TypeMaterielRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TypeMateriel::class);
    }

    public function findByDepartement(Departement $departement): array
    {
        return $this->findByDepartementBuider($departement)
            ->getQuery()
            ->getResult();
    }

    public function findByDepartementBuider(Departement $departement): QueryBuilder
    {
        return $this->createQueryBuilder('m')
            ->where('m.departement = :departement')
            ->setParameter('departement', $departement->getId());
    }
}
