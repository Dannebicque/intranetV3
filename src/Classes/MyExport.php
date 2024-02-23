<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Classes\Excel\MyExcelMultiExport;
use App\Classes\Pdf\MyPDF;
use App\DTO\Matiere;
use App\Entity\Evaluation;
use App\Exception\SemestreNotFoundException;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

readonly class MyExport
{
    public function __construct(
        private MyPDF              $myPDF,
        private MyExcelMultiExport $excel
    ) {
    }

//    public function getExcel(): MyExcelMultiExport
//    {
//        return $this->excel;
//    }

    public function genereFichierAbsence(string $format, MyAbsences $myAbsences, string $nomFichier): ?Response
    {
        $this->excel->genereExcelAbsence($myAbsences);

        return match ($format) {
            'csv' => $this->excel->saveCsv($nomFichier),
            'pdf' => $this->excel->savePdf($nomFichier),
            'xlsx' => $this->excel->saveXlsx($nomFichier),
            default => false,
        };
    }

    /**
     * @throws SemestreNotFoundException
     */
    public function genereModeleImportNote(?Evaluation $evaluation, Matiere $matiere): ?Response
    {
        if (null === $evaluation) {
            throw new SemestreNotFoundException();
        }

        if ($matiere->mutualisee === true) {
            $this->excel->genereModeleExcelMutualise($evaluation, $matiere);
            return $this->excel->saveXlsx('modele-import-note-' . $evaluation->getLibelle());
        }

        $semestre = $evaluation->getSemestre();
        if (null === $semestre) {
            throw new SemestreNotFoundException();
        }
        $this->excel->genereModeleExcel($semestre);
        return $this->excel->saveXlsx('modele-import-note-' . $semestre->getLibelle());


    }

    public function genereFichierJustificatifAbsence(mixed $justificatifs, string $nomFichier): StreamedResponse
    {
        $this->excel->genereExcelJustificatifsAbsences($justificatifs);

        return $this->excel->saveXlsx($nomFichier);
    }

    public function genereFichierGeneriqueFromData(string $format, array $data, string $nomFichier): StreamedResponse|PdfResponse|null
    {
        $nomFichier .= '_'.date('d-m-Y_H\hi');

        return match ($format) {
            'csv' => $this->excel->genereExcelFromArray($data)->saveCsv($nomFichier),
            'pdf' => $this->myPDF::generePdf('pdf/pdfExport.html.twig', ['data' => $data], $nomFichier),
            'xlsx' => $this->excel->genereExcelFromArray($data)->saveXlsx($nomFichier),
            default => null,
        };
    }
}
