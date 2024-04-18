<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/ApcSaeRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:54
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\ApcCompetence;
use App\Entity\ApcReferentiel;
use App\Entity\ApcSae;
use App\Entity\ApcSaeCompetence;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcSae|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcSae|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcSae[]    findAll()
 * @method ApcSae[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<ApcSae>
 */
class ApcSaeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcSae::class);
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
            ->orderBy('r.codeMatiere', Order::Ascending->value)
            ->addOrderBy('r.libelle', Order::Ascending->value);
    }

    public function findBySemestre(Semestre $semestre): array
    {
        return $this->createQueryBuilder('r')
            ->innerJoin('r.semestres', 's')
            ->addSelect('s')
            ->where('s.id = :semestre')
            ->leftJoin('r.apcSaeCompetences', 'apcSaeCompetences')
            ->addSelect('apcSaeCompetences')
            // ->andWhere('s.ppn_actif = m.ppn')
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('r.codeMatiere', Order::Ascending->value)
            ->addOrderBy('r.libelle', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function search(?string $search, Diplome $diplome): array
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(Semestre::class, 's', 'WITH', 'a.semestre=s.id')//todo: ne fonctionne plus... semestre va être supprimé
            ->innerJoin(Annee::class, 'an', 'WITH', 's.annee=an.id')
            ->where('a.libelle LIKE :search')
            ->orWhere('a.livrables LIKE :search')
            ->orWhere('a.description LIKE :search')
            ->orWhere('a.libelle LIKE :search')
            ->andWhere('an.diplome = :diplome')
            ->andWhere('a.actif = 1')
            ->setParameter('diplome', $diplome->getId())
            ->setParameter('search', '%'.$search.'%')
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
            ->innerJoin(ApcSaeCompetence::class, 'cs', 'WITH', 'cs.sae = r.id')
            ->innerJoin(ApcCompetence::class, 'c', 'WITH', 'cs.competence = c.id')
            ->where('d.departement = :departement')
            ->andWhere('d.referentiel = c.apcReferentiel')
            ->andWhere('a.actif = 1')
            ->setParameter('departement', $departement->getId())
            ->orderBy('r.codeMatiere', Order::Ascending->value)
            ->addOrderBy('r.libelle', Order::Ascending->value)
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

    public function findByReferentiel(ApcReferentiel $referentiel): array
    {
        return $this->createQueryBuilder('r')
            ->innerJoin(ApcSaeCompetence::class, 'cs', 'WITH', 'cs.sae = r.id')
            ->innerJoin(ApcCompetence::class, 'c', 'WITH', 'cs.competence = c.id')
            ->where('c.apcReferentiel = :referentiel')
            ->setParameter('referentiel', $referentiel->getId())
            ->orderBy('r.codeMatiere', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function findByReferentielOrdreSemestre(ApcReferentiel $referentiel, int $semestre): array
    {
        return $this->createQueryBuilder('r')
            ->innerJoin('r.semestres', 's')
            ->addSelect('s')
            ->where('s.ordreLmd = :semestre')
            ->innerJoin(ApcSaeCompetence::class, 'cs', 'WITH', 'cs.sae = r.id')
            ->innerJoin(ApcCompetence::class, 'c', 'WITH', 'cs.competence = c.id')
            ->andWhere('c.apcReferentiel = :referentiel')
            ->setParameter('referentiel', $referentiel->getId())
            ->setParameter('semestre', $semestre)
            ->orderBy('r.codeMatiere', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function findBySemestreReferentiel(Semestre $semestre, ApcReferentiel $referentiel): array
    {
        return $this->createQueryBuilder('r')
            ->innerJoin('r.semestres', 's')
           // ->addSelect('s')
            ->where('s.id = :semestre')
            ->innerJoin(ApcSaeCompetence::class, 'cs', 'WITH', 'cs.sae = r.id')
            ->innerJoin(ApcCompetence::class, 'c', 'WITH', 'cs.competence = c.id')
            ->andWhere('c.apcReferentiel = :referentiel')
            ->setParameter('referentiel', $referentiel->getId())
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('r.codeMatiere', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }
}
