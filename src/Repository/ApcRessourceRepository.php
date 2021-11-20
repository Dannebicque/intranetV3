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
use App\Entity\ApcRessource;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
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

    public function findByDiplome(Diplome $diplome)
    {
        return $this->createQueryBuilder('r')
            ->innerJoin(Semestre::class, 's', 'WITH', 's.id = r.semestre')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->where('a.diplome = :diplome')
            //->andWhere('s.ppn_actif = m.ppn')
            ->setParameter('diplome', $diplome->getId())
            ->orderBy('r.codeMatiere', 'ASC')
            ->addOrderBy('r.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findBySemestre(Semestre $semestre)
    {
        return $this->createQueryBuilder('r')
            ->where('r.semestre = :semestre')
            //->andWhere('s.ppn_actif = m.ppn')
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('r.codeMatiere', 'ASC')
            ->addOrderBy('r.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function search(?string $search, Diplome $diplome)
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(Semestre::class, 's', 'WITH', 'a.semestre=s.id')
            ->innerJoin(Annee::class, 'an', 'WITH', 's.annee=an.id')
            ->where('a.libelle LIKE :search')
            ->orWhere('a.description LIKE :search')
            ->orWhere('a.motsCles LIKE :search')
            ->orWhere('a.libelle LIKE :search')
            ->andWhere('an.diplome = :diplome')
            ->setParameter('search', '%' . $search . '%')
            ->setParameter('diplome', $diplome->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByDepartement(Departement $departement)
    {
        return $this->createQueryBuilder('r')
            ->innerJoin(Semestre::class, 's', 'WITH', 's.id = r.semestre')
            ->innerJoin(Annee::class, 'a', 'WITH', 'a.id = s.annee')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'd.id = a.diplome')
            ->where('d.departement = :departement')
            //->andWhere('s.ppn_actif = m.ppn')
            ->setParameter('departement', $departement->getId())
            ->orderBy('r.codeMatiere', 'ASC')
            ->addOrderBy('r.libelle', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findByDiplomeToSemestreArray(Diplome $diplome)
    {
        $tab = [];
        foreach ($diplome->getSemestres() as $semestre) {
            $tab[$semestre->getId()] = $this->findBySemestre($semestre);
        }

        return $tab;
    }
}
