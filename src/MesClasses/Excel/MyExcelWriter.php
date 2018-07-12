<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 21/06/2018
 * Time: 07:33
 */

namespace App\MesClasses\Excel;

use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Writer\Csv;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Symfony\Component\HttpFoundation\StreamedResponse;

/**
 * Class MyExcelWriter
 * @package App\MesClasses\Excel
 */
class MyExcelWriter
{

    /** @var Spreadsheet */
    private $spreadsheet;

    /** @var Worksheet */
    private $sheet;


    public function __construct()
    {

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
     */
    public function saveXlsx($name): StreamedResponse
    {
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
     * @param       $name
     * @param array $options
     *
     * @return StreamedResponse
     */
    public function saveCsv($name, array $options = []): StreamedResponse
    {

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
}