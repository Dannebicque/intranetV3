<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuestionnaireEtudiantRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 09/12/2020 10:40

namespace App\Repository;

use App\Entity\Etudiant;
use App\Entity\QuestionnaireQualite;
use App\Entity\QuestionnaireEtudiant;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;

/**
 * @method QuestionnaireEtudiant|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnaireEtudiant|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnaireEtudiant[]    findAll()
 * @method QuestionnaireEtudiant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestionnaireEtudiantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireEtudiant::class);
    }

    /**
     * @param QuestionnaireQualite $qualiteQuestionnaire
     *
     * @return mixed
     * @throws NoResultException
     * @throws NonUniqueResultException
     */
    public function compteReponse(QuestionnaireQualite $qualiteQuestionnaire)
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

    /**
     * @param Semestre $semestre
     *
     * @return array
     */
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
            if ($r->getQuestionnaireQualite() !== null && $r->getEtudiant() !== null) {
                if (!array_key_exists($r->getQuestionnaireQualite()->getId(), $t)) {
                    $t[$r->getQuestionnaireQualite()->getId()] = [];
                }
                $t[$r->getQuestionnaireQualite()->getId()][$r->getEtudiant()->getId()] = $r;
            }
        }

        return $t;
    }

    public function findByEtudiantArray(Etudiant $etudiant)
    {
        $r = $this->createQueryBuilder('q')
            ->where('q.etudiant = :etudiant')
            ->setParameter('etudiant', $etudiant->getId())
            ->getQuery()
            ->getResult();

        $t = [];
        /** @var QuestionnaireEtudiant $q */
        foreach ($r as $q) {
            $t[$q->getQuestionnaireQualite()->getId()] = $q;
        }

        return $t;
    }
}
