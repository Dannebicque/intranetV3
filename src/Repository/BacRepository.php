<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/BacRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:52
 */

namespace App\Repository;

use App\Entity\Bac;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Bac|null find($id, $lockMode = null, $lockVersion = null)
 * @method Bac|null findOneBy(array $criteria, array $orderBy = null)
 * @method Bac[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Bac>
 */
class BacRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Bac::class);
    }

    public function findAll(): array
    {
        return $this->findBy([], ['libelle' => Order::Ascending->value]);
    }

    public function getApogeeArray(): array
    {
        $data = $this->findAll();
        $t = [];
        foreach ($data as $d) {
            $t[$d->getCodeApogee()] = $d;
        }

        return $t;
    }
}
