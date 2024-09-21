<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/QuestChoixExterieurRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/06/2024 21:13
 */

namespace App\Repository;

use App\Entity\QuestChoixExterieur;
use App\Entity\QuestQuestionnaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<QuestChoixExterieur>
 *
 * @method QuestChoixExterieur|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestChoixExterieur|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestChoixExterieur[]    findAll()
 * @method QuestChoixExterieur[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestChoixExterieurRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestChoixExterieur::class);
    }

    public function save(QuestChoixExterieur $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(QuestChoixExterieur $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function compteReponse(QuestQuestionnaire $questionnaire)
    {
        $qb = $this->createQueryBuilder('prov');

        return $this->createQueryBuilder('q')
            ->select($qb->expr()->countDistinct('q.email'))
            ->innerJoin(QuestQuestionnaire::class, 'qq', 'WITH', 'q.questionnaire = qq.id')
            ->where('qq.id = :questionnaire')
            ->setParameter('questionnaire', $questionnaire->getId())
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function findByQuestionnaire(QuestQuestionnaire $questionnaire): array
    {
        return $this->createQueryBuilder('q')
            ->where('q.questionnaire = :questionnaire')
            ->setParameter('questionnaire', $questionnaire)
            ->orderBy('q.nom', Order::Ascending->value)
            ->addOrderBy('q.prenom', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }
}
