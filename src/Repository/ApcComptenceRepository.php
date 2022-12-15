<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/ApcComptenceRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/08/2022 11:01
 */

namespace App\Repository;

use App\Entity\ApcCompetence;
use App\Entity\ApcReferentiel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcCompetence|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcCompetence|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcCompetence[]    findAll()
 * @method ApcCompetence[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<ApcCompetence>
 */
class ApcComptenceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcCompetence::class);
    }

    /**
     * @return ApcCompetence[]
     */
    public function findOneByReferentielArray(ApcReferentiel $referentiel): array
    {
        $comps = $this->findByReferentiel($referentiel);
        $t = [];
        foreach ($comps as $c) {
            $t[$c->getNomCourt()] = $c;
        }

        return $t;
    }

    public function findByReferentielBuilder(?ApcReferentiel $referentiel): ?QueryBuilder
    {
        return null !== $referentiel ? $this->createQueryBuilder('c')
            ->where('c.apcReferentiel = :referentiel')
            ->setParameter('referentiel', $referentiel->getId()) : null;
    }

    public function findByReferentiel(ApcReferentiel $referentiel): array
    {
        return $this->findByReferentielBuilder($referentiel) ? $this->findByReferentielBuilder($referentiel)->getQuery()->getResult() : [];
    }
}
