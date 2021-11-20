<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/CovidCreneauPresenceRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\CovidCreneauPresence;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CovidCreneauPresence|null find($id, $lockMode = null, $lockVersion = null)
 * @method CovidCreneauPresence|null findOneBy(array $criteria, array $orderBy = null)
 * @method CovidCreneauPresence[]    findAll()
 * @method CovidCreneauPresence[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<CovidCreneauPresence>
 */
class CovidCreneauPresenceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CovidCreneauPresence::class);
    }
}
