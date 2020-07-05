<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/CourrierRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Repository;

use App\Entity\Courrier;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Courrier|null find($id, $lockMode = null, $lockVersion = null)
 * @method Courrier|null findOneBy(array $criteria, array $orderBy = null)
 * @method Courrier[]    findAll()
 * @method Courrier[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CourrierRepository extends ServiceEntityRepository
{
    /**
     * CourrierRepository constructor.
     *
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Courrier::class);
    }
}
