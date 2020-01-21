<?php

namespace App\Repository;

use App\Entity\Etudiant;
use App\Entity\QualiteQuestionnaire;
use App\Entity\QualiteQuestionnaireSection;
use App\Entity\QuizzEtudiantReponse;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;

/**
 * @method QuizzEtudiantReponse|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuizzEtudiantReponse|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuizzEtudiantReponse[]    findAll()
 * @method QuizzEtudiantReponse[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuizzEtudiantReponseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuizzEtudiantReponse::class);
    }

    /**
     * @param                      $cle
     * @param QualiteQuestionnaire $questionnaire
     * @param Etudiant             $etudiant
     *
     * @return mixed
     * @throws NonUniqueResultException
     */
    public function findExistQuestion(
        $cle,
        QualiteQuestionnaire $questionnaire,
        Etudiant $etudiant
    ) {
        return $this->createQueryBuilder('q')
            ->where('q.cleQuestion = :cle')
            ->andWhere('q.etudiant = :etudiant')
            ->andWhere('q.questionnaire = :questionnaire')
            ->setParameter('cle', $cle)
            ->setParameter('etudiant', $etudiant->getId())
            ->setParameter('questionnaire', $questionnaire->getId())
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findByQuestionnaire(QualiteQuestionnaire $questionnaire): array
    {
        $reponses = $this->createQueryBuilder('q')
            ->where('q.questionnaire = :questionnaire')
            ->setParameter('questionnaire', $questionnaire->getId())
            ->getQuery()
            ->getResult();

        $t = [];
        /** @var QuizzEtudiantReponse $reponse */
        foreach ($reponses as $reponse) {
            $t[$reponse->getCleQuestion()] = $reponse;
        }

        return $t;
    }

    public function compteReponse(Semestre $semestre)
    {
        $qb = $this->createQueryBuilder('prov');

        return $this->createQueryBuilder('q')
            ->select($qb->expr()->countDistinct('q.etudiant'))
            ->innerJoin(QualiteQuestionnaire::class, 'qq', 'WITH', 'q.questionnaire = qq.id')
            ->where('qq.semestre = :semestre')
            ->setParameter('semestre', $semestre->getId())
            ->getQuery()
            ->getSingleScalarResult();
    }
}
