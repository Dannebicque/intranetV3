<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/QualiteQuestionnaireRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\QualiteQuestionnaire;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method QualiteQuestionnaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method QualiteQuestionnaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method QualiteQuestionnaire[]    findAll()
 * @method QualiteQuestionnaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QualiteQuestionnaireRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QualiteQuestionnaire::class);
    }

    public function findByDiplome(Diplome $diplome)
    {
        return $this->createQueryBuilder('q')
            ->innerJoin(Semestre::class, 's', 'with', 's.id=q.semestre')
            ->innerJoin(Annee::class, 'a', 'with', 'a.id = s.annee')
            ->where('a.diplome = :diplome')
            ->setParameter('diplome', $diplome->getId())
            ->orderBy('q.dateOuverture', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
