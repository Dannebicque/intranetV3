<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/QuestChoixRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/12/2022 13:57
 */

namespace App\Repository;

use App\Components\Questionnaire\Interfaces\QuestChoixInterface;
use App\Entity\QuestChoix;
use App\Entity\QuestQuestion;
use App\Entity\QuestQuestionnaire;
use App\Entity\QuestSection;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<QuestChoix>
 *
 * @method QuestChoix|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestChoix|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestChoix[]    findAll()
 * @method QuestChoix[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestChoixRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestChoix::class);
    }

    public function save(QuestChoix $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(QuestChoix $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findByQuestionnaire(QuestQuestionnaire $questionnaireQualite): array
    {
        return $this->createQueryBuilder('c')
            ->innerJoin(QuestQuestion::class, 'q', 'WITH', 'q.id = c.question')
            ->innerJoin(QuestSection::class, 's', 'WITH', 's.id = q.section')
            ->innerJoin(QuestQuestionnaire::class, 'qq', 'WITH', 'qq.id = s.questionnaire')
            ->andWhere('s.questionnaire = :questionnaire')
            ->setParameter('questionnaire', $questionnaireQualite)
            ->getQuery()
            ->getResult();
    }

    public function findExistQuestion(
        string $cleQuestion,
        QuestChoixInterface $choixUser,
        string $typeDestinataire
    ): ?QuestChoix {
        return $this->createQueryBuilder('c')
            ->andWhere('c.question = :question')
            ->andWhere('c.idQuestChoix = :idQuestChoix')
            ->andWhere('c.typeDestinataire = :typeDestinataire')
            ->setParameter('question', $cleQuestion)
            ->setParameter('idQuestChoix', $choixUser->getId())
            ->setParameter('typeDestinataire', $typeDestinataire)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
