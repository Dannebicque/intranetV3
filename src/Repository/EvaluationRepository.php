<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/EvaluationRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Evaluation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Evaluation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Evaluation[]    findAll()
 * @method Evaluation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EvaluationRepository extends ServiceEntityRepository
{
    /**
     * EvaluationRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Evaluation::class);
    }

    public function findBySemestre(Semestre $semestre, AnneeUniversitaire $annee)
    {
        return $this->createQueryBuilder('e')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'm.id = e.matiere')
            ->innerJoin(Ue::class, 'u', 'WITH', 'u.id = m.ue')
            ->innerJoin(AnneeUniversitaire::class, 'n', 'WITH', 'e.anneeUniversitaire = n.id')
            ->where('u.semestre = :semestre')
            ->andWhere('n.annee = :annee')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('annee', $annee->getAnnee())
            ->orderBy('e.dateEvaluation', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $annee
     */
    public function findByMatiere(Matiere $matiere, AnneeUniversitaire $annee)
    {
        return $this->createQueryBuilder('e')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'm.id = e.matiere')
            ->innerJoin(AnneeUniversitaire::class, 'u', 'WITH', 'e.anneeUniversitaire = u.id')
            ->where('m.id = :matiere')
            ->andWhere('u.annee = :annee')
            ->setParameter('matiere', $matiere->getId())
            ->setParameter('annee', $annee->getAnnee())
            ->orderBy('e.dateEvaluation', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
