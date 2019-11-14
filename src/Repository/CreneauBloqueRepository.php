<?php /**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/CreneauBloqueRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 26/08/2019 13:45
 * @lastUpdate 26/08/2019 13:13
 */ /**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/CreneauBloqueRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 14/11/2019 14:57
 * @lastUpdate 14/11/2019 14:56
 */ /** @noinspection ALL */
/** @noinspection PhpUnused */

namespace App\Repository;

use App\Entity\CreneauBloque;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method CreneauBloque|null find($id, $lockMode = null, $lockVersion = null)
 * @method CreneauBloque|null findOneBy(array $criteria, array $orderBy = null)
 * @method CreneauBloque[]    findAll()
 * @method CreneauBloque[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CreneauBloqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CreneauBloque::class);
    }

    // /**
    //  * @return CreneauBloque[] Returns an array of CreneauBloque objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CreneauBloque
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
