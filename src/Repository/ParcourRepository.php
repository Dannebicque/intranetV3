<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/ParcourRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:54
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Parcour;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
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
            ->orderBy('u.libelle', Order::Ascending->value);
    }

    public function findBySemestre(Semestre $semestre): array
    {
        return $this->findBySemestreBuilder($semestre)->getQuery()->getResult();
    }

    public function tableauParcourApogee(Departement $departement): array
    {
        $query = $this->createQueryBuilder('p')
            ->innerJoin(Semestre::class, 's', 'WITH', 's.id=p.semestre')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id=s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id=a.diplome')
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
