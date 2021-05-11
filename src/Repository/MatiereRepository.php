<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/MatiereRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Matiere|null find($id, $lockMode = null, $lockVersion = null)
 * @method Matiere|null findOneBy(array $criteria, array $orderBy = null)
 * @method Matiere[]    findAll()
 * @method Matiere[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
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

    public function findBySemestre(Semestre $semestre)
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
            ->andWhere('s.ppn_actif = m.ppn')
            ->setParameter('departement', $departement->getId())
            ->orderBy('m.codeMatiere', 'ASC')
            ->addOrderBy('m.libelle', 'ASC');
    }

    public function findBySemestreBuilder(Semestre $semestre): QueryBuilder
    {
        return $this->createQueryBuilder('m')
            ->innerJoin(Ue::class, 'u', 'WITH', 'u.id = m.ue')
            ->innerJoin(Semestre::class, 's', 'WITH', 'u.semestre = s.id')
            ->where('u.semestre = :semestre')
            ->andWhere('s.ppn_actif = m.ppn')
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('u.numeroUe', 'ASC')
            ->addOrderBy('m.codeMatiere', 'ASC');
    }

    public function findByDepartement(Departement $departement)
    {
        return $this->findByDepartementBuilder($departement)->getQuery()->getResult();
    }

    public function tableauMatieresApogees(Diplome $diplome): array
    {
        $query = $this->createQueryBuilder('m')
            ->innerJoin(Ue::class, 'u', 'with', 'u.id=m.ue')
            ->innerJoin(Semestre::class, 's', 'with', 's.id=u.semestre')
            ->innerJoin(Annee::class, 'a', 'with', 'a.id=s.annee')
            ->where('a.diplome= :diplome')
            ->setParameter('diplome', $diplome->getId())
            ->getQuery()
            ->getResult();

        $t = [];

        /** @var $q Matiere */
        foreach ($query as $q) {
            $t[$q->getCodeElement()] = $q;
        }

        return $t;
    }

    public function findByDiplome(Diplome $diplome)
    {
        return $this->createQueryBuilder('m')
            ->innerJoin(Ue::class, 'u', 'WITH', 'u.id = m.ue')
            ->innerJoin(Semestre::class, 's', 'WITH', 's.id = u.semestre')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->where('a.diplome = :diplome')
            ->andWhere('s.ppn_actif = m.ppn')
            ->setParameter('diplome', $diplome->getId())
            ->orderBy('m.codeMatiere', 'ASC')
            ->addOrderBy('m.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }

//    public function tableauMatieres(Departement $departement): array
//    {
//        $query = $this->createQueryBuilder('m')
//            ->innerJoin(Ue::class, 'u', 'with', 'u.id=m.ue')
//            ->innerJoin(Semestre::class, 's', 'with', 's.id=u.semestre')
//            ->innerJoin(Annee::class, 'a', 'with', 'a.id=s.annee')
//            ->innerJoin(Diplome::class, 'd', 'with', 'd.id=a.diplome')
//            ->where('d.departement= :departement')
//            ->setParameter('departement', $departement->getId())
//            ->getQuery()
//            ->getResult();
//
//        $t = [];
//
//        /** @var $q Matiere */
//        foreach ($query as $q) {
//            $t[$q->getCodeMatiere()] = $q;
//        }
//
//        return $t;
//    }
}
