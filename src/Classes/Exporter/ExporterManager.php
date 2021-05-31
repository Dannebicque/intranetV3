<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Exporter/ExporterManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/05/2021 20:35
 */

namespace App\Classes\Exporter;

use App\Classes\Exporter\SourceIterator\SourceInterface;
use Symfony\Component\HttpFoundation\Response;

class ExporterManager
{
    protected PdfExporter $pdfExporter;
    protected CsvExporter $csvExporter;
    protected ExcelExporter $excelExporter;

    /**
     * ExporterManager constructor.
     *
     * @param \App\Classes\Exporter\PdfExporter   $pdfExporter
     * @param \App\Classes\Exporter\CsvExporter   $csvExporter
     * @param \App\Classes\Exporter\ExcelExporter $excelExporter
     */
    public function __construct(PdfExporter $pdfExporter, CsvExporter $csvExporter, ExcelExporter $excelExporter)
    {
        $this->pdfExporter = $pdfExporter;
        $this->csvExporter = $csvExporter;
        $this->excelExporter = $excelExporter;
    }

    public function export(SourceInterface $datas, $_format, string $nomFichier, array $options = []): Response
    {
        switch ($_format) {
            case 'pdf':
                $this->pdfExporter->export($datas, $nomFichier);
                $this->pdfExporter->setOptions($options);

                return $this->pdfExporter->genereFichier();
            case 'xlsx':
                $this->excelExporter->export($datas, $nomFichier);

                return $this->excelExporter->genereFichier();
                break;
            case 'csv':
                $this->csvExporter->export($datas, $nomFichier);

                return $this->csvExporter->genereFichier();
        }
    }
}
