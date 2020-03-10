<?php

namespace App\Repository;

use App\Entity\QualiteQuestionnaire;
use App\Entity\QuizzEtudiant;
use App\Entity\QuizzEtudiantReponse;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
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
     * @param QuizzEtudiant        $quizzEtudiant
     *
     * @return mixed
     * @throws NonUniqueResultException
     */
    public function findExistQuestion(
        $cle,
        QuizzEtudiant $quizzEtudiant
    ) {
        return $this->createQueryBuilder('q')
            ->where('q.cleQuestion = :cle')
            ->andWhere('q.quizzEtudiant = :quizzEtudiant')
            ->setParameter('cle', $cle)
            ->setParameter('quizzEtudiant', $quizzEtudiant->getId())
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findByQuizzEtudiant(QuizzEtudiant $quizzEtudiant): array
    {
        $reponses = $this->createQueryBuilder('q')
            ->where('q.quizzEtudiant = :quizzEtudiant')
            ->setParameter('quizzEtudiant', $quizzEtudiant->getId())
            ->getQuery()
            ->getResult();

        $t = [];
        /** @var QuizzEtudiantReponse $reponse */
        foreach ($reponses as $reponse) {
            $t[$reponse->getCleQuestion()] = $reponse;
        }

        return $t;
    }

    public function findByQuestionnaire(QualiteQuestionnaire $questionnaire): array
    {
        return $this->createQueryBuilder('q')
            ->innerJoin(QuizzEtudiant::class, 'e', 'WITH', 'q.quizzEtudiant=e.id')
            ->where('e.questionnaire = :questionnaire')
            ->setParameter('questionnaire', $questionnaire->getId())
            ->orderBy('q.cleQuestion', 'ASC')
            ->getQuery()
            ->getResult();


    }
}
