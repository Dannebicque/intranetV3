<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/UfrRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 8/16/18 11:08 AM
 */

namespace App\Repository;

use App\Entity\Ufr;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Ufr|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ufr|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ufr[]    findAll()
 * @method Ufr[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UfrRepository extends ServiceEntityRepository
{
    /**
     * UfrRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Ufr::class);
    }
}
