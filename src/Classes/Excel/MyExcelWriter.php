<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Excel/MyExcelWriter.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 27/11/2020 15:06

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 15/07/2018
 * Time: 15:37
 */

namespace App\Classes\Excel;

use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Symfony\Contracts\Translation\TranslatorInterface;
use function is_array;

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
     * @throws Exception
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
     */
    public function createSheet($libelle): void
    {
        $this->spreadsheet->createSheet()->setTitle($libelle);
        $this->sheet = $this->spreadsheet->getSheetByName($libelle);
    }

    /**
     * @param bool|true $logo
     */
    public function setHeader($logo = true): void
    {
        //todo: a fusionner avec le header de writeSpecialHeader dans MyExportListing
    }

    /**
     * @param      $array
     * @param int  $col
     * @param int  $row
     * @param bool $translate
     */
    public function writeHeader($array, $col = 1, $row = 1, $translate = true): void
    {
        foreach ($array as $value) {
            if (!empty($value) && $value !== null && $value !== '#') {
                if ($translate === true) {
                    $value = $this->translator->trans($value);
                }
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
        //style n'est pas un tableau
        if (is_array($options) && $this->sheet->getCellByColumnAndRow($col,
                $row)) {
            foreach ($options as $key => $valeur) {
                switch ($key) {
                    case 'style':
                        switch ($valeur) {
                            case 'HORIZONTAL_RIGHT':
                                $this->sheet->getCellByColumnAndRow($col,
                                    $row)->getStyle()->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);
                                break;
                            case 'HORIZONTAL_CENTER':
                                $this->sheet->getCellByColumnAndRow($col,
                                    $row)->getStyle()->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
                                break;
                            case 'numerique':
                                $this->sheet->getCellByColumnAndRow($col,
                                    $row)->getStyle()->getNumberFormat()->setFormatCode(NumberFormat::FORMAT_NUMBER_COMMA_SEPARATED1);
                                break;

                            case 'numerique3':
                                $this->sheet->getCellByColumnAndRow($col,
                                    $row)->getStyle()->getNumberFormat()->setFormatCode('#,##0.000');
                                break;
                        }
                        break;
                    case 'valign':
                        switch ($valeur) {
                            case 'VERTICAL_TOP':
                                $this->sheet->getCellByColumnAndRow($col,
                                    $row)->getStyle()->getAlignment()->setVertical(Alignment::VERTICAL_TOP);
                                break;
                            case 'VERTICAL_CENTER':
                                $this->sheet->getCellByColumnAndRow($col,
                                    $row)->getStyle()->getAlignment()->setVertical(Alignment::VERTICAL_CENTER);
                                break;
                            case 'VERTICAL_BOTTOM':
                                $this->sheet->getCellByColumnAndRow($col,
                                    $row)->getStyle()->getAlignment()->setVertical(Alignment::VERTICAL_BOTTOM);
                                break;

                        }
                        break;
                    case 'number_format':
                        $this->sheet->getCellByColumnAndRow($col,
                            $row)->getStyle()->getNumberFormat()->setFormatCode($valeur);
                        break;
                    case 'color':
                        if (strpos($valeur, '#') === 0) {
                            $valeur = substr($valeur, 1, strlen($valeur));
                        }

                        $this->sheet->getCellByColumnAndRow($col,
                            $row)->getStyle()->getFont()->getColor()->setARGB('FF' . $valeur);
                        break;
                    case 'font-size':
                        $this->sheet->getCellByColumnAndRow($col, $row)->getStyle()->getFont()->setSize($valeur);
                        break;
                    case 'font-weight':
                        $this->sheet->getCellByColumnAndRow($col, $row)->getStyle()->getFont()->setBold(true);
                        break;
                    case 'font-italic':
                        $this->sheet->getCellByColumnAndRow($col, $row)->getStyle()->getFont()->setItalic(true);
                        break;
                    case 'wrap':
                        $this->sheet->getCellByColumnAndRow($col, $row)->getStyle()->getAlignment()->setWrapText(true);
                        break;
                }
            }
        }
    }

    /**
     * @param       $adresse
     * @param       $value
     * @param array $options
     *
     */
    public function writeCellName($adresse, $value, array $options = []): void
    {
        $this->sheet->setCellValue($adresse, $value);

        if (is_array($options) && array_key_exists('style', $options)) {
            //style n'est pas un tableau
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
     * @throws Exception
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
     * @throws Exception
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
     * @throws Exception
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
     * @throws Exception
     */
    public function mergeCells($cells): void
    {
        $this->sheet->mergeCells($cells);
    }

    /**
     * @param       $col1
     * @param       $lig1
     * @param       $col2
     * @param       $lig2
     * @param array $array
     *
     */
    public function borderBottomCellsRange($col1, $lig1, $col2, $lig2, array $array)
    {
        $color = $array['color'];
        if (strpos($color, '#') === 0) {
            $color = substr($color, 1, strlen($color));
        }

        $cell1 = Coordinate::stringFromColumnIndex($col1) . $lig1;
        $cell2 = Coordinate::stringFromColumnIndex($col2) . $lig2;
        $this->sheet->getStyle($cell1 . ':' . $cell2)->getBorders()->getBottom()->setBorderStyle($array['size'])->getColor()->setARGB('FF' . $color);
    }

    /**
     * @param string[] $tEnTete
     * @param integer  $colonne
     * @param integer  $ligne
     */
    public function ecritLigne($tEnTete, $colonne, $ligne): void
    {
        foreach ($tEnTete as $t) {
            $this->writeCellXY($colonne, $ligne, $t);
            $colonne++;
        }
    }

    public function getColumnsAutoSize(string $depart, string $fin)
    {
        foreach (range($depart, $fin) as $columnID) {
            $this->sheet->getColumnDimension($columnID)->setAutoSize(true);
        }
    }
}
