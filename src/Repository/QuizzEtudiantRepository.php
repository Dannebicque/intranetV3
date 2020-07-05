<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuizzEtudiantRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Repository;

use App\Entity\Etudiant;
use App\Entity\QualiteQuestionnaire;
use App\Entity\QuizzEtudiant;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;

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

    /**
     * @param QualiteQuestionnaire $qualiteQuestionnaire
     *
     * @return mixed
     * @throws NoResultException
     * @throws NonUniqueResultException
     */
    public function compteReponse(QualiteQuestionnaire $qualiteQuestionnaire)
    {
        $qb = $this->createQueryBuilder('prov');

        return $this->createQueryBuilder('q')
            ->select($qb->expr()->countDistinct('q.etudiant'))
            ->innerJoin(QualiteQuestionnaire::class, 'qq', 'WITH', 'q.questionnaire = qq.id')
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

        /** @var QuizzEtudiant $r */
        foreach ($q as $r) {
            if ($r->getQuestionnaire() !== null && $r->getEtudiant() !== null) {
                if (!array_key_exists($r->getQuestionnaire()->getId(), $t)) {
                    $t[$r->getQuestionnaire()->getId()] = [];
                }
                $t[$r->getQuestionnaire()->getId()][$r->getEtudiant()->getId()] = $r;
            }
        }

        return $t;
    }
}
