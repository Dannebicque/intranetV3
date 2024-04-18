<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/AlternanceRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:52
 */

namespace App\Repository;

use App\Entity\Alternance;
use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Order;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Alternance|null find($id, $lockMode = null, $lockVersion = null)
 * @method Alternance|null findOneBy(array $criteria, array $orderBy = null)
 * @method Alternance[]    findAll()
 * @method Alternance[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Alternance>
 */
class AlternanceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Alternance::class);
    }

    public function getByPersonnelAndAnneeUniversitaire(Personnel $personnel, AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->createQueryBuilder('a')
            ->where('a.anneeUniversitaire = :annee')
            ->andWhere('a.tuteurUniversitaire = :personnel')
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();
    }

    public function getHistoriqueByPersonnelAndAnneeUniversitaire(
        Personnel $personnel,
        AnneeUniversitaire $anneeUniversitaire
    ): array {
        return $this->createQueryBuilder('a')
            ->where('a.anneeUniversitaire != :annee')
            ->andWhere('a.tuteurUniversitaire = :personnel')
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();
    }

    public function getByEtudiantAndAnneeUniversitaire(Etudiant $etudiant, AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->createQueryBuilder('a')
            ->where('a.anneeUniversitaire = :annee')
            ->andWhere('a.etudiant = :etudiant')
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->setParameter('etudiant', $etudiant->getId())
            ->getQuery()
            ->getResult();
    }

    public function getHistoriqueByEtudantAndAnneeUniversitaire(
        Etudiant $etudiant,
        AnneeUniversitaire $anneeUniversitaire
    ): array {
        return $this->createQueryBuilder('a')
            ->where('a.anneeUniversitaire != :annee')
            ->andWhere('a.tuteurUniversitaire = :etudiant')
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->setParameter('etudiant', $etudiant->getId())
            ->getQuery()
            ->getResult();
    }

    public function getByAnneeAndAnneeUniversitaire(Annee $annee, AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'a.etudiant = e.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 's.id = e.semestre')
            ->where('a.anneeUniversitaire = :anneeuniversitaire')
            ->andWhere('s.annee = :annee')
            ->setParameter('anneeuniversitaire', $anneeUniversitaire->getId())
            ->setParameter('annee', $annee->getId())
            ->getQuery()
            ->getResult();
    }

    public function getByAnneeAndAnneeUniversitaireArray(Annee $annee, AnneeUniversitaire $anneeUniversitaire): array
    {
        $alternances = $this->getByAnneeAndAnneeUniversitaire($annee, $anneeUniversitaire);

        $tab = [];
        /** @var Alternance $alternance */
        foreach ($alternances as $alternance) {
            if (null !== $alternance->getEtudiant()) {
                $tab[$alternance->getEtudiant()->getId()] = $alternance;
            }
        }

        return $tab;
    }

    /**
     * @throws NonUniqueResultException
     */
    public function getOneByEtudiantAndAnneeUniversitaire(Etudiant $etudiant, AnneeUniversitaire $anneeUniversitaire): ?Alternance
    {
        return $this->createQueryBuilder('a')
            ->where('a.anneeUniversitaire = :annee')
            ->andWhere('a.etudiant = :etudiant')
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->setParameter('etudiant', $etudiant->getId())
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function getByOldByAnnee(Annee $annee): array
    {
        return $this->createQueryBuilder('a')
            ->join('a.etudiant', 'e')
            ->andWhere('a.annee = :annee')
            ->setParameter('annee', $annee->getId())
            ->orderBy('a.anneeUniversitaire', Order::Descending->value)
            ->addOrderBy('e.nom', Order::Ascending->value)
            ->addOrderBy('e.prenom', Order::Ascending->value)
            ->getQuery()
            ->getResult();
    }
}
