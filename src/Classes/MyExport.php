<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyExport.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/12/2020 14:57

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 12/07/2018
 * Time: 13:10
 */

namespace App\Classes;

use App\Entity\Evaluation;
use App\Classes\Excel\MyExcelMultiExport;
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

    /**
     * @param Evaluation $evaluation
     *
     * @return Response|null
     */
    public function genereModeleImportNote(Evaluation $evaluation): ?Response
    {
        $semestre = $evaluation->getSemestre();
        if ($semestre !== null) {
            $this->excel->genereModeleExcel($semestre);

            return $this->excel->saveXlsx('modele-import-note-' . $semestre->getLibelle());
        }

        return null;
    }
}
