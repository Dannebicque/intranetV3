<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Excel/MyExcelRead.php
// @author     David Annebicque
// @project intranetv3
// @date 19/11/2019 07:35
// @lastUpdate 15/11/2019 07:38

namespace App\MesClasses\Excel;

use PhpOffice\PhpSpreadsheet\Cell\Cell;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Reader\Exception;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class MyExcel
 * @package DA\KernelBundle\MesClasses
 */
class MyExcelRead
{

    protected $response;

    protected $phpExcelObject;
    /**
     * @var Worksheet
     */
    protected $sheet;

    protected $line = 1;
    protected $nbColumns = -1; //on ne connait pas l nombre de colonne


    /**
     * MyExcelRead constructor.
     */
    public function __construct()
    {

    }

    /**
     * @param string $fichier
     *
     * @throws Exception
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function readFile($fichier): void
    {
        $inputFileType = IOFactory::identify($fichier);
        /**  Create a new Reader of the type that has been identified  **/
        $reader = IOFactory::createReader($inputFileType);
        /**  Load $inputFileName to a Spreadsheet Object  **/
        $this->phpExcelObject = $reader->load($fichier);
        $this->sheet = $this->phpExcelObject->getSheet(0);
    }

    /**
     * Lecture séquentielle du fichier. Retourne false si ligne vide
     */
    public function readNewLine()
    {
        if ($this->nbColumns === -1) {
            //on analyse le nombre de colonne
            $this->countColumns();
        }

        if ($this->sheet->getCellByColumnAndRow(0, $this->line) != '') {
            $t = [];
            for ($col = 0; $col < $this->nbColumns; $col++) {
                $t[$col] = $this->sheet->getCellByColumnAndRow($col, $this->line);
            }
            $this->line++;

            return $t;
        }

        return false;

    }

    /**
     *
     */
    private function countColumns(): void
    {
        $fin = true;
        $i = 1;
        while ($fin === true) {
            if ($this->sheet->getCellByColumnAndRow($i, 1) == '') {
                $fin = false;
                $this->nbColumns = $i;
            }
            $i++;
        }
    }

    /**
     * @param integer $col
     * @param integer $lig
     *
     * @return Cell
     */
    public function getCellColLigne($col, $lig): Cell
    {
        return $this->sheet->getCellByColumnAndRow($col, $lig);
    }

    /**
     * @param $col
     * @param $lig
     * @param $valeur
     */
    public function writeCellColLigne($col, $lig, $valeur): void
    {
        $cell = Cell::stringFromColumnIndex($col) . $lig;
        $this->sheet->setCellValue($cell, $valeur);
    }

    /**
     * @param string $filename
     *
     * @throws \PhpOffice\PhpSpreadsheet\Writer\Exception
     */
    public function output($filename): void
    {
        $this->response = new Response();

        // Redirect output to a client’s web browser (Excel5)
        $this->response->headers->set('Content-Type', 'application/vnd.ms-excel');
        $this->response->headers->set('Content-Disposition', 'attachment;filename="' . $filename . '"');
        $this->response->headers->set('Cache-Control', 'max-age=0');
        $this->response->sendHeaders();
        $objWriter = IOFactory::createWriter($this->phpExcelObject, 'Excel5');
        $objWriter->save('php://output');
        exit;
    }

    /**
     * @param string $filename
     *
     * @throws \PhpOffice\PhpSpreadsheet\Writer\Exception
     */
    public function sauvegarde($filename): void
    {
        $objWriter = IOFactory::createWriter($this->phpExcelObject, 'Excel5');
        $objWriter->save($filename);
    }

}
