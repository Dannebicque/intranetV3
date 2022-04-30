<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/CovidAttestationPersonnelRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\CovidAttestationPersonnel;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Personnel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CovidAttestationPersonnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method CovidAttestationPersonnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method CovidAttestationPersonnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<CovidAttestationPersonnel>
 */
class CovidAttestationPersonnelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CovidAttestationPersonnel::class);
    }

    public function findByPersonnel(Personnel $personnel): array
    {
        return $this->createQueryBuilder('p')
            ->where('p.personnel = :personnel')
            ->setParameter('personnel', $personnel->getId())
            ->orderBy('p.created', \Doctrine\Common\Collections\Criteria::DESC)
            ->getQuery()
            ->getResult();
    }

    public function findByDepartement(Departement $departement): array
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'p.diplome=d.id')
            ->where('d.departement = :departement')
            ->setParameter('departement', $departement->getId())
            ->orderBy('p.created', \Doctrine\Common\Collections\Criteria::DESC)
            ->getQuery()
            ->getResult();
    }

    public function findAll(): array
    {
        return $this->findBy([], ['created' => 'DESC']);
    }
}
