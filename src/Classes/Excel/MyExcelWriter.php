<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Excel/MyExcelWriter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:41
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Excel;

use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\PageSetup;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Symfony\Contracts\Translation\TranslatorInterface;
use function array_key_exists;
use function is_array;

class MyExcelWriter
{
    private readonly Spreadsheet $spreadsheet;

    private ?Worksheet $sheet = null;

    /**
     * MyExcelWriter constructor.
     *
     * @throws Exception
     */
    public function __construct(private readonly TranslatorInterface $translator)
    {
        $this->spreadsheet = new Spreadsheet();
        $this->spreadsheet->removeSheetByIndex(0);
    }

    public function getSpreadsheet(): Spreadsheet
    {
        return $this->spreadsheet;
    }

    public function getSheet(): Worksheet
    {
        return $this->sheet;
    }

    public function createSheet(string $libelle): void
    {
        $libelle = substr($libelle, 0, 31);
        $this->spreadsheet->createSheet()->setTitle($libelle);

        $this->sheet = $this->spreadsheet->getSheetByName($libelle);
        $this->sheet->getPageSetup()->setPaperSize(PageSetup::PAPERSIZE_A4);
    }

    public function setHeader(bool $logo = true): void
    {
        // todo: a fusionner avec le header de writeSpecialHeader dans MyExportListing
    }

    public function writeHeader(array $array, int $col = 1, int $row = 1, bool $translate = true): void
    {
        foreach ($array as $value) {
            if (!empty($value) && '#' !== $value && true === $translate) {
                $value = $this->translator->trans($value);
            }

            $this->writeCellXY($col, $row, $value);
            ++$col;
        }
    }

    public function writeCellXY(int $col, int $row, mixed $value = '', array $options = []): void
    {
        $this->sheet->setCellValueByColumnAndRow($col, $row, $value);
        // traiter les options
        // style n'est pas un tableau
        if (is_array($options)) {
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
                        if (str_starts_with($valeur, '#')) {
                            $valeur = mb_substr($valeur, 1, mb_strlen($valeur));
                        }

                        $this->sheet->getCellByColumnAndRow($col,
                            $row)->getStyle()->getFont()->getColor()->setARGB('FF'.$valeur);
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

    public function writeCellName(string $adresse, mixed $value, array $options = []): void
    {
        $this->sheet->setCellValue($adresse, $value);

        if (is_array($options) && array_key_exists('style', $options)) {
            // style n'est pas un tableau
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

    public function colorCellRange(int $col, int $lig, ?string $couleur): void
    {
        if ($couleur !== null) {
            $cell = Coordinate::stringFromColumnIndex($col) . $lig;
            $this->colorCells($cell, $couleur);
        }
    }

    /**
     * @throws Exception
     */
    public function setCellEnteteStyle(int $col, int $lig): void
    {
        $this->colorCellRange($col, $lig, 'ffC4C6C6');
        $this->sheet->getStyle(Coordinate::stringFromColumnIndex($col).$lig)->getFont()->setBold(true);
        $this->sheet->getStyle(Coordinate::stringFromColumnIndex($col).$lig)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
        $this->sheet->getStyle(Coordinate::stringFromColumnIndex($col).$lig)->getBorders()->getAllBorders()->setBorderStyle(Border::BORDER_THIN);
    }

    public function colorCells(string $cells, string $couleur): void
    {
        $this->sheet->getStyle($cells)->getFill()
            ->setFillType(Fill::FILL_SOLID)
            ->getStartColor()->setARGB($couleur);
    }

    public function borderCellsRange(int $col1, int $lig1, int $col2, int $lig2): void
    {
        $cell1 = Coordinate::stringFromColumnIndex($col1).$lig1;
        $cell2 = Coordinate::stringFromColumnIndex($col2).$lig2;
        $this->borderCells($cell1.':'.$cell2);
    }

    /**
     * @throws Exception
     */
    public function borderCells(string $cells): void
    {
        $this->sheet->getStyle($cells)->getBorders()->getAllBorders()->setBorderStyle(Border::BORDER_THIN);
    }

    public function getRowDimension(int $ligne, int $taille): void
    {
        $this->sheet->getRowDimension($ligne)->setRowHeight($taille);
    }

    public function getColumnDimension(string $col, int $taille): void
    {
        $this->sheet->getColumnDimension($col)->setWidth($taille);
    }

    public function getColumnAutoSize(int|string $col): void
    {
        if (is_numeric($col)) {
            $col = Coordinate::stringFromColumnIndex($col);
        }

        $this->sheet->getColumnDimension($col)->setAutoSize(true);
    }

    public function mergeCellsCaR(int $col1, int $lig1, int $col2, int $lig2): void
    {
        $cell1 = Coordinate::stringFromColumnIndex($col1).$lig1;
        $cell2 = Coordinate::stringFromColumnIndex($col2).$lig2;
        $this->mergeCells($cell1.':'.$cell2);
    }

    /**
     * @throws Exception
     */
    public function mergeCells(string $cells): void
    {
        $this->sheet->mergeCells($cells);
    }

    public function borderBottomCellsRange(int $col1, int $lig1, int $col2, int $lig2, array $array): void
    {
        $color = $array['color'];
        if (str_starts_with($color, '#')) {
            $color = mb_substr($color, 1, mb_strlen($color));
        }

        $cell1 = Coordinate::stringFromColumnIndex($col1).$lig1;
        $cell2 = Coordinate::stringFromColumnIndex($col2).$lig2;
        $this->sheet->getStyle($cell1.':'.$cell2)->getBorders()->getBottom()->setBorderStyle($array['size'])->getColor()->setARGB('FF'.$color);
    }

    public function ecritLigne(array $tEnTete, int $colonne, int $ligne): void
    {
        foreach ($tEnTete as $t) {
            $this->writeCellXY($colonne, $ligne, $t);
            ++$colonne;
        }
    }

    public function getColumnsAutoSize(string $depart, string $fin): void
    {
        foreach (range($depart, $fin) as $columnID) {
            $this->sheet->getColumnDimension($columnID)->setAutoSize(true);
        }
    }
}
