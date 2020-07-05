<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/AlternanceFicheSuiviRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:13
/** @noinspection PhpUnused */

namespace App\Repository;

use App\Entity\AlternanceFicheSuivi;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AlternanceFicheSuivi|null find($id, $lockMode = null, $lockVersion = null)
 * @method AlternanceFicheSuivi|null findOneBy(array $criteria, array $orderBy = null)
 * @method AlternanceFicheSuivi[]    findAll()
 * @method AlternanceFicheSuivi[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AlternanceFicheSuiviRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AlternanceFicheSuivi::class);
    }
}
