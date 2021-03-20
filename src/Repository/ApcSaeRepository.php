<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ApcSaeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/03/2021 15:29
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\ApcSae;
use App\Entity\Diplome;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcSae|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcSae|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcSae[]    findAll()
 * @method ApcSae[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ApcSaeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcSae::class);
    }

    public function findByDiplome(Diplome $diplome)
    {
        return $this->createQueryBuilder('r')
            ->innerJoin(Semestre::class, 's', 'WITH', 's.id = r.semestre')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->where('a.diplome = :diplome')
            //->andWhere('s.ppn_actif = m.ppn')
            ->setParameter('diplome', $diplome->getId())
            ->orderBy('s.ordreLmd', 'ASC')
            ->addOrderBy('r.codeSae', 'ASC')
            ->addOrderBy('r.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findBySemestre(Semestre $semestre)
    {
        return $this->createQueryBuilder('r')
            ->where('r.semestre = :semestre')
            //->andWhere('s.ppn_actif = m.ppn')
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('r.codeSae', 'ASC')
            ->addOrderBy('r.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
