<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Classes\Excel\MyExcelMultiExport;
use App\Entity\Evaluation;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class MyExport
{
    /** @var MyExcelMultiExport */
    protected $excel;

    /**
     * MyExport constructor.
     */
    public function __construct(MyExcelMultiExport $excel)
    {
        $this->excel = $excel;
    }

    public function getExcel(): MyExcelMultiExport
    {
        return $this->excel;
    }

    /**
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

    public function genereModeleImportNote(Evaluation $evaluation): ?Response
    {
        $semestre = $evaluation->getSemestre();
        if (null !== $semestre) {
            $this->excel->genereModeleExcel($semestre);

            return $this->excel->saveXlsx('modele-import-note-' . $semestre->getLibelle());
        }

        return null;
    }
}
