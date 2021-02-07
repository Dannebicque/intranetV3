<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/NoteRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Entity\Note;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Note|null find($id, $lockMode = null, $lockVersion = null)
 * @method Note|null findOneBy(array $criteria, array $orderBy = null)
 * @method Note[]    findAll()
 * @method Note[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
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

    public function findBySemestre(Semestre $semestre, AnneeUniversitaire $annee)
    {
        return $this->createQueryBuilder('n')
            ->innerJoin(Evaluation::class, 'e', 'WITH', 'n.evaluation=e.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'e.matiere=m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->innerJoin(AnneeUniversitaire::class, 'j', 'WITH', 'e.anneeUniversitaire = j.id')
            ->where('u.semestre= :semestre')
            ->andWhere('j.annee = :annee')
            ->setParameter('semestre', $semestre)
            ->setParameter('annee', $annee->getAnnee())
            ->orderBy('e.id')
            ->getQuery()
            ->getResult();
    }

    public function findByEtudiantSemestre(
        Etudiant $etudiant,
        Semestre $semestre,
        AnneeUniversitaire $annee
    ) {
        return $this->createQueryBuilder('n')
            ->innerJoin(Evaluation::class, 'e', 'WITH', 'n.evaluation = e.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'e.matiere = m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->where('e.anneeUniversitaire = :annee')
            ->andWhere('n.etudiant = :etudiant')
            ->andWhere('u.semestre = :semestre')
            ->setParameter('annee', $annee->getId())
            ->setParameter('etudiant', $etudiant->getId())
            ->setParameter('semestre', $semestre->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByEtudiantSemestreArray(Semestre $semestre, AnneeUniversitaire $annee, $etudiants): array
    {
        $notes = $this->findBySemestre($semestre, $annee);

        $t = [];

        /** @var $etu Etudiant */
        foreach ($etudiants as $etu) {
            $t[$etu->getId()] = [];

            /** @var Note $note */
            foreach ($notes as $note) {
                if (null !== $note->getEtudiant() && null !== $note->getEvaluation() && null !== $note->getEvaluation()->getMatiere() && $note->getEtudiant()->getId() === $etu->getId()) {
                    $t[$etu->getId()][$note->getEvaluation()->getId()]['eval'] = $note->getEvaluation();
                    $t[$etu->getId()][$note->getEvaluation()->getId()]['note'] = $note->getNote();
                }
            }
        }

        return $t;
    }

    public function findAllNotesSemestre(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire)
    {
        return $this->createQueryBuilder('p')
            ->innerJoin(Evaluation::class, 'e', 'WITH', 'p.evaluation=e.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'e.matiere=m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->where('u.semestre= :semestre')
            ->andWhere('e.anneeUniversitaire = :anneeUniversitaire')
            ->setParameter('semestre', $semestre->getId())
            ->setParameter('anneeUniversitaire', $anneeUniversitaire->getId())
            ->orderBy('e.id')
            ->getQuery()
            ->getResult();
    }
}
