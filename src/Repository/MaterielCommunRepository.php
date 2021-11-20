<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/MaterielCommunRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\MaterielCommun;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MaterielCommun|null find($id, $lockMode = null, $lockVersion = null)
 * @method MaterielCommun|null findOneBy(array $criteria, array $orderBy = null)
 * @method MaterielCommun[]    findAll()
 * @method MaterielCommun[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<MaterielCommun>
 */
class MaterielCommunRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MaterielCommun::class);
    }
}
