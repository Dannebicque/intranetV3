<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/PlanCoursRessourceRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\ApcRessource;
use App\Entity\Personnel;
use App\Entity\PlanCoursRessource;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PlanCoursRessource>
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

    public function findByIntervenantsAndSemestre(Personnel $personnel, Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->createQueryBuilder('p')
            ->join('p.intervenants', 'i')
            ->join('p.anneeUniversitaire', 'a')
            ->innerJoin(ApcRessource::class, 'ress', 'WITH', 'ress.id = p.idMatiere')
            ->leftJoin('ress.semestres', 's')
            ->where('i.id = :personnel')
            ->andWhere('s.ordreLmd = :semestre')
            ->andWhere('a.id = :annee')
            ->setParameter('personnel', $personnel->getId())
            ->setParameter('semestre', $semestre->getOrdreLmd())
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->getQuery()
            ->getResult();
    }
}
