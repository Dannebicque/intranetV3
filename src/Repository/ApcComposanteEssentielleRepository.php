<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ApcComposanteEssentielleRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\ApcComposanteEssentielle;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcComposanteEssentielle|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcComposanteEssentielle|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcComposanteEssentielle[]    findAll()
 * @method ApcComposanteEssentielle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<ApcComposanteEssentielle>
 */
class ApcComposanteEssentielleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcComposanteEssentielle::class);
    }
}
