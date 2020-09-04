<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ActualiteRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/09/2020 13:04

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
 */
class ActualiteRepository extends ServiceEntityRepository
{
    /**
     * ActualiteRepository constructor.
     *
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Actualite::class);
    }

    /**
     * @param $departement
     * @param $nbResult
     *
     * @return Actualite[]
     */
    public function getByDepartement(Departement $departement, $nbResult = 0): array
    {
        $q = $this->createQueryBuilder('a')
            ->andWhere('a.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('a.created', 'DESC');

        if ($nbResult > 0) {
            $q->setMaxResults($nbResult);
        }

        return $q->getQuery()
            ->getResult();
    }
}
