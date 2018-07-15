<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 21/06/2018
 * Time: 07:33
 */

namespace App\MesClasses\Excel;

use App\MesClasses\MySerializer;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Worksheet\PageSetup;
use PhpOffice\PhpSpreadsheet\Writer\Pdf\Dompdf;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Writer\Csv;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Symfony\Component\HttpFoundation\StreamedResponse;


/**
 * Class MyExcelMultiExport
 * @package App\MesClasses\Excel
 */
class MyExcelMultiExport
{
    /** @var Spreadsheet */
    private $spreadsheet;

    /** @var Worksheet */
    private $sheet;

    /** @var MySerializer */
    private $serializer;


    public function __construct(MySerializer $mySerializer)
    {
        $this->serializer = $mySerializer;

        $this->spreadsheet = new Spreadsheet();

        try {
            $this->sheet = $this->spreadsheet->getActiveSheet();
        } catch (Exception $e) {
            //pas de feuille?
        }
    }

    /**
     * @param $cell
     * @param $value
     */
    public function write($cell, $value): void
    {
        $this->sheet->setCellValue($cell, $value);

    }

    /**
     * @param $name
     *
     * @return StreamedResponse
     * @throws Exception
     */
    public function saveXlsx($name): StreamedResponse
    {
        $this->pageSetup($name);
        $writer = new Xlsx($this->spreadsheet);

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
        $this->spreadsheet->getProperties()->setTitle($name);
        $this->spreadsheet->getActiveSheet()->getPageSetup()->setPaperSize(PageSetup::PAPERSIZE_A4);
        $this->spreadsheet->getActiveSheet()->getPageSetup()->setOrientation(PageSetup::ORIENTATION_LANDSCAPE);
        $this->spreadsheet->getActiveSheet()->setShowGridlines(true); //affichage de la grille
        $this->spreadsheet->getActiveSheet()->setPrintGridlines(true); //affichage de la grille
        $this->spreadsheet->getActiveSheet()->getPageSetup()->setRowsToRepeatAtTopByStartAndEnd(1,
            1);//ligne a répéter en haut
        $this->spreadsheet->getActiveSheet()->getHeaderFooter()
            ->setOddHeader('&C&HDocument généré depuis l\'Intranet !');
        $this->spreadsheet->getActiveSheet()->getHeaderFooter()
            ->setOddFooter('&L&B' . $this->spreadsheet->getProperties()->getTitle() . '&RPage &P of &N');
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
        $writer = new Csv($this->spreadsheet);

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

        $writer = new Dompdf($this->spreadsheet);

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
        //header
        $i = 1;
        $ligne = 1;
        foreach ($colonne as $value) {

            if (\is_array($value)) {
                foreach ($value as $col) {
                    $this->sheet->setCellValueByColumnAndRow($i, $ligne, $col);
                    $i++;
                }
            } else {
                $this->sheet->setCellValueByColumnAndRow($i, $ligne, $value);
                $i++;
            }
        }
        $i = 1;
        $ligne++;
        foreach ($tabData as $row) {
            foreach ($colonne as $key => $value) {
                if (\is_array($value)) {
                    foreach ($value as $col) {
                        $this->sheet->setCellValueByColumnAndRow($i, $ligne, $row[$key][$col]);
                        $i++;
                    }
                } else {
                    $this->sheet->setCellValueByColumnAndRow($i, $ligne, $row[$value]);
                    $i++;
                }
            }

            $i = 1;
            $ligne++;
        }
    }
}