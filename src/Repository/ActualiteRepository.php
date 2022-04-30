<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ActualiteRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 09:03
 */

namespace App\Repository;

use App\Entity\Actualite;
use App\Entity\Departement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Actualite|null find($id, $lockMode = null, $lockVersion = null)
 * @method Actualite|null findOneBy(array $criteria, array $orderBy = null)
 * @method Actualite[]    findAll()
 * @method Actualite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Actualite>
 */
class ActualiteRepository extends ServiceEntityRepository
{
    /**
     * ActualiteRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Actualite::class);
    }

    /**
     * @return Actualite[]
     */
    public function getByDepartement(Departement $departement, int $nbResult = 0): array
    {
        $q = $this->createQueryBuilder('a')
            ->andWhere('a.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('a.created', \Doctrine\Common\Collections\Criteria::DESC);

        if ($nbResult > 0) {
            $q->setMaxResults($nbResult);
        }

        return $q->getQuery()
            ->getResult();
    }
}
