<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantNotes.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Etudiant;

use App\Classes\Tools;
use App\DTO\MoyenneMatiere;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Evaluation;
use App\Entity\ModificationNote;
use App\Entity\Note;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\MatiereRepository;
use App\Repository\NoteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class EtudiantNotes
{
    public NoteRepository $noteRepository;
    private Etudiant $etudiant;

    private EntityManagerInterface $entityManager;

    private MatiereRepository $matiereRepository;
    /**
     * @var Note[]|int|mixed|string
     */
    private $notes;
    private $tabGraphique;

    /**
     * EtudiantNotes constructor.
     */
    public function __construct(
        MatiereRepository $matiereRepository,
        NoteRepository $noteRepository,
        EntityManagerInterface $entityManager
    ) {
        $this->noteRepository = $noteRepository;
        $this->entityManager = $entityManager;
        $this->matiereRepository = $matiereRepository;
    }

    public function setEtudiant(Etudiant $etudiant): void
    {
        $this->etudiant = $etudiant;
    }

    public function getNotesParSemestresEtAnneeUniversitaire(
        ?Semestre $semestre,
        ?AnneeUniversitaire $anneeUniversitaire
    ) {
        if (null !== $semestre && null !== $anneeUniversitaire) {
            $this->notes = $this->noteRepository->findByEtudiantSemestre($this->etudiant, $semestre,
                $anneeUniversitaire);

            return $this->notes;
        }

        return [];
    }

    /**
     * @param $data
     *
     * @throws Exception
     */
    public function addNote(Evaluation $evaluation, $data, Personnel $personnel): bool
    {
        //on cherche si deja une note de présente
        $note = $this->noteRepository->findBy([
            'evaluation' => $evaluation->getId(),
            'etudiant'   => $this->etudiant->getId(),
        ]);

        if (1 === \count($note)) {
            //update
            $modif = new ModificationNote();
            $modif->setNote($note[0]);
            $modif->setAncienneNote($note[0]->getNote());
            $modif->setNouvelleNote(Tools::convertToFloat($data['note']));
            $modif->setPersonnel($personnel);
            $this->entityManager->persist($modif);
            $note[0]->setNote(Tools::convertToFloat($data['note']));
            $note[0]->setCommentaire($data['commentaire']);
            if (isset($data['absence']) && 'true' === $data['absence']) {
                $note[0]->setAbsenceJustifie(true);
            } else {
                $note[0]->setAbsenceJustifie(false);
            }

            $this->entityManager->persist($note[0]);
            $this->entityManager->flush();
        } elseif (0 === \count($note)) {
            //creation

            $newnote = new Note();
            $newnote->setEtudiant($this->etudiant);
            $newnote->setEvaluation($evaluation);
            $newnote->setNote(Tools::convertToFloat($data['note']));
            $newnote->setCommentaire($data['commentaire']);

            $this->entityManager->persist($newnote);
            $this->entityManager->flush();
        }

        return false;
    }

    public function suppressionNotes(): void
    {
        $ml = $this->noteRepository->findBy(['etudiant' => $this->etudiant->getId()]);
        foreach ($ml as $a) {
            $this->entityManager->remove($a);
        }
        $this->entityManager->flush();
    }

    public function getMoyenneParMatiereParSemestresEtAnneeUniversitaire(
        Semestre $semestre,
        AnneeUniversitaire $anneeUniversitaire
    ) {
        $this->getNotesParSemestresEtAnneeUniversitaire($semestre, $anneeUniversitaire);

        $matieres = $this->matiereRepository->findBySemestre($semestre);
        $tabMatiere = [];
        $groupes = $this->etudiant->getGroupes();
        foreach ($matieres as $matiere) {
            if (false === $matiere->isSuspendu() && $matiere->getNbNotes() > 0) {
                $tabMatiere[$matiere->getId()] = new MoyenneMatiere($matiere, $semestre->getOptPointPenaliteAbsence(),
                    $groupes);
            }
        }

        /** @var Note $note */
        foreach ($this->notes as $note) {
            if (null !== $note->getEvaluation() && null !== $note->getEvaluation()->getMatiere()) {
                $idMatiere = $note->getEvaluation()->getMatiere()->getId();
                if (\array_key_exists($idMatiere, $tabMatiere)) {
                    $tabMatiere[$idMatiere]->addNote($note);
                }
            }
        }

        return $tabMatiere;
    }

    public function calculGraphique()
    {
        $matieres = $this->matiereRepository->findBySemestre($this->etudiant->getSemestre());

        foreach ($matieres as $matiere) {
            $this->tabGraphique[$matiere->getCodeMatiere()] = ['notes' => 0, 'coefficient' => 0];
        }

        foreach ($this->notes as $note) {
            if (null !== $note->getEvaluation() && null !== $note->getEvaluation()->getMatiere()) {
                $this->tabGraphique[$note->getEvaluation()->getMatiere()->getCodeMatiere()]['notes'] += $note->getNote() * $note->getEvaluation()->getCoefficient();
                $this->tabGraphique[$note->getEvaluation()->getMatiere()->getCodeMatiere()]['coefficient'] += $note->getEvaluation()->getCoefficient();
            }
        }
    }

    public function getLabelsGraphique()
    {
        return array_keys($this->tabGraphique);
    }

    public function getDataGraphique()
    {
        $t = [];
        foreach ($this->tabGraphique as $key => $matiere) {
            if (0 === $matiere['coefficient']) {
                $t[] = 0;
            } else {
                $t[] = $matiere['notes'] / $matiere['coefficient'];
            }
        }

        return $t;
    }
}
