<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/StagePeriodeOffreRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/10/2020 14:53

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Entity\StagePeriodeOffre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method StagePeriodeOffre|null find($id, $lockMode = null, $lockVersion = null)
 * @method StagePeriodeOffre|null findOneBy(array $criteria, array $orderBy = null)
 * @method StagePeriodeOffre[]    findAll()
 * @method StagePeriodeOffre[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StagePeriodeOffreRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StagePeriodeOffre::class);
    }

    public function findOffreDepartement(Departement $departement)
    {
        return $this->createQueryBuilder('o')
            ->join('o.stagePeriodes', 'p')
            ->innerJoin(Semestre::class, 's', 'WITH', 'p.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->groupBy('o.id')
            ->orderBy('o.raisonSociale', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
