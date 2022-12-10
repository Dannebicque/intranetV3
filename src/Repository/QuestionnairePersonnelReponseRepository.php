<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/QuestionnairePersonnelReponseRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/05/2022 14:46
 */

namespace App\Repository;

use App\Entity\QuestionnaireEtudiant;
use App\Entity\QuestionnairePersonnel;
use App\Entity\QuestionnairePersonnelReponse;
use App\Entity\QuestionnaireQualite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @deprecated Use Quest...Repository à la place
 * @method QuestionnairePersonnelReponse|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnairePersonnelReponse|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnairePersonnelReponse[]    findAll()
 * @method QuestionnairePersonnelReponse[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset =
 *         null)
 * @extends ServiceEntityRepository<QuestionnairePersonnelReponse>
 */
class QuestionnairePersonnelReponseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnairePersonnelReponse::class);
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findExistQuestion(
        string $cle,
        QuestionnairePersonnel $quizzEtudiant
    ): ?QuestionnairePersonnelReponse {
        return $this->createQueryBuilder('q')
            ->where('q.cleQuestion = :cle')
            ->andWhere('q.questionnairePersonnel = :questionnairePersonnel')
            ->setParameter('cle', $cle)
            ->setParameter('questionnairePersonnel', $quizzEtudiant)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findByQuizzPersonnel(QuestionnairePersonnel $quizzEtudiant): array
    {
        $reponses = $this->createQueryBuilder('q')
            ->where('q.questionnairePersonnel = :questionnairePersonnel')
            ->setParameter('questionnairePersonnel', $quizzEtudiant->getId())
            ->getQuery()
            ->getResult();

        $t = [];
        /** @var QuestionnairePersonnelReponse $reponse */
        foreach ($reponses as $reponse) {
            $t[$reponse->getCleQuestion()] = $reponse;
        }

        return $t;
    }

    public function findByQuestionnaire(QuestionnaireQualite $questionnaire): array
    {
        return $this->createQueryBuilder('q')
            ->innerJoin(QuestionnaireEtudiant::class, 'e', 'WITH', 'q.questionnairePersonnel=e.id')
            ->where('e.questionnaireQualite = :questionnaireQualite')
            ->setParameter('questionnaireQualite', $questionnaire->getId())
            ->orderBy('q.cleQuestion', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }
}
