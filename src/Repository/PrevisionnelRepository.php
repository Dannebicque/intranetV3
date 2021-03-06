<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/PrevisionnelRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Previsionnel|null find($id, $lockMode = null, $lockVersion = null)
 * @method Previsionnel|null findOneBy(array $criteria, array $orderBy = null)
 * @method Previsionnel[]    findAll()
 * @method Previsionnel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PrevisionnelRepository extends ServiceEntityRepository
{
    /**
     * PrevisionnelRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Previsionnel::class);
    }

    public function findPrevisionnelEnseignantDepartement(Personnel $personnel, Departement $departement)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.matiere = m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'u.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('p.annee = :annee')
            ->andWhere('p.personnel = :personnel')
            ->andWhere('d.departement = :departement')
            ->setParameter('annee', $departement->getOptAnneePrevisionnel())
            ->setParameter('departement', $departement->getId())
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $annee
     */
    public function findPrevisionnelEnseignantComplet(Personnel $personnel, $annee): array
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Matiere::class, 'e', 'WITH', 'p.matiere = e.id')
            ->where('p.annee = :annee')
            ->andWhere('p.personnel = :personnel')
            ->setParameter('annee', $annee)
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $annee
     */
    public function findPrevisionnelMatiere(Matiere $matiere, $annee)
    {
        return $this->createQueryBuilder('p')
            ->leftJoin(Personnel::class, 'e', 'WITH', 'p.personnel = e.id')
            ->where('p.annee = :annee')
            ->andWhere('p.matiere = :matiere')
            ->setParameter('annee', $annee)
            ->setParameter('matiere', $matiere->getId())
            ->orderBy('e.nom', 'ASC')
            ->orderBy('e.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $annee
     */
    public function findPrevisionnelSemestre(Semestre $semestre, $annee)
    {
        return $this->createQueryBuilder('p')
            ->leftJoin(Personnel::class, 'e', 'WITH', 'p.personnel = e.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.matiere = m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->where('p.annee = :annee')
            ->andWhere('u.semestre = :semestre')
            ->setParameter('annee', $annee)
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('m.codeMatiere', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findByDepartement(Departement $departement, $annee)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.matiere = m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'u.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(Diplome::class, 'd', 'WITH', 'a.diplome = d.id')
            ->where('p.annee = :annee')
            ->andWhere('d.departement = :departement')
            ->setParameter('annee', $annee)
            ->setParameter('departement', $departement->getId())
            ->orderBy('d.libelle', 'ASC')
            ->addOrderBy('a.ordre', 'ASC')
            ->addOrderBy('s.ordreLmd', 'ASC')
            ->addOrderBy('m.codeMatiere', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findByDiplome(Diplome $diplome, $annee)
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(Personnel::class, 'p', 'WITH', 's.personnel = p.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 's.matiere = m.id')
            ->innerJoin(Ue::class, 'u', 'with', 'u.id=m.ue')
            ->innerJoin(Semestre::class, 'se', 'with', 'se.id=u.semestre')
            ->innerJoin(Annee::class, 'a', 'with', 'a.id=se.annee')
            ->where('a.diplome = :diplome')
            ->andWhere('s.annee = :annee')
            ->setParameter('diplome', $diplome->getId())
            ->setParameter('annee', $annee)
            ->getQuery()
            ->getResult();
    }

    public function findPrevisionnelSemestrePersonnel(Semestre $semestre, Personnel $personnel, ?int $annee)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Personnel::class, 'e', 'WITH', 'p.personnel = e.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.matiere = m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->where('p.annee = :annee')
            ->andWhere('u.semestre = :semestre')
            ->andWhere('p.personnel = :personnel')
            ->setParameter('annee', $annee)
            ->setParameter('personnel', $personnel->getId())
            ->setParameter('semestre', $semestre->getId())
            ->orderBy('m.codeMatiere', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findServiceSemestre(Personnel $user, Semestre $semestre, $annePrevi)
    {
        return $this->createQueryBuilder('s')
            ->innerJoin(Personnel::class, 'p', 'WITH', 's.personnel = p.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 's.matiere = m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.UE = u.id')
            ->where('p.id = :user')
            ->andWhere('s.annee = :annee')
            ->andWhere('u.semestre = :semestre')
            ->setParameters(['user' => $user->getId(), 'annee' => $annePrevi, 'semestre' => $semestre->getId()])
            ->groupBy('m.id')
            ->orderBy('m.codeMatiere', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findByDiplomeArray(Diplome $diplome, AnneeUniversitaire $anneeUniversitaire): array
    {
        $q = $this->findByDiplome($diplome, $anneeUniversitaire->getAnnee());
        $tPrevisionnel = [];
        /** @var Previsionnel $p */
        foreach ($q as $p) {
            $tPrevisionnel[$p->getId()]['matiere'] = $p->getMatiere()->getLibelle();
            $tPrevisionnel[$p->getId()]['personnel'] = $p->getPersonnel()->getDisplayPr();
        }

        return $tPrevisionnel;
    }

    public function findPrevisionnelAnnee(Semestre $semestre, ?int $anneeUniversitaire)
    {
        $query = $this->createQueryBuilder('p')
            ->leftJoin(Personnel::class, 'e', 'WITH', 'p.personnel = e.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'p.matiere = m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->where('p.annee = :annee')
            ->setParameter('annee', $anneeUniversitaire);

        $annee = $semestre->getAnnee();
        $ors = [];
        foreach ($annee->getSemestres() as $sem) {
            $ors[] = $query->expr()->orx('u.semestre = ' . $query->expr()->literal($sem->getId()));
        }

        return $query->andWhere(implode(' OR ', $ors))
            ->orderBy('u.semestre', 'ASC')
            ->addOrderBy('m.codeMatiere', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
