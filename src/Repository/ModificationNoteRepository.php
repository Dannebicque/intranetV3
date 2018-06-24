<?php

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
