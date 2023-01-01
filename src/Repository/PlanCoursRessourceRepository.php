<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/PlanCoursRessourceRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/01/2023 11:48
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\Personnel;
use App\Entity\PlanCoursRessource;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<\App\Entity\PlanCoursRessource>
 *
 * @method PlanCoursRessource|null find($id, $lockMode = null, $lockVersion = null)
 * @method PlanCoursRessource|null findOneBy(array $criteria, array $orderBy = null)
 * @method PlanCoursRessource[]    findAll()
 * @method PlanCoursRessource[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlanCoursRessourceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlanCoursRessource::class);
    }

    public function add(PlanCoursRessource $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PlanCoursRessource $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findByIntervenantsAndAnnee(
        Personnel $personnel,
        AnneeUniversitaire $anneeUniversitaire
    ) {
        return $this->createQueryBuilder('p')
            ->join('p.intervenants', 'i')
            ->join('p.anneeUniversitaire', 'a')
            ->where('i.id = :personnel')
            ->andWhere('a.id = :annee')
            ->setParameter('personnel', $personnel->getId())
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->getQuery()
            ->getResult();
    }
}
