<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/PpnRepository.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:46 PM
 *  * @lastUpdate 4/28/19 8:42 PM
 *  *
 *
 */

namespace App\Repository;

use App\Entity\Diplome;
use App\Entity\Ppn;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Ppn|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ppn|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ppn[]    findAll()
 * @method Ppn[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PpnRepository extends ServiceEntityRepository
{
    /**
     * PpnRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Ppn::class);
    }

    /**
     * @param Diplome $diplome
     *
     * @return QueryBuilder
     */
    public function findByDiplomeBuilder(Diplome $diplome): QueryBuilder
    {
        return $this->createQueryBuilder('p')
            ->where('p.diplome = :diplome')
            ->setParameter('diplome', $diplome->getId());
    }
}
