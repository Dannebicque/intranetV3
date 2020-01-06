<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/ModificationNoteRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\ModificationNote;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ModificationNote|null find($id, $lockMode = null, $lockVersion = null)
 * @method ModificationNote|null findOneBy(array $criteria, array $orderBy = null)
 * @method ModificationNote[]    findAll()
 * @method ModificationNote[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ModificationNoteRepository extends ServiceEntityRepository
{
    /**
     * ModificationNoteRepository constructor.
     *
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ModificationNote::class);
    }
}
