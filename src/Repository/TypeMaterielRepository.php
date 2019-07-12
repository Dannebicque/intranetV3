<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/TypeMaterielRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 4/28/19 8:46 PM
 */

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\TypeMateriel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TypeMateriel|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeMateriel|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeMateriel[]    findAll()
 * @method TypeMateriel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeMaterielRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TypeMateriel::class);
    }


    public function findByDepartement(Departement $departement)
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
