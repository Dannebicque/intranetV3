<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/MyExport.php
// @author     David Annebicque
// @project intranetv3
// @date 19/11/2019 07:35
// @lastUpdate 19/11/2019 07:33

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 12/07/2018
 * Time: 13:10
 */

namespace App\MesClasses;

use App\Entity\Evaluation;
use App\MesClasses\Excel\MyExcelMultiExport;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

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

    /**
     * @return MyExcelMultiExport
     */
    public function getExcel(): MyExcelMultiExport
    {
        return $this->excel;
    }


    /**
     * @param        $format
     * @param        $data
     * @param        $nomFichier
     * @param array  $groups
     * @param array  $colonne
     *
     * @return Response|bool
     * @throws Exception
     */
    public function genereFichierGenerique($format, $data, $nomFichier, array $groups, array $colonne): ?Response
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

        return false;
    }

    /**
     * @param $format
     * @param $myAbsences
     * @param $nomFichier
     *
     * @return StreamedResponse|bool
     * @throws Exception
     */
    public function genereFichierAbsence($format, $myAbsences, $nomFichier): ?Response
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

        return false;
    }


    public function genereModeleImportNote(Evaluation $evaluation): ?Response
    {
        $semestre = $evaluation->getSemestre();
        $this->excel->genereModeleExcel($semestre);

        return $this->excel->saveXlsx('modele-import-note-' . $semestre->getLibelle());
    }
}
