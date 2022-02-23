<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ParcourRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Parcour;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Parcour|null find($id, $lockMode = null, $lockVersion = null)
 * @method Parcour|null findOneBy(array $criteria, array $orderBy = null)
 * @method Parcour[]    findAll()
 * @method Parcour[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Parcour>
 */
class ParcourRepository extends ServiceEntityRepository
{
    /**
     * OptionRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Parcour::class);
    }

    public function findBySemestreBuilder(Semestre $semestre): QueryBuilder
    {
        return $this->createQueryBuilder('u')
            ->where('u.semestre = :semestre')
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('u.libelle', 'ASC');
    }

    public function findBySemestre(Semestre $semestre): array
    {
        return $this->findBySemestreBuilder($semestre)->getQuery()->getResult();
    }

    public function tableauParcourApogee(Departement $departement): array
    {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(Semestre::class, 's', 'with', 's.id=p.semestre')
            ->innerJoin(Annee::class, 'a', 'with', 'a.id=s.annee')
            ->innerJoin(Diplome::class, 'd', 'with', 'd.id=a.diplome')
            ->where('d.departement= :departement')
            ->setParameter('departement', $departement->getId())
            ->getQuery()
            ->getResult();

        $t = [];

        /** @var Parcour $q */
        foreach ($query as $q) {
            $t[$q->getCodeElement()] = $q;
        }

        return $t;
    }
}
