<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/DiplomeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\TypeDiplome;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Diplome|null find($id, $lockMode = null, $lockVersion = null)
 * @method Diplome|null findOneBy(array $criteria, array $orderBy = null)
 * @method Diplome[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Diplome>
 */
class DiplomeRepository extends ServiceEntityRepository
{
    /**
     * DiplomeRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Diplome::class);
    }

    public function findAll()
    {
        return $this->createQueryBuilder('d')
            ->join(TypeDiplome::class, 't', 'WITH', 'd.typeDiplome = t.id')
            ->orderBy('t.libelle', 'ASC')
            ->addOrderBy('d.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findByDepartement(Departement $departement)
    {
        return $this->findByDepartementBuilder($departement->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByDepartementBuilder($departement): QueryBuilder
    {
        return $this->createQueryBuilder('d')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('d.libelle');
    }

    public function findActifs()
    {
        return $this->createQueryBuilder('d')
            ->join(TypeDiplome::class, 't', 'WITH', 'd.typeDiplome = t.id')
            ->where('d.actif = :actif')
            ->setParameter('actif', true)
            ->orderBy('t.libelle', 'ASC')
            ->addOrderBy('d.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findAllWithCelcat()
    {
        return $this->createQueryBuilder('d')
            ->where('d.optUpdateCelcat = 1')
            ->andWhere('d.codeCelcatDepartement <> 0')
            ->getQuery()
            ->getResult();
    }
}
