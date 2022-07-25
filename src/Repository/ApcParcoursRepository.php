<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/ApcParcoursRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/07/2022 15:42
 */

namespace App\Repository;

use App\Entity\ApcParcours;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcParcours|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcParcours|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcParcours[]    findAll()
 * @method ApcParcours[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<ApcParcours>
 */
class ApcParcoursRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcParcours::class);
    }

    public function findAllBuilder(): QueryBuilder
    {
        return $this->createQueryBuilder('apc')
            ->orderBy('apc.libelle', 'ASC');
    }
}
