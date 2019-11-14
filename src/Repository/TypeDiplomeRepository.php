<?php
/**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/TypeDiplomeRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 14/11/2019 14:57
 * @lastUpdate 14/11/2019 08:16
 */

namespace App\Repository;

use App\Entity\TypeDiplome;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TypeDiplome|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeDiplome|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeDiplome[]    findAll()
 * @method TypeDiplome[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeDiplomeRepository extends ServiceEntityRepository
{
    /**
     * TypeDiplomeRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TypeDiplome::class);
    }
}
