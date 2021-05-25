<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/05/2021 16:12
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Classes\Excel\MyExcelMultiExport;
use App\Entity\Semestre;
use App\Exception\SemestreNotFoundException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class MyExport
{
    protected MyExcelMultiExport $excel;

    public function __construct(MyExcelMultiExport $excel)
    {
        $this->excel = $excel;
    }

    public function getExcel(): MyExcelMultiExport
    {
        return $this->excel;
    }

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

        return null;
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
     * @throws \App\Exception\SemestreNotFoundException
     */
    public function genereModeleImportNote(?Semestre $semestre): ?Response
    {
        if (null === $semestre) {
            throw new SemestreNotFoundException();
        }

        $this->excel->genereModeleExcel($semestre);

        return $this->excel->saveXlsx('modele-import-note-' . $semestre->getLibelle());
    }
}
