<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/UfrRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:09
 */

namespace App\Repository;

use App\Entity\Ufr;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Ufr|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ufr|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ufr[]    findAll()
 * @method Ufr[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Ufr>
 */
class UfrRepository extends ServiceEntityRepository
{
    /**
     * UfrRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Ufr::class);
    }
}
