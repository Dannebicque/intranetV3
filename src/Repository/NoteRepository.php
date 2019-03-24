<?php

namespace App\Repository;

use App\Entity\Etudiant;
use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Entity\Note;
use App\Entity\Semestre;
use App\Entity\Ue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

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
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Note::class);
    }

    public function findBySemestre(Semestre $semestre, $annee)
    {
        return $this->createQueryBuilder('n')
            ->innerJoin(Evaluation::class, 'e', 'WITH', 'n.evaluation=e.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'e.matiere=m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->where('u.semestre= :semestre')
            ->andWhere('e.anneeuniversitaire = :annee')
            ->setParameter('semestre', $semestre)
            ->setParameter('annee', $annee)
            ->orderBy('e.id')
            ->getQuery()
            ->getResult();
    }

    public function findByEtudiantSemestre(
        Etudiant $etudiant,
        Semestre $semestre,
        $annee
    ) {

        return $this->createQueryBuilder('n')
            ->innerJoin(Evaluation::class, 'e', 'WITH', 'n.evaluation = e.id')
            ->innerJoin(Matiere::class, 'm', 'WITH', 'e.matiere = m.id')
            ->innerJoin(Ue::class, 'u', 'WITH', 'm.ue = u.id')
            ->where('e.anneeuniversitaire = :annee')
            ->andWhere('n.etudiant = :etudiant')
            ->andWhere('u.semestre = :semestre')
            ->setParameter('annee', $annee)
            ->setParameter('etudiant', $etudiant->getId())
            ->setParameter('semestre', $semestre->getId())
            ->getQuery()
            ->getResult();
    }

    public function findByEtudiantSemestreArray(Semestre $semestre, $annee, $etudiants)
    {

        $notes = $this->findBySemestre($semestre, $annee);

        $t = [];

        /** @var  $etu Etudiant */
        foreach ($etudiants as $etu) {
            $t[$etu->getId()] = [];

            /** @var Note $note */
            foreach ($notes as $note) {
                if ($note->getEtudiant() !== null && $note->getEvaluation() !== null && $note->getEvaluation()->getMatiere() !== null && $note->getEtudiant()->getId() === $etu->getId()) {
                    $t[$etu->getId()][$note->getEvaluation()->getMatiere()->getId()][$note->getEvaluation()->getId()]['eval'] = $note->getEvaluation();
                    $t[$etu->getId()][$note->getEvaluation()->getMatiere()->getId()][$note->getEvaluation()->getId()]['note'] = $note->getNote();
                }
            }
        }

        return $t;

    }
}
