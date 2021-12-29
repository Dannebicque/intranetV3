<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantNotes.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:30
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
use App\Repository\ApcRessourceCompetenceRepository;
use App\Repository\ApcSaeCompetenceRepository;
use App\Repository\NoteRepository;
use App\Utils\Tools;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use function array_key_exists;
use function count;

class EtudiantNotes
{
    public NoteRepository $noteRepository;
    private Etudiant $etudiant;

    private EntityManagerInterface $entityManager;

    private TypeMatiereManager $typeMatiereManager;

    private ApcRessourceCompetenceRepository $apcRessourceCompetenceRepository;
    private ApcSaeCompetenceRepository $apcSaeCompetenceRepository;

    private ?array $notes;
    private $tabGraphique;

    /**
     * EtudiantNotes constructor.
     */
    public function __construct(
        TypeMatiereManager $typeMatiereManager,
        NoteRepository $noteRepository,
        EntityManagerInterface $entityManager,
        ApcRessourceCompetenceRepository $apcRessourceCompetenceRepository,
        ApcSaeCompetenceRepository $apcSaeCompetenceRepository
    ) {
        $this->noteRepository = $noteRepository;
        $this->entityManager = $entityManager;
        $this->typeMatiereManager = $typeMatiereManager;
        $this->apcRessourceCompetenceRepository = $apcRessourceCompetenceRepository;
        $this->apcSaeCompetenceRepository = $apcSaeCompetenceRepository;
    }

    public function setEtudiant(Etudiant $etudiant): void
    {
        $this->etudiant = $etudiant;
    }

    public function getNotesParSemestresEtAnneeUniversitaire(
        array $matieres,
        ?AnneeUniversitaire $anneeUniversitaire
    ) {
        if (null !== $anneeUniversitaire) {
            $this->notes = $this->noteRepository->findByEtudiantSemestre($this->etudiant, $matieres,
                $anneeUniversitaire);

            return $this->notes;
        }

        return [];
    }

    /**
     *
     * @throws Exception
     */
    public function addNote(Evaluation $evaluation, $data, Personnel $personnel): bool
    {
        //on cherche si deja une note de présente
        $note = $this->noteRepository->findBy([
            'evaluation' => $evaluation->getId(),
            'etudiant' => $this->etudiant->getId(),
        ]);

        if (1 === count($note)) {
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
        } elseif (0 === count($note)) {
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
        array $matieres,
        Semestre $semestre,
        AnneeUniversitaire $anneeUniversitaire
    ) {
        $this->getNotesParSemestresEtAnneeUniversitaire($matieres, $anneeUniversitaire);

        $tabMatiere = [];
        $groupes = $this->etudiant->getGroupes();
        foreach ($matieres as $matiere) {
            if (false === $matiere->suspendu && $matiere->nbNotes > 0) {
                $tabMatiere[$matiere->getTypeIdMatiere()] = new MoyenneMatiere($matiere,
                    $semestre->getOptPointPenaliteAbsence(),
                    $groupes);
            }
        }

        /** @var Note $note */
        foreach ($this->notes as $note) {
            if (null !== $note->getEvaluation() && 0 !== $note->getEvaluation()->getIdMatiere()) {
                $idMatiere = $note->getEvaluation()->getTypeIdMatiere();
                if (array_key_exists($idMatiere, $tabMatiere)) {
                    $tabMatiere[$idMatiere]->addNote($note);
                }
            }
        }

        return $tabMatiere;
    }

    public function calculGraphique()
    {
        $matieres = $this->typeMatiereManager->findBySemestre($this->etudiant->getSemestre());
        $tabKey = [];
        foreach ($matieres as $matiere) {
            $this->tabGraphique[$matiere->codeMatiere] = ['notes' => 0, 'coefficient' => 0];
            $tabKey[$matiere->getTypeIdMatiere()] = $matiere->codeMatiere;
        }

        foreach ($this->notes as $note) {
            if (null !== $note->getEvaluation() && 0 !== $note->getEvaluation()->getIdMatiere()) {
                $this->tabGraphique[$tabKey[$note->getEvaluation()->getTypeIdMatiere()]]['notes'] += $note->getNote() * $note->getEvaluation()->getCoefficient();
                $this->tabGraphique[$tabKey[$note->getEvaluation()->getTypeIdMatiere()]]['coefficient'] += $note->getEvaluation()->getCoefficient();
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

    //todo: devrait pas être ici...
    public function calculMoyenneApcSemestre(Semestre $semestre, array $matieres, array $ues, array $moyennes): array
    {
        $tabs = [];
        $ressources = $this->apcRessourceCompetenceRepository->findBySemestreArray($semestre);
        $saes = $this->apcSaeCompetenceRepository->findBySemestreArray($semestre);
        $tabs['pac'] = 0;
        foreach ($ues as $ue) {
            $ueId = $ue->getId();
            $competenceId = $ue->getApcCompetence()->getId();
            $tabs['ues'][$ueId]['totalCoefficients'] = 0;
            $tabs['ues'][$ueId]['totalMoyennes'] = 0;
            $tabs['ues'][$ueId]['totalMoyennesPenalisee'] = 0;
            $tabs['ues'][$ueId]['moyenne'] = 0;
            $tabs['ues'][$ueId]['moyennePenalisee'] = 0;
            $tabs['ues'][$ueId]['moyennePac'] = 0;
            foreach ($matieres as $matiere) {
                if (array_key_exists($matiere->getTypeIdMatiere(), $moyennes)) {
                    $tabs['matieres'][$matiere->codeElement]['moyenne'] = $moyennes[$matiere->getTypeIdMatiere()]->getMoyenne();
                    $tabs['matieres'][$matiere->codeElement]['moyennePenalisee'] = $moyennes[$matiere->getTypeIdMatiere()]->getMoyennePenalisee();
                } else {
                    $tabs['matieres'][$matiere->codeElement]['moyenne'] = 0;
                    $tabs['matieres'][$matiere->codeElement]['moyennePenalisee'] = 0;
                }

                if (array_key_exists($ue->getApcCompetence()->getId(),
                        $ressources) && array_key_exists($matiere->codeElement,
                        $ressources[$ue->getApcCompetence()->getId()])) {
                    $tabs['ues'][$ueId]['matieres'][$matiere->codeElement]['coefficient'] = $ressources[$competenceId][$matiere->codeElement]->getCoefficient(); //moyenne
                    // officiellement du module.
                    $tabs['ues'][$ueId]['totalCoefficients'] += $ressources[$competenceId][$matiere->codeElement]->getCoefficient();
                } elseif (array_key_exists($competenceId,
                        $saes) && array_key_exists($matiere->codeElement,
                        $saes[$competenceId])) {
                    $tabs['ues'][$ueId]['matieres'][$matiere->codeElement]['coefficient'] = $saes[$competenceId][$matiere->codeElement]->getCoefficient(); //moyenne officiellement du module.
                    $tabs['ues'][$ueId]['totalCoefficients'] += $saes[$competenceId][$matiere->codeElement]->getCoefficient();
                } else {
                    $tabs['ues'][$ueId]['matieres'][$matiere->codeElement]['coefficient'] = 0;
                }
                $tabs['ues'][$ueId]['matieres'][$matiere->codeElement]['moyenne'] = $tabs['matieres'][$matiere->codeElement]['moyenne'] * $tabs['ues'][$ueId]['matieres'][$matiere->codeElement]['coefficient'];
                $tabs['ues'][$ueId]['totalMoyennes'] += $tabs['ues'][$ueId]['matieres'][$matiere->codeElement]['moyenne'];
                if ($tabs['ues'][$ueId]['totalCoefficients'] > 0) {
                    $tabs['ues'][$ueId]['moyenne'] = $tabs['ues'][$ueId]['totalMoyennes'] / $tabs['ues'][$ueId]['totalCoefficients'];
                    $tabs['ues'][$ueId]['moyennePac'] = $tabs['ues'][$ueId]['moyenne'] + $tabs['pac'];
                }

            }

        }
        return $tabs;
    }
}
