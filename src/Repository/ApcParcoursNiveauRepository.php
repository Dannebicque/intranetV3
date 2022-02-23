<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ApcParcoursNiveauRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 19:44
 */

namespace App\Repository;

use App\Entity\ApcNiveau;
use App\Entity\ApcParcours;
use App\Entity\ApcParcoursNiveau;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcParcoursNiveau|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcParcoursNiveau|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcParcoursNiveau[]    findAll()
 * @method ApcParcoursNiveau[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<ApcParcoursNiveau>
 */
class ApcParcoursNiveauRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcParcoursNiveau::class);
    }

    /**
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findParcoursNiveau(ApcParcours $parcours, ApcNiveau $niveau): ?ApcParcoursNiveau
    {
        return $this->createQueryBuilder('p')
            ->where('p.niveau = :niveau')
            ->andWhere('p.parcours = :parcours')
            ->setParameter('niveau', $niveau->getid())
            ->setParameter('parcours', $parcours->getid())
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findNiveauByParcoursArray(ApcParcours $parcours): array
    {
        $query = $this->createQueryBuilder('p')
            ->where('p.parcours = :parcours')
            ->setParameter('parcours', $parcours->getid())
            ->getQuery()
            ->getResult();

        $t = [];
        /** @var ApcParcoursNiveau $q */
        foreach ($query as $q) {
            if (null !== $q->getNiveau()) {
                $t[$q->getNiveau()->getId()] = $q;
            }
        }

        return $t;
    }
}
