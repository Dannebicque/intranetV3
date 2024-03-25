<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/MatiereRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:20
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Matiere|null find($id, $lockMode = null, $lockVersion = null)
 * @method Matiere|null findOneBy(array $criteria, array $orderBy = null)
 * @method Matiere[]    findAll()
 * @method Matiere[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Matiere>
 */
class MatiereRepository extends ServiceEntityRepository
{
    /**
     * MatiereRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Matiere::class);
    }

    public function findBySemestre(Semestre $semestre): array
    {
        return $this->findBySemestreBuilder($semestre)
            ->getQuery()
            ->getResult();
    }

    public function findByDepartementBuilder(Departement $departement): QueryBuilder
    {
        return $this->createQueryBuilder('m')
            ->innerJoin(Ue::class, 'u', 'WITH', 'u.id = m.ue')
            ->innerJoin(Semestre::class, 's', 'WITH', 's.id = u.semestre')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->where('d.departement = :departement')
            ->andWhere('s.ppnActif = m.ppn')
            ->andWhere('a.actif = 1')
            ->setParameter('departement', $departement->getId())
            ->orderBy('m.codeMatiere', Criteria::ASC)
            ->addOrderBy('m.libelle', Criteria::ASC);
    }

    public function findBySemestreBuilder(Semestre $semestre): QueryBuilder
    {
        return $this->createQueryBuilder('m')
            ->innerJoin(Ue::class, 'u', 'WITH', 'u.id = m.ue')
            ->innerJoin(Semestre::class, 's', 'WITH', 'u.semestre = s.id')
            ->where('u.semestre = :semestre')
            ->andWhere('s.ppnActif = m.ppn')
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('u.numeroUe', Criteria::ASC)
            ->addOrderBy('m.codeMatiere', Criteria::ASC);
    }

    public function findByDepartement(Departement $departement): array
    {
        return $this->findByDepartementBuilder($departement)->getQuery()->getResult();
    }

    public function tableauMatieresApogees(Diplome $diplome): array
    {
        $query = $this->createQueryBuilder('m')
            ->innerJoin(Ue::class, 'u', 'WITH', 'u.id=m.ue')
            ->innerJoin(Semestre::class, 's', 'WITH', 's.id=u.semestre')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id=s.annee')
            ->where('a.diplome= :diplome')
            ->setParameter('diplome', $diplome->getId())
            ->getQuery()
            ->getResult();

        $t = [];

        /** @var Matiere $q */
        foreach ($query as $q) {
            $t[$q->getCodeElement()] = $q;
        }

        return $t;
    }

    public function findByDiplome(Diplome $diplome): array
    {
        return $this->createQueryBuilder('m')
            ->innerJoin(Ue::class, 'u', 'WITH', 'u.id = m.ue')
            ->innerJoin(Semestre::class, 's', 'WITH', 's.id = u.semestre')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->where('a.diplome = :diplome')
            ->andWhere('s.ppnActif = m.ppn')
            ->setParameter('diplome', $diplome->getId())
            ->orderBy('m.codeMatiere', Criteria::ASC)
            ->addOrderBy('m.libelle', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function findByAnneeUniversitaire(int $anneeUniversitaire): array
    {
        return []; //todo: a faire récupérer des matières d'une année universitaire. Utilisé en LP
    }
}
