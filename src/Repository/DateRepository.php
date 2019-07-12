<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/DateRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 6/9/19 9:15 AM
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Date;
use App\Entity\Diplome;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Exception;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Date|null find($id, $lockMode = null, $lockVersion = null)
 * @method Date|null findOneBy(array $criteria, array $orderBy = null)
 * @method Date[]    findAll()
 * @method Date[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DateRepository extends ServiceEntityRepository
{
    /**
     * DateRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Date::class);
    }

    /**
     * @param $departement
     * @param $nbResult
     *
     * @return mixed
     */
    public function findByDepartement($departement, $nbResult = 2)
    {
        return $this->createQueryBuilder('d')
            ->leftJoin('d.semestres', 's')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'p', 'WITH', 'p.id = a.diplome')
            ->where('p.departement = :departement')
            ->setParameter('departement', $departement)
            ->orderBy('d.dateDebut', 'DESC')
            ->setMaxResults($nbResult)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $departement
     * @param $annee
     *
     * @return array
     * @throws Exception
     */
    public function findByDepartementPlanning($departement, $annee): array
    {
        $datedebut = new DateTime($annee . '-09-01');
        $annee2 = $annee + 1;
        $datefin = new DateTime($annee2 . '-08-31');

        $query = $this->createQueryBuilder('d')
            ->leftJoin('d.semestres', 's')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'p', 'WITH', 'p.id = a.diplome')
            ->where('p.departement = :departement')
            ->andWhere('d.dateDebut >= :datedebut')
            ->andWhere('d.dateDebut <= :datefin')
            ->setParameter('departement', $departement)
            ->setParameter('datedebut', $datedebut)
            ->setParameter('datefin', $datefin)
            ->orderBy('d.dateDebut', 'ASC')
            ->getQuery()
            ->getResult();

        $tab = array();

        /** @var Date $event */
        foreach ($query as $event) {
            if ($event->getDateDebut() !== null) {
                $key = $event->getDateDebut()->format('Y-m-d');
                if (!array_key_exists($key, $tab)) {
                    $tab[$key] = array();
                }
                $tab[$key][] = $event;
                //si sur plusieurs jours, faire une boucle pour remplir le tableau
            }
        }

        return $tab;
    }
}
