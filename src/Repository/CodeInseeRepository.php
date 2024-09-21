<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/CodeInseeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:54
 */

namespace App\Repository;

use App\Entity\CodeInsee;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
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

    public function findVilles(): array
    {
        return $this->createQueryBuilder('c')
            ->select('c.codeInsee, c.ville')
            ->orderBy('c.codeInsee', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }
}
