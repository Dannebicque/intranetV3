<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/EvaluationRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/10/2021 10:33
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\Evaluation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Evaluation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Evaluation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Evaluation[]    findAll()
 * @method Evaluation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Evaluation>
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

    //todo: utiliser le semestre de Evaluation ? plutot que matière
    public function findBySemestre(array $matieres, AnneeUniversitaire $annee)
    {
        if (count($matieres) <= 0) {
            return null;
        }

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

    public function findByMatiere(int $matiere, string $type, ?AnneeUniversitaire $annee = null)
    {
        $query = $this->createQueryBuilder('e')
            ->where('e.idMatiere = :matiere')
            ->andWhere('e.typeMatiere = :type')
            ->setParameter('matiere', $matiere)
            ->setParameter('type', $type)
            ->orderBy('e.dateEvaluation', 'ASC');

        if (null !== $annee) {
            $query->innerJoin(AnneeUniversitaire::class, 'u', 'WITH', 'e.anneeUniversitaire = u.id')
                ->andWhere('u.annee = :annee')
                ->setParameter('annee', $annee->getAnnee());
        }

        return $query->getQuery()
            ->getResult();
    }
}
