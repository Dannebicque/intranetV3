<?php

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Borne;
use App\Entity\Diplome;
use App\Entity\Formation;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Borne|null find($id, $lockMode = null, $lockVersion = null)
 * @method Borne|null findOneBy(array $criteria, array $orderBy = null)
 * @method Borne[]    findAll()
 * @method Borne[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BorneRepository extends ServiceEntityRepository
{
    /**
     * BorneRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Borne::class);
    }

    public function findByFormation(Formation $formation, $nbResult)
    {
        $q = $this->createQueryBuilder('b')
            ->innerJoin( 'b.semestres', 'c') //récupération de la jointure dans la table dédiée
            ->innerJoin(Semestre::class, 's', 'WITH', 'c.id = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.formation = :formation')
            ->setParameter('formation', $formation->getId())
            ->orderBy('a.created', 'DESC');

        if ($nbResult > 0) {
            $q->setMaxResults($nbResult);
        }

        return $q->getQuery()
            ->getResult();
    }
}
