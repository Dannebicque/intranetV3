<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ProjetEtudiantRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 18/09/2020 08:50

namespace App\Repository;

use App\Entity\Etudiant;
use App\Entity\ProjetEtudiant;
use App\Entity\ProjetPeriode;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ProjetEtudiant|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProjetEtudiant|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProjetEtudiant[]    findAll()
 * @method ProjetEtudiant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProjetEtudiantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProjetEtudiant::class);
    }

    /**
     * @param ProjetPeriode $projetPeriode
     * @param Etudiant      $etudiant
     *
     * @return mixed
     * @throws NonUniqueResultException
     */
    public function findExist(ProjetPeriode $projetPeriode, Etudiant $etudiant)
    {
        return $this->createQueryBuilder('s')
            ->innerJoin('s.etudiants', 'e')
            ->where('e.id = :etudiant')
            ->andWhere('s.projetPeriode = :projetPeriode')
            ->setParameter('etudiant', $etudiant->getId())
            ->setParameter('projetPeriode', $projetPeriode)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
