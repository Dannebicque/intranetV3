<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/RattrapageRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 6/30/19 6:36 PM
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
use Symfony\Bridge\Doctrine\RegistryInterface;

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
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Rattrapage::class);
    }

    /**
     * @param Semestre $semestre
     *
     * @param          $anneeUniversitaire
     *
     * @return mixed
     */
    public function findBySemestre(Semestre $semestre, $anneeUniversitaire)
    {
        return $this->createQueryBuilder('r')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'r.etudiant = e.id')
            ->where('e.semestre = :semestre')
            ->andWhere('r.anneeuniversitaire = :anneeuniversitaire')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('anneeuniversitaire', $anneeUniversitaire)
            ->orderBy('e.nom', 'ASC')
            ->orderBy('e.prenom', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @param Etudiant $etudiant
     *
     * @return mixed
     */
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
     * @param Semestre $semestre
     * @param int      $annee
     *
     * @return mixed
     * @throws NonUniqueResultException
     */
    public function findBySemestreCount(Semestre $semestre, int $annee = 0)
    {
        if ($annee === 0) {
            $annee = $semestre->getAnneeUniversitaire();
        }

        return $this->createQueryBuilder('r')
            ->select('COUNT(r.id)')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'r.etudiant = e.id')
            ->where('e.semestre = :semestre')
            ->andWhere('r.anneeuniversitaire = :anneeuniversitaire')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('anneeuniversitaire', $annee)
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function findValidByDiplome(
        Diplome $diplome,
        ?AnneeUniversitaire $anneeUniversitaire
    ) {

        $annee = $anneeUniversitaire === null ? date('Y') : $anneeUniversitaire->getAnnee();

        return $this->createQueryBuilder('r')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'r.etudiant = e.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
            ->innerJoin(Annee::class, 'a', 'WITH', 's.annee = a.id')
            ->where('a.diplome = :diplome')
            ->andWhere('r.anneeuniversitaire = :anneeuniversitaire')
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
}
