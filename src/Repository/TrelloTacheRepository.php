<?php

namespace App\Repository;

use App\Entity\Formation;
use App\Entity\TrelloTache;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TrelloTache|null find($id, $lockMode = null, $lockVersion = null)
 * @method TrelloTache|null findOneBy(array $criteria, array $orderBy = null)
 * @method TrelloTache[]    findAll()
 * @method TrelloTache[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrelloTacheRepository extends ServiceEntityRepository
{
    /**
     * TrelloTacheRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TrelloTache::class);
    }

    /**
     * @param Formation $formation
     *
     * @return mixed
     */
    public function findByFormation(Formation $formation)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.formation = :formation')
            ->setParameter('formation', $formation->getId())
            ->orderBy('a.deadline', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $getId
     *
     * @return array
     */
    public function findByFormationTaches($getId): array
    {
        $query = $this->createQueryBuilder('t') //prendre la période de 30 jours
            ->orderBy('t.deadline', 'ASC')
            ->getQuery()
            ->getResult();

        $tab = array();

        /** @var TrelloTache $event */
        foreach ($query as $event) {
            if ($event->getDeadline() !== null) {
                $key = $event->getDeadline()->format('Y-m-d');
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
