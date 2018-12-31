<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 15/07/2018
 * Time: 15:37
 */

namespace App\MesClasses\Excel;

use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Symfony\Contracts\Translation\TranslatorInterface;

class MyExcelWriter
{
    /** @var Spreadsheet */
    private $spreadsheet;

    /** @var Worksheet */
    private $sheet;

    /** @var TranslatorInterface */
    private $translator;

    /**
     * MyExcelWriter constructor.
     *
     * @param TranslatorInterface $translator
     *
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function __construct(TranslatorInterface $translator)
    {
        $this->spreadsheet = new Spreadsheet();
        $this->spreadsheet->removeSheetByIndex(0);
        $this->translator = $translator;
    }

    /**
     * @return Spreadsheet
     */
    public function getSpreadsheet(): Spreadsheet
    {
        return $this->spreadsheet;
    }

    /**
     * @return Worksheet
     */
    public function getSheet(): Worksheet
    {
        return $this->sheet;
    }

    /**
     * @param $libelle
     *
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function createSheet($libelle): void
    {
        $this->spreadsheet->createSheet()->setTitle($libelle);
        $this->sheet = $this->spreadsheet->getSheetByName($libelle);
    }

    /**
     * @param     $array
     * @param int $col
     * @param int $row
     */
    public function writeHeader($array, $col = 1, $row = 1): void
    {
        foreach ($array as $value) {
            if (!empty($value) && $value !== null && $value !== '#') {
                $value = $this->translator->trans($value);
            }

            $this->writeCellXY($col, $row, $value);
            $col++;
        }
    }

    /**
     * @param       $col
     * @param       $row
     * @param       $value
     * @param array $options
     */
    public function writeCellXY($col, $row, $value, $options = []): void
    {
        $this->sheet->setCellValueByColumnAndRow($col, $row, $value);
        //traiter les options
    }

    /**
     * @param       $adresse
     * @param       $value
     * @param array $options
     *
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function writeCellName($adresse, $value, array $options = []): void
    {
        $this->sheet->setCellValue($adresse, $value);

        if (\is_array($options) && array_key_exists('style', $options)) {
            switch ($options['style']) {
                case 'HORIZONTAL_RIGHT':
                    $this->sheet->getStyle($adresse)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);
                    break;
                case 'HORIZONTAL_CENTER':
                    $this->sheet->getStyle($adresse)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
                    break;
                case 'numerique':
                    $this->sheet->getStyle($adresse)->getNumberFormat()->setFormatCode(NumberFormat::FORMAT_NUMBER_COMMA_SEPARATED1);
                    break;
                case 'numerique3':
                    $this->sheet->getStyle($adresse)->getNumberFormat()->setFormatCode('#,##0.000');
                    break;

            }
        }
    }

    /**
     * @param $col
     * @param $lig
     * @param $couleur
     *
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function colorCellRange($col, $lig, $couleur): void
    {
        $cell = Coordinate::stringFromColumnIndex($col) . $lig;
        $this->colorCells($cell, $couleur);
    }

    /**
     * @param $cells
     * @param $couleur
     *
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function colorCells($cells, $couleur): void
    {
        $this->sheet->getStyle($cells)->getFill()
            ->setFillType(Fill::FILL_SOLID)
            ->getStartColor()->setARGB($couleur);
    }

    /**
     * @param $col1
     * @param $lig1
     * @param $col2
     * @param $lig2
     *
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function borderCellsRange($col1, $lig1, $col2, $lig2): void
    {
        $cell1 = Coordinate::stringFromColumnIndex($col1) . $lig1;
        $cell2 = Coordinate::stringFromColumnIndex($col2) . $lig2;
        $this->borderCells($cell1 . ':' . $cell2);
    }

    /**
     * @param $cells
     *
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function borderCells($cells): void
    {
        $this->sheet->getStyle($cells)->getBorders()->getAllBorders()->setBorderStyle(Border::BORDER_THIN);
    }

    /**
     * @param integer $ligne
     * @param integer $taille
     */
    public function getRowDimension($ligne, $taille): void
    {
        $this->sheet->getRowDimension($ligne)->setRowHeight($taille);
    }

    /**
     * @param string  $col
     * @param integer $taille
     */
    public function getColumnDimension($col, $taille): void
    {
        $this->sheet->getColumnDimension($col)->setWidth($taille);
    }

    /**
     * @param $col
     */
    public function getColumnAutoSize($col): void
    {
        if (is_numeric($col)) {
            $col = Coordinate::stringFromColumnIndex($col);
        }

        $this->sheet->getColumnDimension($col)->setAutoSize(true);
    }

    /**
     * @param $col1
     * @param $lig1
     * @param $col2
     * @param $lig2
     *
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function mergeCellsCaR($col1, $lig1, $col2, $lig2): void
    {
        $cell1 = Coordinate::stringFromColumnIndex($col1) . $lig1;
        $cell2 = Coordinate::stringFromColumnIndex($col2) . $lig2;
        $this->mergeCells($cell1 . ':' . $cell2);
    }

    /**
     * @param $cells
     *
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function mergeCells($cells): void
    {
        $this->sheet->mergeCells($cells);
    }

    /**
     * @param string[] $tEnTete
     * @param integer  $colonne
     * @param integer  $ligne
     */
    /*public function ecritLigne($tEnTete, $colonne, $ligne)
    {
        foreach ($tEnTete as $t) {
            $this->ecritCelluleCaR($colonne, $ligne, $t);
            $colonne++;
        }
    }*/

    /**
     * @param integer $colonne
     * @param integer $ligne
     * @param         $texte
     * @param string  $style
     */
    /* public function ecritCelluleCaR($colonne, $ligne, $texte, $style = '')
     {
         $cell = PHPExcel_Cell::stringFromColumnIndex($colonne) . $ligne;
         $this->ecritCellule($cell, $texte, $style);
     }*/
}
