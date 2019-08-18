<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/AnneeUniversitaireRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 18/08/2019 11:48
 * @lastUpdate 16/08/2019 07:25
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method AnneeUniversitaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method AnneeUniversitaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method AnneeUniversitaire[]    findAll()
 * @method AnneeUniversitaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AnneeUniversitaireRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AnneeUniversitaire::class);
    }

    public function findActive()
    {
        try {
            return $this->createQueryBuilder('a')
                ->where('a.active = 1')
                ->getQuery()
                ->getOneOrNullResult();
        } catch (NonUniqueResultException $e) {
            return null;
        }
    }
}
