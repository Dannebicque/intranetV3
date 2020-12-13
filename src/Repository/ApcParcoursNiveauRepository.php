<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ApcParcoursNiveauRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/12/2020 09:22

namespace App\Repository;

use App\Entity\ApcParcoursNiveau;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcParcoursNiveau|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcParcoursNiveau|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcParcoursNiveau[]    findAll()
 * @method ApcParcoursNiveau[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ApcParcoursNiveauRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcParcoursNiveau::class);
    }
}
