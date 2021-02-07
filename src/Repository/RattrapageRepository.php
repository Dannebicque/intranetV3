<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/RattrapageRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\Rattrapage;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Rattrapage|null find($id, $lockMode = null, $lockVersion = null)
 * @method Rattrapage|null findOneBy(array $criteria, array $orderBy = null)
 * @method Rattrapage[]    findAll()
 * @method Rattrapage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RattrapageRepository extends ServiceEntityRepository
{
    /**
     * RattrapageRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Rattrapage::class);
    }

    /**
     * @param $anneeUniversitaire
     */
    public function findBySemestre(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire)
    {
        return $this->createQueryBuilder('r')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'r.etudiant = e.id')
            ->where('e.semestre = :semestre')
            ->andWhere('r.anneeUniversitaire = :anneeuniversitaire')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('anneeuniversitaire', $anneeUniversitaire->getId())
            ->orderBy('e.nom', 'ASC')
            ->orderBy('e.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findByEtudiant(Etudiant $etudiant)
    {
        return $this->createQueryBuilder('r')
            ->where('r.etudiant = :etudiant')
            ->setParameter('etudiant', $etudiant->getId())
            ->orderBy('r.created', 'DESC')
            ->orderBy('r.dateEval', 'DESC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function findBySemestreCount(Semestre $semestre, int $annee = 0)
    {
        if (0 === $annee) {
            $annee = null !== $semestre->getAnneeUniversitaire() ? $semestre->getAnneeUniversitaire()->getAnnee() : (int)date('Y');
        }

        return $this->createQueryBuilder('r')
            ->select('COUNT(r.id)')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'r.etudiant = e.id')
            ->innerJoin(AnneeUniversitaire::class, 'u', 'WITH', 'r.anneeUniversitaire = u.id')
            ->where('e.semestre = :semestre')
            ->andWhere('u.annee = :anneeuniversitaire')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('anneeuniversitaire', $annee)
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function findValidByDiplome(
        Diplome $diplome,
        ?AnneeUniversitaire $anneeUniversitaire
    ) {
        $annee = null === $anneeUniversitaire ? date('Y') : $anneeUniversitaire->getAnnee();

        return $this->createQueryBuilder('r')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'r.etudiant = e.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->innerJoin(AnneeUniversitaire::class, 'u', 'WITH', 'r.anneeUniversitaire = u.id')
            ->where('a.diplome = :diplome')
            ->andWhere('u.annee = :anneeuniversitaire')
            ->andWhere('r.etatDemande = :etat')
            ->setParameter('diplome', $diplome->getId())
            ->setParameter('etat', 'A')
            ->setParameter('anneeuniversitaire', $annee)
            ->orderBy('e.semestre.libelle', 'ASC')
            ->orderBy('e.nom', 'ASC')
            ->orderBy('e.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findByAnnee(Annee $annee)
    {
        return $this->createQueryBuilder('r')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'r.etudiant = e.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
            ->where('s.annee = :annee')
            ->setParameter('annee', $annee->getId())
            ->orderBy('e.nom', 'ASC')
            ->orderBy('e.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
