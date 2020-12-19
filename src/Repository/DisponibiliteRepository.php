<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/DisponibiliteRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/12/2020 15:18

namespace App\Repository;

use App\Entity\Disponibilite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;

/**
 * @method Disponibilite|null find($id, $lockMode = null, $lockVersion = null)
 * @method Disponibilite|null findOneBy(array $criteria, array $orderBy = null)
 * @method Disponibilite[]    findAll()
 * @method Disponibilite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DisponibiliteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
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

            $t[$jour][$heure] = $dispo->getEtat();
        }

        return $t;
    }

}
