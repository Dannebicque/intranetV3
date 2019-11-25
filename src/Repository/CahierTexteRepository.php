<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/CahierTexteRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\CahierTexte;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method CahierTexte|null find($id, $lockMode = null, $lockVersion = null)
 * @method CahierTexte|null findOneBy(array $criteria, array $orderBy = null)
 * @method CahierTexte[]    findAll()
 * @method CahierTexte[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CahierTexteRepository extends ServiceEntityRepository
{
    /**
     * CahierTexteRepository constructor.
     *
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CahierTexte::class);
    }

    /**
     * @param $getId
     *
     * @return mixed
     */
    public function findByPersonnel($getId)
    {
        return $this->createQueryBuilder('c')
            ->where('c.personnel = :personnel')
            ->setParameter('personnel', $getId)
            ->orderBy('c.dateRetour', 'DESC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param Semestre $semestre
     *
     * @return mixed
     */
    public function findBySemestre(Semestre $semestre)
    {
        return $this->createQueryBuilder('c')
            ->where('c.semestre = :semestre')
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('c.dateRetour', 'DESC')
            ->getQuery()
            ->getResult();
    }
}
