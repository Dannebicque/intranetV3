<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/ApcParcoursRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:52
 */

namespace App\Repository;

use App\Entity\ApcParcours;
use App\Entity\Diplome;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcParcours|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcParcours|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcParcours[]    findAll()
 * @method ApcParcours[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<ApcParcours>
 */
class ApcParcoursRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcParcours::class);
    }

    public function findAllBuilder(): QueryBuilder
    {
        return $this->createQueryBuilder('apc')
            ->orderBy('apc.libelle', Order::Ascending->value);
    }

    public function findByDiplomeBuilder(Diplome $diplome): QueryBuilder
    {
        return $this->createQueryBuilder('apc')
            ->where('apc.apcReferentiel = :referentiel')
            ->setParameter('referentiel', $diplome->getReferentiel()->getId())
            ->orderBy('apc.libelle', Order::Ascending->value);
    }

    public function findBySemestre(Semestre $semestre) {
        return $this->createQueryBuilder('apc')
//            ->innerJoin('apc.apcParcoursNiveaux', 'apcn')
//            ->innerJoin('apcn.niveau', 'n')
//            ->innerJoin('n.semestre', 's')
            ->where('s.id = :semestre')
            ->setParameter('semestre', $semestre->getId())
            ->getQuery()
            ->getResult();
    }

    public function save(ApcParcours $apcParcours): void
    {
        $this->_em->persist($apcParcours);
        $this->_em->flush();
    }
}
