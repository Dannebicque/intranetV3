<?php

/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/TypeIntervenantRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:43
 */

namespace App\Repository;

use App\Entity\TypeIntervenant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TypeIntervenant>
 *
 * @method TypeIntervenant|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeIntervenant|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeIntervenant[]    findAll()
 * @method TypeIntervenant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeIntervenantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TypeIntervenant::class);
    }
}
