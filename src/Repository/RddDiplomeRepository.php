<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/RddDiplomeRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/11/2020 11:25

namespace App\Repository;

use App\Entity\Etudiant;
use App\Entity\RddDiplome;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RddDiplome|null find($id, $lockMode = null, $lockVersion = null)
 * @method RddDiplome|null findOneBy(array $criteria, array $orderBy = null)
 * @method RddDiplome[]    findAll()
 * @method RddDiplome[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RddDiplomeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RddDiplome::class);
    }

}
