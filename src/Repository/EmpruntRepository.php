<?php
/**
 * Copyright (C) 10 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/EmpruntRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 16/10/2019 17:41
 * @lastUpdate 05/10/2019 09:24
 */

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\Emprunt;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Emprunt|null find($id, $lockMode = null, $lockVersion = null)
 * @method Emprunt|null findOneBy(array $criteria, array $orderBy = null)
 * @method Emprunt[]    findAll()
 * @method Emprunt[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EmpruntRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Emprunt::class);
    }

    public function findByDepartement(Departement $departement)
    {
        return $this->createQueryBuilder('e')
            ->where('e.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('e.dateDebut')
            ->getQuery()
            ->getResult();
    }
}
