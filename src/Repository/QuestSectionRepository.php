<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/QuestSectionRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:52
 */

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\QuestQuestionnaire;
use App\Entity\QuestSection;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<QuestSection>
 *
 * @method QuestSection|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestSection|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestSection[]    findAll()
 * @method QuestSection[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestSectionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestSection::class);
    }

    public function save(QuestSection $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(QuestSection $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findByDepartementOrNull(?Departement $departement): array
    {
        if ($departement) {
            return $this->createQueryBuilder('s')
                ->innerJoin(QuestQuestionnaire::class, 'q', 'WITH', 's.questionnaire = q.id')
                ->where('q.departement = :departement')
                ->setParameter('departement', $departement)
                ->orderBy('s.titre', Order::Ascending->value)
                ->getQuery()
                ->getResult();
        }

        return $this->createQueryBuilder('s')
            ->innerJoin(QuestQuestionnaire::class, 'q', 'WITH', 's.questionnaire = q.id')
            ->where('q.departement IS NULL')
            ->orderBy('s.titre', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function getMaxOrdre(QuestQuestionnaire $questionnaire)
    {
        return $this->createQueryBuilder('s')
            ->select('MAX(s.ordre)')
            ->where('s.questionnaire = :questionnaire')
            ->setParameter('questionnaire', $questionnaire)
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function findsectionsSuivantes(QuestSection $section)
    {
        return $this->createQueryBuilder('s')
            ->where('s.questionnaire = :questionnaire')
            ->andWhere('s.ordre > :ordre')
            ->setParameter('questionnaire', $section->getQuestionnaire())
            ->setParameter('ordre', $section->getOrdre())
            ->orderBy('s.ordre', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }
}
