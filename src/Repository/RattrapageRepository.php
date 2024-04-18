<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/RattrapageRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:54
 */

namespace App\Repository;

use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\Diplome;
use App\Entity\Etudiant;
use App\Entity\Rattrapage;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Rattrapage|null find($id, $lockMode = null, $lockVersion = null)
 * @method Rattrapage|null findOneBy(array $criteria, array $orderBy = null)
 * @method Rattrapage[]    findAll()
 * @method Rattrapage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Rattrapage>
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

    public function findBySemestre(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->createQueryBuilder('r')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'r.etudiant = e.id')
            ->where('r.semestre = :semestre')
            ->andWhere('r.anneeUniversitaire = :anneeuniversitaire')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('anneeuniversitaire', $anneeUniversitaire->getId())
            ->orderBy('e.nom', Order::Ascending->value)
            ->addOrderBy('e.prenom', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function findByEtudiant(Etudiant $etudiant): array
    {
        return $this->createQueryBuilder('r')
            ->where('r.etudiant = :etudiant')
            ->setParameter('etudiant', $etudiant->getId())
            ->orderBy('r.created', Order::Descending->value)
            ->addOrderBy('r.dateEval', Order::Descending->value)
            ->getQuery()
            ->getResult();
    }

    /**
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function findBySemestreCount(Semestre $semestre, AnneeUniversitaire $annee): ?int
    {
        return $this->createQueryBuilder('r')
            ->select('COUNT(r.id)')
            ->where('r.semestre = :semestre')
            ->andWhere('r.anneeUniversitaire = :anneeuniversitaire')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('anneeuniversitaire', $annee->getId())
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function findValidByDiplome(
        Diplome $diplome,
        ?AnneeUniversitaire $anneeUniversitaire
    ): array {
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
            ->orderBy('e.semestre.libelle', Order::Ascending->value)
            ->addOrderBy('e.nom', Order::Ascending->value)
            ->addOrderBy('e.prenom', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function findByAnnee(Annee $annee): array
    {
        return $this->createQueryBuilder('r')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'r.etudiant = e.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 'e.semestre = s.id')
            ->where('s.annee = :annee')
            ->setParameter('annee', $annee->getId())
            ->orderBy('e.nom', Order::Ascending->value)
            ->addOrderBy('e.prenom', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }

    public function findByMatiere(int $matiere, string $type, ?AnneeUniversitaire $annee = null): array
    {
        $query = $this->createQueryBuilder('e')
            ->where('e.idMatiere = :matiere')
            ->andWhere('e.typeMatiere = :type')
            ->setParameter('matiere', $matiere)
            ->setParameter('type', $type)
            ->orderBy('e.dateEval', Order::Ascending->value);

        if (null !== $annee) {
            $query->innerJoin(AnneeUniversitaire::class, 'u', 'WITH', 'e.anneeUniversitaire = u.id')
                ->andWhere('u.annee = :annee')
                ->setParameter('annee', $annee->getAnnee());
        }

        return $query->getQuery()
            ->getResult();
    }
}
