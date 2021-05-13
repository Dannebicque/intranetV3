<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ApcComptenceRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/05/2021 16:47
 */

namespace App\Repository;

use App\Entity\ApcCompetence;
use App\Entity\Diplome;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcCompetence|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcCompetence|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcCompetence[]    findAll()
 * @method ApcCompetence[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ApcComptenceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcCompetence::class);
    }

    public function findByDiplome(Diplome $diplome)
    {
        return $this->findByDiplomeBuilder($diplome)
            ->getQuery()
            ->getResult();
    }

    public function findByDiplomeBuilder(Diplome $diplome)
    {
        return $this->createQueryBuilder('c')
            ->where('c.diplome = :diplome')
            ->setParameter('diplome', $diplome->getId());
    }

    public function findOneByDiplomeArray(Diplome $diplome): array
    {
        $comps = $this->findByDiplome($diplome);
        $t = [];
        foreach ($comps as $c) {
            $t[$c->getNomCourt()] = $c;
        }

        return $t;
    }
}
