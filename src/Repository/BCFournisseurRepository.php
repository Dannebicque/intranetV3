<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/BCFournisseurRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/09/2021 12:12
 */

namespace App\Repository;

use App\Entity\BCFournisseur;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method BCFournisseur|null find($id, $lockMode = null, $lockVersion = null)
 * @method BCFournisseur|null findOneBy(array $criteria, array $orderBy = null)
 * @method BCFournisseur[]    findAll()
 * @method BCFournisseur[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<BCFournisseur>
 */
class BCFournisseurRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BCFournisseur::class);
    }
}
