<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/ApcApprentissageCritiqueRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/09/2022 15:14
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\ApcApprentissageCritique;
use App\Entity\ApcCompetence;
use App\Entity\ApcNiveau;
use App\Entity\ApcReferentiel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcApprentissageCritique|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcApprentissageCritique|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcApprentissageCritique[]    findAll()
 * @method ApcApprentissageCritique[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<ApcApprentissageCritique>
 */
class ApcApprentissageCritiqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcApprentissageCritique::class);
    }

    public function findByReferentiel(ApcReferentiel $referentiel): array
    {
        return $this->findByReferentielBuilder($referentiel)
            ->getQuery()
            ->getResult();
    }

    public function findByReferentielBuilder(ApcReferentiel $referentiel): QueryBuilder
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(ApcNiveau::class, 'n', 'WITH', 'a.niveau = n.id')
            ->innerJoin(ApcCompetence::class, 'c', 'WITH', 'c.id = n.competence')
            ->where('c.apcReferentiel = :referentiel')
            ->setParameter('referentiel', $referentiel->getId());
    }

    public function findBySemestreAndCompetences(
        Annee $annee,
        array $idCompetences
    ): array {
        $query = $this->createQueryBuilder('a')
            ->innerJoin(ApcNiveau::class, 'n', 'WITH', 'a.niveau = n.id')
            ->innerJoin(ApcCompetence::class, 'c', 'WITH', 'c.id = n.competence')
            ->where('c.apcReferentiel = :referentiel')
            ->andWhere('n.ordreAnnee = :ordre')
            ->setParameter('referentiel', $annee->getDiplome()->getReferentiel()->getId())
            ->setParameter('ordre', $annee->getOrdre());

        $ors = [];
        foreach ($idCompetences as $comp) {
            $ors[] = $query->expr()->orx('n.competence = '.$query->expr()->literal($comp));
        }

        return $query->andWhere(implode(' OR ', $ors))
            ->getQuery()
            ->getResult();
    }

    public function findOneByReferentielArray(ApcReferentiel $referentiel): array
    {
        $comps = $this->findByReferentiel($referentiel);
        $t = [];
        foreach ($comps as $c) {
            $t[$c->getCode()] = $c;
        }

        return $t;
    }
}
