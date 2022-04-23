<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/AnneeUniversitaireRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AnneeUniversitaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method AnneeUniversitaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method AnneeUniversitaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<AnneeUniversitaire>
 */
class AnneeUniversitaireRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AnneeUniversitaire::class);
    }

    public function findAll(): array
    {
        return $this->findBy([], ['annee' => 'DESC']);
    }

    /**
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findActive(): ?AnneeUniversitaire
    {
        return $this->createQueryBuilder('a')
            ->where('a.active = 1')
            ->getQuery()
            ->getOneOrNullResult();
    }
}
