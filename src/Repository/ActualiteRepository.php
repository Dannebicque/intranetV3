<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/ActualiteRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/05/2022 14:27
 */

namespace App\Repository;

use App\Entity\Actualite;
use App\Entity\Departement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Criteria;
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
            ->orderBy('a.created', Criteria::DESC);

        if ($nbResult > 0) {
            $q->setMaxResults($nbResult);
        }

        return $q->getQuery()
            ->getResult();
    }
}
