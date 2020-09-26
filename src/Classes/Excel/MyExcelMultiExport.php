<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Excel/MyExcelMultiExport.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/09/2020 08:52

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 21/06/2018
 * Time: 07:33
 */

namespace App\Classes\Excel;

use App\Classes\MyAbsences;
use App\Classes\MySerializer;
use App\Entity\Absence;
use App\Entity\Etudiant;
use App\Entity\Evaluation;
use App\Entity\Groupe;
use App\Entity\Semestre;
use PhpOffice\PhpSpreadsheet\Worksheet\PageSetup;
use PhpOffice\PhpSpreadsheet\Writer\Csv;
use PhpOffice\PhpSpreadsheet\Writer\Pdf\Dompdf;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;
use function is_array;

/**
 * Class MyExcelMultiExport
 * @package App\Classes\Excel
 */
class MyExcelMultiExport
{
    /** @var MySerializer */
    private $serializer;

    /** @var MyExcelWriter */
    private $myExcelWriter;


    public function __construct(
        MySerializer $mySerializer,
        MyExcelWriter $myExcelWriter
    ) {
        $this->serializer = $mySerializer;
        $this->myExcelWriter = $myExcelWriter;
    }

    /**
     * @param $name
     *
     * @return StreamedResponse
     */
    public function saveXlsx($name): StreamedResponse
    {
        $this->pageSetup($name);
        $writer = new Xlsx($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment;filename="' . $name . '.xlsx"'
            ]
        );
    }

    /**
     * @param $name
     *
     */
    public function pageSetup($name): void
    {
        $this->myExcelWriter->getSpreadsheet()->getProperties()->setTitle($name);
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->getPageSetup()->setPaperSize(PageSetup::PAPERSIZE_A4);
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->getPageSetup()->setOrientation(PageSetup::ORIENTATION_LANDSCAPE);
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->setShowGridlines(true); //affichage de la grille
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->setPrintGridlines(true); //affichage de la grille
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->getPageSetup()->setRowsToRepeatAtTopByStartAndEnd(
            1,
            1
        ); //ligne a répéter en haut
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->getHeaderFooter()
            ->setOddHeader('&C&HDocument généré depuis l\'Intranet !');
        $this->myExcelWriter->getSpreadsheet()->getActiveSheet()->getHeaderFooter()
            ->setOddFooter('&L&B' . $this->myExcelWriter->getSpreadsheet()->getProperties()->getTitle() . '&RPage &P of &N');
    }

    /**
     * @param       $name
     *
     * @return StreamedResponse
     */
    public function saveCsv($name): StreamedResponse
    {
        $this->pageSetup($name);
        $writer = new Csv($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/csv',
                'Content-Disposition' => 'attachment;filename="' . $name . '.csv"'
            ]
        );
    }

    /**
     * @param       $name
     *
     * @return StreamedResponse
     */
    public function savePdf($name): StreamedResponse
    {
        $this->pageSetup($name);

        $writer = new Dompdf($this->myExcelWriter->getSpreadsheet());

        return new StreamedResponse(
            static function() use ($writer) {
                $writer->save('php://output');
            },
            200,
            [
                'Content-Type'        => 'application/pdf',
                'Content-Disposition' => 'attachment;filename="' . $name . '.pdf"'
            ]
        );
    }

    /**
     * @param $data
     * @param $modele
     * @param $colonne
     *
     */
    public function genereExcelFromSerialization($data, $modele, $colonne): void
    {
        $this->myExcelWriter->createSheet('onglet 1');
        //serialize les data
        $dataJson = $this->serializer->serialize($data, $modele);

        $tabData = json_decode($dataJson, true);
        //header
        $i = 1;
        $ligne = 1;
        foreach ($colonne as $value) {
            if (is_array($value)) {
                foreach ($value as $col) {
                    if (is_array($col)) {
                        foreach ($col as $col2) {

                            $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(
                                $i,
                                $ligne,
                                $col2
                            );
                            $i++;
                        }
                    } else {
                        $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow(
                            $i,
                            $ligne,
                            $col
                        );
                        $i++;
                    }
                }
            } else {
                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow($i, $ligne, $value);
                $i++;
            }
        }
        $i = 1;
        $ligne++;
        foreach ($tabData as $row) {
            foreach ($colonne as $key => $value) {
                if ((!is_array($value) && array_key_exists($value, $row)) || (is_array($value) && array_key_exists($key,
                            $row))) {
                    if (is_array($value)) {
                        foreach ($value as $col) {
                            if (is_array($row[$key])) {
                                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow($i, $ligne,
                                    $row[$key][$col]);
                                $i++;
                            } else {
                                $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow($i, $ligne,
                                    '-');
                                $i++;
                            }
                        }
                    } else {
                        $this->myExcelWriter->getSheet()->setCellValueByColumnAndRow($i, $ligne, $row[$value]);
                        $i++;
                    }
                } else {
                    $i++;
                }
            }


            $i = 1;
            $ligne++;
        }
    }

    /**
     * @param MyAbsences $myAbsences
     *
     */
    public function genereExcelAbsence(MyAbsences $myAbsences): void
    {
        $this->myExcelWriter->createSheet('absences');
        $this->myExcelWriter->writeHeader([
            'nom',
            'prenom',
            'nbCoursManques',
            'totalDuree',
            'nbNonJustifie',
            'nbJustifie'
        ]);
        $ligne = 2;
        $colonne = 1;
        foreach ($myAbsences->getEtudiants() as $etudiant) {
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNom());
            $colonne++;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getPrenom());
            $colonne++;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $myAbsences->getStatistiques()[$etudiant->getId()]->nbCoursManques
            );
            $colonne++;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $myAbsences->getStatistiques()[$etudiant->getId()]->totalDuree->format('H:i')
            );
            $colonne++;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $myAbsences->getStatistiques()[$etudiant->getId()]->nbNonJustifie
            );
            $colonne++;
            $this->myExcelWriter->writeCellXY(
                $colonne,
                $ligne,
                $myAbsences->getStatistiques()[$etudiant->getId()]->nbJustifie
            );
            $ligne++;
            $colonne = 1;
        }
    }

    /**
     * @param Semestre $semestre
     *
     */
    public function genereModeleExcel(Semestre $semestre): void
    {
        $this->myExcelWriter->createSheet('import');

        $this->myExcelWriter->writeHeader(['num_etudiant', 'nom', 'prenom', 'note', 'commentaire']);
        $ligne = 2;
        $colonne = 1;
        /** @var Etudiant $etudiant */
        foreach ($semestre->getEtudiants() as $etudiant) {
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNumEtudiant());
            $colonne++;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNom());
            $colonne++;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getPrenom());
            $ligne++;
            $colonne = 1;
        }
    }

    /**
     * @param Evaluation $evaluation
     * @param            $groupes
     * @param            $notes
     *
     */
    public function genereReleveExcel(Evaluation $evaluation, $groupes, $notes): void
    {

        /** @var Groupe $groupe */
        foreach ($groupes as $groupe) {
            $this->myExcelWriter->createSheet($groupe->getLibelle());
            //todo: modifier en-tete pour ajouter les infos de l'évaluation. modele PDF. Sauf si CSV?
            if ($evaluation->getSemestre()->getAnnee()->getDiplome()->isOptAnonymat() === true) {
                $this->myExcelWriter->writeHeader(['num_etudiant', 'note', 'remise copie', 'commentaire']);

            } else {
                $this->myExcelWriter->writeHeader([
                    'num_etudiant',
                    'nom',
                    'prenom',
                    'note',
                    'remise copie',
                    'commentaire'
                ]);
            }
            $ligne = 2;
            $colonne = 1;

            /** @var Etudiant $etudiant */
            foreach ($groupe->getEtudiants() as $etudiant) {
                $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNumEtudiant());
                $colonne++;
                if ($evaluation->getSemestre()->getAnnee()->getDiplome()->isOptAnonymat() === false) {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNom());
                    $colonne++;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getPrenom());
                    $colonne++;
                }

                if (array_key_exists($etudiant->getId(), $notes)) {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, $notes[$etudiant->getId()]->getNote());
                    $colonne++;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, '');
                    $colonne++;
                    $this->myExcelWriter->writeCellXY($colonne, $ligne,
                        $notes[$etudiant->getId()]->getCommentaire());

                } else {
                    $this->myExcelWriter->writeCellXY($colonne, $ligne, '-');
                }

                $colonne = 1;
                $ligne++;
            }
        }
    }

    /**
     * @param $absences
     */
    public function genereReleveAbsencesMatiereExcel($absences): void
    {
        $this->myExcelWriter->createSheet('Absences');

        $this->myExcelWriter->writeHeader([
            'num_etudiant',
            'nom',
            'prenom',
            'date Absence',
            'heure Absence',
            'Saisie par',
            'Absence justifiée'
        ]);

        $ligne = 2;
        $colonne = 1;

        /** @var Absence $absence */
        foreach ($absences as $absence) {
            $etudiant = $absence->getEtudiant();
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNumEtudiant());
            $colonne++;

            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getNom());
            $colonne++;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $etudiant->getPrenom());
            $colonne++;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $absence->getDateHeure()->format('d/m/Y'));
            $colonne++;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $absence->getDateHeure()->format('H:i'));
            $colonne++;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $absence->getPersonnel()->getDisplayPr());
            $colonne++;
            $this->myExcelWriter->writeCellXY($colonne, $ligne, $absence->getJustifie() == 1 ? 'Oui' : 'Non');
            $colonne = 1;
            $ligne++;
        }

    }

}
