<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/DiplomeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:54
 */

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\TypeDiplome;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
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

    public function findAllBuilder(): QueryBuilder
    {
        return $this->createQueryBuilder('d')
            ->join(TypeDiplome::class, 't', 'WITH', 'd.typeDiplome = t.id')
            ->orderBy('t.libelle', Order::Ascending->value)
            ->addOrderBy('d.libelle', Order::Ascending->value);
    }

    public function findAll(): array
    {
        return $this->findAllBuilder()
            ->getQuery()
            ->getResult();
    }

    public function findByDepartement(Departement $departement): array
    {
        return $this->findByDepartementBuilder($departement)
            ->getQuery()
            ->getResult();
    }

    public function findByDepartementBuilder(Departement $departement): QueryBuilder
    {
        return $this->createQueryBuilder('d')
            ->where('d.departement = :departement')
            ->andWhere('d.actif = 1')
            ->setParameter('departement', $departement)
            ->orderBy('d.libelle');
    }

    public function findActifs(): array
    {
        return $this->createQueryBuilder('d')
            ->join(TypeDiplome::class, 't', 'WITH', 'd.typeDiplome = t.id')
            ->where('d.actif = :actif')
            ->setParameter('actif', true)
            ->orderBy('t.libelle', Order::Ascending->value)
            ->addOrderBy('d.libelle', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function findAllWithCelcat(): array
    {
        return $this->createQueryBuilder('d')
            ->where('d.optUpdateCelcat = 1')
            ->andWhere('d.codeCelcatDepartement <> 0')
            ->andWhere('d.parent IS NULL')
            ->getQuery()
            ->getResult();
    }

    public function findParentBuilder(Departement $departement): QueryBuilder
    {
        return $this->createQueryBuilder('d')
            ->where('d.parent IS NULL')
            ->andWhere('d.departement = :departement')
            ->setParameter('departement', $departement->getId());
    }

    public function findAllWithEduSign(): array
    {
        return $this->createQueryBuilder('d')
            ->where('d.keyEduSign IS NOT NULL')
            ->getQuery()
            ->getResult();
    }

    public function save(Diplome $diplome): void
    {
        $this->_em->persist($diplome);
        $this->_em->flush();
    }
}
