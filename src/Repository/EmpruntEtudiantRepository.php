<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/EmpruntEtudiantRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\EmpruntEtudiant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EmpruntEtudiant|null find($id, $lockMode = null, $lockVersion = null)
 * @method EmpruntEtudiant|null findOneBy(array $criteria, array $orderBy = null)
 * @method EmpruntEtudiant[]    findAll()
 * @method EmpruntEtudiant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<EmpruntEtudiant>
 */
class EmpruntEtudiantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EmpruntEtudiant::class);
    }
}
