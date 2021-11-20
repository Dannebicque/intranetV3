<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/CodeInseeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\CodeInsee;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CodeInsee|null find($id, $lockMode = null, $lockVersion = null)
 * @method CodeInsee|null findOneBy(array $criteria, array $orderBy = null)
 * @method CodeInsee[]    findAll()
 * @method CodeInsee[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<CodeInsee>
 */
class CodeInseeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CodeInsee::class);
    }

    public function findVilles()
    {
        return $this->createQueryBuilder('c')
            ->select('c.code_insee, c.ville')
            ->orderBy('c.code_insee', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
