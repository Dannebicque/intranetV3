<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/EmpruntMaterielRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\EmpruntMateriel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EmpruntMateriel|null find($id, $lockMode = null, $lockVersion = null)
 * @method EmpruntMateriel|null findOneBy(array $criteria, array $orderBy = null)
 * @method EmpruntMateriel[]    findAll()
 * @method EmpruntMateriel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<EmpruntMateriel>
 */
class EmpruntMaterielRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EmpruntMateriel::class);
    }
}
