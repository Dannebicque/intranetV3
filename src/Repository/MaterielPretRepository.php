<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/MaterielPretRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 2/16/19 10:06 AM
 */

namespace App\Repository;

use App\Entity\MaterielPret;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method MaterielPret|null find($id, $lockMode = null, $lockVersion = null)
 * @method MaterielPret|null findOneBy(array $criteria, array $orderBy = null)
 * @method MaterielPret[]    findAll()
 * @method MaterielPret[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MaterielPretRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, MaterielPret::class);
    }
}
