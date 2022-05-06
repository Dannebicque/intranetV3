<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/PpnRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/05/2022 14:27
 */

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Ppn;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Ppn|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ppn|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ppn[]    findAll()
 * @method Ppn[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Ppn>
 */
class PpnRepository extends ServiceEntityRepository
{
    /**
     * PpnRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Ppn::class);
    }

    public function findByDiplomeBuilder(Diplome $diplome): QueryBuilder
    {
        return $this->createQueryBuilder('p')
            ->where('p.diplome = :diplome')
            ->setParameter('diplome', $diplome->getId())
            ->orderBy('p.annee', Criteria::ASC);
    }

    public function findByDepartementBuilder(Departement $departement): QueryBuilder
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = p.diplome')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('p.annee', Criteria::ASC);
    }
}
