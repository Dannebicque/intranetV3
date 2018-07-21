<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 12/07/2018
 * Time: 13:10
 */
namespace App\MesClasses;

use App\MesClasses\Excel\MyExcelMultiExport;

class MyExport
{


    /** @var MyExcelMultiExport */
    protected $excel;

    /**
     * MyExport constructor.
     *
     * @param MyExcelMultiExport $excel
     */
    public function __construct(MyExcelMultiExport $excel)
    {
        $this->excel = $excel;
    }


    public function genereFichier($exportTypeDocument, $exportFormat, $exportChamps, $exportFiltre, $matiere): void
    {

    }

    /**
     * @param        $format
     * @param        $data
     * @param        $nomFichier
     * @param array  $groups
     * @param array  $colonne
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function genereFichierGenerique($format, $data, $nomFichier, array $groups, array $colonne)
    {
        $this->excel->genereExcelFromSerialization($data, $groups, $colonne);

        switch ($format) {
            case 'csv':
                return $this->excel->saveCsv($nomFichier);
            case 'pdf':
                return $this->excel->savePdf($nomFichier);
            case 'xlsx':
                return $this->excel->saveXlsx($nomFichier);
        }
    }

    /**
     * @param $format
     * @param $myAbsences
     * @param $nomFichier
     *
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function genereFichierAbsence($format, $myAbsences, $nomFichier)
    {
        $this->excel->genereExcelAbsence($myAbsences);

        switch ($format) {
            case 'csv':
                return $this->excel->saveCsv($nomFichier);
            case 'pdf':
                return $this->excel->savePdf($nomFichier);
            case 'xlsx':
                return $this->excel->saveXlsx($nomFichier);
        }
    }
}