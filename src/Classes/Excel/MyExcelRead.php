<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Excel/MyExcelRead.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/09/2024 08:23
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Excel;

use PhpOffice\PhpSpreadsheet\Cell\Cell;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Reader\Exception;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

/**
 * Class MyExcel.
 */
class MyExcelRead
{
    protected Spreadsheet $phpExcelObject;
    protected Worksheet $sheet;

    protected int $line = 1;
    protected int $colonneToTest = 1;
    protected int $nbColumns = -1; // on ne connait pas l nombre de colonne

    /**
     * MyExcelRead constructor.
     */
    public function __construct()
    {
    }

    /**
     * @throws Exception
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function readFile(string $fichier): void
    {
        $inputFileType = IOFactory::identify($fichier);
        /**  Create a new Reader of the type that has been identified  **/
        $reader = IOFactory::createReader($inputFileType);
        /*  Load $inputFileName to a Spreadsheet Object  * */
        $this->phpExcelObject = $reader->load($fichier);
        $this->sheet = $this->phpExcelObject->getSheet(0);
    }

    /**
     * Lecture séquentielle du fichier. Retourne false si ligne vide.
     */
    public function readNewLine(): array|bool
    {
//        dump($this->line);
        if (-1 === $this->nbColumns) {
            // on analyse le nombre de colonne
            $this->countColumns();
        }
//dump($this->sheet->getCell([1, $this->line])->getValue());
        if (null !== $this->sheet->getCell([$this->colonneToTest, $this->line])->getValue()) {
            $t = [];
            for ($col = 1; $col <= $this->nbColumns; ++$col) {
                $t[$col] = $this->sheet->getCell([$col, $this->line]);
            }
            ++$this->line;

            return $t;
        }

        return false;
    }

    private function countColumns(): void
    {
        $fin = true;
        $i = 1;
        while (true === $fin) {
            if ('' === $this->sheet->getCell([$i, 1])->getValue()) {
                $fin = false;
                $this->nbColumns = $i;
            }
            ++$i;
        }
    }

    public function getCellColLigne(int $col, int $lig): Cell
    {
        return $this->sheet->getCell([$col, $lig]);
    }

    public function writeCellColLigne(int $col, int $lig, string $valeur): void
    {
        $cell = Coordinate::stringFromColumnIndex($col).$lig;
        $this->sheet->setCellValue($cell, $valeur);
    }

    /**
     * @throws \PhpOffice\PhpSpreadsheet\Writer\Exception
     */
    public function sauvegarde(string $filename): void
    {
        $objWriter = IOFactory::createWriter($this->phpExcelObject, 'Xls');
        $objWriter->save($filename);
    }

    public function setNbColumns(int $nbColumns): void
    {
        $this->nbColumns = $nbColumns;
    }

    public function close(): void
    {
        $this->phpExcelObject->disconnectWorksheets();
    }

    public function getLigne(): int
    {
        return $this->line - 1; //Car on a déjà incrémenté après avoir lu
    }

    public function setCologneToTest(int $colonneToTest): void
    {
        $this->colonneToTest = $colonneToTest;
    }
}
