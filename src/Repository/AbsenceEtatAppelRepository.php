<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/AbsenceEtatAppelRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2021 16:06
 */

namespace App\Repository;

use App\Entity\AbsenceEtatAppel;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AbsenceEtatAppel|null find($id, $lockMode = null, $lockVersion = null)
 * @method AbsenceEtatAppel|null findOneBy(array $criteria, array $orderBy = null)
 * @method AbsenceEtatAppel[]    findAll()
 * @method AbsenceEtatAppel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AbsenceEtatAppelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AbsenceEtatAppel::class);
    }
}
