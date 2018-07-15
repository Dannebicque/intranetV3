<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 15/07/2018
 * Time: 15:37
 */

namespace App\MesClasses\Excel;

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Symfony\Component\Translation\TranslatorInterface;

class MyExcelWriter
{
    /** @var Spreadsheet */
    private static $spreadsheet;

    /** @var Worksheet */
    private static $sheet;

    /** @var TranslatorInterface */
    private static $translator;

    /**
     * MyExcelWriter constructor.
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function __construct(TranslatorInterface $translator)
    {
        self::$spreadsheet = new Spreadsheet();
        self::$sheet = self::$spreadsheet->getActiveSheet();
        self::$translator = $translator;
    }

    /**
     * @return Spreadsheet
     */
    public static function getSpreadsheet(): Spreadsheet
    {
        return self::$spreadsheet;
    }

    /**
     * @return Worksheet
     */
    public static function getSheet(): Worksheet
    {
        return self::$sheet;
    }

    /**
     * @param     $array
     * @param int $col
     * @param int $row
     */
    public static function writeHeader($array, $col = 1, $row = 1)
    {
        foreach ($array as $value) {
            self::writeCellXY($col, $row, self::$translator->trans($value));
            $col++;
        }
    }

    /**
     * @param       $col
     * @param       $row
     * @param       $value
     * @param array $options
     */
    public static function writeCellXY($col, $row, $value, $options = [])
    {
        self::$sheet->setCellValueByColumnAndRow($col, $row, $value);
        //traiter les options
    }


}