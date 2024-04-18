<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/SemestreLienRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:52
 */

namespace App\Repository;

use App\Entity\Semestre;
use App\Entity\SemestreLien;
use App\Enums\SemestreLienEnum;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<SemestreLien>
 *
 * @method SemestreLien|null find($id, $lockMode = null, $lockVersion = null)
 * @method SemestreLien|null findOneBy(array $criteria, array $orderBy = null)
 * @method SemestreLien[]    findAll()
 * @method SemestreLien[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SemestreLienRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SemestreLien::class);
    }

    public function add(SemestreLien $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(SemestreLien $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findSuivants(Semestre $semestre): array
    {
        return $this->findSemestres($semestre, SemestreLienEnum::SUIVANT);
    }

    public function findPrecedents(Semestre $semestre): array
    {
        return $this->findSemestres($semestre, SemestreLienEnum::PRECEDENT);
    }

    public function findSemestres(Semestre $semestre, SemestreLienEnum $sens): array
    {
        return $this->createQueryBuilder('sl')
            ->join('sl.semestre_arrive', 'sa')
            ->where('sl.semestre_depart = :semestre')
            ->andWhere('sl.sens = :sens')
            ->setParameter('semestre', $semestre)
            ->setParameter('sens', $sens)
            ->orderBy('sa.libelle', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function findDecales(Semestre $semestre): array
    {
        return $this->findSemestres($semestre, SemestreLienEnum::DECALE);

    }
}
