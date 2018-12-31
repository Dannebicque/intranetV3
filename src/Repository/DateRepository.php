<?php

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Date;
use App\Entity\Diplome;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
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
     * @param $formation
     * @param $nbResult
     *
     * @return mixed
     */
    public function findByFormation($formation, $nbResult)
    {
        return $this->createQueryBuilder('d')
            ->leftJoin('d.semestres', 's')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'p', 'WITH', 'p.id = a.diplome')
            ->where('p.formation = :formation')
            ->setParameter('formation', $formation)
            ->orderBy('d.dateDebut', 'DESC')
            ->setMaxResults($nbResult)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $formation
     * @param $annee
     *
     * @return array
     */
    public function findByFormationPlanning($formation, $annee): array
    {
        $datedebut = new \DateTime($annee . '-09-01');
        $annee2 = $annee + 1;
        $datefin = new \DateTime($annee2 . '-08-31');

        $query = $this->createQueryBuilder('d')
            ->leftJoin('d.semestres', 's')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'p', 'WITH', 'p.id = a.diplome')
            ->where('p.formation = :formation')
            ->andWhere('d.dateDebut >= :datedebut')
            ->andWhere('d.dateDebut <= :datefin')
            ->setParameter('formation', $formation)
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
