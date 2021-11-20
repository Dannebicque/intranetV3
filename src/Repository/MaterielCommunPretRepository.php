<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/MaterielCommunPretRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\MaterielCommunPret;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MaterielCommunPret|null find($id, $lockMode = null, $lockVersion = null)
 * @method MaterielCommunPret|null findOneBy(array $criteria, array $orderBy = null)
 * @method MaterielCommunPret[]    findAll()
 * @method MaterielCommunPret[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<MaterielCommunPret>
 */
class MaterielCommunPretRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MaterielCommunPret::class);
    }
}
