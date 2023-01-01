<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/PlanCoursMatiereRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/01/2023 16:10
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\Personnel;
use App\Entity\PlanCoursMatiere;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PlanCoursMatiere>
 *
 * @method PlanCoursMatiere|null find($id, $lockMode = null, $lockVersion = null)
 * @method PlanCoursMatiere|null findOneBy(array $criteria, array $orderBy = null)
 * @method PlanCoursMatiere[]    findAll()
 * @method PlanCoursMatiere[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlanCoursMatiereRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlanCoursMatiere::class);
    }

    public function add(PlanCoursMatiere $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PlanCoursMatiere $entity, bool $flush = false): void
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
