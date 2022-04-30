<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ApcRessourceRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/07/2021 13:25
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\ApcCompetence;
use App\Entity\ApcRessource;
use App\Entity\ApcRessourceCompetence;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Ppn;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcRessource|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcRessource|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcRessource[]    findAll()
 * @method ApcRessource[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<ApcRessource>
 */
class ApcRessourceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcRessource::class);
    }

    public function findByDiplome(Diplome $diplome): array
    {
        return $this->findByDiplomeBuilder($diplome)
            ->getQuery()
            ->getResult();
    }

    public function findByDiplomeBuilder(Diplome $diplome): QueryBuilder
    {
        return $this->createQueryBuilder('r')
            ->innerJoin('r.semestres', 's')
            ->addSelect('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->where('a.diplome = :diplome')
            // ->andWhere('s.ppn_actif = m.ppn')
            ->setParameter('diplome', $diplome->getId())
            ->orderBy('r.codeMatiere', \Doctrine\Common\Collections\Criteria::ASC)
            ->addOrderBy('r.libelle', \Doctrine\Common\Collections\Criteria::ASC);
    }

    public function findBySemestre(Semestre $semestre): array
    {
        return $this->createQueryBuilder('r')
            ->innerJoin('r.semestres', 's')
            ->addSelect('s')
            ->where('s.id = :semestre')
            ->leftJoin('r.apcRessourceCompetences', 'apcRessourceCompetences')
            ->addSelect('apcRessourceCompetences')
            // ->andWhere('s.ppn_actif = m.ppn')
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('r.codeMatiere', \Doctrine\Common\Collections\Criteria::ASC)
            ->addOrderBy('r.libelle', \Doctrine\Common\Collections\Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function search(?string $search, Diplome $diplome): array
    {
        return $this->createQueryBuilder('a')
            ->innerJoin('r.semestres', 's')
            ->addSelect('s')
            ->innerJoin(Annee::class, 'an', 'WITH', 's.annee=an.id')
            ->where('a.libelle LIKE :search')
            ->orWhere('a.description LIKE :search')
            ->orWhere('a.motsCles LIKE :search')
            ->orWhere('a.libelle LIKE :search')
            ->andWhere('an.diplome = :diplome')
            ->setParameter('search', '%'.$search.'%')
            ->setParameter('diplome', $diplome->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByDepartement(Departement $departement): array
    {
        return $this->createQueryBuilder('r')
            ->innerJoin('r.semestres', 's')
            ->addSelect('s')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->leftJoin('r.apcRessourceCompetences', 'apcRessourceCompetences')
            ->addSelect('apcRessourceCompetences')
            ->where('d.departement = :departement')
            // ->andWhere('s.ppn_actif = m.ppn')
            ->setParameter('departement', $departement->getId())
            ->orderBy('r.codeMatiere', \Doctrine\Common\Collections\Criteria::ASC)
            ->addOrderBy('r.libelle', \Doctrine\Common\Collections\Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function findByDiplomeToSemestreArray(Diplome $diplome): array
    {
        $tab = [];
        foreach ($diplome->getSemestres() as $semestre) {
            $tab[$semestre->getId()] = $this->findBySemestre($semestre);
        }

        return $tab;
    }

    public function findByPpn(Ppn $ppn): array
    {
        return $this->createQueryBuilder('r')
            ->innerJoin(ApcRessourceCompetence::class, 'cr', 'WITH', 'cr.ressource = r.id')
            ->innerJoin(ApcCompetence::class, 'c', 'WITH', 'cr.competence = c.id')
            ->where('c.ppn = :ppn')
            ->setParameter('ppn', $ppn->getId())
            ->getQuery()
            ->getResult();
    }
}
