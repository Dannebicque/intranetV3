<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/NoteRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/04/2024 17:54
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Evaluation;
use App\Entity\Note;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\Order;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Note|null find($id, $lockMode = null, $lockVersion = null)
 * @method Note|null findOneBy(array $criteria, array $orderBy = null)
 * @method Note[]    findAll()
 * @method Note[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<Note>
 */
class NoteRepository extends ServiceEntityRepository
{
    /**
     * NoteRepository constructor.
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Note::class);
    }

    public function findBySemestre(array $matieres, AnneeUniversitaire $annee): ?array
    {
        if (count($matieres) <= 0) {
            return null;
        }
        $query = $this->createQueryBuilder('n')
            ->innerJoin(Evaluation::class, 'e', 'WITH', 'n.evaluation=e.id')
            ->innerJoin(AnneeUniversitaire::class, 'j', 'WITH', 'e.anneeUniversitaire = j.id')
            ->where('j.annee = :annee')
            ->setParameter('annee', $annee->getAnnee())
            ->orderBy('e.id');

        return $query->andWhere(implode(' OR ', $this->getOrs($matieres, $query)))
            ->getQuery()
            ->getResult();
    }

    public function findByEtudiantSemestre(
        Etudiant $etudiant,
        ?array $matieres,
        AnneeUniversitaire $annee
    ): ?array {
        if (count((array) $matieres) <= 0) {
            return null;
        }

        $query = $this->createQueryBuilder('n')
            ->innerJoin(Evaluation::class, 'e', 'WITH', 'n.evaluation = e.id')
            ->where('e.anneeUniversitaire = :annee')
            ->andWhere('n.etudiant = :etudiant')
            ->setParameter('annee', $annee->getId())
            ->setParameter('etudiant', $etudiant->getId())
            ->addOrderBy('e.dateEvaluation', Order::Ascending->value);

        return $query->andWhere(implode(' OR ', $this->getOrs($matieres, $query)))
            ->getQuery()
            ->getResult();
    }

    public function findByEtudiantSemestreArray(array $matieres, AnneeUniversitaire $annee, array|Collection $etudiants): array
    {
        $notes = $this->findBySemestre($matieres, $annee);

        $t = [];

        /** @var Etudiant $etu */
        foreach ($etudiants as $etu) {
            $t[$etu->getId()] = [];

            /** @var Note $note */
            foreach ($notes as $note) {
                if (null !== $note->getEtudiant() && null !== $note->getEvaluation() && $note->getEtudiant()->getId() === $etu->getId()) {
                    $t[$etu->getId()][$note->getEvaluation()->getId()]['eval'] = $note->getEvaluation();
                    $t[$etu->getId()][$note->getEvaluation()->getId()]['note'] = $note->getNote();
                }
            }
        }

        return $t;
    }

    public function findBySemestreNoteAvecAbsence(array $matieres, AnneeUniversitaire $annee): ?array
    {
        if (count($matieres) <= 0) {
            return null;
        }

        $query = $this->createQueryBuilder('n')
            ->innerJoin(Evaluation::class, 'e', 'WITH', 'n.evaluation=e.id')
            ->innerJoin(AnneeUniversitaire::class, 'j', 'WITH', 'e.anneeUniversitaire = j.id')
            ->where('j.annee = :annee')
            ->andWhere('n.absenceJustifie = 1')
            ->andWhere('n.note > 0')
            ->setParameter('annee', $annee->getAnnee())
            ->orderBy('e.id');

        return $query->andWhere(implode(' OR ', $this->getOrs($matieres, $query)))
            ->getQuery()
            ->getResult();
    }

    public function findBySemestreErreur(array $matieres, AnneeUniversitaire $annee): ?array
    {
        if (count($matieres) <= 0) {
            return null;
        }

        $query = $this->createQueryBuilder('n')
            ->innerJoin(Evaluation::class, 'e', 'WITH', 'n.evaluation=e.id')
            ->innerJoin(AnneeUniversitaire::class, 'j', 'WITH', 'e.anneeUniversitaire = j.id')
            ->where('j.annee = :annee')
            ->andWhere('n.note < 0')->orWhere('n.note > 20')
            ->setParameter('annee', $annee->getAnnee())
            ->orderBy('e.id');

        return $query->andWhere(implode(' OR ', $this->getOrs($matieres, $query)))
            ->getQuery()
            ->getResult();
    }

    private function getOrs(?array $matieres, QueryBuilder $query): array
    {
        $ors = [];
        foreach ($matieres as $matiere) {
            $ors[] = '('.$query->expr()->orx('e.idMatiere = '.$query->expr()->literal($matiere->id)).' AND '.$query->expr()->andX('e.typeMatiere = '.$query->expr()->literal($matiere->typeMatiere)).')';
        }

        return $ors;
    }
}
