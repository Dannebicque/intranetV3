<?php

namespace App\Repository;

use App\Entity\Alternance;
use App\Entity\Annee;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Alternance|null find($id, $lockMode = null, $lockVersion = null)
 * @method Alternance|null findOneBy(array $criteria, array $orderBy = null)
 * @method Alternance[]    findAll()
 * @method Alternance[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AlternanceRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Alternance::class);
    }

    public function findByPersonnelAnnee(Personnel $personnel, int $getAnneeUniversitaire)
    {
        return $this->createQueryBuilder('a')
            ->where('a.anneeUniversitaire = :annee')
            ->andWhere('a.tuteurUniversitaire = :personnel')
            ->setParameter('annee', $getAnneeUniversitaire)
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByPersonnelHistorique(Personnel $personnel, int $getAnneeUniversitaire)
    {
        return $this->createQueryBuilder('a')
            ->where('a.anneeUniversitaire != :annee')
            ->andWhere('a.tuteurUniversitaire = :personnel')
            ->setParameter('annee', $getAnneeUniversitaire)
            ->setParameter('personnel', $personnel->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByAnnee(Annee $annee, int $getAnneeUniversitaire)
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'a.etudiant = e.id')
            ->innerJoin(Semestre::class, 's', 'WITH', 's.id = e.semestre')
            ->where('a.anneeUniversitaire = :anneeuniversitaire')
            ->andWhere('s.annee = :annee')
            ->setParameter('anneeuniversitaire', $getAnneeUniversitaire)
            ->setParameter('annee', $annee->getId())
            ->getQuery()
            ->getResult();
    }

    /**
     * @param Annee $annee
     * @param int   $getAnneeUniversitaire
     *
     * @return array
     */
    public function findByAnneeArray(Annee $annee, int $getAnneeUniversitaire)
    {
        $alternances = $this->findByAnnee($annee, $getAnneeUniversitaire);

        $tab = array();
        /** @var Alternance $alternance */
        foreach ($alternances as $alternance) {
            if ($alternance->getEtudiant() !== null) {
                $tab[$alternance->getEtudiant()->getId()] = $alternance;
            }
        }

        return $tab;
    }
}
