<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/DisponibiliteRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 6/9/19 8:53 AM
 */

namespace App\Repository;

use App\Entity\Disponibilite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Disponibilite|null find($id, $lockMode = null, $lockVersion = null)
 * @method Disponibilite|null findOneBy(array $criteria, array $orderBy = null)
 * @method Disponibilite[]    findAll()
 * @method Disponibilite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DisponibiliteRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Disponibilite::class);
    }

    /**
     * @param $personnel
     * @param $jour
     * @param $heure
     *
     * @return mixed
     * @throws NonUniqueResultException
     */
    public function findByPersonnelCreneau($personnel, $jour, $heure)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.personnel = :personnel')
            ->andWhere('d.jour = :jour')
            ->andWhere('d.heure = :heure')
            ->setParameter('personnel', $personnel)
            ->setParameter('jour', $jour)
            ->setParameter('heure', $heure)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function getDisponibilitesArray($personnel): array
    {
        $query = $this->createQueryBuilder('d')
            ->andWhere('d.personnel = :personnel')
            ->setParameter('personnel', $personnel)
            ->getQuery()
            ->getResult();

        $t = [];
        /** @var Disponibilite $dispo */
        foreach ($query as $dispo) {
            $jour = $dispo->getJour();
            $heure = $dispo->getHeure();
            if (!array_key_exists($jour, $t)) {
                $t[$jour] = [];
            }

           /* if (!array_key_exists($heure, $t[$jour])) {
                $t[$jour][$heure] = '';
            }*/

            $t[$jour][$heure] = $dispo->getEtat();
        }

        return $t;
    }

}
