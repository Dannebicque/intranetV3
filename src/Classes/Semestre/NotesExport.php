<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Semestre/NotesExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Semestre;

use App\Classes\Excel\MyExcelWriter;
use App\Entity\AnneeUniversitaire;
use App\Entity\Semestre;
use App\Repository\EvaluationRepository;
use App\Repository\NoteRepository;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

class NotesExport
{
    private MyExcelWriter $myExcel;
    private NoteRepository $noteRepository;
    private EvaluationRepository $evaluationRepository;

    /**
     * NotesExport constructor.
     */
    public function __construct(
        MyExcelWriter $myExcel,
        NoteRepository $noteRepository,
        EvaluationRepository $evaluationRepository
    ) {
        $this->myExcel = $myExcel;
        $this->noteRepository = $noteRepository;
        $this->evaluationRepository = $evaluationRepository;
    }

    /**
     * @return StreamedResponse
     * @return StreamedResponse
     */
    public function exportXlsToutesLesNotes(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire)
    {
        $this->myExcel->createSheet('semestre ' . $semestre->getLibelle());
        //todo: filtrer si option faite ou pas
        $etudiants = $semestre->getEtudiants();
        $evaluations = $this->evaluationRepository->findBySemestre($semestre, $anneeUniversitaire);
        $notes = $this->noteRepository->findByEtudiantSemestreArray($semestre, $anneeUniversitaire, $etudiants);

        $ligne = 2;
        $colonne = 4;
        $this->myExcel->writeCellName('C2', 'Module');
        $this->myExcel->writeCellName('C3', 'Code Apogee');
        $this->myExcel->writeCellName('C4', 'Libellé');

        foreach ($evaluations as $eval) {
            if (null !== $eval->getMatiere()) {
                $this->myExcel->writeCellXY($colonne, $ligne, $eval->getMatiere()->getCodeMatiere());
                ++$ligne;
                $this->myExcel->writeCellXY($colonne, $ligne, $eval->getMatiere()->getCodeElement());
                ++$ligne;
                $this->myExcel->writeCellXY($colonne, $ligne, $eval->getMatiere()->getLibelle());
                $ligne = 2;
                ++$colonne;
            }
        }
        $ligne = 5;

        foreach ($etudiants as $etu) {
            ++$ligne;
            $colonne = 4;
            $this->myExcel->writeCellXY(1, $ligne, $etu->getNom());
            $this->myExcel->writeCellXY(2, $ligne, $etu->getPrenom());
            $this->myExcel->writeCellXY(3, $ligne, $etu->getNumetudiant());

            foreach ($evaluations as $eval) {
                if (\array_key_exists($etu->getId(), $notes) && \array_key_exists($eval->getId(),
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

        //EXPORT
        $writer = new Xlsx($this->myExcel->getSpreadsheet());

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="Export des notes du semestre ' . $semestre->getLibelle() . '.xlsx"',
            ]
        );
    }
}
