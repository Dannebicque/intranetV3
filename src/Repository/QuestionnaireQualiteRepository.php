<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuestionnaireQualiteRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\QuestionnaireQualite;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method QuestionnaireQualite|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnaireQualite|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnaireQualite[]    findAll()
 * @method QuestionnaireQualite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestionnaireQualiteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireQualite::class);
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

    public function findInDate(\DateTime $date)
    {
        return $this->createQueryBuilder('q')
            ->innerJoin(Semestre::class, 's', 'with', 's.id=q.semestre')
            ->innerJoin(Annee::class, 'a', 'with', 'a.id = s.annee')
            ->where('q.dateOuverture = :date')
            ->setParameter('date', $date)
            ->getQuery()
            ->getResult();
    }
}
