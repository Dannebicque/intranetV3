<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/EvaluationRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\Evaluation;
use App\Entity\Matiere;
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

    public function findBySemestre(array $matieres, AnneeUniversitaire $annee)
    {
        $query = $this->createQueryBuilder('e')
            ->innerJoin(AnneeUniversitaire::class, 'n', 'WITH', 'e.anneeUniversitaire = n.id')
            ->where('n.annee = :annee')
            ->setParameter('annee', $annee->getAnnee())
            ->orderBy('e.dateEvaluation', 'ASC');

        $ors = [];
        foreach ($matieres as $matiere) {
            $ors[] = '(' . $query->expr()->orx('e.idMatiere = ' . $query->expr()->literal($matiere->id)) . ' AND ' . $query->expr()->andX('e.typeMatiere = ' . $query->expr()->literal($matiere->typeMatiere)) . ')';
        }

        return $query->andWhere(implode(' OR ', $ors))
            ->getQuery()
            ->getResult();
    }

    public function findByMatiere(int $matiere, string $type, AnneeUniversitaire $annee)
    {
        return $this->createQueryBuilder('e')
            ->innerJoin(AnneeUniversitaire::class, 'u', 'WITH', 'e.anneeUniversitaire = u.id')
            ->where('e.idMatiere = :matiere')
            ->andWhere('e.typeMatiere = :type')
            ->andWhere('u.annee = :annee')
            ->setParameter('matiere', $matiere)
            ->setParameter('type', $type)
            ->setParameter('annee', $annee->getAnnee())
            ->orderBy('e.dateEvaluation', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
