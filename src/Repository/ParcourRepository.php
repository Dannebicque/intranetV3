<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/ParcourRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;


use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Parcour;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\QueryBuilder;

/**
 * @method Parcour|null find($id, $lockMode = null, $lockVersion = null)
 * @method Parcour|null findOneBy(array $criteria, array $orderBy = null)
 * @method Parcour[]    findAll()
 * @method Parcour[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ParcourRepository extends ServiceEntityRepository
{
    /**
     * OptionRepository constructor.
     *
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Parcour::class);
    }


    /**
     * @param Semestre $semestre
     *
     * @return QueryBuilder
     */
    public function findBySemestreBuilder(Semestre $semestre): QueryBuilder
    {
        return $this->createQueryBuilder('u')
            ->where('u.semestre = :semestre')
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('u.libelle', 'ASC');

    }

    public function findBySemestre(Semestre $semestre)
    {

        return $this->findBySemestreBuilder($semestre)->getQuery()->getResult();
    }

    public function tableauParcourApogee(Departement $departement): array
    {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(Semestre::class, 's', 'with', 's.id=u.semestre')
            ->innerJoin(Annee::class, 'a', 'with', 'a.id=s.annee')
            ->innerJoin(Diplome::class, 'd', 'with', 'd.id=a.diplome')
            ->where('d.departement= :departement')
            ->setParameter('departement', $departement->getId())
            ->getQuery()
            ->getResult();

        $t = [];

        /** @var  $q Parcour */
        foreach ($query as $q) {
            $t[$q->getCodeElement()] = $q;
        }

        return $t;
    }
}
