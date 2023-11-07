<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/AbsenceRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/12/2022 08:10
 */

namespace App\Repository;

use App\DTO\Matiere;
use App\Entity\Absence;
use App\Entity\AbsenceJustificatif;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\Semestre;
use Carbon\CarbonImmutable;
use function array_key_exists;
use Carbon\Carbon;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Absence|null find($id, $lockMode = null, $lockVersion = null)
 * @method Absence|null findOneBy(array $criteria, array $orderBy = null)
 * @method Absence[]    findAll()
 * @method Absence[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Absence>
 */
class AbsenceRepository extends ServiceEntityRepository
{
    /**
     * AbsenceRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Absence::class);
    }

    public function getByMatiereArray(Matiere $matiere, AnneeUniversitaire $anneeUniversitaire): array
    {
        $absences = $this->getByMatiere($matiere, $anneeUniversitaire);

        $tab = [];
        /** @var Absence $absence */
        foreach ($absences as $absence) {
            $date = null !== $absence->getDateHeure() ? $absence->getDateHeure()->format('Y-m-d') : '';
            $heure = null !== $absence->getDateHeure() ? $absence->getDateHeure()->format('H:i') : '';

            if (!array_key_exists($date, $tab)) {
                $tab[$date] = [];
            }

            if (!array_key_exists($heure, $tab[$date])) {
                $tab[$date][$heure] = [];
            }

            $tab[$date][$heure][] = null !== $absence->getEtudiant() ? $absence->getEtudiant()->getId() : '';
        }

        return $tab;
    }

    public function getByMatiere(Matiere $matiere, ?AnneeUniversitaire $anneeUniversitaire = null, ?Semestre $semestre = null): array
    {
        $query = $this->createQueryBuilder('m')
            ->where('m.idMatiere = :matiere')
            ->andWhere('m.typeMatiere = :type')
            ->setParameter('matiere', $matiere->id)
            ->setParameter('type', $matiere->typeMatiere)
            ->orderBy('m.dateHeure', Criteria::DESC);

        if (null !== $anneeUniversitaire) {
            $query->innerJoin(AnneeUniversitaire::class, 'a', 'WITH', 'm.anneeUniversitaire = a.id')
                ->andWhere('a.annee = :annee')
                ->setParameter('annee', $anneeUniversitaire->getAnnee());
        }

        if (null !== $semestre) {
            $query
                ->andWhere('m.semestre = :semestre')
                ->setParameter('semestre', $semestre->getId());
        }

        return $query->getQuery()
            ->getResult();
    }

    public function findBySemestreRattrapage(Semestre $semestre, AnneeUniversitaire $anneeCourante): array
    {
        $absences = $this->getBySemestre($semestre, $anneeCourante);
        $trattrapages = [];

        /** @var Absence $absence */
        foreach ($absences as $absence) {
            if (null !== $absence->getEtudiant() &&
                null !== $absence->getDateHeure()) {
                if (array_key_exists($absence->getEtudiant()->getId(), $trattrapages) &&
                    array_key_exists($absence->getDateHeure()->format('Ymd'),
                        $trattrapages[$absence->getEtudiant()->getId()]
                    )) {
                    if (!array_key_exists(
                        $absence->getDateHeure()->format('Hi'),
                        $trattrapages[$absence->getEtudiant()->getId()][$absence->getDateHeure()->format('Ymd')]
                    )) {
                        $trattrapages[$absence->getEtudiant()->getId()][$absence->getDateHeure()->format('Ymd')][$absence->getDateHeure()->format('Hi')] = $absence->isJustifie();
                    }
                } else {
                    $trattrapages[$absence->getEtudiant()->getId()][$absence->getDateHeure()->format('Ymd')][$absence->getDateHeure()->format('Hi')] = $absence->isJustifie();
                }
            }
        }

        return $trattrapages;
    }

    public function getBySemestre(Semestre $semestre, AnneeUniversitaire $anneeCourante): array
    {
        return $this->createQueryBuilder('a')
            ->where('a.semestre = :semestre')
            ->andWhere('a.anneeUniversitaire = :annee')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('annee', $anneeCourante->getId())
            ->orderBy('a.dateHeure', Criteria::DESC)
            ->getQuery()
            ->getResult();
    }

    public function getByEtudiantAndSemestre(
        array $matieres,
        Etudiant $etudiant,
        AnneeUniversitaire $anneeUniversitaire
    ): array {
        if (0 === count($matieres)) {
            return [];
        }

        $query = $this->createQueryBuilder('a')
            ->innerJoin(AnneeUniversitaire::class, 'e', 'WITH', 'a.anneeUniversitaire = e.id')
            ->where('e.id = :annee')
            ->andWhere('a.etudiant = :etudiant')
            ->setParameter('annee', $anneeUniversitaire->getId())
            ->setParameter('etudiant', $etudiant->getId())
            ->orderBy('a.dateHeure', Criteria::DESC);

        $ors = [];
        foreach ($matieres as $matiere) {
            $ors[] = '('.$query->expr()->orx('a.idMatiere = '.$query->expr()->literal($matiere->id)).' AND '.$query->expr()->andX('a.typeMatiere = '.$query->expr()->literal($matiere->typeMatiere)).')';
        }

        return $query->andWhere(implode(' OR ', $ors))
            ->getQuery()
            ->getResult();
    }

    public function getAJustifier(AbsenceJustificatif $justificatif): ?array
    {
        if (null === $justificatif->getEtudiant()) {
            return null;
        }

        // recherche toutes les absences sur la période du justificatif
        return $this->createQueryBuilder('a')
            ->where('a.dateHeure >= :dateDebut')
            ->andWhere('a.etudiant = :etudiant')
            ->andWhere('a.dateHeure <= :dateFin')
            ->setParameter('dateDebut', $justificatif->getDateHeureDebut())
            ->setParameter('dateFin', $justificatif->getDateHeureFin())
            ->setParameter('etudiant', $justificatif->getEtudiant()->getId())
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
            ->orderBy('e.dateHeure', Criteria::ASC);

        if (null !== $annee) {
            $query->innerJoin(AnneeUniversitaire::class, 'u', 'WITH', 'e.anneeUniversitaire = u.id')
                ->andWhere('u.annee = :annee')
                ->setParameter('annee', $annee->getAnnee());
        }

        return $query->getQuery()
            ->getResult();
    }

    public function getAbsencesTempsReel(Departement $departement): array
    {
        $dateNow = Carbon::now();
        $date13h = Carbon::create($dateNow->year, $dateNow->month, $dateNow->day, 13, 00, 00);
        if ($dateNow->lessThanOrEqualTo($date13h)) {
            $dateDebut = Carbon::create($dateNow->year, $dateNow->month, $dateNow->day, 8, 00, 00);
            $dateFin = $date13h;
        } else {
            $dateDebut = $date13h;
            $dateFin = Carbon::create($dateNow->year, $dateNow->month, $dateNow->day, 19, 00, 00);
        }

        return $this->createQueryBuilder('a')
            ->innerJoin(Semestre::class, 's', 'WITH', 'a.semestre = s.id')
            ->innerJoin(Etudiant::class, 'e', 'WITH', 'a.etudiant = e.id')
            ->where('a.dateHeure >= :dateDebut')
            ->andWhere('a.dateHeure <= :dateFin')
            ->andWhere('e.departement = :departement')
            ->setParameter('dateDebut', $dateDebut)
            ->setParameter('dateFin', $dateFin)
            ->setParameter('departement', $departement->getId())
            ->orderBy('s.libelle', Criteria::ASC)
            ->addOrderBy('a.dateHeure', Criteria::ASC)
            ->addOrderBy('e.nom', Criteria::ASC)
            ->getQuery()
            ->getResult();
    }

    public function findBySemaineAndUser(
        CarbonImmutable $dateLundi,
        Personnel $personnel
    ): array {
        $dateFin = $dateLundi->copy()->addDays(5);

        return $this->createQueryBuilder('a')
            ->where('a.dateHeure BETWEEN :dateLundi AND :dateFin')
            ->andWhere('a.personnel = :personnel')
            ->setParameters([
                'dateLundi' => $dateLundi,
                'dateFin' => $dateFin,
                'personnel' => $personnel,
            ])
            ->getQuery()
            ->getResult();
    }

    public function findBySemaineAndUserArray(
        CarbonImmutable $dateLundi,
        Personnel $personnel
    ): array {
        $data = $this->findBySemaineAndUser($dateLundi, $personnel);
        $t = [];
        foreach ($data as $value) {
            if (null !== $value->getTypeIdMatiere()) {
                if (!array_key_exists($value->getTypeIdMatiere(), $t)) {
                    $t[$value->getTypeIdMatiere()] = [];
                }

                if (!array_key_exists($value->getDateHeure()->format('Y-m-d'), $t[$value->getTypeIdMatiere()])) {
                    $t[$value->getTypeIdMatiere()][$value->getDateHeure()->format('Y-m-d')] = [];
                }
                $t[$value->getTypeIdMatiere()][$value->getDateHeure()->format('Y-m-d')][$value->getDateHeure()->format('H:i')] = $value;
            }
        }

        return $t;
    }

    public function findBySemestreEtat(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): array
    {
        return $this->getBySemestre($semestre, $anneeUniversitaire);
    }

    public function save(Absence $absence): void
    {
        $this->_em->persist($absence);
        $this->_em->flush();
    }
}
