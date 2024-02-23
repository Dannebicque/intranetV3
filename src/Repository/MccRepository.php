<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/MccRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:43
 */

namespace App\Repository;

use App\DTO\Matiere;
use App\Entity\AnneeUniversitaire;
use App\Entity\Mcc;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Mcc>
 *
 * @method Mcc|null find($id, $lockMode = null, $lockVersion = null)
 * @method Mcc|null findOneBy(array $criteria, array $orderBy = null)
 * @method Mcc[]    findAll()
 * @method Mcc[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MccRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Mcc::class);
    }

    public function save(Mcc $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Mcc $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findByMatiereAndAnneeUniversitaire(
        Matiere $matiere,
        AnneeUniversitaire $getAnneeUniversitaire
    ): array
    {
        return $this->createQueryBuilder('mcc')
            ->join('mcc.typeEpreuve', 'te')
            ->where('te.anneeUniversitaire = :anneeUniversitaire')
            ->andWhere('mcc.typeMatiere = :typeMatiere')
            ->andWhere('mcc.idMatiere = :idMatiere')
            ->setParameter('typeMatiere', $matiere->typeMatiere)
            ->setParameter('idMatiere', $matiere->id)
            ->setParameter('anneeUniversitaire', $getAnneeUniversitaire->getId())
            ->getQuery()
            ->getResult();
    }

    public function findBySemestreTable(array $matieres, AnneeUniversitaire $anneeUniversitaire): array
    {
        $query = $this->getMccBySemestre($anneeUniversitaire, $matieres);

        $t = [];

        foreach ($query as $q) {
            if (!array_key_exists($q->getTypeIdMatiere(), $t)) {
                $t[$q->getTypeIdMatiere()] = [];
                $t[$q->getTypeIdMatiere()]['nbNotes'] = 0;
                $t[$q->getTypeIdMatiere()]['pourcentage'] = 0;
            }

            ++$t[$q->getTypeIdMatiere()]['nbNotes'];
            $t[$q->getTypeIdMatiere()]['pourcentage'] += $q->getCoefficient();
        }

        return $t;
    }

    private function getOrs(?array $matieres, QueryBuilder $query): array
    {
        $ors = [];
        foreach ($matieres as $matiere) {
            $ors[] = '(' . $query->expr()->orx('mcc.idMatiere = ' . $query->expr()->literal($matiere->id)) . ' AND ' . $query->expr()->andX('mcc.typeMatiere = ' . $query->expr()->literal($matiere->typeMatiere)) . ')';
        }

        return $ors;
    }

    /**
     * @return float|int|mixed|string
     */
    private function getMccBySemestre(AnneeUniversitaire $anneeUniversitaire, array $matieres): mixed
    {
        $query = $this->createQueryBuilder('mcc')
            ->join('mcc.typeEpreuve', 'te')
            ->where('te.anneeUniversitaire = :anneeUniversitaire')
            ->setParameter('anneeUniversitaire', $anneeUniversitaire->getId());

        $query->andWhere(implode(' OR ', $this->getOrs($matieres, $query)));

        return $query->getQuery()->getResult();
    }
}
