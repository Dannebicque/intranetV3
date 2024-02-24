<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/ExportEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:59
 */

namespace App\Classes\EduSign;

use App\Classes\EduSign\Adapter\IntranetEtudiantEduSignAdapter;
use App\Classes\Excel\MyExcelWriter;
use App\Repository\EtudiantRepository;
use App\Repository\SemestreRepository;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ExportEtudiant
{

    public function __construct(
        private readonly MyExcelWriter $myExcelWriter,
        protected EtudiantRepository $etudiantRepository,
        protected SemestreRepository $semestreRepository,
    )
    {
    }

    public function genereFichier(): StreamedResponse
    {
        $this->myExcelWriter->createSheet('edusign-etudiants');

        $this->ecritEtudiant();

        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function () use ($writer) {
                $writer->save('php://output');
            },
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="export-etudiant-edusign.xlsx"',
            ]
        );
    }

//    public function ecritEtudiant() {
//        $semestres = $this->semestreRepository->findSemestreEduSign();
//        $sheet = $this->myExcelWriter->getSpreadsheet()->getActiveSheet();
//
//        $row = 1; // Start at row 1
//        foreach ($semestres as $semestre) {
//            $etudiants = $this->etudiantRepository->findBySemestre($semestre);
//
//            foreach ($etudiants as $etudiant) {
//                $groupes = [];
//                $groupes[] = $etudiant->getSemestre()->getIdEduSign();
//                foreach ($etudiant->getGroupes() as $groupe) {
//                    $groupes[] = $groupe->getIdEduSign();
//                }
//
//                $etudiantEduSign = (new IntranetEtudiantEduSignAdapter($etudiant, $groupes))->getEtudiant();
//
//                $col = 'A';
//                foreach ($etudiantEduSign as $value) {
//                    if (is_array($value)) {
//                        foreach ($value as $subValue) {
//                            $sheet->setCellValue("$col$row", $subValue);
//                            ++$col;
//                        }
//                    } else {
//                        $sheet->setCellValue("$col$row", $value);
//                        ++$col;
//                    }
//                }
//
//                ++$row;
//            }
//        }
//    }

    public function ecritEtudiant(): void
    {
        $semestres = $this->semestreRepository->findSemestreEduSign();
        $sheet = $this->myExcelWriter->getSpreadsheet()->getActiveSheet();

        // nb max d'éléments dans les tableaux
        $maxItems = 0;

        foreach ($semestres as $semestre) {
            $etudiants = $this->etudiantRepository->findBySemestre($semestre);

            foreach ($etudiants as $etudiant) {
                $groupes = [];
                $groupes[] = $etudiant->getSemestre()->getLibelle();
                foreach ($etudiant->getGroupes() as $groupe) {
                    $groupes[] = $groupe->getLibelle();
                }
                $etudiantEduSign = (new IntranetEtudiantEduSignAdapter($etudiant, $groupes))->getEtudiant();

                foreach ($etudiantEduSign as $value) {
                    if (is_array($value) && count($value) > $maxItems) {
                        $maxItems = count($value);
                    }
                }
            }
        }

        // Calculate $maxItems first
        // Add your existing logic for calculating $maxItems

        // headers
        $headers = [
            'FIRSTNAME',
            'LASTNAME',
            'EMAIL',
            'FILE_NUMBER',
            'PHOTO',
            'PHONE',
        ];

        // Dynamically add GROUP headers
        for ($i = 1; $i <= $maxItems; ++$i) {
            $headers[] = "GROUP$i";
        }

        $headers = array_merge($headers, [
            'TRAINING_NAME',
            'COMPANY',
        ]);

        // Dynamically add TAG headers
        for ($i = 1; $i <= $maxItems; ++$i) {
            $headers[] = "TAG$i";
        }

        $headers = array_merge($headers, [
            'SEND_EMAIL_CREDENTIALS',
            'NEW_PASSWORD_NEEDED',
            'API_ID',
            'API_TYPE',
            'BADGE_ID',
            'ID_EDU_SIGN',
            'STUDENT_FOLLOWER_ID',
        ]);

        // Write headers
        $headerColumnIndex = 1;
        foreach ($headers as $header) {
            $headerColumnLetter = Coordinate::stringFromColumnIndex($headerColumnIndex);
            $sheet->setCellValue((string)$headerColumnLetter . "1", $header);
            ++$headerColumnIndex;
        }

        // Commence à la ligne 2
        $row = 2;
        foreach ($semestres as $semestre) {
            $etudiants = $this->etudiantRepository->findBySemestre($semestre);

            foreach ($etudiants as $etudiant) {
                $groupes = [];
                $groupes[] = $etudiant->getSemestre()->getLibelle();
                foreach ($etudiant->getGroupes() as $groupe) {
                    $groupes[] = $groupe->getLibelle();
                }

                $etudiantEduSign = (new IntranetEtudiantEduSignAdapter($etudiant, $groupes))->getEtudiant();

                $col = 1;
                foreach ($etudiantEduSign as $value) {
                    if (is_array($value)) {
                        for ($i = 0; $i < $maxItems; ++$i) {
                            $colLetter = Coordinate::stringFromColumnIndex($col);
                            $subValue = $i < count($value) ? $value[$i] : '';
                            $sheet->setCellValue("$colLetter$row", $subValue);
                            ++$col;
                        }
                    } else {
                        $colLetter = Coordinate::stringFromColumnIndex($col);
                        $sheet->setCellValue("$colLetter$row", $value);
                        ++$col;
                    }
                }

                ++$row;
            }
        }
    }

}
