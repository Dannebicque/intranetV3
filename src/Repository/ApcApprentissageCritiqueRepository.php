<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ApcApprentissageCritiqueRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/03/2021 21:24
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\ApcApprentissageCritique;
use App\Entity\ApcCompetence;
use App\Entity\ApcNiveau;
use App\Entity\Diplome;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcApprentissageCritique|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcApprentissageCritique|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcApprentissageCritique[]    findAll()
 * @method ApcApprentissageCritique[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ApcApprentissageCritiqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcApprentissageCritique::class);
    }


    public function findByDiplome(Diplome $diplome)
    {
        return $this->findByDiplomeBuilder()
            ->getQuery()
            ->getResult();
    }

    public function findByDiplomeBuilder(Diplome $diplome)
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(ApcNiveau::class, 'n', 'WITH', 'a.niveau = n.id')
            ->innerJoin(ApcCompetence::class, 'c', 'WITH', 'c.id = n.competence')
            ->where('c.diplome = :diplome')
            ->setParameter('diplome', $diplome->getId());
    }

    public function findBySemestreAndCompetences(
        Annee $annee,
        $idCompetences
    ) {
        $query = $this->createQueryBuilder('a')
            ->innerJoin(ApcNiveau::class, 'n', 'WITH', 'a.niveau = n.id')
            ->where('n.annee = :annee')
            ->setParameter('annee', $annee->getId());

        $ors = [];
        foreach ($idCompetences as $comp) {
            $ors[] = $query->expr()->orx('n.competence = ' . $query->expr()->literal($comp));
        }

        return $query->andWhere(implode(' OR ', $ors))
            ->getQuery()
            ->getResult();
    }
}
