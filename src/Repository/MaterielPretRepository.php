<?php
/**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/MaterielPretRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 14/11/2019 14:57
 * @lastUpdate 14/11/2019 14:56
 */

namespace App\Repository;

use App\Entity\MaterielPret;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method MaterielPret|null find($id, $lockMode = null, $lockVersion = null)
 * @method MaterielPret|null findOneBy(array $criteria, array $orderBy = null)
 * @method MaterielPret[]    findAll()
 * @method MaterielPret[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MaterielPretRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MaterielPret::class);
    }
}
