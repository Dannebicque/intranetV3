<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/EvaluationRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 11/23/18 12:06 PM
 */

namespace App\Repository;

use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

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
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Evaluation::class);
    }

    /**
     * @param Semestre $semestre
     *
     * @return mixed
     */
    public function findBySemestre(Semestre $semestre)
    {
        return $this->createQueryBuilder('e')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'm.id = e.matiere')
            ->innerJoin(Ue::class, 'u', 'WITH', 'u.id = m.ue')
            ->where('u.semestre = :semestre')
            ->andWhere('e.anneeuniversitaire = :annee')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('annee', $semestre->getAnneeUniversitaire())
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
    public function findByMatiere(Matiere $matiere, $annee)
    {
        return $this->createQueryBuilder('e')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'm.id = e.matiere')
            ->where('m.id = :matiere')
            ->andWhere('e.anneeuniversitaire = :annee')
            ->setParameter('matiere', $matiere->getId())
            ->setParameter('annee', $annee)
            ->orderBy('e.dateEvaluation', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
