<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/CahierTexteRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\CahierTexte;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

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
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CahierTexte::class);
    }

    /**
     * @param $getId
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
