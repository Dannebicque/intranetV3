<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/CovidAttestationEtudiantRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 10/11/2020 15:19

namespace App\Repository;

use App\Entity\CovidAttestationEtudiant;
use App\Entity\Departement;
use App\Entity\Diplome;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CovidAttestationEtudiant|null find($id, $lockMode = null, $lockVersion = null)
 * @method CovidAttestationEtudiant|null findOneBy(array $criteria, array $orderBy = null)
 * @method CovidAttestationEtudiant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CovidAttestationEtudiantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CovidAttestationEtudiant::class);
    }

    public function findByDepartement(Departement $departement)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'p.diplome=d.id')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('p.created', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function findAll()
    {
        return $this->findBy([], ['created' => 'DESC']);
    }
}
