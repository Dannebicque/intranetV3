<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Etudiant/EtudiantNotes.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/01/2026 09:58
 */

namespace App\Classes\Etudiant;

use App\Classes\Matieres\TypeMatiereManager;
use App\DTO\MoyenneMatiere;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Evaluation;
use App\Entity\ModificationNote;
use App\Entity\Note;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\NoteRepository;
use App\Utils\Tools;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use function array_key_exists;
use function count;

class EtudiantNotes
{
    private Etudiant $etudiant;

    private ?array $notes = [];
    private ?array $tabGraphique = [];

    /**
     * EtudiantNotes constructor.
     */
    public function __construct(
        private readonly TypeMatiereManager $typeMatiereManager,
        public NoteRepository $noteRepository,
        private readonly EntityManagerInterface $entityManager
    ) {
    }

    public function setEtudiant(Etudiant $etudiant): void
    {
        $this->etudiant = $etudiant;
    }

    public function getNotesParSemestresEtAnneeUniversitaire(
        array $matieres,
        ?AnneeUniversitaire $anneeUniversitaire
    ): ?array {
        if (null !== $anneeUniversitaire) {
            $this->notes = $this->noteRepository->findByEtudiantSemestre($this->etudiant, $matieres,
                $anneeUniversitaire);

            return $this->notes;
        }

        return [];
    }

    /**
     * @throws Exception
     */
    public function addNote(Evaluation $evaluation, array $data, Personnel $personnel): bool
    {
        // on cherche si deja une note de présente
        $note = $this->noteRepository->findBy([
            'evaluation' => $evaluation->getId(),
            'etudiant' => $this->etudiant->getId(),
        ]);

        if (1 === count($note)) {
            // update
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
        } elseif (0 === count($note)) {
            // creation

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
        array $matieres,
        Semestre $semestre,
        AnneeUniversitaire $anneeUniversitaire,
        bool $affichageEtudiant = false
    ): array {
        $this->getNotesParSemestresEtAnneeUniversitaire($matieres, $anneeUniversitaire);

        $tabMatiere = [];
        $groupes = $this->etudiant->getGroupes();
        foreach ($matieres as $matiere) {
            if (false === $matiere->suspendu && $matiere->nbNotes > 0 && $matiere->isParent() === false) {
                $tabMatiere[$matiere->getTypeIdMatiere()] = new MoyenneMatiere($matiere,
                    $semestre->getOptPointPenaliteAbsence(),
                    $groupes);
            }
        }

        /** @var Note $note */
        foreach ($this->notes as $note) {
            if (null !== $note->getEvaluation() && 0 !== $note->getEvaluation()->getIdMatiere()) {
                if (false === $affichageEtudiant || (true === $affichageEtudiant && true === $note->getEvaluation()->getVisible())) {
                    $idMatiere = $note->getEvaluation()->getTypeIdMatiere();
                    if (array_key_exists($idMatiere, $tabMatiere)) {
                        $tabMatiere[$idMatiere]->addNote($note);
                    }
                }
            }
        }

        return $tabMatiere;
    }

    public function calculGraphique(): void
    {
        $matieres = $this->typeMatiereManager->findBySemestre($this->etudiant->getSemestreActif());
        $tabKey = [];
        foreach ($matieres as $matiere) {
            $this->tabGraphique[$matiere->codeMatiere] = ['notes' => 0, 'coefficient' => 0];
            $tabKey[$matiere->getTypeIdMatiere()] = $matiere->codeMatiere;
        }

        foreach ($this->notes as $note) {
            if (null !== $note->getEvaluation() && true === $note->getEvaluation()->getVisible() && 0 !== $note->getEvaluation()->getIdMatiere()) {
                $this->tabGraphique[$tabKey[$note->getEvaluation()->getTypeIdMatiere()]]['notes'] += $note->getNote() * $note->getEvaluation()->getCoefficient();
                $this->tabGraphique[$tabKey[$note->getEvaluation()->getTypeIdMatiere()]]['coefficient'] += $note->getEvaluation()->getCoefficient();
            }
        }
    }

    public function getLabelsGraphique(): array
    {
        return array_keys($this->tabGraphique);
    }

    public function getDataGraphique(): array
    {
        $t = [];
        foreach ($this->tabGraphique as $matiere) {
            if (0.0 === (float)$matiere['coefficient']) {
                $t[] = 0;
            } else {
                $t[] = $matiere['notes'] / $matiere['coefficient'];
            }
        }

        return $t;
    }
}
