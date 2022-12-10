<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/QuestionnaireQualiteRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/05/2022 08:49
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Diplome;
use App\Entity\QuestionnaireQualite;
use App\Entity\Semestre;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @deprecated Use Quest...Repository à la place
 * @method QuestionnaireQualite|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnaireQualite|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnaireQualite[]    findAll()
 * @method QuestionnaireQualite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<QuestionnaireQualite>
 */
class QuestionnaireQualiteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireQualite::class);
    }

    public function findByDiplome(Diplome $diplome): array
    {
        return $this->createQueryBuilder('q')
            ->innerJoin(Semestre::class, 's', 'WITH', 's.id=q.semestre')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->where('a.diplome = :diplome')
            ->setParameter('diplome', $diplome->getId())
            ->orderBy('q.dateOuverture', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function findInDate(DateTime $date): array
    {
        return $this->createQueryBuilder('q')
            ->innerJoin(Semestre::class, 's', 'WITH', 's.id=q.semestre')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->where('q.dateOuverture  BETWEEN :matin AND :soir')
            ->setParameter('matin', $date->format('Y-m-d 00:00:00'))
            ->setParameter('soir', $date->format('Y-m-d 23:59:59'))
            ->getQuery()
            ->getResult();
    }
}
