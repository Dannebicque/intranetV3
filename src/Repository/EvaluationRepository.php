<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/EvaluationRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

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
     *
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Evaluation::class);
    }

    /**
     * @param Semestre           $semestre
     *
     * @param AnneeUniversitaire $annee
     *
     * @return mixed
     */
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
     * @param Matiere $matiere
     * @param         $annee
     *
     * @return mixed
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
