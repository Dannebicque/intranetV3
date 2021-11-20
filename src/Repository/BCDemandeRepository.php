<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/BCDemandeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/09/2021 11:41
 */

namespace App\Repository;

use App\Entity\BCDemande;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method BCDemande|null find($id, $lockMode = null, $lockVersion = null)
 * @method BCDemande|null findOneBy(array $criteria, array $orderBy = null)
 * @method BCDemande[]    findAll()
 * @method BCDemande[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<BCDemande>
 */
class BCDemandeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BCDemande::class);
    }
}
