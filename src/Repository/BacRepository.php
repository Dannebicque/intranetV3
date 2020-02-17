<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/BacRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\Bac;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Bac|null find($id, $lockMode = null, $lockVersion = null)
 * @method Bac|null findOneBy(array $criteria, array $orderBy = null)
 * @method Bac[]    findAll()
 * @method Bac[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BacRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Bac::class);
    }

    public function getApogeeArray()
    {
        $data = $this->findAll();
        $t = [];
        foreach ($data as $d) {
            $t[$d->getCodeApogee()] = $d;
        }

        return $t;
    }
}
