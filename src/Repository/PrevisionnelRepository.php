<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/PrevisionnelRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/01/2023 16:10
 */

namespace App\Repository;

use App\Entity\Previsionnel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Previsionnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method Previsionnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method Previsionnel[]    findAll()
 * @method Previsionnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Previsionnel>
 */
class PrevisionnelRepository extends ServiceEntityRepository
{
    /**
     * PrevisionnelRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Previsionnel::class);
    }
}
