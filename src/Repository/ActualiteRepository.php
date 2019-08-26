<?php /**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/ActualiteRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 26/08/2019 13:45
 * @lastUpdate 26/08/2019 13:13
 */ /** @noinspection ALL */
/** @noinspection PhpUnused */

namespace App\Repository;

use App\Entity\Actualite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

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
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Actualite::class);
    }

    /**
     * @param $departement
     * @param $nbResult
     *
     * @return Actualite[]
     */
    public function findByDepartement($departement, $nbResult = 2): array
    {
        $q = $this->createQueryBuilder('a')
            ->andWhere('a.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('a.created', 'DESC');

        if ($nbResult > 0) {
            $q->setMaxResults($nbResult);
        }

        return $q->getQuery()
            ->getResult();
    }
}
