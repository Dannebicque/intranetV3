<?php

namespace App\Repository;

use App\Components\Questionnaire\TypeDestinataire\Personnel;
use App\Entity\QuestQuestionnaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<QuestQuestionnaire>
 *
 * @method QuestQuestionnaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestQuestionnaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestQuestionnaire[]    findAll()
 * @method QuestQuestionnaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestQuestionnaireRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestQuestionnaire::class);
    }

    public function save(QuestQuestionnaire $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(QuestQuestionnaire $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findForPersonnel(): array
    {
        return $this->createQueryBuilder('qq')
            ->where('qq.typeDestinataire = :typeDestinataire')
            ->setParameter('typeDestinataire', Personnel::class)
            ->getQuery()
            ->getResult();
    }
}
