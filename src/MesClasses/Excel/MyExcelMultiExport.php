<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 21/06/2018
 * Time: 07:33
 */

namespace App\MesClasses\Excel;

use App\MesClasses\MyAbsences;
use App\MesClasses\MySerializer;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Worksheet\PageSetup;
use PhpOffice\PhpSpreadsheet\Writer\Pdf\Dompdf;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Writer\Csv;
use Symfony\Component\HttpFoundation\StreamedResponse;


/**
 * Class MyExcelMultiExport
 * @package App\MesClasses\Excel
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

    }

//    /**
//     * @param $cell
//     * @param $value
//     */
//    public function write($cell, $value): void
//    {
//        $this->sheet->setCellValue($cell, $value);
//
//    }

    /**
     * @param $name
     *
     * @return StreamedResponse
     * @throws Exception
     */
    public function saveXlsx($name): StreamedResponse
    {
        $this->pageSetup($name);
        $writer = new Xlsx(MyExcelWriter::getSpreadsheet());

        return new StreamedResponse(
            function () use ($writer) {
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
     * @throws Exception
     */
    public function pageSetup($name)
    {
        MyExcelWriter::getSpreadsheet()->getProperties()->setTitle($name);
        MyExcelWriter::getSpreadsheet()->getActiveSheet()->getPageSetup()->setPaperSize(PageSetup::PAPERSIZE_A4);
        MyExcelWriter::getSpreadsheet()->getActiveSheet()->getPageSetup()->setOrientation(PageSetup::ORIENTATION_LANDSCAPE);
        MyExcelWriter::getSpreadsheet()->getActiveSheet()->setShowGridlines(true); //affichage de la grille
        MyExcelWriter::getSpreadsheet()->getActiveSheet()->setPrintGridlines(true); //affichage de la grille
        MyExcelWriter::getSpreadsheet()->getActiveSheet()->getPageSetup()->setRowsToRepeatAtTopByStartAndEnd(1,
            1);//ligne a répéter en haut
        MyExcelWriter::getSpreadsheet()->getActiveSheet()->getHeaderFooter()
            ->setOddHeader('&C&HDocument généré depuis l\'Intranet !');
        MyExcelWriter::getSpreadsheet()->getActiveSheet()->getHeaderFooter()
            ->setOddFooter('&L&B' . MyExcelWriter::getSpreadsheet()->getProperties()->getTitle() . '&RPage &P of &N');
    }

    /**
     * @param       $name
     * @param array $options
     *
     * @return StreamedResponse
     */
    public function saveCsv($name, array $options = []): StreamedResponse
    {
        $this->pageSetup($name);
        $writer = new Csv(MyExcelWriter::getSpreadsheet());

        return new StreamedResponse(
            function () use ($writer) {
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
     * @param array $options
     *
     * @return StreamedResponse
     * @throws Exception
     */
    public function savePdf($name, array $options = []): StreamedResponse
    {
        $this->pageSetup($name);

        $writer = new Dompdf(MyExcelWriter::getSpreadsheet());

        return new StreamedResponse(
            function () use ($writer) {
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
     */
    public function genereExcelFromSerialization($data, $modele, $colonne)
    {
        //serialize les data
        $dataJson = $this->serializer->serialize($data, $modele);

        $tabData = json_decode($dataJson, true);
        //dump($tabData);
        //header
        $i = 1;
        $ligne = 1;
        foreach ($colonne as $value) {

            if (\is_array($value)) {
                foreach ($value as $col) {
                    MyExcelWriter::getSheet()->setCellValueByColumnAndRow($i, $ligne, $col);
                    $i++;
                }
            } else {
                MyExcelWriter::getSheet()->setCellValueByColumnAndRow($i, $ligne, $value);
                $i++;
            }
        }
        $i = 1;
        $ligne++;
        foreach ($tabData as $row) {
            foreach ($colonne as $key => $value) {
                if (\is_array($value)) {
                    foreach ($value as $col) {
                        MyExcelWriter::getSheet()->setCellValueByColumnAndRow($i, $ligne, $row[$key][$col]);
                        $i++;
                    }
                } else {
                    MyExcelWriter::getSheet()->setCellValueByColumnAndRow($i, $ligne, $row[$value]);
                    $i++;
                }
            }

            $i = 1;
            $ligne++;
        }
    }

    /**
     * @param $myAbsences
     */
    public function genereExcelAbsence(MyAbsences $myAbsences)
    {
        MyExcelWriter::writeHeader(['nom', 'prenom', 'nbCoursManques', 'totalDuree', 'nbNonJustifie', 'nbJustifie']);
        $ligne = 2;//todo: en param ?
        $colonne = 1;
        foreach ($myAbsences->getEtudiants() as $etudiant) {
            MyExcelWriter::writeCellXY($colonne, $ligne, $etudiant->getNom());
            $colonne++;
            MyExcelWriter::writeCellXY($colonne, $ligne, $etudiant->getPrenom());
            $colonne++;
            MyExcelWriter::writeCellXY($colonne, $ligne,
                $myAbsences->getStatistiques()[$etudiant->getId()]['nbCoursManques']);
            $colonne++;
            MyExcelWriter::writeCellXY($colonne, $ligne,
                $myAbsences->getStatistiques()[$etudiant->getId()]['totalDuree']->format('H:i'));
            $colonne++;
            MyExcelWriter::writeCellXY($colonne, $ligne,
                $myAbsences->getStatistiques()[$etudiant->getId()]['nbNonJustifie']);
            $colonne++;
            MyExcelWriter::writeCellXY($colonne, $ligne,
                $myAbsences->getStatistiques()[$etudiant->getId()]['nbJustifie']);
            $ligne++;
            $colonne = 1;
        }
    }
}