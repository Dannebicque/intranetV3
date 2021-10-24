<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Exporter/ExporterManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/10/2021 14:01
 */

namespace App\Components\Exporter;

use App\Components\Exporter\SourceIterator\SourceInterface;
use App\Components\Exporter\Type\CsvExporter;
use App\Components\Exporter\Type\ExcelExporter;
use App\Components\Exporter\Type\PdfExporter;
use Symfony\Component\HttpFoundation\Response;

class ExporterManager
{

    protected ExporterRegistry $exportRegistry;

    public function __construct(ExporterRegistry $exportRegistry)
    {
        $this->exportRegistry = $exportRegistry;
    }

    public function export(SourceInterface $datas, $_format, string $nomFichier, array $options = []): Response
    {
        switch ($_format) {
            case 'pdf':
                //todo: utiliser le registry... mais du coup faire un objet dans le controller ???, sur une logique assez proche de table ??
                //todo: notamment pour parametrer les colonnes, et éventuellement en ajouter qui ne sont pas dans les data ???
                //todo: et un mode direct sans  config ? createExporter createExporterBuilder
                //todo: methode exporter(nofichier,$_format, groupe, colonnes, data, [options => tab ['colo'=> format, 'colb=>'format']] si colonne avec format spécifique. et d'autrs options si besoin. Sinon par défaut ca récupère et affiche selon le type.
                $this->getExporter($_format)->export($datas, $nomFichier);
                $this->getExporter($_format)->setOptions($options);

                return $this->getExporter($_format)->genereFichier();
            case 'xlsx':
                $this->getExporter($_format)->export($datas, $nomFichier);

                return $this->getExporter($_format)->genereFichier();
            case 'csv':
                $this->getExporter($_format)->export($datas, $nomFichier);

                return $this->getExporter($_format)->genereFichier();
        }
    }

    public function getExporter($_format)
    {
        switch ($_format) {
            case 'pdf':
                return $this->exportRegistry->getTypeExporter(PdfExporter::class);
            case 'csv':
                return $this->exportRegistry->getTypeExporter(CsvExporter::class);
            case 'xlsx':
                return $this->exportRegistry->getTypeExporter(ExcelExporter::class);
        }
    }
}
