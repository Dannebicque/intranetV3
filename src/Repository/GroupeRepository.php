<?php

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\Departement;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use DA\KernelBundle\Entity\Groupes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Groupe|null find($id, $lockMode = null, $lockVersion = null)
 * @method Groupe|null findOneBy(array $criteria, array $orderBy = null)
 * @method Groupe[]    findAll()
 * @method Groupe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GroupeRepository extends ServiceEntityRepository
{
    /**
     * GroupeRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Groupe::class);
    }

    public function findByDepartement(Departement $departement)
    {
        return $this->createQueryBuilder('g')
            ->innerJoin(TypeGroupe::class, 't', 'WITH', 'g.typeGroupe = t.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 't.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->getQuery()
            ->getResult();
    }

    public function findBySemestre(Semestre $semestre)
    {
        return $this->createQueryBuilder('g')
            ->innerJoin(TypeGroupe::class, 't', 'WITH', 'g.typeGroupe = t.id')
            ->where('t.semestre = :semestre')
            ->setParameter('semestre', $semestre->getId())
            ->getQuery()
            ->getResult();
    }

    public function findAllGroupes(Semestre $semestre): array
    {

        $groupes = array();
        $gtp = $this->getGroupesTP($semestre->getId());

        $i = 1;
        /** @var Groupe $g */
        foreach ($gtp as $g) {
            $groupes[$i] = $g->getLibelle();
            $i++;
        }

        for ($j = $i; $j <= $semestre->getNbgroupeTpEdt() + 1; $j++) {
            $groupes[$j] = '';
        }

        return $groupes;

    }

    /**
     * @param $semestre
     *
     * @return array
     */
    public function getGroupesTP($semestre): array
    {
        return $this->createQueryBuilder('g')
            ->innerJoin(TypeGroupe::class, 't', 'WITH', 'g.typeGroupe = t.id')
            //->where('t.defaut = :defaut')
            ->where('t.type = :type')
            ->andWhere('t.semestre = :semestre')
            ->setParameters(array('type' => 'TP', 'semestre' => $semestre))
            ->orderBy('g.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $semestre
     *
     * @return array
     */
    public function getGroupesTD($semestre): array
    {
        return $this->createQueryBuilder('g')
            ->innerJoin(TypeGroupe::class, 't', 'WITH', 'g.typeGroupe = t.id')
            ->where('t.type = :type')
            ->andWhere('t.semestre = :semestre')
            ->setParameters(array('type' => 'TD', 'semestre' => $semestre))
            ->orderBy('g.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
