<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/FavoriRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\Favori;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Favori|null find($id, $lockMode = null, $lockVersion = null)
 * @method Favori|null findOneBy(array $criteria, array $orderBy = null)
 * @method Favori[]    findAll()
 * @method Favori[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FavoriRepository extends ServiceEntityRepository
{
    /**
     * FavoriRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Favori::class);
    }
}
