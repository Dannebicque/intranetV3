<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/QuestQuestionRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/01/2023 15:43
 */

namespace App\Repository;

use App\Entity\Departement;
use App\Entity\QuestQuestion;
use App\Entity\QuestQuestionnaire;
use App\Entity\QuestSection;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<QuestQuestion>
 *
 * @method QuestQuestion|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestQuestion|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestQuestion[]    findAll()
 * @method QuestQuestion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestQuestionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestQuestion::class);
    }

    public function save(QuestQuestion $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(QuestQuestion $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getMaxOrdre(?QuestSection $section): ?int
    {
        $qb = $this->createQueryBuilder('q');
        $qb->select('MAX(q.ordre) as maxOrdre')
            ->where('q.section = :section')
            ->setParameter('section', $section);

        return $qb->getQuery()->getSingleScalarResult();
    }

    public function findByDepartementOrNull(?Departement $departement): array
    {
        if ($departement) {
            return $this->createQueryBuilder('q')
                ->innerJoin(QuestSection::class, 's', 'WITH', 'q.section = s.id')
                ->innerJoin(QuestQuestionnaire::class, 'qq', 'WITH', 's.questionnaire = qq.id')
                ->where('qq.departement = :departement')
                ->setParameter('departement', $departement)
                ->orderBy('q.libelle', 'ASC')
                ->getQuery()
                ->getResult();
        }

        return $this->createQueryBuilder('q')
            ->innerJoin(QuestSection::class, 's', 'WITH', 'q.section = s.id')
            ->innerJoin(QuestQuestionnaire::class, 'qq', 'WITH', 's.questionnaire = qq.id')
            ->where('qq.departement IS NULL')
            ->orderBy('q.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findQuestionsSuivantes(QuestQuestion $question)
    {
        $qb = $this->createQueryBuilder('q');
        $qb->where('q.section = :section')
            ->andWhere('q.ordre > :ordre')
            ->setParameter('section', $question->getSection())
            ->setParameter('ordre', $question->getOrdre());

        return $qb->getQuery()->getResult();
    }

    public function findByQuestionnaire(QuestQuestionnaire $questionnaire): array
    {
        return $this->createQueryBuilder('q')
            ->innerJoin(QuestSection::class, 's', 'WITH', 'q.section = s.id')
            ->where('s.questionnaire = :questionnaire')
            ->setParameter('questionnaire', $questionnaire->getId())
            ->orderBy('q.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
