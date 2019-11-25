<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/MatiereRepository.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:21
// @lastUpdate 23/11/2019 09:14

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\QueryBuilder;

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
     *
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Matiere::class);
    }

    /**
     * @param Semestre $semestre
     *
     * @return mixed
     */
    public function findBySemestre(Semestre $semestre)
    {
        return $this->findBySemestreBuilder($semestre)
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $departement
     *
     * @return QueryBuilder
     */
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
            ->orderBy('m.libelle', 'ASC');
    }

    /**
     * @param Semestre $semestre
     *
     * @return QueryBuilder
     */
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

    /**
     * @param Diplome $diplome
     *
     * @return array
     */
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

        /** @var  $q Matiere */
        foreach ($query as $q) {
            $t[$q->getCodeApogee()] = $q;
        }

        return $t;
    }

    public function findByDiplome(Diplome $diplome)
    {
        //todo: vérifier le PPN actif...

        return $this->createQueryBuilder('m')
            ->innerJoin(Ue::class, 'u', 'WITH', 'u.id = m.ue')
            ->innerJoin(Semestre::class, 's', 'WITH', 's.id = u.semestre')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->where('a.diplome = :diplome')
            ->setParameter('diplome', $diplome->getId())
            ->orderBy('m.codeMatiere', 'ASC')
            ->orderBy('m.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function tableauMatieres(Departement $departement): array
    {
        $query = $this->createQueryBuilder('m')
            ->innerJoin(Ue::class, 'u', 'with', 'u.id=m.ue')
            ->innerJoin(Semestre::class, 's', 'with', 's.id=u.semestre')
            ->innerJoin(Annee::class, 'a', 'with', 'a.id=s.annee')
            ->innerJoin(Diplome::class, 'd', 'with', 'd.id=a.diplome')
            ->where('d.departement= :departement')
            ->setParameter('departement', $departement->getId())
            ->getQuery()
            ->getResult();

        $t = array();

        /** @var  $q Matiere */
        foreach ($query as $q) {
            $t[$q->getCodeMatiere()] = $q;
        }

        return $t;
    }

}
