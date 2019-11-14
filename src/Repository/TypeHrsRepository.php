<?php
/**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/TypeHrsRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 14/11/2019 14:57
 * @lastUpdate 14/11/2019 08:16
 */

namespace App\Repository;

use App\Entity\TypeHrs;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TypeHrs|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeHrs|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeHrs[]    findAll()
 * @method TypeHrs[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeHrsRepository extends ServiceEntityRepository
{
    /**
     * TypeHrsRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TypeHrs::class);
    }
}
