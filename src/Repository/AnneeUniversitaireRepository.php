<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/AnneeUniversitaireRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:52
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\ORM\NonUniqueResultException;
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
        return $this->findBy([], ['annee' => Order::Descending->value]);
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findActive(): ?AnneeUniversitaire
    {
        return $this->createQueryBuilder('a')
            ->where('a.active = 1')
            ->getQuery()
            ->getOneOrNullResult();
    }
}
