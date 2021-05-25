<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ApcSaeRessourceRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/05/2021 16:35
 */

namespace App\Repository;

use App\Entity\ApcSaeRessource;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcSaeRessource|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcSaeRessource|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcSaeRessource[]    findAll()
 * @method ApcSaeRessource[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ApcSaeRessourceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcSaeRessource::class);
    }

    public function findArrayIdRessources($sae)
    {
        $query = $this->createQueryBuilder('a')
            ->where('a.sae = :sae')
            ->setParameter('sae', $sae)
            ->getQuery()
            ->getResult();

        $t = [];
        /** @var ApcSaeRessource $q */
        foreach ($query as $q) {
            $t[] = $q->getRessource()->getId();
        }

        return $t;
    }

    public function findArrayIdSae($ressource)
    {
        $query = $this->createQueryBuilder('a')
            ->where('a.ressource = :ressource')
            ->setParameter('ressource', $ressource)
            ->getQuery()
            ->getResult();

        $t = [];
        /** @var ApcSaeRessource $q */
        foreach ($query as $q) {
            $t[] = $q->getSae()->getId();
        }

        return $t;
    }
}
