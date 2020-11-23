<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuestionnaireEtudiantReponseRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/11/2020 17:55

namespace App\Repository;

use App\Entity\QuestionnaireQualite;
use App\Entity\QuestionnaireEtudiant;
use App\Entity\QuestionnaireEtudiantReponse;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;

/**
 * @method QuestionnaireEtudiantReponse|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnaireEtudiantReponse|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnaireEtudiantReponse[]    findAll()
 * @method QuestionnaireEtudiantReponse[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset =
 *         null)
 */
class QuestionnaireEtudiantReponseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireEtudiantReponse::class);
    }

    /**
     * @param                       $cle
     * @param QuestionnaireEtudiant $quizzEtudiant
     *
     * @return mixed
     * @throws NonUniqueResultException
     */
    public function findExistQuestion(
        $cle,
        $quizzEtudiant
    ) {
        return $this->createQueryBuilder('q')
            ->where('q.cleQuestion = :cle')
            ->andWhere('q.quizzEtudiant = :quizzEtudiant')
            ->setParameter('cle', $cle)
            ->setParameter('quizzEtudiant', $quizzEtudiant)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findByQuizzEtudiant(QuestionnaireEtudiant $quizzEtudiant): array
    {
        $reponses = $this->createQueryBuilder('q')
            ->where('q.quizzEtudiant = :quizzEtudiant')
            ->setParameter('quizzEtudiant', $quizzEtudiant->getId())
            ->getQuery()
            ->getResult();

        $t = [];
        /** @var QuestionnaireEtudiantReponse $reponse */
        foreach ($reponses as $reponse) {
            $t[$reponse->getCleQuestion()] = $reponse;
        }

        return $t;
    }

    public function findByQuestionnaire(QuestionnaireQualite $questionnaire): array
    {
        return $this->createQueryBuilder('q')
            ->innerJoin(QuestionnaireEtudiant::class, 'e', 'WITH', 'q.quizzEtudiant=e.id')
            ->where('e.questionnaire = :questionnaire')
            ->setParameter('questionnaire', $questionnaire->getId())
            ->orderBy('q.cleQuestion', 'ASC')
            ->getQuery()
            ->getResult();


    }
}
