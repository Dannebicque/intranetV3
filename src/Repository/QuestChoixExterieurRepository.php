<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/QuestChoixExterieurRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/01/2023 13:44
 */

namespace App\Repository;

use App\Entity\QuestChoixExterieur;
use App\Entity\QuestQuestionnaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
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
        return $this->createQueryBuilder('qcp')
            ->select('COUNT(qcp.id) as nbre')
            ->where('qcp.questionnaire = :questionnaire')
            ->setParameter('questionnaire', $questionnaire->getId())
            ->getQuery()
            ->getSingleResult();
    }
}
