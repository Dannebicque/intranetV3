<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/EvaluationRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2022 10:25
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\ApcReferentiel;
use App\Entity\Diplome;
use App\Entity\Evaluation;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Criteria;
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

    public function findBySemestre(Semestre $semestre, AnneeUniversitaire $annee): ?array
    {
        return $this->createQueryBuilder('e')
            ->innerJoin(AnneeUniversitaire::class, 'n', 'WITH', 'e.anneeUniversitaire = n.id')
            ->where('n.annee = :annee')
            ->andWhere('e.semestre = :semestre')
            ->setParameter('annee', $annee->getAnnee())
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('e.dateEvaluation', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function findByReferentielOrdreSemestre(ApcReferentiel $referentiel, int $semestre, AnneeUniversitaire $annee): array
    {
        return $this->createQueryBuilder('e')
            ->innerJoin(AnneeUniversitaire::class, 'n', 'WITH', 'e.anneeUniversitaire = n.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->where('s.ordreLmd = :semestre')
            ->andWhere('d.referentiel = :referentiel')
            ->andWhere('n.annee = :annee')
            ->setParameter('referentiel', $referentiel->getId())
            ->setParameter('semestre', $semestre)
            ->setParameter('annee', $annee->getAnnee())
            ->orderBy('e.dateEvaluation', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function findByMatiere(int $matiere, string $type, ?AnneeUniversitaire $annee = null): array
    {
        $query = $this->createQueryBuilder('e')
            ->where('e.idMatiere = :matiere')
            ->andWhere('e.typeMatiere = :type')
            ->setParameter('matiere', $matiere)
            ->setParameter('type', $type)
            ->orderBy('e.dateEvaluation', Criteria::ASC);

        if (null !== $annee) {
            $query->innerJoin(AnneeUniversitaire::class, 'u', 'WITH', 'e.anneeUniversitaire = u.id')
                ->andWhere('u.annee = :annee')
                ->setParameter('annee', $annee->getAnnee());
        }

        return $query->getQuery()
            ->getResult();
    }
}
