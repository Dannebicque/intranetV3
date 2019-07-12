<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/ModificationNoteRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 6/24/18 9:09 PM
 */

namespace App\Repository;

use App\Entity\ModificationNote;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

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
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ModificationNote::class);
    }
}
