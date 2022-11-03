<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Semestre/NotesExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2022 10:40
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Semestre;

use App\Classes\Excel\MyExcelWriter;
use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\AnneeUniversitaire;
use App\Entity\Semestre;
use App\Repository\EvaluationRepository;
use App\Repository\NoteRepository;
use function array_key_exists;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class NotesExport
{
    /**
     * NotesExport constructor.
     */
    public function __construct(private readonly MyExcelWriter $myExcel, private readonly NoteRepository $noteRepository, private readonly EvaluationRepository $evaluationRepository, private readonly TypeMatiereManager $typeMatiereManager)
    {
    }

    public function exportXlsToutesLesNotes(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): StreamedResponse
    {
        $this->myExcel->createSheet('semestre '.$semestre->getLibelle());
        $matieres = $this->typeMatiereManager->findByReferentielOrdreSemestre($semestre, $semestre->getDiplome()?->getReferentiel());
        // todo: filtrer si option faite ou pas
        $etudiants = $semestre->getEtudiants();
        $evaluations = $this->evaluationRepository->findByReferentielOrdreSemestre($semestre->getDiplome()?->getReferentiel(), $semestre->getOrdreLmd(), $anneeUniversitaire);
        $notes = $this->noteRepository->findByEtudiantSemestreArray($matieres, $anneeUniversitaire, $etudiants);

        $ligne = 2;
        $colonne = 4;
        $this->myExcel->writeCellName('C2', 'Module');
        $this->myExcel->writeCellName('C3', 'Code Apogee');
        $this->myExcel->writeCellName('C4', 'Libellé Matière');
        $this->myExcel->writeCellName('C5', 'libellé évaluation');
        $this->myExcel->writeCellName('C6', 'Commentaire évaluation');
        $this->myExcel->writeCellName('C7', 'Coefficient');

        foreach ($evaluations as $eval) {
            if (0 !== $eval->getIdMatiere()) {
                $matiere = $matieres[$eval->getTypeIdMatiere()];
                if (null !== $matiere) {
                    $this->myExcel->writeCellXY($colonne, $ligne, $matiere->codeMatiere);
                    ++$ligne;
                    $this->myExcel->writeCellXY($colonne, $ligne, $matiere->codeElement);
                    ++$ligne;
                    $this->myExcel->writeCellXY($colonne, $ligne, $matiere->libelle);
                    ++$ligne;
                    $this->myExcel->writeCellXY($colonne, $ligne, $eval->getLibelle());
                    ++$ligne;
                    $this->myExcel->writeCellXY($colonne, $ligne, $eval->getCommentaire());
                    ++$ligne;
                    $this->myExcel->writeCellXY($colonne, $ligne, $eval->getCoefficient());
                    $ligne = 2;
                    ++$colonne;
                }
            }
        }
        $ligne = 8;

        foreach ($etudiants as $etu) {
            ++$ligne;
            $colonne = 4;
            $this->myExcel->writeCellXY(1, $ligne, $etu->getNom());
            $this->myExcel->writeCellXY(2, $ligne, $etu->getPrenom());
            $this->myExcel->writeCellXY(3, $ligne, $etu->getNumetudiant());

            foreach ($evaluations as $eval) {
                if (array_key_exists($etu->getId(), $notes) && array_key_exists($eval->getId(),
                        $notes[$etu->getId()])) {
                    $this->myExcel->writeCellXY($colonne, $ligne,
                        number_format($notes[$etu->getId()][$eval->getId()]['note'], 2));
                    if ($notes[$etu->getId()][$eval->getId()]['note'] < 0 || $notes[$etu->getId()][$eval->getId()]['note'] > 20) {
                        $this->myExcel->colorCellRange($colonne, $ligne, 'ffffcc00');
                    }
                } else {
                    $this->myExcel->writeCellXY($colonne, $ligne,
                        '-');
                }
                ++$colonne;
            }
        }

        // EXPORT
        $writer = new Xlsx($this->myExcel->getSpreadsheet());

        return new StreamedResponse(
            static function () use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="Export des notes du semestre '.$semestre->getLibelle().'.xlsx"',
            ]
        );
    }
}
