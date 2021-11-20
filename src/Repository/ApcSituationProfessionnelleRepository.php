<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ApcSituationProfessionnelleRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/03/2021 18:49
 */

namespace App\Repository;

use App\Entity\ApcSituationProfessionnelle;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcSituationProfessionnelle|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcSituationProfessionnelle|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcSituationProfessionnelle[]    findAll()
 * @method ApcSituationProfessionnelle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<ApcSituationProfessionnelle>
 */
class ApcSituationProfessionnelleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcSituationProfessionnelle::class);
    }
}
