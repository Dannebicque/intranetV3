<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ApcApprentissageCritiqueRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/05/2021 17:04
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\ApcApprentissageCritique;
use App\Entity\ApcCompetence;
use App\Entity\ApcNiveau;
use App\Entity\Diplome;
use App\Entity\Ppn;
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

    public function findByDiplome(Diplome $diplome): array
    {
        return $this->findByDiplomeBuilder($diplome)
            ->getQuery()
            ->getResult();
    }

    public function findByDiplomeBuilder(Diplome $diplome): QueryBuilder
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(ApcNiveau::class, 'n', 'WITH', 'a.niveau = n.id')
            ->innerJoin(ApcCompetence::class, 'c', 'WITH', 'c.id = n.competence')
            ->where('c.diplome = :diplome')
            ->setParameter('diplome', $diplome->getId());
    }

    public function findBySemestreAndCompetences(
        Annee $annee,
        array $idCompetences
    ): array {
        $query = $this->createQueryBuilder('a')
            ->innerJoin(ApcNiveau::class, 'n', 'WITH', 'a.niveau = n.id')
            ->where('n.annee = :annee')
            ->setParameter('annee', $annee->getId());

        $ors = [];
        foreach ($idCompetences as $comp) {
            $ors[] = $query->expr()->orx('n.competence = '.$query->expr()->literal($comp));
        }

        return $query->andWhere(implode(' OR ', $ors))
            ->getQuery()
            ->getResult();
    }

    public function findOneByDiplomeAndPnArray(Diplome $diplome, Ppn $pn): array
    {
        $comps = $this->findByDiplomeAndPn($diplome, $pn);
        $t = [];
        foreach ($comps as $c) {
            $t[$c->getCode()] = $c;
        }

        return $t;
    }

    public function findByDiplomeAndPn(Diplome $diplome, Ppn $pn): array
    {
        return $this->findByDiplomeAndPnBuilder($diplome, $pn)
            ->getQuery()
            ->getResult();
    }

    public function findByDiplomeAndPnBuilder(Diplome $diplome, Ppn $pn): QueryBuilder
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(ApcNiveau::class, 'n', 'WITH', 'a.niveau = n.id')
            ->innerJoin(ApcCompetence::class, 'c', 'WITH', 'c.id = n.competence')
            ->where('c.diplome = :diplome')
            ->andWhere('c.ppn = :ppn')
            ->setParameter('diplome', $diplome->getId())
            ->setParameter('ppn', $pn->getId());
    }
}
