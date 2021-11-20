<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/EmpruntPersonnelRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\EmpruntPersonnel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EmpruntPersonnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method EmpruntPersonnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method EmpruntPersonnel[]    findAll()
 * @method EmpruntPersonnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<EmpruntPersonnel>
 */
class EmpruntPersonnelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EmpruntPersonnel::class);
    }
}
