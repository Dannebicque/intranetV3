<?php

namespace App\Repository;

use App\Entity\Etudiant;
use App\Entity\QualiteQuestionnaire;
use App\Entity\QuizzEtudiant;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method QuizzEtudiant|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuizzEtudiant|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuizzEtudiant[]    findAll()
 * @method QuizzEtudiant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuizzEtudiantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuizzEtudiant::class);
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

    public function findBySemestreArray(Semestre $semestre)
    {
        $q = $this->createQueryBuilder('q')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'e.id = q.etudiant')
            ->where('e.semestre = :semestre')
            ->setParameter('semestre', $semestre->getId())
            ->getQuery()
            ->getResult();

        $t = [];

        /** @var QuizzEtudiant $r */
        foreach ($q as $r) {
            if (!array_key_exists($r->getQuestionnaire()->getId(), $t)) {
                $t[$r->getQuestionnaire()->getId()] = [];
            }
            $t[$r->getQuestionnaire()->getId()][$r->getEtudiant()->getId()] = $r;
        }

        return $t;
    }
}
