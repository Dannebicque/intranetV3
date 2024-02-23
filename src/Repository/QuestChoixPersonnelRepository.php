<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/QuestChoixPersonnelRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Repository;

use App\Entity\QuestChoixPersonnel;
use App\Entity\QuestQuestionnaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<QuestChoixPersonnel>
 *
 * @method QuestChoixPersonnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestChoixPersonnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestChoixPersonnel[]    findAll()
 * @method QuestChoixPersonnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestChoixPersonnelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestChoixPersonnel::class);
    }

    public function save(QuestChoixPersonnel $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(QuestChoixPersonnel $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
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
