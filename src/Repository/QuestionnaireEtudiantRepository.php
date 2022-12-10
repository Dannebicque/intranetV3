<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuestionnaireEtudiantRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:48
 */

namespace App\Repository;

use App\Entity\Etudiant;
use App\Entity\QuestionnaireEtudiant;
use App\Entity\QuestionnaireQualite;
use App\Entity\QuestionnaireQuizz;
use App\Entity\Semestre;
use function array_key_exists;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @deprecated Use Quest...Repository à la place
 * @method QuestionnaireEtudiant|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnaireEtudiant|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnaireEtudiant[]    findAll()
 * @method QuestionnaireEtudiant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<QuestionnaireEtudiant>
 */
class QuestionnaireEtudiantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireEtudiant::class);
    }

    /**
     * @throws NoResultException
     * @throws NonUniqueResultException
     */
    public function compteReponse(QuestionnaireQualite $qualiteQuestionnaire): null|int|string
    {
        $qb = $this->createQueryBuilder('prov');

        return $this->createQueryBuilder('q')
            ->select($qb->expr()->countDistinct('q.etudiant'))
            ->innerJoin(QuestionnaireQualite::class, 'qq', 'WITH', 'q.questionnaireQualite = qq.id')
            ->where('qq.id = :questionnaire')
            ->setParameter('questionnaire', $qualiteQuestionnaire->getId())
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function findBySemestreArray(Semestre $semestre): array
    {
        $q = $this->createQueryBuilder('q')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'e.id = q.etudiant')
            ->where('e.semestre = :semestre')
            ->setParameter('semestre', $semestre->getId())
            ->getQuery()
            ->getResult();

        $t = [];

        /** @var QuestionnaireEtudiant $r */
        foreach ($q as $r) {
            if (null !== $r->getQuestionnaireQualite() && null !== $r->getEtudiant()) {
                if (!array_key_exists($r->getQuestionnaireQualite()->getId(), $t)) {
                    $t[$r->getQuestionnaireQualite()->getId()] = [];
                }
                $t[$r->getQuestionnaireQualite()->getId()][$r->getEtudiant()->getId()] = $r;
            }
        }

        return $t;
    }

    public function findByEtudiantArray(Etudiant $etudiant): array
    {
        $r = $this->createQueryBuilder('q')
            ->where('q.etudiant = :etudiant')
            ->setParameter('etudiant', $etudiant->getId())
            ->getQuery()
            ->getResult();

        $t = [];
        /** @var QuestionnaireEtudiant $q */
        foreach ($r as $q) {
            if (null !== $q->getQuestionnaireQualite()) {
                $t[$q->getQuestionnaireQualite()->getId()] = $q;
            }
        }

        return $t;
    }

    public function findByQuestionnaire(QuestionnaireQuizz $questionnaire): array
    {
        return $this->createQueryBuilder('q')
            ->where('q.questionnaireQuizz = :questionnaire')
            ->setParameter('questionnaire', $questionnaire->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByQuestionnaireQualite(QuestionnaireQualite $questionnaire): array
    {
        return $this->createQueryBuilder('q')
            ->where('q.questionnaireQualite = :questionnaire')
            ->setParameter('questionnaire', $questionnaire->getId())
            ->getQuery()
            ->getResult();
    }
}
